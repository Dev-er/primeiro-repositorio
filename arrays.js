/**
* Arrays ou vetores é um tipo especial que permite armazenar diversos valores
* em apenas um local!!!
*/

// criando um Arrays
/*let arr = new Array()
let arr2 = new Array()
let arr3 = [] // mais usada, mesmo conceito let arr = new Array()
*/

/**
 * Posição de um array
 * -> Cada posição é representada por um número
 * -> A primeira posição de um Array é a posição 0
 */

let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Olá mundo', true, false, false]
console.log(arr[4])
//mudando a posição do array
arr[4]
console.log(arr[4]) // Olá mundo
arr[4] = 'Novo texto'
console.log(arr[4]) //Novo texto