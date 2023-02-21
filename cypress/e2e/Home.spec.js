import { Home } from "../pages/Home"
import generateKeys from "../../utils/generateKeyApi"
import db from '../fixtures/db.json'

describe('Teste automatizado da tela principal', () => {

  const home = new Home();
  const keys = generateKeys();

  const shuffle = array => array[Math.floor(Math.random() * array.length)];


  it('Pesquisa por herói válido', () => {

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go(response);
      home.typeHeroSearch(heroes);
      home.checkCardInformation(heroes);
    })
  })

  it('Pesquisa por herói inválido', () => {

    cy.getHeroesList(keys).then(response => {

      let dcHeroes = (shuffle(db));

      home.go(response);
      home.typeHeroSearch(dcHeroes);
      home.checkEmptyReturn();
    })
  })

  it('Teste função ordenar', () => {

    cy.getHeroesList(keys).then(response => {

      home.go(response);
      home.btnChangeOrder();
      home.btnChangeOrder();

    })
  })

  it('Teste função favoritar e remover favorito', () => {

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go(response);
      home.typeHeroSearch(heroes);
      home.checkCardInformation(heroes);
      home.clickOnFavorite(heroes);
      home.filterFavoriteHeroes();
      home.checkCardInformation(heroes);
      home.clickOnFavorite(heroes);
      home.checkEmptyReturn();

    })
  })

})