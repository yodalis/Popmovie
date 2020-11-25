function login() {
    var formulario = new URLSearchParams(new FormData(form_login));
    console.log(formulario)
    fetch("/usuarios/autenticar",{
        method: "POST",
        body: formulario
    }).then(resposta => {
        if(resposta.ok){
            resposta.json().then(json => {
                // sessionStorage.login_usuario_meuapp = json.email;
                sessionStorage.nome_usuario_meuapp = json.nome;

                location.href = '../sistema/index.html'
            })
        } else{
            swal("Erro!", "Email e/ou senha incorretos.", "error")
    }
    });
    return false
}

// Pop up referente ao email de recuperação de senha 
function popup(event) {
    event.preventDefault()
    swal({
        text: 'Escreva aqui o email cadastrado',
        content: "input",
        button: {
            text: "Enviar código",
            closeModal: true,
                    }
                })
}



