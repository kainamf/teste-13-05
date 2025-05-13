/**
 * Desafio 2: Sequência de Fibonacci
 * 
 * Este programa verifica se um número pertence à sequência de Fibonacci
 * e exibe os termos da sequência até o número fornecido ou um limite definido.
 */

/**
 * Verifica se um número pertence à sequência de Fibonacci
 * 
 * @param {number} numero - O número a ser verificado
 * @return {boolean} true se o número pertence à sequência, false caso contrário
 */
function verificaFibonacci(numero) {
    // Casos especiais: números negativos não pertencem à sequência
    if (numero < 0) {
        return false;
    }

    // 0 e 1 são os primeiros números da sequência
    if (numero === 0 || numero === 1) {
        return true;
    }

    // Inicializa os dois primeiros números da sequência
    let anterior = 0;
    let atual = 1;

    // Calcula a sequência até encontrar ou ultrapassar o número informado
    while (atual <= numero) {
        if (atual === numero) {
            return true; // Encontrou o número na sequência
        }
        // Avança para os próximos números na sequência
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    
    return false; // O número não pertence à sequência
}

/**
 * Gera a sequência de Fibonacci até um determinado limite
 * 
 * @param {number} limite - Quantidade de números da sequência a serem gerados
 * @return {Array<number>} Array contendo os números da sequência
 */
function gerarSequenciaFibonacci(limite) {
    const fibonacci = [0, 1];
    
    // Gera os próximos números da sequência
    for (let i = 2; i < limite; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    
    return fibonacci;
}

/**
 * Gera a sequência de Fibonacci até o valor máximo especificado
 * 
 * @param {number} valorMaximo - Valor máximo até onde a sequência será calculada
 * @return {Array<number>} Array contendo os números da sequência até o valor especificado
 */
function gerarSequenciaAteValor(valorMaximo) {
    if (valorMaximo < 0) return [];
    
    const fibonacci = [0];
    if (valorMaximo < 1) return fibonacci;
    
    fibonacci.push(1);
    
    let proximo = 1;
    while (proximo <= valorMaximo) {
        proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (proximo <= valorMaximo) {
            fibonacci.push(proximo);
        }
    }
    
    return fibonacci;
}

// Função principal para processar a verificação de Fibonacci
function processarVerificacao(numero) {
    // Converte para número e verifica se é válido
    const num = Number(numero);
    
    if (isNaN(num)) {
        console.log("Por favor, informe um número válido.");
        return;
    }
    
    // Verifica se o número pertence à sequência
    const pertence = verificaFibonacci(num);
    console.log(`\n=== VERIFICAÇÃO DE FIBONACCI ===`);
    console.log(`O número ${num} ${pertence ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
    
    // Exibe a sequência até o valor informado ou um pouco acima
    const limiteExibicao = pertence ? num : Math.max(20, num * 1.5);
    const sequencia = gerarSequenciaAteValor(limiteExibicao);
    
    console.log(`\nSequência de Fibonacci até ${limiteExibicao}:`);
    console.log(sequencia.join(', '));
    
    if (pertence) {
        const posicao = sequencia.indexOf(num) + 1; // +1 para exibir posição a partir de 1
        console.log(`\nO número ${num} é o ${posicao}º termo da sequência de Fibonacci.`);
    }
}

// Verifica se o script está sendo executado diretamente
if (require.main === module) {
    // Verifica se um argumento foi fornecido via linha de comando
    const argNumero = process.argv[2];
    
    if (argNumero) {
        // Executa com o número fornecido via linha de comando
        processarVerificacao(argNumero);
    } else {
        // Pede ao usuário para inserir um número via terminal
        console.log("Digite um número para verificar se pertence à sequência de Fibonacci:");
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question('', (numeroDigitado) => {
            processarVerificacao(numeroDigitado);
            readline.close();
        });
    }
}

// Exporta as funções para uso em outros módulos, se necessário
module.exports = {
    verificaFibonacci,
    gerarSequenciaFibonacci,
    gerarSequenciaAteValor
};