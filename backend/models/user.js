const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


/**
 * User					
User ID					
Profile Settings	Name Corection	Address Correction	Phone Correction	Password Change	Email Address
Bank Account	Add Bank Account	Select Bank	Account Number	Account Name	Branch
 */



const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxLength: [30,' your name cannot exceed 30 characters']
    },

    address: {
        type: String,
        required: true,
        maxLength: [50,' your address cannot exceed 30 characters'],
    },

    phone: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minLength: [8,'password should be minimum 8 characters']
    }

})


    //Encrypting Password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// Compares user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


//Return JWT Token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}


// Generating password reset token
userSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Set token expire time 
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000
    return resetToken
}

module.exports = mongoose.model('User', userSchema);
