function cadastro(event) {
    event.preventDefault()
    if(input_senha.value == input_Csenha.value){

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
    else{
        swal("Erro!", "As senhas precisam ser iguais!", "error")
    }
}

