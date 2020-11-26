fkUsuario.value = sessionStorage.idUsuario
function add() {
    var formulario = new URLSearchParams(new FormData(form_adicionar));
    console.log(formulario.toString())
    fetch("/filme",{
        method: "POST",
        body: formulario
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {

                swal("Filme registrado!", "Obrigada pela sua indicação!", "success").then(function(){location.href = 'index.html'})
            })
        } else{
            swal("Erro!", "Por favor indique o filme corretamente.", "error")
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