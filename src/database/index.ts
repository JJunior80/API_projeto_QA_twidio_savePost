import { AppDataSource } from './data-source'

export default async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
  }

  return AppDataSource
}

