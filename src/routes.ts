import { Router } from 'express'
import { MessageController } from './controllers/MessageController'
import { GetAllPostController } from './controllers/GetAllPostController'
import { SavePostController } from './controllers/SavePostController'

const router = Router()

const messageController = new MessageController()
const getAllPostController = new GetAllPostController()
const savePostController = new SavePostController()

router.get('/', messageController.handle.bind(messageController))
router.get('/posts', getAllPostController.handle.bind(getAllPostController))
router.post('/posts', savePostController.handle.bind(savePostController))

export default router

