
const numero = prompt('Informe um número inteiro qualquer.')

if (!isNaN(numero * 1)){

    for(let mult = 1; mult < 11; mult++){
        const resultado = mult * numero
        console.log(`${mult} x ${numero} = ${resultado}`)
    }

}else{
    
    alert('O valor informado não é um número.')
}
