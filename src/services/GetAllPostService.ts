import { AppDataSource } from '../database/data-source'
import { Post } from '../entities/Post'

export class GetAllPostService {
  async execute(): Promise<Post[]> {
    const repository = AppDataSource.getRepository(Post)

    return await repository.find()
  }
}

