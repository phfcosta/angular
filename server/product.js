var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department'}]
}, {versionKey: false});

module.exports = mongoose.model("Product", productSchema);