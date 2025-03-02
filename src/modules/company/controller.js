import Company from './model';

class CompanyController {
    async getCompanies(req, res) {
        try {
            const companies = await Company.find().populate('ownerId', 'name email');
            res.json(companies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createCompany(req, res) {
        try {
            const company = new Company(req.body);
            await company.save();
            res.status(201).json(company);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new CompanyController();