import { defineAppSetup } from '@slidev/types'
import Particles from 'particles.vue3'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(Particles)
})
