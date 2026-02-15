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

  it('Should return status 200 and list of posts', async () => {
    const response = await request(app).get('/v1/posts')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('Should return status 201 when post saved', async () => {
    const response = await request(app)
      .post('/v1/posts')
      .send({
        author: 'user@dio.me',
        content: 'Algum conteudo da live'
      })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      author: 'user@dio.me',
      content: 'Algum conteudo da live'
    })
  })
})
