import { Router } from 'express'
import user from './users'
import auth from './auth'
import companies from './company'
import companyServices from './companyServices'

const router = new Router()

router.use('/users', user)
router.use('/auth', auth)
router.use('/companies', companies)
router.use('/company-services', companyServices)

export default router
