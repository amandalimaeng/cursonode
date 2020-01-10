const app = require('./config/server');

// Tudo isso comentado abaixo ficou inútil com o consign
//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home'); //Retorna uma função
//rotaHome(app); // Executa de fato a função

//var rotaFormulario = require('./app/routes/formulario_inclusao_noticia');
//rotaFormulario(app);


app.listen(3000, function(){
    console.log('Servidor ON');
    
});
