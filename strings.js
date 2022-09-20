//Delimitação de Strings

const aspasSimples = 'Olá Mundo'

console.log(aspasSimples)

//caracteres de escape
const aspasDuplas = "Olá eu sou o \n Javascript. Eu sou melhor que o Python"

console.log(aspasDuplas)

const textoComCrase = `Olá eu sou o Javascript. E u s  ou melhor 
que o Python`

console.log(textoComCrase)

const texto ='O JavaScript foi criado alguns anos após de Python. No entanto, JavaScript é bem mais legal.'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat('A linguagem C é a mãe de todas as linguagens'))
console.log(texto[2])
console.log(texto.substring(2))
//case senstive
console.log(texto.replace('Javascript', 'Rust')) //o replace substitui nomente a primeira ocorrência do termo solicitado
console.log(texto.replaceAll('Javascript', 'Kotlin'))//o replaceAll substitui todas as ocorrências
//expressões regulares
console.log(texto.replace(/'Javascript'/g, 'PHP'))
console.log(texto.replace(/'Javascript'/gi, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))//true
console.log(html.startsWith('BATATA'))//false

console.log(html.endsWith('</body>')) //false

const mensagem = ('                                         Hello World')

console.log(mensagem)
console.log(mensagem.trim()) // Retira os espaços excessos de espaços nos textos

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >= 8)