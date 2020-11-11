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
    if(input_nome.value == 'Thais Calazans' && input_email.value == 'thais@gmail.com' && input_senha.value =='thais' && input_Csenha.value == 'thais'){
        location.href = '../html/login.html'
    } else{
    alert ('Complete o cadastro!')
}   
}