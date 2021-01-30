function home() {
    fetch("/filme",{
        method: "GET",
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                movies.innerHTML=""
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    movies.innerHTML+=` <div class="movie">
                                            <img src="${element.imgFilme}" class="picture">
                                            <div class="blurred">
                                                <label class="avaliacaoText">Avaliação do usuário: </label> 
                                                <label for="" class="avaliacaoValue">${element.avaliacaoFilme}%</label>
                                            </div>
                                        </div>`
                }
            })
        } else{
            swal("Erro!", "Ocorreu um erro.", "error")
    }
    });
    return false
}

// setInterval(home,10000)

function ator() {
    fetch("/filme/ator",{
        method: "GET",
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json)
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    
                    atores.innerHTML+=` <option value="${element.idAtor}" >
                                            ${element.nomeAtor}
                                        </option>`
                }
            })
        } else{
            swal("Erro!", "Ocorreu um erro.", "error")
    }
    });
    return false
}

function genero() {
    fetch("/filme/genero",{
        method: "GET",
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json)
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    
                    genreone.innerHTML+=` <option value="${element.idGenero}">
                                            ${element.nomeGenero}
                                        </option>`
                }
            })
        } else{
            swal("Erro!", "Ocorreu um erro.", "error")
    }
    });
    return false
}

function ano() {
    fetch("/filme/ano",{
        method: "GET",
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                console.log(json)
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    
                    year.innerHTML+=` <option value="${element.anoFilme}">
                                            ${element.anoFilme}
                                        </option>`
                }
            })
        } else{
            swal("Erro!", "Ocorreu um erro.", "error")
    }
    });
    return false 

}

function indicacao() {
    var formulario = new URLSearchParams(new FormData(formSelecionar));
    fetch("/filme/indicacao",{
        method: "POST",
        body: formulario
    }).then(resposta => {
            if(resposta.ok){
                resposta.json().then(json => {
                    indication.innerHTML = ""
                    for (let index = 0; index < json.length; index++) {
                        const element = json[index];
                        
                        indication.innerHTML+=` <div class="movie">
                        <img src="${element.imgFilme}" class="picture">
                        <div class="blurred">
                        <label for=""class="avaliacaoText">Avaliação do usuário: </label> 
                        <label for="" class="avaliacaoValue">${element.avaliacaoFilme}%</label>
                        </div>`
                    }
                })
            } else{
                swal("Erro!", "Ocorreu um erro.", "error")
            }
        });
        return false 
    }

home()
ator()
genero()
ano()
