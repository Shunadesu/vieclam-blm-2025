const Admin = require('../models/admin')
const asyncHandler = require('express-async-handler')


const register = asyncHandler(async(req,res) => {
    const [name, email, password] = req.body
    if(!name || !email || !password) return res.status(400).json({
            success: false,
            mes: 'Missing inputs'
        })

    const response = await Admin.create(req.body)
    return res.status(200).json(
        {
            success: response ? true : false,
            response
        }
    )
})

module.exports = {
    register
}