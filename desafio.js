/**
 * Desafio - JS
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
 */
// recebendo o preço do produto e 
//tranformando o valor em decimal com parseFloat
const precoProduto = parseFloat(prompt('Qual é o preço do produto?'))
const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para o pagamento em cheque
Digite 3 para pagamento com cartão
`

const metodoDePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metodoDePagamento)

/*
 * Se o valor da constante metodoDePagamento for igual a  1 ou 2 a pessoa terá
 * 10% de desconto
 */

if(metodoDePagamento == 1 || metodoDePagamento == 2){
    const precoFinal = precoProduto * 0.9
    //template String só funciona com crase    
    alert(`O preço final do pagamento é ${precoFinal} reais`)
}else if(metodoDePagamento == 3) {
    const parcelas = parseInt(prompt('Informe a quantidade de parcelas'))

    if(parcelas == 1) {
        const precoFinal = precoProduto*0.85
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    }else if(parcelas == 2) {
        const precoFinal = precoProduto
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    }else if (parcelas == 3) {
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    }
    /* OPÇÃO DE CÓDIGO PARA O CASO DA PESSOA NÃO OPTAR NEM PELA OPÇÃO 1 OU 2
     * else if (parcelas >= 3) {
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal} reais`)
        }

        PODERIA SER SUBSTITUÍDO POR:
     *  else {
            const precoFinal = precoProduto * 1.1
            alert(`O preço final do pagamento é ${precoFinal} reais`)
        }

        OU LIMITANDO O VALOR DE PARCELAS

        else if (parcelas > 2 && <= 10) {
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal} reais`)
        }
     */

}
