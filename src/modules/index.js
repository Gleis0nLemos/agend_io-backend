import { Router } from 'express'
import user from './users'
import auth from './auth'
import companies from './company'

const router = new Router()

router.use('/users', user)
router.use('/auth', auth)
router.use('/companies', companies)

export default router
