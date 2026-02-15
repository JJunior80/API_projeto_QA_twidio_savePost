import request from 'supertest'
import app from '../src/app'
import { AppDataSource } from '../src/database/data-source'

describe('/posts (Integration)', () => {

  beforeAll(async () => {
    await AppDataSource.initialize()
  })

  afterAll(async () => {
    await AppDataSource.destroy()
  })

  beforeEach(async () => {
    const entities = AppDataSource.entityMetadatas

    for (const entity of entities) {
      const repository = AppDataSource.getRepository(entity.name)
      await repository.clear()
    }
  })

  it('Should return status 200 and empty list initially', async () => {
    const response = await request(app as any).get('/v1/posts')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBe(0)
  })

  it('Should create a post and then list it', async () => {
    await request(app as any)
      .post('/v1/posts')
      .send({
        author: 'user@dio.me',
        content: 'Algum conteudo da live'
      })

    const response = await request(app as any).get('/v1/posts')

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(1)

    expect(response.body[0]).toMatchObject({
      author: 'user@dio.me',
      content: 'Algum conteudo da live'
    })
  })
})

