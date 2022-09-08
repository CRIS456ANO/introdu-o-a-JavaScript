function saudar() {
    var nome = window.prompt("Como você se chama?")
    window.alert(`Muito prazer ${nome}. Bem vindo.`)
}


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var DiaDaSemana = window.document.getElementById('DiaDaSemana')
    var now = new Date()
    var hora = now.getHours()
    var minutos = now.getMinutes()
    var dia = new Date()
    var diaSem = dia.getDay()
        
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
    switch(diaSem) {
        case 0: 
            DiaDaSemana.innerHTML = `E bom domingo.`
            break
        case 1: 
            DiaDaSemana.innerHTML = `E hoje é segunda-feira, bom inicio de semana.`
            break
        case 2: 
            DiaDaSemana.innerHTML = `E hoje é terça-feira.`
            break
        case 3: 
            DiaDaSemana.innerHTML = `E hoje é quarta-feira.`
            break
        case 4: 
            DiaDaSemana.innerHTML = `E hoje é quinta-feira.`
            break
        case 5: 
           DiaDaSemana.innerHTML = `E hoje é sexta-feira, Bom final de semana.`
            break
        case 6: 
            DiaDaSemana.innerHTML = `E hoje é sábado.`
            break
        default: 
            DiaDaSemana.innerHTML = `[ERRO] Dia inválido.`
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
 function calcularIdade() {
    var idade = window.document.querySelector('input#idadeDeVoto')
    var votar = window.document.querySelector('div#votar')
    var idadeDeVoto = Number(idade.value)
    if (idadeDeVoto < 16) {
        votar.innerHTML += `Sua idade é ${idadeDeVoto} e portanto você não pode votar ainda. <br>`
    } else if (idadeDeVoto <= 18 || idadeDeVoto >= 67)  {
        votar.innerHTML += `Sua idade é ${idadeDeVoto} e portanto o voto é opcional. <br>`
    } else {
        votar.innerHTML += `Sua idade é ${idadeDeVoto} e o seu voto é obrigatório. <br>`
    }
}

function tabuada() {
    var number = window.document.querySelector('input#tabuada')
    var numero = Number(number.value)
    var restabuada = window.document.querySelector('div#restabuada')
    var cont = 1
    var m = numero * cont
    // for (var m = numero * cont ; cont <= 10 ; cont++) {
    //     restabuada.innerHTML += `${numero} x ${cont} = ${m} <br>`
    // }
    while (cont <= 10) {
        restabuada.innerHTML += `${numero} x ${cont} = ${m} <br>`
        cont++
    }

}