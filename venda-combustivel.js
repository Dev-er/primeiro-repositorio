/* Um posto está vendendo combustível com a seguinte tabela de descontos:
 *  _______________________________________________________________________________ 
 * |                |                                                              |
 * | Álcool         |            Até 25 litros, desconto de 2% por litro           |   
 * |                |            Acima de 25 litros, desconto de 4% por litro      | 
 * |----------------|--------------------------------------------------------------|
 * | Gasolina       |            Até 25 litros, desconto de 3% por litro           |
 * |                |            Acima de 25 litros, desconto de 5% por litro      |  
 * |________________|______________________________________________________________|
 * Escreva um algorítmo que leia o número de litros vendidos e o tipo de combustível
 * (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a 
 * ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,70 e o 
 * preço do litro do álcool é de R$ 1,90.
 */

//const precoProduto = parseFloat(prompt('Qual é o combustível que você deseja abastecer seu veículo?'))

const tipoDeCombustivel = prompt(`
Informe o tipo de combustível:
Digite A para Álcool
Digite G para Gasolina
`).toUpperCase;

const quantidadeDeCombustivel = parseFloat(prompt('Qual a quantidade de combustível que deseja abastecer'))

if(tipoDeCombustivel == "A" && quantidadeDeCombustivel <= 25) {
    const quantidadeDeCombustivel = quantidadeDeCombustivel * (1.90*0.98)
    alert(`O preço final do combusível é ${quantidadeDeCombustivel} reais`)
}else if(tipoDeCombustivel == "A" && quantidadeDeCombustivel > 25) {
    const quantidadeDeCombustivel = quantidadeDeCombustivel * (1.90*0.96)
    alert(`O preço final do combusível é ${quantidadeDeCombustivel} reais`)
}
if(tipoDeCombustivel == "G" && quantidadeDeCombustivel <= 25) {
    const quantidadeDeCombustivel = quantidadeDeCombustivel * (1.90*0.97)
    alert(`O preço final do combusível é ${quantidadeDeCombustivel} reais`)
}else (tipoDeCombustivel == "G" && quantidadeDeCombustivel > 25) {
    const quantidadeDeCombustivel = quantidadeDeCombustivel * (1.90*0.95)
    alert(`O preço final do combusível é ${quantidadeDeCombustivel} reais`)
}