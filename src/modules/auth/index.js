import { Router } from 'express';
import AuthController from './controller';
import { auth, validateUser } from '../../shared/express/middlewares';

const router = Router();

router.post('/register', validateUser, AuthController.register);
router.post('/login', AuthController.login);
router.get('/validate', auth(), AuthController.validateToken); // Protected route

export default router;