let jogador = null
let vencedor = null

let jogadorSelecionado = document.getElementById('selected-player')
let vencedorSelecionado = document.getElementById('winner')
let quadrados = document.getElementsByClassName('block')


mudarJogador('X')

function chooseSquare(id){
    if(vencedor !== null){
        return;
    }
    let quadrado = document.getElementById(id)
    
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = '#EEE9E9'

    if(jogador === 'X'){
        jogador = 'O'
    }else{
        jogador = 'X'
    }

    mudarJogador(jogador)
    checaVencedor()
}

function mudarJogador(valor){
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor(){
    let q1 = document.getElementById('item-1')
    let q2 = document.getElementById('item-2')
    let q3 = document.getElementById('item-3')
    let q4 = document.getElementById('item-4')
    let q5 = document.getElementById('item-5')
    let q6 = document.getElementById('item-6')
    let q7 = document.getElementById('item-7')
    let q8 = document.getElementById('item-8')
    let q9 = document.getElementById('item-9')

    if(checaSequencia(q1, q2, q3) ){
        mudaCorQuadrado(q1, q2, q3)
        mudarVencedor(q1)
        return;
    }

    if(checaSequencia(q4, q5, q6) ){
        mudaCorQuadrado(q4, q5, q5)
        mudarVencedor(q4)
        return;
    }
    if(checaSequencia(q7, q8, q9) ){
        mudaCorQuadrado(q7, q8, q9)
        mudarVencedor(q7)
        return;
    }
    if(checaSequencia(q1, q4, q7) ){
        mudaCorQuadrado(q1, q4, q7)
        mudarVencedor(q4)
        return;
    }
    if(checaSequencia(q2, q5, q8) ){
        mudaCorQuadrado(q2, q5, q8)
        mudarVencedor(q2)
        return;
    }
    if(checaSequencia(q3, q6, q9) ){
        mudaCorQuadrado(q3, q6, q9)
        mudarVencedor(q3)
        return;
    }
    if(checaSequencia(q1, q5, q9) ){
        mudaCorQuadrado(q1, q5, q9)
        mudarVencedor(q1)
        return;
    }
    if(checaSequencia(q2, q5, q7) ){
        mudaCorQuadrado(q2, q5, q7)
        mudarVencedor(q2)
        return;
    }
}
function mudarVencedor(valor){
    vencedor = valor.innerHTML
    vencedorSelecionado.innerHTML = vencedor
}

function mudaCorQuadrado(valor1, valor2, valor3){
    valor1.style.backgroundColor = '#EEE9E9'
    valor2.style.backgroundColor = '#EEE9E9'
    valor3.style.backgroundColor = '#EEE9E9'
    
    valor1.style.color = '#2F4F4F'
    valor2.style.color = '#2F4F4F'
    valor3.style.color = '#2F4F4F'
}

function checaSequencia(valor1, valor2, valor3){
    let equals = false
    if(valor1.innerHTML !== '-' && valor1.innerHTML === valor2.innerHTML && valor2.innerHTML === valor3.innerHTML){
        equals = true
    }
    return equals
}


function reiniciar(){
    vencedor = null
    vencedorSelecionado.innerHTML = ''
    for(let i = 1; i <= 9; i++){
        let quadrado = document.getElementById(`item-${i}`)
        quadrado.style.backgroundColor = '#2F4F4F'
        quadrado.style.color = '#2F4F4F'
        quadrado.innerHTML = '-'
    }

    mudarJogador('X')
}