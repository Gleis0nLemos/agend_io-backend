const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (requiredRoles = []) => {
    return async (req, res, next) => {
        const authHeader = req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Access denied, token not provided'
            });
        }

        const token = authHeader.split(' ')[1]; // Getting only the real token

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Adds user data in request

            if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
                return res.status(403).json({
                    message: 'Access denied, you do not have permission'
                });
            }

            next();
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Invalid token'
            })
        }
    };
}


module.exports = auth;