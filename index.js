var path = require("path"); // Incluyo Path
var express = require("express"); // Incluyo Express
var app = express(); // Inicializo Express

var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://elchef:MiCocina1234@cluster0.egsfw.gcp.mongodb.net/lacucharademama?retryWrites=true&w=majority");

const cors=require("cors");
const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Asigno la carpeta definida a Express
app.use("/recetas", require("./api/recetas.js"));


app.listen(5000, function(){
  console.log("servidor corriendo en el puerto 5000");
}); // Levanto el servidor en el puerto 5000