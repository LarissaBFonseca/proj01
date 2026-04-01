let valorCompra = Number (prompt("Digite o valor total da compra:"));
valorCompra = parseFloat(valorCompra);

if (isNaN(valorCompra) || valorCompra <= 0) {
    alert("Por favor, digite um valor válido. (Apenas números positivos)");
} else {
    if (valorCompra >= 100) {
        let porcentagemDesconto = 0.10;
        let valorDesconto = valorCompra * porcentagemDesconto;
        let valorFinal = valorCompra - valorDesconto;
        
        alert(`Parabéns! Você ganhou 10% de desconto.\n` +
            `Valor da compra: R$ ${valorCompra.toFixed(2)}\n` +
            `Desconto: R$ ${valorDesconto.toFixed(2)}\n` +
            `Valor Total: R$ ${valorFinal.toFixed(2)}`);
    } else {
        alert(`Valor da compra: R$ ${valorCompra.toFixed(2)}\n` +
            `Não houve desconto aplicado (mínimo de R$ 100).`);
    }
}
