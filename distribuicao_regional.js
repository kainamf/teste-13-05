/**
 * distribuicao_regional.js
 * 
 * Ferramenta de análise e visualização da distribuição regional de receitas
 * ou outros indicadores de negócio. Ideal para relatórios gerenciais e análises
 * de mercado por território.
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
 * Analisa a distribuição percentual de valores entre diferentes regiões ou categorias
 * @param {Object} [dadosRegionais] - Objeto opcional com dados regionais personalizados
 * @return {Object} Objeto contendo análise detalhada da distribuição regional
 */
function analisarDistribuicaoRegional(dadosRegionais) {
    // Dados de faturamento por região (use os dados fornecidos ou os padrão)
    const faturamentoPorEstado = dadosRegionais || {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    // Calcula o valor total de faturamento
    const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
    
    console.log('='.repeat(50));
    console.log('=== ANÁLISE DE DISTRIBUIÇÃO REGIONAL ===');
    console.log('='.repeat(50));
    console.log(`\nValor total: ${formatarMoedaBRL(valorTotal)}`);
    console.log('\nDetalhamento por região:');
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

// Executa a análise se o script for chamado diretamente
if (require.main === module) {
    // Verifica se há dados passados via parâmetros
    let dadosCustomizados = null;
    if (process.argv[2]) {
        try {
            dadosCustomizados = JSON.parse(process.argv[2]);
        } catch (e) {
            console.error("Formato de dados inválido. Use um objeto JSON válido.");
        }
    }
    analisarDistribuicaoRegional(dadosCustomizados);
}

// Exporta as funções para uso em outros módulos
module.exports = { analisarDistribuicaoRegional, formatarMoedaBRL };
