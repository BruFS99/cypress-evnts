import { Home } from "../pages/Home"
import { HeroDetail } from "../pages/HeroDetails";
import generateKeys from "../../utils/generateKeyApi"

describe('Teste automatizado tela de detalhes do herói', () => {

  const home = new Home();
  const details = new HeroDetail();
  const keys = generateKeys();

  const shuffle = array => array[Math.floor(Math.random() * array.length)];

  it('Validação de informações', () => {

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go(response);
      home.typeHeroSearch(heroes);
      details.clickOpenDetails(heroes);
      details.checkNumberComics(heroes);
      details.checkNumberMovies(heroes);
    })

  })

  it('Teste função favoritar e remover favorito pela página de detalhes do herói', () => {

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go(response);
      home.typeHeroSearch(heroes);
      details.clickOpenDetails(heroes);
      details.clickOnFavoriteDetail();
      cy.visit('/');
      home.filterFavoriteHeroes();
      home.checkCardInformation(heroes);
      details.clickOpenDetails(heroes);
      details.clickOnFavoriteDetail();
      cy.visit('/');
      home.filterFavoriteHeroes();
      home.checkEmptyReturn();
    })

  })

  it('Teste função favoritar e remover favorito pela página de detalhes do herói', () => {

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go(response);
      home.typeHeroSearch(heroes);
      details.clickOpenDetails(heroes);
      details.clickOnFavoriteDetail();
      cy.visit('/');
      home.filterFavoriteHeroes();
      home.checkCardInformation(heroes);
      details.clickOpenDetails(heroes);
      details.clickOnFavoriteDetail();
      cy.visit('/');
      home.filterFavoriteHeroes();
      home.checkEmptyReturn();
    })

  })

  //Este teste vai quebrar porque a função de busca pela página de detalhe não funciona
  it('Pesquisa pela barra de busca na página de detalhe do herói', () => {

    cy.getHeroesList(keys).then(response => {

      let heroes = (shuffle(response.body.data.results));

      home.go(response);
      home.typeHeroSearch(heroes);
      details.clickOpenDetails(heroes);
      home.typeHeroSearch(heroes);
      home.checkCardInformation(heroes);
    })
  })
})