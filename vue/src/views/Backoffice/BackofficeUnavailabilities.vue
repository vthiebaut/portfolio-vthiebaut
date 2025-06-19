<template>
  <div class="tw:p-6 tw:select-none">
    <div class="tw:flex tw:justify-between tw:items-center tw:mb-6">
      <h1 class="tw:text-2xl tw:font-bold">Indisponibilités</h1>
      <button
        class="tw:bg-blue-600 tw:text-white tw:px-4 tw:py-2 tw:rounded hover:tw:bg-blue-700"
        @click="showForm = true"
      >
        ➕ Ajouter
      </button>
    </div>

    <!-- Grille style planning -->
    <div class="tw:p-4 tw:rounded-xl tw:overflow-auto tw:space-y-4">
      <!-- Navigation -->
      <div class="tw:flex tw:justify-between tw:items-center tw:ml-[80px]">
        <button
          class="tw:px-4 tw:py-2 tw:bg-gray-300 tw:rounded-lg tw:hover:bg-gray-400 tw:transition"
          @click="changeWeek(-1)"
        >
          ⬅️ Semaine précédente
        </button>
        <div class="tw:font-semibold tw:text-lg tw:text-gray-700">
          Semaine du {{ baseDateFormatted }}
        </div>
        <button
          class="tw:px-4 tw:py-2 tw:bg-gray-300 tw:rounded-lg tw:hover:bg-gray-400 tw:transition"
          @click="changeWeek(1)"
        >
          Semaine suivante ➡️
        </button>
      </div>

      <!-- Grille calendrier -->
      <div
        class="tw:grid tw:grid-cols-[80px_repeat(5,1fr)] tw:gap-2 tw:border tw:rounded-lg tw:p-2 tw:bg-gray-100"
      >
        <div></div>
        <div
          v-for="day in days"
          :key="day"
          class="tw:text-center tw:font-bold tw:text-pink-400 tw:backdrop-blur-sm tw:rounded tw:shadow-sm tw:border tw:border-gray-300 tw:py-2 tw:bg-white"
        >
          {{ formatDay(day) }}
        </div>

        <template v-for="hour in hours" :key="hour">
          <div
            class="tw:h-12 tw:flex tw:items-center tw:justify-center tw:font-semibold tw:text-pink-400 tw:bg-white tw:backdrop-blur-sm tw:rounded tw:shadow-sm tw:border tw:border-gray-300"
          >
            {{ hour }}h - {{ hour + 1 }}h
          </div>

          <div
            v-for="day in days"
            :key="day + '-' + hour"
            :class="[
              'tw:h-12 tw:flex tw:items-center tw:justify-center tw:font-medium tw:rounded-xl tw:transition-colors cursor-pointer',
              getCellClass(day, hour),
              isInDragRange(day, hour) ? 'tw:ring-2 tw:ring-blue-500' : ''
            ]"
            @mousedown="onMouseDown(day, hour)"
            @mouseenter="onMouseEnter(day, hour)"
            @mouseup="onMouseUp(day, hour)"
          ></div>
        </template>
      </div>
    </div>

    <!-- Formulaire modal -->
    <FormUnavailabilityModal
      v-if="showForm"
      :initial-data="editing"
      @close="closeForm"
      @refresh="fetchUnavailabilities"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { DateTime } from 'luxon'
import FormUnavailabilityModal from '@/components/FormUnavailabilityModal.vue'

const days = [1, 2, 3, 4, 5]
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const baseDate = ref(DateTime.now().setZone('Europe/Paris'))
baseDate.value = DateTime.now()
  .setZone('Europe/Paris')
  .minus({ days: DateTime.now().weekday - 1 })
  .startOf('day')

const unavailable = ref([])
const baseDateFormatted = computed(() => baseDate.value.setLocale('fr').toFormat('dd MMMM yyyy'))

const showForm = ref(false)
const editing = ref(null)

let dragStart = ref(null)
let dragEnd = ref(null)

function formatDay(day) {
  return baseDate.value
    .plus({ days: day - 1 })
    .setLocale('fr')
    .toFormat('cccc dd/MM')
}

function changeWeek(offset) {
  baseDate.value = baseDate.value.plus({ weeks: offset })
  fetchUnavailabilities()
}

function getDateTimeFromCell({ day, hour }) {
  return baseDate.value.plus({ days: day - 1, hours: hour })
}

function isInDragRange(day, hour) {
  if (!dragStart.value || !dragEnd.value) return false
  const start = getDateTimeFromCell(dragStart.value)
  const end = getDateTimeFromCell(dragEnd.value).plus({ hours: 1 })
  const current = getDateTimeFromCell({ day, hour })
  return current >= start && current < end
}

function onMouseDown(day, hour) {
  dragStart.value = { day, hour }
  dragEnd.value = { day, hour }
}

function onMouseEnter(day, hour) {
  if (dragStart.value) dragEnd.value = { day, hour }
}

function onMouseUp(day, hour) {
  const cellStart = getDateTimeFromCell({ day, hour }).toUTC()
  const cellEnd = cellStart.plus({ hours: 1 })

  const matched = unavailable.value.find((item) => {
    const s = DateTime.fromISO(item.start).toUTC()
    const e = DateTime.fromISO(item.end).toUTC()
    return cellStart >= s && cellStart < e
  })

  if (matched?.id) {
    axios.get(`https://cleaneuse-by-pauline.fr/api/unavailabilities/${matched.id}`).then((res) => {
      const data = res.data
      editing.value = {
        id: data.id,
        start: data.start,
        endAt: data.endAt,
        recurrence: data.recurrence || '',
        recurrenceEnd: data.recurrenceEnd || '',
        recurrenceType: data.recurrence || '',
        recurrenceUntil: data.recurrenceEnd || ''
      }
      showForm.value = true
    })
  } else if (dragStart.value && dragEnd.value) {
    const start = getDateTimeFromCell(dragStart.value).toUTC()
    const end = getDateTimeFromCell(dragEnd.value).plus({ hours: 1 }).toUTC()
    editing.value = {
      start: start.toISO(),
      endAt: end.toISO(),
      recurrence: '',
      recurrenceEnd: ''
    }
    showForm.value = true
  }

  dragStart.value = null
  dragEnd.value = null
}
function getCellClass(day, hour) {
  const cellStart = getDateTimeFromCell({ day, hour }).toUTC()
  const cellEnd = cellStart.plus({ hours: 1 })

  const isGrey = [8, 12, 13].includes(hour)
  if (isGrey) return 'tw:bg-gray-300 tw:text-gray-600'

  const isBlocked = unavailable.value.some((item) => {
    const s = DateTime.fromISO(item.start).toUTC()
    const e = DateTime.fromISO(item.end).toUTC()
    return !(cellEnd <= s || cellStart >= e)
  })

  return isBlocked ? 'tw:bg-red-400 tw:text-white' : 'tw:bg-green-200 tw:text-gray-700'
}

async function fetchUnavailabilities() {
  try {
    const startOfWeek = baseDate.value.startOf('day').toISO()
    const endOfWeek = baseDate.value.plus({ days: 4, hours: 23, minutes: 59 }).toISO()

    const response = await axios.get('https://cleaneuse-by-pauline.fr/api/unavailabilities', {
      params: {
        start: startOfWeek,
        end: endOfWeek
      }
    })

    unavailable.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement des indisponibilités :', error)
  }
}

function closeForm() {
  showForm.value = false
  editing.value = null
  fetchUnavailabilities()
}

onMounted(fetchUnavailabilities)
</script>
