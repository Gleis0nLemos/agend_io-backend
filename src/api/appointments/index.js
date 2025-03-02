import { Router } from 'express';
import AppointmentController from './controller';
import { auth } from '../../shared/express/middlewares';

const router = Router();

router.get('/', auth(), AppointmentController.getAppointments);
router.post('/', auth(), AppointmentController.createAppointment);

export default router;
