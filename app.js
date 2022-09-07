function saudar() {
    var nome = window.prompt("Como você se chama?")
    window.alert(`Muito prazer ${nome}. Bem vindo.`)
}


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var now = new Date()
    var hora = now.getHours()
    var minutos = now.getMinutes()
    
    if (hora >= 0 && hora < 12) {
        img.src = '../imagens/fotomanha.png'
        document.body.style.background = '#d99b63'
        msg.innerHTML = `Bom dia, agora são ${hora}:${minutos} horas.`
    } else if (hora < 18) {
        img.src = '../imagens/fototarde.png'
        document.body.style.background = '#ca692a'
        msg.innerHTML = `Boa tarde, agora são ${hora}:${minutos} horas.`
    } else {
        img.src = '../imagens/fotonoite.png'
        document.body.style.background = '#1a1f29'
        msg.innerHTML = `Boa noite, agora são ${hora}:${minutos} horas.`
    }
}