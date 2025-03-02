import User, { find } from './model';

class UserController {
    async getUsers(req, res) {
        try {
            const users = await find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new UserController();