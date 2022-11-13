function arredonadaParaCima(valor){
    
    const valorInteiro = parseInt(valor)
    let arredondado = valorInteiro

    if((valor - arredondado < 0.5) && (valor - arredondado > 0)){
        arredondado = valorInteiro + 0.50
        return `${String(arredondado).replace('.', ',')}0`
    }else if(valor > arredondado){
        return `${arredondado + 1},00`
    }else{
        return `${valor},00`
    }
}

function formataValor(valor){
    let valorString = String(valor)

    if(valorString.includes('.')){
        if (valorString.slice(valorString.indexOf('.') + 1).length > 1){
            return valorString.replace('.', ',')
        }else{
            return `${valorString.replace('.', ',')}0`
        }
    }else{
        return `${valorString},00`
    }
}

export {formataValor, arredonadaParaCima}