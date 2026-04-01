let input = prompt("Digite um número:");
let numero = parseFloat(input);

if (!isNaN(numero) && numero % 5 === 0) {
    alert("O número é múltiplo de 5.");
} else if (!isNaN(numero)) {
    alert("O número NÃO é múltiplo de 5.");
} else {
    alert("Entrada inválida. Por favor, digite um número.");
}
