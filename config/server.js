const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');

app.set('view engine','ejs'); // Avisando ao express que quem cuida das views é o EJS
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign().include('app/routes') // Incluindo os módulos rotas
         .then('config/dbConnection.js')
         .then('app/models')
         .into(app);
module.exports=app;

//Este módulo exporta a configuração dos servidores.