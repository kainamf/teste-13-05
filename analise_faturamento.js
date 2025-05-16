/**
 * analise_faturamento.js
 * 
 * Ferramenta de análise de dados financeiros com suporte a diferentes formatos.
 * 
 * Funcionalidades:
 * - Detecção de valores mínimos e máximos de faturamento
 * - Cálculo de médias e identificação de dias acima da média
 * - Visualização de tendências e padrões de faturamento
 * 
 * Suporta múltiplos formatos de entrada:
 * - JSON: dados.json
 * - XML: dados (2).xml
 */

const fs = require('fs');

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
 * Extrai dados de um arquivo XML contendo faturamento diário
 * @param {string} caminhoArquivo - Caminho do arquivo XML
 * @return {Array} - Array de objetos {dia, valor}
 */
function extrairDadosXML(caminhoArquivo) {
    try {
        const conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
        const dados = [];
        
        // Extração simples usando expressões regulares para os elementos "dia" e "valor"
        const linhas = conteudo.split('<row>');
        
        for (let i = 1; i < linhas.length; i++) {
            const linha = linhas[i];
            
            // Extrai o dia
            const diaMatch = linha.match(/<dia>(\d+)<\/dia>/);
            // Extrai o valor
            const valorMatch = linha.match(/<valor>([0-9.]+)<\/valor>/);
            
            if (diaMatch && valorMatch) {
                const dia = parseInt(diaMatch[1], 10);
                const valor = parseFloat(valorMatch[1]);
                
                dados.push({ dia, valor });
            }
        }
        
        return dados;
    } catch (erro) {
        console.error(`Erro ao processar o arquivo XML ${caminhoArquivo}:`, erro.message);
        return [];
    }
}

/**
 * Extrai dados de um arquivo JSON contendo faturamento diário
 * @param {string} caminhoArquivo - Caminho do arquivo JSON
 * @return {Array} - Array de objetos {dia, valor}
 */
function extrairDadosJSON(caminhoArquivo) {
    try {
        const conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
        return JSON.parse(conteudo);
    } catch (erro) {
        console.error(`Erro ao processar o arquivo JSON ${caminhoArquivo}:`, erro.message);
        return [];
    }
}

/**
 * Calcula estatísticas de faturamento baseado em um array de dados
 * @param {Array} dados - Array de objetos com {dia, valor}
 * @return {Object} - Objeto com as estatísticas calculadas
 */
function calcularEstatisticas(dados) {
    // Filtra dias com faturamento (valor > 0)
    const diasComFaturamento = dados.filter(dia => dia.valor > 0);
    
    if (diasComFaturamento.length === 0) {
        return {
            menorFaturamento: 0,
            maiorFaturamento: 0,
            mediaMensal: 0,
            diasAcimaMedia: 0
        };
    }
    
    // Encontra o menor valor de faturamento (apenas em dias com faturamento)
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    
    // Encontra o maior valor de faturamento
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    
    // Calcula a média mensal (ignorando dias sem faturamento)
    const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    
    // Conta dias com faturamento superior à média
    const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
    
    return {
        menorFaturamento,
        maiorFaturamento,
        mediaMensal,
        diasAcimaMedia,
        totalDias: dados.length,
        diasComFaturamento: diasComFaturamento.length
    };
}

/**
 * Analisa o faturamento com base no formato de arquivo especificado
 * @param {string} formato - Formato do arquivo ('json' ou 'xml')
 */
function analisarFaturamento(formato = 'json') {
    let dados = [];
    let tipoArquivo = '';
    
    // Carrega os dados do formato especificado
    if (formato.toLowerCase() === 'json') {
        dados = extrairDadosJSON('dados.json');
        tipoArquivo = 'JSON';
    } else if (formato.toLowerCase() === 'xml') {
        dados = extrairDadosXML('dados (2).xml');
        tipoArquivo = 'XML';
    } else {
        console.error('Formato inválido. Use "json" ou "xml".');
        return;
    }
    
    // Verifica se foi possível carregar os dados
    if (!dados || dados.length === 0) {
        console.error(`Não foi possível carregar dados do arquivo ${tipoArquivo}.`);
        return;
    }
    
    // Calcula as estatísticas
    const estatisticas = calcularEstatisticas(dados);
    
    // Exibe os resultados
    console.log('='.repeat(50));
    console.log(`=== ANÁLISE DE FATURAMENTO MENSAL (${tipoArquivo}) ===`);
    console.log('='.repeat(50));
    console.log(`\nDados extraídos do arquivo: ${formato === 'json' ? 'dados.json' : 'dados (2).xml'}`);
    console.log(`Total de dias no período: ${estatisticas.totalDias}`);
    console.log(`Dias com faturamento: ${estatisticas.diasComFaturamento}`);
    console.log(`Dias sem faturamento: ${estatisticas.totalDias - estatisticas.diasComFaturamento}`);
    console.log('\nEstatísticas de faturamento:');
    console.log('-'.repeat(40));
    console.log(`Menor valor de faturamento: ${formatarMoedaBRL(estatisticas.menorFaturamento)}`);
    console.log(`Maior valor de faturamento: ${formatarMoedaBRL(estatisticas.maiorFaturamento)}`);
    console.log(`Média mensal (excluindo dias sem faturamento): ${formatarMoedaBRL(estatisticas.mediaMensal)}`);
    console.log(`Número de dias com faturamento acima da média: ${estatisticas.diasAcimaMedia}`);
    
    return estatisticas;
}

// Executa a análise para JSON e XML quando o script é executado diretamente
if (require.main === module) {
    console.log("\n*** ANÁLISE DOS DADOS EM FORMATO JSON ***\n");
    analisarFaturamento('json');
    
    console.log("\n\n*** ANÁLISE DOS DADOS EM FORMATO XML ***\n");
    analisarFaturamento('xml');
}

// Exporta as funções para uso em outros módulos
module.exports = {
    analisarFaturamento,
    extrairDadosJSON,
    extrairDadosXML,
    calcularEstatisticas
};
