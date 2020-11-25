function cadastro() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    console.log(formulario)
    fetch("/usuarios/autenticar",{
        method: "POST",
        body: formulario
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                location.href = '../index.html'
            })
        } else{
            swal("Erro!", "Email e/ou senha incorretos.", "error")
    }
    });
    return false
}

