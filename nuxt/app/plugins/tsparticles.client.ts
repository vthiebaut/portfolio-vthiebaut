import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default defineNuxtPlugin(async () => {
  await loadSlim(tsParticles)
  return {
    provide: {
      tsParticles
    }
  }
})
