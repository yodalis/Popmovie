fkUsuario.value = sessionStorage.idUsuario
function add(event) {
    event.preventDefault()
    
    var ator = atord.value
    var ar = ator.split(", ")
    var atores = new FormData()
    
    atores.append("atores", JSON.stringify(ar))
    atores = new URLSearchParams(atores)

    fetch("/filme/ator",{
        method: "POST",
        body: atores
    }).then(function (respostaAtor) {
           if(respostaAtor.ok){
            respostaAtor.json().then(jsonAtor => {
             cadastroFilme(jsonAtor)
            })
        }     
    })
    
    return false
}

function cadastroFilme(jsonAtor){
    var formulario = new URLSearchParams(new FormData(form_adicionar));
    fetch("/filme",{
        method: "POST",
        body: formulario
    }).then(respostaFilme => {
        if(respostaFilme.ok){
          respostaFilme.json().then(jsonFilme =>{
            atorFilme(jsonFilme,jsonAtor)
          })
        }
    })
}


function atorFilme(jsonFilme,jsonAtor) {
    console.log("Essa é do filme", jsonFilme)
    console.log("Essa é do ator", jsonAtor)
}

function genero() {
    fetch("/filme/genero",{
        method: "GET",
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    
                    genre.innerHTML+=` <option value="${element.idGenero}">
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
genero()



    // 
    //     if(resposta.ok){
    //         resposta.json().then(json => {

    //             swal("Filme registrado!", "Obrigada pela sua indicação!", "success").then(function(){location.href = 'index.html'})
    //         })
    //     } else{
    //         swal("Erro!", "Por favor indique o filme corretamente.", "error")
    // }
    // });
