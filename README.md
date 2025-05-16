# Ferramentas de Análise e Utilidades em JavaScript

Este repositório contém um conjunto de ferramentas úteis para diversos propósitos, implementadas em JavaScript.

## Pré-requisitos

- Node.js instalado (versão 12 ou superior)

## Como executar

Para executar cada ferramenta, basta usar o comando `node` seguido do nome do arquivo correspondente à ferramenta.

### Soma Sequencial

```bash
node soma_sequencial.js
```

Esta ferramenta calcula a soma de uma sequência de números consecutivos (por padrão, soma os números de 1 a 13).

### Verificador de Fibonacci

Esta ferramenta analisa números relacionados à sequência de Fibonacci, útil para aplicações matemáticas, criptográficas e de geração de padrões.

#### Recursos da ferramenta:
- Verifica se um número pertence à sequência de Fibonacci
- Gera e exibe a sequência até o valor informado
- Se o número pertence à sequência, informa qual termo ele é
- Interface interativa para entrada do usuário

#### Formas de execução:

1. **Execução interativa** - A ferramenta solicitará que você digite um número:

```bash
node fibonacci_verificador.js
```

2. **Execução com valor específico** - Forneça o número diretamente como argumento:

```bash
node fibonacci_verificador.js 21
```

#### Exemplo de resultado para o número 21:

```
=== VERIFICAÇÃO DE FIBONACCI ===
O número 21 pertence à sequência de Fibonacci.

Sequência de Fibonacci até 21:
0, 1, 1, 2, 3, 5, 8, 13, 21

O número 21 é o 9º termo da sequência de Fibonacci.
```

### Analisador de Faturamento

```bash
node analise_faturamento.js
```

Esta ferramenta de análise financeira processa dados de faturamento diário a partir de diferentes formatos de arquivos:
- JSON: utilizando o arquivo `dados.json`
- XML: utilizando o arquivo `dados (2).xml`

Para cada formato, a ferramenta calcula e exibe métricas importantes:
- O menor valor de faturamento ocorrido em um dia do mês
- O maior valor de faturamento ocorrido em um dia do mês
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal
- Estatísticas adicionais como número de dias com/sem faturamento

A análise ignora dias sem faturamento (valor igual a zero) no cálculo da média, fornecendo uma visão mais precisa do desempenho financeiro.

### Distribuição Regional de Receitas

```bash
node distribuicao_regional.js
```

Esta ferramenta calcula e visualiza a distribuição percentual de receitas por região ou estado, ideal para análises de mercado e relatórios de desempenho regional.

#### Recursos implementados:
- Formatação de valores monetários no padrão brasileiro (R$ X.XXX,XX)
- Apresentação em formato de tabela para melhor visualização
- Documentação completa do código com comentários explicativos
- Exportação de funções para uso em outros módulos

#### Exemplo de saída:

```
==================================================
=== ANÁLISE DE DISTRIBUIÇÃO REGIONAL ===
==================================================

Valor total de faturamento: R$ 180.759,98

Detalhamento por região:
----------------------------------------
| SP         |      R$ 67.836,43 |  37,53% |
| RJ         |      R$ 36.678,66 |  20,29% |
| MG         |      R$ 29.229,88 |  16,17% |
| ES         |      R$ 27.165,48 |  15,03% |
| Outros     |      R$ 19.849,53 |  10,98% |
----------------------------------------
```

### Inversor de Strings

```bash
node inversor_string.js
```

Esta ferramenta de manipulação de texto inverte os caracteres de uma string sem utilizar funções nativas como `reverse`. Útil para transformações de texto, verificações de palíndromos e aplicações que requerem manipulação personalizada de strings.

## Estrutura do Repositório

- `soma_sequencial.js`: Ferramenta para cálculo de soma sequencial de números
- `fibonacci_verificador.js`: Utilitário para análise de números na sequência de Fibonacci
- `dados.json`: Dados de faturamento diário em formato JSON para análise
- `dados (2).xml`: Dados de faturamento diário em formato XML para análise
- `analise_faturamento.js`: Ferramenta de análise e estatísticas de dados financeiros
- `distribuicao_regional.js`: Analisador de distribuição regional de receitas/vendas
- `inversor_string.js`: Utilitário para manipulação e inversão de strings
- `README.md`: Documentação das ferramentas e instruções de uso
