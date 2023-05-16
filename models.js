const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      required: true,
      type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    apps: {
        required: true,
        type: []
    }
})

module.exports = mongoose.model('Data', userSchema)
