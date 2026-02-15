import 'reflect-metadata'
import { DataSource } from 'typeorm'

const isTest = process.env.NODE_ENV === 'test'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: isTest
    ? './src/database/database.test.sqlite'
    : './src/database/database.sqlite',

  entities: [
    isTest
      ? 'src/entities/*.ts'
      : 'dist/entities/*.js'
  ],

  migrations: [
    isTest
      ? 'src/database/migrations/*.ts'
      : 'dist/database/migrations/*.js'
  ],

  synchronize: true,
  logging: false,
})

