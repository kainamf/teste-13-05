/**
 * inversor_string.js
 * 
 * Biblioteca de manipulação de strings que oferece funções de inversão
 * e transformação de texto. Útil para processamento de texto, verificação
 * de palíndromos e algoritmos de manipulação de strings.
 */

function inverterString(texto) {
    // Verifica se a entrada é válida
    if (!texto || typeof texto !== 'string') {
        return 'Entrada inválida. Por favor, forneça uma string válida.';
    }
    
    let textoInvertido = '';
    
    // Percorre a string de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    
    return textoInvertido;
}

/**
 * Verifica se uma string é um palíndromo (lê-se igual de trás para frente)
 * @param {string} texto - O texto a ser verificado
 * @return {boolean} true se for palíndromo, false caso contrário
 */
function verificarPalindromo(texto) {
    if (!texto || typeof texto !== 'string') return false;
    
    // Remove espaços e converte para minúsculas para uma comparação justa
    const textoProcessado = texto.toLowerCase().replace(/\s+/g, '');
    const textoInvertido = inverterString(textoProcessado);
    
    return textoProcessado === textoInvertido;
}

// Executa se o script for chamado diretamente
if (require.main === module) {
    // Verifica se foi passado um texto como argumento
    const textoEntrada = process.argv[2] || "Teste de inversão de string";
    
    // Inverte e exibe o resultado
    const textoInvertido = inverterString(textoEntrada);
    const ehPalindromo = verificarPalindromo(textoEntrada);
    
    console.log('=== ANÁLISE DE TEXTO ===');
    console.log(`Texto original: "${textoEntrada}"`);
    console.log(`Texto invertido: "${textoInvertido}"`);
    console.log(`É palíndromo? ${ehPalindromo ? 'Sim' : 'Não'}`);
}

// Exporta funções para uso em outros módulos
module.exports = { inverterString, verificarPalindromo };
