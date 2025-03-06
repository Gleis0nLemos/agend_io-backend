import { Router } from 'express';
import CompanyController from './controller';
import { auth } from '../../shared/express/middlewares';

const router = Router();

router.get('/', auth(), CompanyController.getCompanies);
router.get('/:id', auth(), CompanyController.getCompaniesById);
router.post('/', auth(['company']), CompanyController.createCompany);

export default router;