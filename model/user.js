const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    name:{ 
        type: 'string',
        required: true,
        min: 8,
        max: 255
    },
    email: {
        type: 'string',
        required: true,
        max: 255,
        min: 8
    },
    password: {
        type: 'string',
        required: true,
        max: 1024,
        min: 8
    },
    date: {
        type: 'Date',
        default: Date.now
    }

});

module.exports = mongoose.model('User', userSchema);