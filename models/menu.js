const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price : {
        type: Number,
        default: 99
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy','sour']
    },
    num_sales: {
        type: Number,
        default:0
    },
    ingredients: {
        type: [String],
        default: []
    },
    is_drink: {
        type:Boolean,
        default:false
    }

})

const menuItem = mongoose.model('menuItem', menuItemSchema);
module.exports = menuItem;