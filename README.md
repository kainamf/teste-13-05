# Desafios de Código em JavaScript

Este repositório contém a solução para os cinco desafios propostos, implementados em JavaScript.

## Pré-requisitos

- Node.js instalado (versão 12 ou superior)

## Como executar

Para executar cada desafio, basta usar o comando `node` seguido do nome do arquivo correspondente ao desafio.

### Desafio 1: Cálculo da Variável SOMA

```bash
node desafio1.js
```

Este programa calcula o valor final da variável SOMA após o processamento do algoritmo fornecido (soma dos números de 1 a 13).

### Desafio 2: Sequência de Fibonacci

O programa verifica se um número pertence à sequência de Fibonacci e exibe informações detalhadas sobre a sequência.

#### Recursos do programa:
- Verifica se um número pertence à sequência de Fibonacci
- Gera e exibe a sequência até o valor informado
- Se o número pertence à sequência, informa qual termo ele é
- Interface interativa para entrada do usuário

#### Formas de execução:

1. **Execução interativa** - O programa solicitará que você digite um número:

```bash
node desafio2.js
```

2. **Execução com valor específico** - Forneça o número diretamente como argumento:

```bash
node desafio2.js 21
```

#### Exemplo de resultado para o número 21:

```
=== VERIFICAÇÃO DE FIBONACCI ===
O número 21 pertence à sequência de Fibonacci.

Sequência de Fibonacci até 21:
0, 1, 1, 2, 3, 5, 8, 13, 21

O número 21 é o 9º termo da sequência de Fibonacci.
```

### Desafio 3: Análise de Faturamento Diário

```bash
node desafio3.js
```

Este programa analisa os dados de faturamento diário contidos no arquivo `faturamento.json` e retorna:
- O menor valor de faturamento ocorrido em um dia do mês
- O maior valor de faturamento ocorrido em um dia do mês
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal

### Desafio 4: Percentual de Representação por Estado

```bash
node desafio4.js
```

Este programa calcula o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

#### Melhorias implementadas:
- Formatação de valores monetários no padrão brasileiro (R$ X.XXX,XX)
- Apresentação em formato de tabela para melhor visualização
- Documentação completa do código com comentários explicativos
- Exportação de funções para uso em outros módulos

#### Exemplo de saída:

```
==================================================
=== PERCENTUAL DE REPRESENTAÇÃO POR ESTADO ===
==================================================

Valor total de faturamento: R$ 180.759,98

Detalhamento por estado:
----------------------------------------
| SP         |      R$ 67.836,43 |  37,53% |
| RJ         |      R$ 36.678,66 |  20,29% |
| MG         |      R$ 29.229,88 |  16,17% |
| ES         |      R$ 27.165,48 |  15,03% |
| Outros     |      R$ 19.849,53 |  10,98% |
----------------------------------------
```

### Desafio 5: Inversão de String

```bash
node desafio5.js
```

Este programa inverte os caracteres de uma string sem utilizar funções prontas como `reverse`. A string pode ser alterada diretamente no código ou descomentando o código para entrada do usuário.

## Estrutura do Repositório

- `desafio1.js`: Solução para o desafio 1 (cálculo da variável SOMA)
- `desafio2.js`: Solução para o desafio 2 (sequência de Fibonacci)
- `faturamento.json`: Dados de faturamento diário para o desafio 3
- `desafio3.js`: Solução para o desafio 3 (análise de faturamento)
- `desafio4.js`: Solução para o desafio 4 (percentual por estado)
- `desafio5.js`: Solução para o desafio 5 (inversão de string)
- `README.md`: Este arquivo com instruções
