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
        img.src = '../../imagens/fotomanha.png'
        document.body.style.background = '#d99b63'
        msg.innerHTML = `Bom dia, agora são ${hora}:${minutos} horas.`
    } else if (hora < 18) {
        img.src = '../../imagens/fototarde.png'
        document.body.style.background = '#ca692a'
        msg.innerHTML = `Boa tarde, agora são ${hora}:${minutos} horas.`
    } else {
        img.src = '../../imagens/fotonoite.png'
        document.body.style.background = '#1a1f29'
        msg.innerHTML = `Boa noite, agora são ${hora}:${minutos} horas.`
    }
}

function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var velocidade = Number(txtv.value)
    res.innerHTML = `<p>A sua velocidade atual é de <strong>${velocidade} KM/h</strong></p>`
    if (velocidade > 65) {
res.innerHTML += `<p>Ela está acima de 60 Km/h e por isso você foi <strong>MULTADO</strong>. Procure pagá-la o quanto antes.</p>`
    }
    res.innerHTML += `Tome sempre cuidado, use sempre cinto de segurança.`
     
 }