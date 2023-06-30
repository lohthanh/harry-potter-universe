const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const usersRoutes = require('../routes/users.routes');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username required'],
        minlength: [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is requied'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    }
}, {timestamps: true});

// set confirmPassword as a virtual field so it doesn't get stored in DB
UserSchema.virtual('confirmPassword');
// validate that password and confirm password match when reqistering
UserSchema.pre('validate', next => {
    if (this.password !== this.confirmPassword) {
        this.invaldate('confirmPassword', 'Password must match confirm password');
    }
    next();
})
// hash the password before storing in DB
UserSchema.pre('save', async next => {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
// degine a static method for our model to handle login validations
UserSchema.static.checkLogin = async function({email, password}){
    const user = await this.findOne({email});
    if(!(user && await bcrypt.compare(password, user.password))){
        throw new this().invalidate('password', Invalid Credentials);
    }
    return user;
}



module.exports.Users = mongoose.model('Users', UserSchema);