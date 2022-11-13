import {formataValor} from './utilidades.js'
let conta = 0.00
let quantidade = 0
let plural = ''
let reais = ' reais'

let resposta = prompt('Deseja uma coxinha? [SIM = "s", NÃO = "n"]').toLowerCase()

while(resposta != 'n'){

    if (resposta === 's'){
        conta += 2.5
        quantidade += 1
    }else{
        alert('Resposta inválida')
    }
    
    resposta = prompt('Deseja uma coxinha? [SIM = "s", NÃO = "n"]').toLowerCase()
}

if (quantidade > 1){
    plural = 's'
} 

if (conta - parseInt(conta) !== 0){
    reais = ''
}

console.log(`Você comprou ${quantidade} coxinha${plural} no valor de 2,50 cada e o total ficou em R$ ${formataValor(conta)}${reais}.`)