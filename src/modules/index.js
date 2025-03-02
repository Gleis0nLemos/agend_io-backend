import { Router } from 'express'
import user from './users'

const router = new Router()

router.use('/users', user)

export default router
