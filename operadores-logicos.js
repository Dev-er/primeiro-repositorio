/**
 * Operadores lógicos
 */

// E (and)

// V -> Verdadeiro
// F -> Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */

// média precisa ser maior ou igual 7
const media = (3.5 + 6 + 10) / 3
const presenca = 0.7

console.log(media >= 7 && presenca >= 0.8) // false

let med = (7 + 10 + 10) / 3
let pres = 0.95

console.log(media >= 7 && presenca >= 0.8) // true

// Operador Ou (or)

/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 */
console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8) //true

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3

console.log(!resultado)
console.log(!true)
console.log(!false)

const logado = false

if(!logado){
    console.log('Você não pode acessar o meu site, sai daqui')
}