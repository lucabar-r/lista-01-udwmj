# Lista 01 - UDWMJ
**Aluno:** Luca Barbosa Rodrigues
**RA:** 1252211620889

## Descrição do Projeto
Repositório criado para a entrega da Lista de Exercícios I da disciplina de Usabilidade, Desenvolvimento Web, Mobile e Jogos (UDWMJ). 

## Funcionalidade do Código
Para cumprir a exigência de integrar algoritmos em **JavaScript, HTML e CSS**, este projeto apresenta um painel web simples que simula o provisionamento de uma infraestrutura em nuvem (instância AWS). O código funciona da seguinte forma:

* **HTML (`index.html`):** Estrutura a interface da aplicação, criando um painel de controle com um botão de execução.
* **CSS (`style.css`):** Aplica um tema escuro (dark mode) inspirado em terminais e painéis de DevOps, garantindo que a página fique centralizada e responsiva.
* **JavaScript (`script.js`):** Contém a lógica principal da aplicação através da função `iniciarInstancia()`. Quando o usuário clica no botão "Executar Deploy", o script valida as variáveis do servidor (como o Sistema Operacional). Utilizando manipulação de DOM (`getElementById`), ele altera dinamicamente o texto e a cor do parágrafo na tela: verde para simular sucesso no provisionamento de uma máquina Linux, ou vermelho caso simule uma falha.