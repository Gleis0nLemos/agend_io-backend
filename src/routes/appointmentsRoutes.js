const express = require('express');
const { getAppointments, createAppointment } = require('../controllers/appointmentController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', auth(), getAppointments);
router.post('/', auth(), createAppointment);

module.exports = router;
