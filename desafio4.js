/**
 * Desafio 4: Percentual de Representação por Estado
 * 
 * Este programa calcula o percentual de representação que cada estado 
 * teve dentro do valor total mensal da distribuidora.
 */

/**
 * Formata um valor monetário no padrão brasileiro: R$ X.XXX,XX
 * @param {number} valor - O valor a ser formatado
 * @return {string} - Valor formatado como moeda brasileira
 */
function formatarMoedaBRL(valor) {
    return valor.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
}

/**
 * Calcula e exibe o percentual de representação por estado
 * @return {Object} Objeto contendo o percentual de cada estado
 */
function calcularPercentualPorEstado() {
    // Dados de faturamento por estado
    const faturamentoPorEstado = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    // Calcula o valor total de faturamento
    const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
    
    console.log('='.repeat(50));
    console.log('=== PERCENTUAL DE REPRESENTAÇÃO POR ESTADO ===');
    console.log('='.repeat(50));
    console.log(`\nValor total de faturamento: ${formatarMoedaBRL(valorTotal)}`);
    console.log('\nDetalhamento por estado:');
    console.log('-'.repeat(40));

    // Objeto para guardar o resultado dos percentuais
    const percentuaisPorEstado = {};
    
    // Calcula e exibe o percentual de cada estado
    for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
        const percentual = (valor / valorTotal) * 100;
        percentuaisPorEstado[estado] = percentual;
        
        // Formata os valores em formato brasileiro e exibe alinhado
        console.log(`| ${estado.padEnd(10)} | ${formatarMoedaBRL(valor).padStart(15)} | ${percentual.toFixed(2).padStart(6)}% |`);
    }
    console.log('-'.repeat(40));
    
    return percentuaisPorEstado;
}

// Executa o cálculo se o script for chamado diretamente
if (require.main === module) {
    calcularPercentualPorEstado();
}

// Exporta a função para uso em outros módulos, se necessário
module.exports = { calcularPercentualPorEstado, formatarMoedaBRL };
