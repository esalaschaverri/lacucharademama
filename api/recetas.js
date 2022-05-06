var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var formidable = require('formidable');
var Swal = require('sweetalert2');

var Platillo = require("../schemas/platillos.js");

router.get('/', function (req, res) {
  Platillo.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/buscarPlatillo', function (req, res) {
  var titulo = req.body.nombre;
  Platillo.find({nombre:titulo}).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );

});

router.post('/buscar', function (req, res) {
  var id = req.body._id;
  Platillo.findById(id).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
    
});


router.post('/insertar', function (req, res) {
  var platilloNuevo = new Platillo({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    precio: req.body.precio,
    ingredientes: req.body.ingredientes,
  });

  platilloNuevo.save();
  Swal.fire('El platillo ha sido creado');
  return res.redirect("../index.html")
});

module.exports = router;


