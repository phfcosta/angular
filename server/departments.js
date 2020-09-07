var mongoose = require('mongoose');
var schema = mongoose.Schema;

var departmentSchema = new mongoose.Schema({
    name: String,
}, {versionKey: false});

module.exports = mongoose.model("Department", departmentSchema);