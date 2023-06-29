const mongoose = require('mongoose');

const leadDataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    lastname1: {
        required: true,
        type: String
    },
    lastname2: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone1: {
        required: true,
        type: String
    },
    phone2: {
        required: false,
        type: String
    },
    company: {
        required: false,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    seller_id: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', leadDataSchema)
