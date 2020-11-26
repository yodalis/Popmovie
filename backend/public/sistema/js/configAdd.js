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

