const express = require('express')
const app = express()
const db = require('./banco')
// Importar meu arquivo de rotas:
const router_get = require('./routes/get')
const router_post = require('./routes/post')

/*
/listar
/listar/id/:id
/listar/ano/:ano
/listar/filme/:filme
/buscar/:termo
*/

/*app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/perfil', function (req, res) {
    res.send('Aqui é o perfil show')
  })
  app.get('/perfil/:nome', function (req, res) {
    res.send('Aqui é o perfil do ' +req.params.nome)
  })*/


  app.use('/get' , router_get)
  app.use('/post' , router_post)

 
  app.get('/', function (req, res) {
    res.send('Bem-vindo ao sisteminha de frases show.')
  })
  

app.listen(3000)