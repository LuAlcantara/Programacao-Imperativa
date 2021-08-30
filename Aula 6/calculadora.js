//Nivel I
function soma (numA, numB){
    return(numA + numB)
}

function subtração (numA, numB){
    return(numA - numB)
}

function multiplicação (numA, numB){
    return(numA * numB)
}

function divisão (numA, numB){
    return(numA / numB)
}

//Nivel II
console.log ("-------------- Teste de Operações / Calculadora -------------")

console.log(soma(5,5))
console.log(subtração(20,10))
console.log(multiplicação(5,5))
console.log(divisão(10,2))
console.log(divisão(30,0))

//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
function quadradoDoNumero (quadradoDoNumero){
    return multiplicação(quadradoDoNumero, quadradoDoNumero)
}

console.log(quadradoDoNumero(2))

function mediaDeTresNumeros (numA, numB, numC){
    return divisão (numA, numB, numC)
}

console.log(mediaDeTresNumeros(10,10,10))