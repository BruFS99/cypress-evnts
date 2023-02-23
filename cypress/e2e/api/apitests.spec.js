import generateKeys from "../../../utils/generateKeyApi"

describe('Teste automatizado para verificação de retorno da API', () => {

  const keys = generateKeys();

  const shuffle = array => array[Math.floor(Math.random() * array.length)];


  it('Validar retorno positivo', () => {

    cy.getHeroesList(keys).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.data.results.length).to.equal(20);
        expect(response.body.data.total).to.equal(1562);
        expect(response.body.status).to.include('Ok');
        expect(shuffle(response.body.data.results)).to.have.nested.property('id');
        expect(shuffle(response.body.data.results)).to.have.nested.property('name');


    })
  })

  it('Validar retorno negativo', () => {

    cy.request({
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/characters',
      failOnStatusCode: false,
    }).then(response => {
        expect(response.status).to.equal(409);
        expect(response.body.code).includes('MissingParameter')
        expect(response.body.message).includes('You must provide a user key.')


    })
  })

})