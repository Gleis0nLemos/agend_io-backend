const express = require('express');
const { getCompanies, createCompany } = require('../controllers/companyController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', auth(), getCompanies);
router.post('/', auth(['company']), createCompany);

module.exports = router;