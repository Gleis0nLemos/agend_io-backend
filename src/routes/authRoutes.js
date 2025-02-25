const express = require('express');
const { register, login, validateToken} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/validate', authMiddleware, validateToken); // Protected route

module.exports = router;