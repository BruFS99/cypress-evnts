# Instruções

## Clonando o projeto:

<ul>
<li>git clone https://github.com/BruFS99/cypress-evnts.git</li>
<li>cd cypress-evnts</li>
<li>npm i</li>
</ul>

## Configurando:
#### O Cypress vai utilizar a mesma API do projeto Marvel-app para consultar e validar dados, por isso precisará das mesmas chaves API. No projeto Cypress as variáveis de ambientes são configuradas de maneira um pouco diferente. Elas devem ficar no arquivo cypress.env.json, e os dados preenchidos em formato json, assim como no arquivo cypress.env.json.example.</li>

## Executando:
<li>No terminal digite o comando "npx cypress open" e pressione Enter.</li>
<br/>
Aguarde alguns segundos enquanto o Cypress é inicializado.
Após a inicialização, a interface do Cypress deve ser exibida. Nela, você poderá escolher em qual navegador deseja executar as specs e quais testes executar e ver os resultados dos testes em tempo real.
<br/>
<br/>

#### As specs também podem rodar diretamente no terminal:
<li>Digite o comando "npx cypress run" e pressione Enter.</li>
<br/>
Aguarde alguns segundos enquanto o Cypress executa todos os testes.
Após a conclusão dos testes, o Cypress exibirá um relatório de testes no terminal, mostrando quantos testes foram executados, quantos passaram e quantos falharam.

#### Caso queira executar apenas um arquivo de teste específico, use o seguinte comando:
npx cypress run --spec cypress/e2e/HeroDetails.spec.js
