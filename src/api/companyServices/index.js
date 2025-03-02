import { Router } from 'express';
import CompanyServiceController from './controller';
import { auth } from '../../shared/express/middlewares';

const router = Router();

router.get('/', auth(), CompanyServiceController.getServices);
router.post('/', auth(), CompanyServiceController.createService);

export default router;
