var mysql = require('mysql');

var connMySQL=  function(){
return mysql.createConnection({
    hots: 'localhost',
    user:'root',
    password: '',
    database:'portal_noticias'

});
};

module.exports=function(){
    return connMySQL;
}