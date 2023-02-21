
Cypress.Commands.add('getHeroesList', (params) => {
  cy.request({
    method: 'GET',
    url: 'http://gateway.marvel.com/v1/public/characters',
    qs: {
      ts: params.ts,
      apikey: params.publicKey,
      hash: params.hash,
    },
  })
})
