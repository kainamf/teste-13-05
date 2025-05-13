/**
 * Desafio 3: Análise de Faturamento Diário
 * 
 * Calcula estatísticas sobre o faturamento mensal:
 * - O menor valor de faturamento ocorrido em um dia do mês
 * - O maior valor de faturamento ocorrido em um dia do mês
 * - Número de dias no mês em que o valor de faturamento diário foi superior à média mensal
 */

const fs = require('fs');

function analisarFaturamento() {
    try {
        // Lê o arquivo JSON com os dados de faturamento
        const dados = fs.readFileSync('faturamento.json', 'utf8');
        const dadosFaturamento = JSON.parse(dados);
        const faturamentoDiario = dadosFaturamento.faturamentoDiario;
        
        // Filtra dias com faturamento (valor > 0)
        const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
        
        // Encontra o menor valor de faturamento (apenas em dias com faturamento)
        const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
        
        // Encontra o maior valor de faturamento
        const maiorFaturamento = Math.max(...faturamentoDiario.map(dia => dia.valor));
        
        // Calcula a média mensal (ignorando dias sem faturamento)
        const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;
        
        // Conta dias com faturamento superior à média
        const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
        
        // Exibe os resultados
        console.log('=== ANÁLISE DE FATURAMENTO MENSAL ===');
        console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
        console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
        console.log(`Média mensal de faturamento (excluindo dias sem faturamento): R$ ${mediaMensal.toFixed(2)}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
        
        return {
            menorFaturamento,
            maiorFaturamento,
            diasAcimaMedia
        };
        
    } catch (erro) {
        console.error('Erro ao processar o arquivo de faturamento:', erro.message);
    }
}

// Executa a análise
analisarFaturamento();
