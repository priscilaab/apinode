const express = require('express')
const router = express.Router()
const db = require('../banco')

router.get('/listar', function (req, res) {
    db.query('SELECT * FROM frases_filmes', function(err, r){
      if(err){
        res.json({err})
      }else{
        res.json({r})
      }
    })
  })
  
  router.get('/listar/id/:id', function (req, res) {
    db.query('SELECT * FROM frases_filmes WHERE id = ?', [req.params.id] ,function(err, r){
      if(err){
        res.json({err})
      }else{
        res.json({r})
      }
    })
  })
  router.get('/listar/ano/:ano', function (req, res) {
    db.query('SELECT * FROM frases_filmes WHERE ano = ?', [req.params.ano] ,function(err, r){
      if(err){
        res.json({err})
      }else{
        res.json({r})
      }
    })
  })
  router.get('/listar/filme/:filme', function (req, res) {
    db.query('SELECT * FROM frases_filmes WHERE filme LIKE CONCAT(\'%\', ?, \'%\')', [req.params.filme] ,function(err, r){
      if(err){
        res.json({err})
      }else{
        res.json({r})
      }
    })
  })
  router.get('/buscar/:termo', function (req, res) {
    db.query('SELECT * FROM frases_filmes WHERE frase LIKE CONCAT(\'%\', ?, \'%\')', [req.params.termo] ,function(err, r){
      if(err){
        res.json({err})
      }else{
        res.json({r})
      }
    })
  })

  module.exports = router