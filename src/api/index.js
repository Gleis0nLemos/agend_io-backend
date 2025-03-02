import { Router } from 'express'
import user from './users'
import auth from './auth'
import companies from './company'
import companyServices from './companyServices'
import appointments from './appointments'

const router = new Router()

router.use('/users', user)
router.use('/auth', auth)
router.use('/companies', companies)
router.use('/company-services', companyServices)
router.use('/appointments', appointments)

export default router
