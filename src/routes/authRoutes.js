const express = require('express');
const { register, login, validateToken} = require('../controllers/authController');
const auth = require('../middlewares/authMiddleware');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.post('/register', validateUser, register);
router.post('/login', login);
router.get('/validate', auth(), validateToken); // Protected route

module.exports = router;