const express = require('express')
const router = express.Router()
const db = require('../banco')
const bodyparser = require('body-parser')


router.use(bodyparser.urlencoded({extended: false}))

router.post('/cadastrar', function(req, res){
    db.query('INSERT INTO frases_filmes (frase, filme, ano) VALUES (?, ?, ?)',
    [req.body.frase, req.body.filme, req.body.ano], function (err, r){
        if(err){
            res.json({err})
        }else{
            res.json({r})
        }
    })
})

module.exports = router
