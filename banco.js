const mysql = require('mysql2')

// await: Comando de chamada assincrona, como é local não há necessidade de usa-lo, se fosse online usar se ia o. Usado: const connection = await mysql.createConnection({
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'frases',
  });
  
  //Especificar qual item será "exportado" quando for requerido em outra página:
  module.exports = connection