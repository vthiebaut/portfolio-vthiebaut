<template>
  <div class="tw:fixed tw:inset-0 tw:bg-black/50 tw:flex tw:items-center tw:justify-center tw:z-50">
    <div class="tw:bg-white tw:rounded-xl tw:shadow-lg tw:w-full tw:max-w-lg tw:p-6">
      <h2 class="tw:text-xl tw:font-bold tw:mb-4">
        {{ initialData?.id ? 'Modifier l’indisponibilité' : 'Nouvelle indisponibilité' }}
      </h2>

      <form @submit.prevent="submit" class="tw:space-y-4">
        <div>
          <label class="tw:block tw:font-semibold mb-1">Début</label>
          <input
            type="datetime-local"
            v-model="form.start"
            required
            class="tw:w-full tw:p-2 tw:border tw:rounded"
          />
        </div>

        <div>
          <label class="tw:block tw:font-semibold mb-1">Fin</label>
          <input
            type="datetime-local"
            v-model="form.end"
            required
            class="tw:w-full tw:p-2 tw:border tw:rounded"
          />
        </div>

        <div>
          <label class="tw:block tw:font-semibold mb-1">Récurrence</label>
          <select v-model="form.recurrence" class="tw:w-full tw:p-2 tw:border tw:rounded">
            <option value="">Aucune</option>
            <option value="daily">Quotidienne</option>
            <option value="weekly">Hebdomadaire</option>
            <option value="monthly">Mensuelle</option>
          </select>
        </div>

        <div v-if="form.recurrence">
          <label class="tw:block tw:font-semibold mb-1">Fin de récurrence</label>
          <input
            type="datetime-local"
            v-model="form.recurrenceEnd"
            class="tw:w-full tw:p-2 tw:border tw:rounded"
          />
        </div>

        <div class="tw:flex tw:justify-between tw:items-center">
          <button type="button" class="tw:text-gray-600 hover:tw:underline" @click="$emit('close')">
            Annuler
          </button>

          <div class="tw:flex tw:gap-2">
            <button
              v-if="initialData?.id"
              type="button"
              class="tw:bg-red-600 tw:text-white tw:px-4 tw:py-2 tw:rounded hover:tw:bg-red-700"
              @click="remove"
            >
              Supprimer
            </button>
            <button
              type="submit"
              class="tw:bg-blue-600 tw:text-white tw:px-4 tw:py-2 tw:rounded hover:tw:bg-blue-700"
            >
              {{ initialData?.id ? 'Modifier' : 'Ajouter' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue'
import axios from 'axios'

const emit = defineEmits(['close', 'refresh'])

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
})

const form = ref({
  start: '',
  end: '',
  recurrence: '',
  recurrenceEnd: ''
})

onMounted(() => {
  if (props.initialData) {
    form.value.start = toDatetimeLocal(props.initialData.start)
    form.value.end = toDatetimeLocal(props.initialData.endAt || props.initialData.end)
    form.value.recurrence = props.initialData.recurrence ?? ''
    form.value.recurrenceEnd = props.initialData.recurrenceEnd
      ? toDatetimeLocal(props.initialData.recurrenceEnd)
      : ''
  }
})

function toDatetimeLocal(isoString) {
  if (!isoString) return ''
  const date = new Date(isoString)
  const pad = (n) => String(n).padStart(2, '0')
  const year = date.getFullYear()
  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

function toISOStringUtc(localDateTimeString) {
  const date = new Date(localDateTimeString)
  return date.toISOString()
}

async function submit() {
  const payload = {
    start: toISOStringUtc(form.value.start),
    end: toISOStringUtc(form.value.end),
    recurrence: form.value.recurrence || null,
    recurrenceEnd: form.value.recurrenceEnd ? toISOStringUtc(form.value.recurrenceEnd) : null
  }

  try {
    if (props.initialData?.id) {
      await axios.put(
        `https://cleaneuse-by-pauline.fr/api/unavailabilities/${props.initialData.id}`,
        payload
      )
    } else {
      await axios.post('https://cleaneuse-by-pauline.fr/api/unavailabilities', payload)
    }

    emit('close')
    emit('refresh')
  } catch (e) {
    console.error('Erreur lors de l’enregistrement', e)
  }
}

async function remove() {
  if (!props.initialData?.id) return
  if (!confirm('Supprimer cette indisponibilité ?')) return

  try {
    await axios.delete(
      `https://cleaneuse-by-pauline.fr/api/unavailabilities/${props.initialData.id}`
    )
    emit('close')
    emit('refresh')
  } catch (e) {
    console.error('Erreur lors de la suppression', e)
  }
}
</script>
