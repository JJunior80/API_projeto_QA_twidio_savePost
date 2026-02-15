import { Repository } from 'typeorm'
import { AppDataSource } from '../database/data-source'
import { Post } from '../entities/Post'

interface IRequest {
  author: string
  content: string
}

export class SavePostService {
  private repository: Repository<Post>

  constructor(
    repository: Repository<Post> = AppDataSource.getRepository(Post)
  ) {
    this.repository = repository
  }

  async execute({ author, content }: IRequest): Promise<Post> {
    const post = this.repository.create({
      author,
      content
    })

    await this.repository.save(post)

    return post
  }
}


