function validar_info(event) {
    event.preventDefault();
    if(input_email.value == 'admin@admin' && input_senha.value == 'admin'){
        location.href = '../html/index.html'
    } else{
    alert ('Email e/ou senha incorretos!')
}
} 