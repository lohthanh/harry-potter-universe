const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username required'],
        minlength: [3, 'Username must be at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is requied'],
        minlength: [6, 'Email must be at least 6 characters long']
    }
}, {timestamps: true});

module.exports.Users = mongoose.model('Users', UserSchema);