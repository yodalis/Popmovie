function cadastro() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    console.log(formulario.toString())
    fetch("/usuarios/cadastrar",{
        method: "POST",
        body: formulario
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                swal("Você está cadastrado!", "Bem vindo!", "success").then(function(){location.href = '../index.html'})
            })
        } else{
            swal("Erro!", "Email e/ou senha incorretos.", "error")
    }
    });
    return false
}

