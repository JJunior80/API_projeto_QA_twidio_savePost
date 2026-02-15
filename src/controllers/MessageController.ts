import { Request, Response } from 'express'

export class MessageController {
  async handle(request: Request, response: Response) {
    return response.json({
      message: 'API TwiDIO funcionando 🚀'
    })
  }
}
