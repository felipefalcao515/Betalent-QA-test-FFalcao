Olá time,

## Requirements
playwright
JS
node.js

**bash
npm install
npx playwright install

Por gentileza rodar os testes pelas tags, vou listar as tags abaixo.

%>Exemplo de como rodar tag smoke: npx playwright test --grep @smoke
@smoke
@login
@products
@cart
@navigation
@negative
@checkout
@api
@auth
@crud
@validation

Comando para abrir relatório após teste, a pasta "test-results" também gera reports de erro caso ocorram.
npx playwright show-report