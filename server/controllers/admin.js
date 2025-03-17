const Admin = require('../models/admin');
const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body; 

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            mes: 'Missing inputs'
        });
    }

    try {
        const response = await Admin.create(req.body); 

        return res.status(201).json({
            success: true,
            response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            mes: 'Server error',
            error: error.message
        });
    }
});

module.exports = { register };
