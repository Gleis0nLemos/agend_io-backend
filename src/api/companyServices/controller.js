import CompanyService from './model';

class CompanyServiceController {
    async getServices(req, res) {
        try {
        const services = await CompanyService.find().populate('companyId', 'name');
        res.json(services);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    }
    
    async createService(req, res) {
        try {
        const service = new CompanyService(req.body);
        await service.save();
        res.status(201).json(service);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }
}

export default new CompanyServiceController();