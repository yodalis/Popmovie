
input_nome.value = sessionStorage.nome 
input_email.value = sessionStorage.email
imagemPerfil.src = `img/avatar${sessionStorage.icone}.png`
nomeG.innerHTML = sessionStorage.nome
var icone = sessionStorage.icone
function profile(event) {
    event.preventDefault()
    if(input_senha.value == input_Csenha.value){
        
        var myHeaders = new Headers();
        myHeaders.append("idUsuario", sessionStorage.idUsuario);
        console.log(sessionStorage.idUsuario)

        var dados = new FormData(form_profile)
        dados.append("icone", icone)

        var formulario = new URLSearchParams(dados);
        console.log(formulario.toString())
        fetch("/usuarios/configurar",{
            method: "PUT",
            body: formulario,
            headers: myHeaders
        }).then(resposta => {
            if(resposta.ok){
            resposta.json().then(json => {
                var dados = json[1]
                var dadosFinal = dados[0]
                
                sessionStorage.nome = dadosFinal.nome
                sessionStorage.email = dadosFinal.email
                sessionStorage.icone = dadosFinal.icone
                swal("Dados atualizados!", "", "success").then(function (){location.href = `profile.html`})
                
            })
        } else{
            swal("Erro!", "", "error")
        }
    });
    return false
} else{
    swal("Erro!", "As senhas precisam ser iguais!", "error")
}
}

function alterarFoto(nomeFoto) {
    icone = nomeFoto
    imagemPerfil.src = `img/avatar${nomeFoto}.png`
}


