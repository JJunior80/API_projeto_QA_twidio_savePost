import { AppDataSource } from '../database/data-source'
import { Post } from '../entities/Post'

interface IRequest {
  author: string
  content: string
}

export class SavePostService {
  async execute({ author, content }: IRequest): Promise<Post> {
    const repository = AppDataSource.getRepository(Post)

    const post = repository.create({
      author,
      content
    })

    await repository.save(post)

    return post
  }
}

