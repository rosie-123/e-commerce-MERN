const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: {
        type: String,
    },
    facebookID: {
        type: String,
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User;