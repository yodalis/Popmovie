var express = require('express');
const Ator = require('../models').Ator
const Genero = require('../models').Genero
var router = express.Router();
var sequelize = require('../models').sequelize;
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
    console.log(req.body)
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
router.post('/indicacao', function(req,res){
    var ator = req.body.ator
    var genero = req.body.genero
    var ano = req.body.ano

    let instrucaoSql = `select * from Filme,atorFilme,generoFilme where Filme.idFilme = atorFilme.fkFilme and Filme.idFilme = generoFilme.fkFilme and atorFilme.fkAtor = ${ator} or generoFilme.fkGenero = ${genero} or Filme.anoFilme = ${ano}`;
    sequelize.query(instrucaoSql, {
		model: Filme
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`); 
			res.json(resultado);

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});

    

});

// Get que retorna o ator no select
router.get('/ator', function (req,res){
    Ator.findAndCountAll().then(resultado => {
        res.json(resultado.rows)
    }).catch(erro =>{
        res.status(500).send(erro.message);
    });
});

// Get que retorna o genero no select 

router.get('/genero', function (req,res){
    Genero.findAndCountAll().then(resultado => {
        res.json(resultado.rows)
    }).catch(erro =>{
        res.status(500).send(erro.message);
    });
});


router.get('/ano', function (req,res){
    let instrucaoSql = `select distinct anoFilme from [dbo].[Filme];`;
    sequelize.query(instrucaoSql, {
		model: Filme
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`); 
			res.json(resultado);

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});



module.exports = router;

