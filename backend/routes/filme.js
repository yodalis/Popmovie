var express = require('express');
const Ator = require('../models').Ator
const Genero = require('../models').Genero
const GeneroFilme = require('../models').GeneroFilme
const AtorFilme = require('../models').AtorFilme
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

    console.log(ano);

    if (ator == 0 && genero == 0 && ano != 0) {
        var instrucaoSql = `select * from Filme where anoFilme = ${ano};`
    } else if (ator != 0 && genero == 0 && ano == 0){
        var instrucaoSql = `select * from Filme,atorFilme where Filme.idFilme = atorFilme.fkFilme and atorFilme.fkAtor = ${ator};`
    } else if (ator == 0 && genero != 0 && ano == 0){
        var instrucaoSql = `select * from Filme,generoFilme where Filme.idFilme = generoFilme.fkFilme and generoFilme.fkGenero = ${genero}; `
    } else if (ator == 0 && genero != 0 && ano != 0){
        var instrucaoSql = `select * from Filme, generoFilme where Filme.idFilme = generoFilme.fkFilme and generoFilme.fkGenero = ${genero} and anoFilme = ${ano};`
    } else if (ator != 0 && genero != 0 && ano == 0){
        var instrucaoSql = `select * from Filme, generoFilme, atorFilme where Filme.idFilme = generoFilme.fkFilme and generoFilme.fkGenero = ${genero} and Filme.idFilme = atorFilme.fkFilme and atorFilme.fkAtor = ${ator}`
    } else if (ator != 0 && genero !=0 && ano != 0){
        var instrucaoSql = `select * from Filme, generoFilme, atorFilme where Filme.idFilme = generoFilme.fkFilme and generoFilme.fkGenero = ${genero} and Filme.idFilme = atorFilme.fkFilme and atorFilme.fkAtor = ${ator} and anoFilme = ${ano}`
    } else if (ator != 0 && genero == 0 && ano != 0) {
        var instrucaoSql = `select * from Filme,atorFilme where Filme.idFilme = atorFilme.fkFilme and atorFilme.fkAtor = ${ator} and anoFilme = ${ano};`
    }else {
        res.json({
            "status": "ok"
        })

        return 
    }
    
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
// Cadastro de gênero no add
router.post('/genero', function(req, res){
    Genero.create({
        nomeGenero: req.body.nomeGenero
    }).then(resultado => {
        res.send(resultado);
    }).catch(erro => {
        res.status(500).send(erro.message);
    });
})

// Cadastro de atores no add
router.post('/ator', function(req, res){
   
    var nomeAtores = req.body.atores
    console.log(nomeAtores)
    nomeAtores = JSON.parse(nomeAtores)
    var resposta = []

    const arrayAtores = nomeAtores.map((element) => {
        return Ator.create({
            nomeAtor: element
        }).then(resultado => {
            resposta.push({resultado})
        }).catch(erro => {
            res.status(500).send(erro.message);
        });
    })
    Promise.all(arrayAtores).then(() => {
        res.json(resposta);
    })
})

// Criação de generoFilme
router.post('/generoFilme', function(req, res){
    GeneroFilme.create({
        fkFilme: req.body.fkFilme,
        fkGenero: req.body.fkGenero
    }).then(resultado => {
        res.send(resultado);
    }).catch(erro => {
        res.status(500).send(erro.message);
    });
})

// Criação de atorFilme
router.post('/atorFilme', function(req, res){
    AtorFilme.create({
        fkAtor: req.body.fkAtor,
        fkFilme: req.body.fkFilme
    }).then(resultado => {
        res.send(resultado);
    }).catch(erro => {
        res.status(500).send(erro.message);
    });
})

module.exports = router;