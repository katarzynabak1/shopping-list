const mongoose = require('mongoose');
const DrinkSchema =  new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    bought:{
        type: Boolean,
        default: true
    }
})
const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = { Drink }