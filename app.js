// var nome = window.prompt("Como você se chama?")
// window.alert(`Muito prazer ${nome}. Bem vindo.`)
function carregar() {
    var msgHora = window.document.getElementById('msg')
    var imagem = window.document.getElementById('fotodahora')
    var now = new Date()
    var hora = now.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        imagem.src = '../imagens/foto-manha.png'
    } else if (hora < 18) {
        imagem.src = '../imagens/fototarde.png'
    } else {
        imagem.src = '../imagens/fotonoite.png'
    }
}