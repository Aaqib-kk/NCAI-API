const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: false},
    dob: {type: Date, required: false},
    phoneNumber: {type: String, required: true},
    location: {type: String, required: true},
    city: {type: String, required: true},
    zipCode: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports =  mongoose.model('User', userSchema);
