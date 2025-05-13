/**
 * Desafio 1: Cálculo da variável SOMA
 * 
 * int INDICE = 13, SOMA = 0, K = 0;
 * Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
 * Imprimir(SOMA);
 */

function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;
    
    while(K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    
    console.log(`O valor final da variável SOMA é: ${SOMA}`);
    return SOMA;
}

// Executa a função
calcularSoma();

// Explicação: este algoritmo soma todos os números de 1 a 13 (1+2+3+...+13), resultando em 91
