function validar_info(event) {
    event.preventDefault();
    if(input_email.value == 'admin@admin' && input_senha.value == 'admin'){
        location.href = 'sistema/index.html'
    } else{
        swal("Erro!", "Email e/ou senha incorretos.", "error")
}
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