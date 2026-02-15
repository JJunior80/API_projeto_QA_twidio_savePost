import { AppDataSource } from './database/data-source'
import app from './app'

const PORT = process.env.PORT || 5001

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server rodando em http://localhost:${PORT}/v1`)
    })
  })
  .catch((error) => {
    console.error('Erro ao iniciar banco:', error)
  })


