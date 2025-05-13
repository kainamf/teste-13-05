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

calcularSoma();

// Explicação: este algoritmo soma todos os números de 1 a 13 (1+2+3+...+13), resultando em 91
