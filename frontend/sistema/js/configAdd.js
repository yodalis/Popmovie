
function validarAdd(event) {
    event.preventDefault()
    swal("Filme registrado!", "Obrigada pela sua indicação!", "success").then(function redirecionarRegistro() {
        location.href = "index.html"
    });  
}