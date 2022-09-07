// var nome = window.prompt("Como você se chama?")
// window.alert(`Muito prazer ${nome}. Bem vindo.`)
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var now = new Date()
    var hora = now.getHours()
    var minutos = now.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = '../imagens/foto-manha.png'
        document.body.style.background = '#ffffff'
    } else if (hora < 18) {
        img.src = '../imagens/fototarde.png'
    } else {
        img.src = '../imagens/fotonoite.png'
    }
}