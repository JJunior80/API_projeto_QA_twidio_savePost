import { Router } from 'express'

const router = Router()

router.get('/health', (request, response) => {
  return response.json({ message: 'API funcionando 🚀' })
})

export { router }
