import User, { findOne } from '../models/User';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import config from '../../config';

class Auth {
    // Register a new user
    async register(req, res) {
        try {
            const { name, email, password, phone, role } = req.body;

            // Check if user already exists
            const existingUser = await findOne({ email });

            if (existingUser) {
                return res.status(400).json({
                    message: 'E-mail already registered'
                })
            }

            // Encrypt password
            const hashedPassword = await hash(password, 10);

            // Create new user
            const user = new User({
                name, 
                email,
                password: hashedPassword,
                phone, 
                role
            });
            await user.save();

            res.status(201).json({
                message: 'User registered successfully'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed to register user'
            })
        }
    }

    // User login
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Check if user exists
            const user = await findOne({ email});
            if (!user) {
                return res.status(400).json({
                    message: 'User not found'
                })
            }

            // Check password
            const isMatch = await compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    message: 'Invalid credentials'
                })
            }
            
            // Generate token JWT
            const token = sign(
                { id: user._id, role: user.role }, // name: user.name, email: user.email
                config.JWT_SECRET,
                { expiresIn: '1h'}
            );

            res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
        } catch (error) {
            res.status(500).json({
                message: 'Failed to login'
            })
        }
    }

    // Validate token
    validateToken(req, res) {
        res.json({ user: req.user });
    }
}

export default new Auth();
