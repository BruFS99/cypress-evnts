import { Home } from "../pages/Home"
import generateKeys from "../../utils/generateKeyApi"

describe('Teste automatizado da tela principal', () => {

  const home = new Home();
  const keys = generateKeys();

  it('Pesquisa por herói válido', () => {

    const shuffle = array => array[Math.floor(Math.random() * array.length)];

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go();
      home.typeHeroSearch(heroes);

    })
  })
})