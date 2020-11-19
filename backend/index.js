const express = require('express') 
// const = váriavel que não muda
// express = nome da biblioteca do servidor
//required = requisita a biblioteca

const server = express()
// A váriavel recebe o resultado do servidor
// Essa função starta o servidor 

server.get("/oi",function (request, response) {
    const nome = request.query.nome
    response.send(`Hello ${nome}`)
})

// A função .get retorna algo, e ela precisa de dois parâmetros, um é a rota e o outro é uma função.
// Essa função, também tem 2 parâmetros (request, response).
// request é o que ela recebe e response o que ela responde.

server.listen(3000)
