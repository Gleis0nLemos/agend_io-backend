import express from 'express'
import UserController from './controller'
import { auth } from '../../shared/express/middlewares';

const router = express.Router();

router.get('/', auth(), UserController.getUsers);
router.post('/', auth(), UserController.createUser);

export default router
