function validarCadastro(event) {
    event.preventDefault();
    if(input_senha.value == input_Csenha.value){
        swal("Cadastro Concluído!", "", "success").then(function redirecionarCadastro() {
            location.href = '../index.html'
        })
    } else{
    alert ('Complete o cadastro!')
}   
}