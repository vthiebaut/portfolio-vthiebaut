<template>
  <div class="p-6 select-none">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">🗨️ Commentaires en attente</h1>

      <div class="flex items-center gap-2">
        <input
          v-model="q"
          placeholder="Rechercher (nom, contenu)…"
          class="border border-gray-300 p-2 rounded-md w-64"
        />
        <button
          @click="refresh"
          :disabled="loading"
          class="bg-gray-100 border border-gray-300 px-3 py-2 rounded hover:bg-gray-200"
        >
          🔄 Actualiser
        </button>
      </div>
    </div>

    <!-- Etat de chargement / erreur -->
    <div v-if="loading" class="text-gray-500">Chargement…</div>
    <div v-else-if="error" class="text-red-600">Erreur : {{ error }}</div>

    <!-- Liste -->
    <div v-else>
      <div v-if="filtered.length" class="space-y-4">
        <article
          v-for="c in paged"
          :key="c.id"
          class="bg-white border rounded-lg p-4 shadow-sm"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">
                  {{ c.name }} <span v-if="c.surname" class="text-gray-500">{{ c.surname }}</span>
                </h3>
                <div class="text-yellow-500 shrink-0">{{ '⭐'.repeat(c.rating || 5) }}</div>
              </div>
              <p class="mt-2 text-gray-800 whitespace-pre-line">{{ c.content }}</p>
              <p class="mt-1 text-xs text-gray-500">
                Reçu le {{ formatDate(c.createdAt) }}
              </p>
            </div>

            <div class="flex flex-col items-end gap-2">
              <button
                @click="approve(c.id)"
                :disabled="actingId === c.id"
                class="bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 disabled:opacity-60"
                title="Publier (approuver)"
              >
                ✅ Valider
              </button>

              <button
                @click="reject(c.id)"
                :disabled="actingId === c.id"
                class="bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 disabled:opacity-60"
                title="Refuser (supprimer)"
              >
                🗑️ Supprimer
              </button>
            </div>
          </div>
        </article>
      </div>

      <p v-else class="text-gray-500">Aucun commentaire à valider.</p>

      <!-- Pagination simple -->
      <div v-if="filtered.length > pageSize" class="flex items-center justify-center gap-2 mt-6">
        <button
          class="px-3 py-1 border rounded disabled:opacity-50"
          :disabled="page === 1"
          @click="page--"
        >
          ◀
        </button>
        <span class="text-sm text-gray-600">
          Page {{ page }} / {{ totalPages }}
        </span>
        <button
          class="px-3 py-1 border rounded disabled:opacity-50"
          :disabled="page === totalPages"
          @click="page++"
        >
          ▶
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { api } = useApi()

type PendingComment = {
  id: number
  name: string
  surname?: string
  rating: number
  content: string
  createdAt: string
}

const loading = ref(false)
const error = ref<string | null>(null)
const pending = ref<PendingComment[]>([])
const q = ref('')

// Pagination
const page = ref(1)
const pageSize = 10
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const paged = computed(() => {
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

const filtered = computed(() => {
  const t = q.value.trim().toLowerCase()
  if (!t) return pending.value
  return pending.value.filter(c =>
    (c.name?.toLowerCase().includes(t)) ||
    (c.surname?.toLowerCase().includes(t)) ||
    (c.content?.toLowerCase().includes(t))
  )
})

watch(q, () => (page.value = 1))

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

async function refresh() {
  loading.value = true
  error.value = null
  try {
    const { data } = await api.get<PendingComment[]>('/comments/pending')
    pending.value = (data || []).map(c => ({
      ...c,
      rating: Math.min(5, Math.max(1, c.rating || 5))
    }))
    page.value = 1
  } catch (e: any) {
    error.value = e?.response?.data?.error || e?.message || 'Erreur inconnue'
  } finally {
    loading.value = false
  }
}

const actingId = ref<number | null>(null)

async function approve(id: number) {
  if (!confirm('Publier ce commentaire ?')) return
  actingId.value = id
  try {
    await api.put(`/comments/${id}`, { isApproved: true })
    await refresh()
  } catch (e: any) {
    alert(`Erreur lors de la validation : ${e?.response?.data?.error || e.message}`)
  } finally {
    actingId.value = null
  }
}

async function reject(id: number) {
  if (!confirm('Supprimer ce commentaire ?')) return
  actingId.value = id
  try {
    await api.delete(`/comments/${id}`)
      .catch(async () => {
        // fallback si DELETE n'existe pas
      })
    await refresh()
  } catch (e: any) {
    alert(`Erreur lors de la suppression : ${e?.response?.data?.error || e.message}`)
  } finally {
    actingId.value = null
  }
}

// Middleware pour vérifier l'authentification
definePageMeta({
  middleware: 'auth'
})

onMounted(refresh)
</script>

