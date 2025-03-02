import express from 'express'
import UserController from './controller'

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);

export default router
