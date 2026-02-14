import { app } from './app'

const PORT = 5001

app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`)
})
