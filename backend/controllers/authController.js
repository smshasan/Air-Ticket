const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors'); 
const sendToken = require('../utils/jwtToken');
// const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
// const cloudinary = require('cloudinary');



exports.registerUser = catchAsyncErrors( async(req, res, next) => {

    const {name, address, phone, email, password} = req.body;

    const user = await User.create({ name, address, phone, email, password });

    res.status(201).json({
        success: true,
        user
    })

})

exports.getUser = catchAsyncErrors( async(req, res, next) => {

    const user = await User.find();

    res.status(201).json({
        success: true,
        user
    })
})