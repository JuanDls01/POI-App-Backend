const express = require("express");
const cookieParser = require("cookie-parser"); //Para configurar cookies en el servidor, es un middleware
const morgan = require("morgan"); //Middleware de registro de solicitudes HTTP para node.js
const path = require("path");
const cors = require('cors');

const mainRouter=require('./routes/index'); //Se trae las rutas configuradas en la ruta routes/index

require('./db.js')

const server = express(); // Creamos la instancia de express
server.name = "API"; // Nombra el servidor
server.use(cors())
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" })); // Analiza las solicitudes entrantes con cargas JSON
server.use(cookieParser());
server.use(morgan("dev"));

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Especifica que origen puede acceder al recurso. Sólo se puede especificar un origen. con * los permites todos (desde donde puedo acceder)
    res.header("Access-Control-Allow-Credentials", "true"); //  le dice al navegador si exponer la respuesta al código JavaScript (del frontend)
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    ); // Para identificar antes de hacer la peticion el o los tipos de metodos que acepta (get, put, post, delete)
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); // indica los metodos aceptados
    next();
});

server.use('/',mainRouter) 

module.exports = server;