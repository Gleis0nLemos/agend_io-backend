const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Access denied, token not provided'
        });
    }

    const token = authHeader.split(' ')[1]; // Getting only the real token
    
    // const token = req.header('Authorization');

    // if (!token) {
    //     return res.status(401).json({
    //         message: 'Access denied, token not provided'
    //     });
    // }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adds user data in request 
        next();
    } catch (error) {
        res.status(400).json({
            message: 'Invalid token'
        })
    }
};

module.exports = authMiddleware;