function validar_info(event) {
    event.preventDefault();
    if(input_email.value == 'admin@admin' && input_senha.value == 'admin'){
        location.href = '../html/index.html'
    } else{
    alert ('Email e/ou senha incorretos!')
}
}

function validarCadastro(event) {
    event.preventDefault();
    if(input_nome.value != '' && input_email.value != '' && input_senha.value !='' && input_Csenha.value != ''){
        location.href = '../html/login.html'
    } else{
    alert ('Complete o cadastro!')
}   
}

function validarAdd(event) {
    event.preventDefault()
    swal("Filme registrado!", "Obrigada pela sua indicação!", "success");  
}