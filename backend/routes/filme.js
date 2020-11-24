var express = require('express');
const filme = require('../models/filme');
var router = express.Router();
var sequelize = require('../models').sequelize;
var filmes = require("../temp/filme.json") //Lista de filmes do sistema
var Filme = require('../models').Filme


// O Get retorna, ou seja, ele está retornando uma lista de filmes adicionados no sistema de acordo com a var 'filmes'
router.get('/', function (req,res){
    Filme.findAndCountAll().then(resultado => {
        res.json(resultado.rows)
    }).catch(erro =>{
        res.status(500).send(erro.message);
    });
});

// o Post adiciona, aqui ele vai adicionar um novo filme naquela lista de filmes.
router.post('/', function (req, res){
    Filme.create({
        nomeFilme: req.body.nomeFilme,
        anoFilme: req.body.anoFilme,
        fkUsuario: req.body.fkUsuario,
        imgFilme: req.body.imgFilme,
        avaliacaoFilme: req.body.avaliacaoFilme
    }).then(resultado => {
        res.send(resultado);
    }).catch(erro => {
        res.status(500).send(erro.message);
    });
});

// Retorna uma lista de filmes, porém com o filtro de ator, gênero e ano
router.get('/indicacao', function(req,res){
    var ator = req.headers.ator
    var genero = req.headers.genero
    var ano = req.headers.ano

    

})


module.exports = router;
