const mongoose = require('mongoose');
const ItemSchema =  new mongoose.Schema({
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
const Item = mongoose.model('Item', ItemSchema);

module.exports = { Item }