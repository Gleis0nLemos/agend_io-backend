import { body, validationResult } from 'express-validator';

// Validation Middleware to create a new user
const validateUser = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).withMessage('Invalid email format'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    body('phone')
        .notEmpty().withMessage('Phone is required')
        .isLength({ min: 11 }).withMessage('Phone must be at least 11 characters long'),

    body('role')
        .notEmpty().withMessage('Role is required')
        .isIn(['client', 'company']).withMessage('Role must be client or company'),


    // Middleware to return errors
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        next();
    }
];

export default validateUser;
