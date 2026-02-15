import { Request, Response } from 'express'
import { SavePostService } from '../services/SavePostService'

export class SavePostController {
  async handle(request: Request, response: Response) {
    const { author, content } = request.body

    const service = new SavePostService()
    const post = await service.execute({ author, content })

    return response.status(201).json(post)
  }
}
