import { Repository } from 'typeorm'
import { AppDataSource } from '../database/data-source'
import { Post } from '../entities/Post'

export class GetAllPostService {
  private repository: Repository<Post>

  constructor(
    repository: Repository<Post> = AppDataSource.getRepository(Post)
  ) {
    this.repository = repository
  }

  async execute(): Promise<Post[]> {
    return await this.repository.find({
      order: {
        created_at: 'DESC'
      }
    })
  }
}


