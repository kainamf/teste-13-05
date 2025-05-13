/**
 * Desafio 5: Inversão de String
 * 
 * Inverte os caracteres de uma string sem utilizar funções prontas como reverse
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

// Texto a ser invertido (pode ser alterado para qualquer string)
const textoOriginal = "Teste de inversão de string";

// Inverte e exibe o resultado
const textoInvertido = inverterString(textoOriginal);
console.log('=== INVERSÃO DE STRING ===');
console.log(`Texto original: "${textoOriginal}"`);
console.log(`Texto invertido: "${textoInvertido}"`);
