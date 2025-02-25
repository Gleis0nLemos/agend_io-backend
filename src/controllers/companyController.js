const Company = require('../models/Company');

exports.getCompanies = async (req, res) => {
    try {
        const companies = await Company.find().populate('ownerId', 'name email');
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};