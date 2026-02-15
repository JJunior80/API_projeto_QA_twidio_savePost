import 'reflect-metadata'
import express from 'express'
import * as swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

import { router } from './routes'
import initializeDatabase from './database'

initializeDatabase()

const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/v1', router)

export default app


