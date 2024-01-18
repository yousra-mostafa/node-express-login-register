
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    age:
    {
        type: String,
        min: 13,
    }

})


const User = mongoose.model('User', UserSchema);
module.exports = User; //export Variable