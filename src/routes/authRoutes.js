const express = require('express');
const { register, login, validateToken} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.post('/register', validateUser, register);
router.post('/login', login);
router.get('/validate', authMiddleware, validateToken); // Protected route

module.exports = router;