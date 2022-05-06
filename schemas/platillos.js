var mongoose = require("mongoose");

var platilloSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,

    precio : Number,
    ingredientes : Array
});

module.exports = mongoose.model("Platillo", platilloSchema, "Platillos");