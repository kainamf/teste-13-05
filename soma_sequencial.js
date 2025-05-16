/**
 * soma_sequencial.js
 * 
 * Ferramenta para calcular a soma de uma sequência de números.
 * Útil para cálculos matemáticos e estatísticos.
 */

/**
 * Calcula a soma de uma sequência numérica de 1 até o limite especificado
 * 
 * @param {number} limite - O número limite para a sequência (1 até limite)
 * @return {number} A soma dos números da sequência
 */
function calcularSomaSequencial(limite = 13) {
    let soma = 0;
    
    for (let i = 1; i <= limite; i++) {
        soma += i;
    }
    
    console.log(`Soma dos números de 1 a ${limite}: ${soma}`);
    return soma;
}

// Se executado diretamente, use o argumento da linha de comando ou o padrão
if (require.main === module) {
    const limite = process.argv[2] ? parseInt(process.argv[2]) : 13;
    calcularSomaSequencial(limite);
}

module.exports = calcularSomaSequencial;
