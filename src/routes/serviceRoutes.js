const express = require('express');
const { getServices, createService } = require('../controllers/serviceController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', auth(), getServices);
router.post('/', auth(), createService);

module.exports = router;
