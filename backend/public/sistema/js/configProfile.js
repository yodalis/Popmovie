
function validarProfile(event) {
    event.preventDefault()
    swal("Dados atualizados!", "", "success").then(function redirecionarRegistro() {
        location.href = "index.html"
    }); 
}

