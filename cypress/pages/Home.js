const mainTitle = '[class="sc-gswNZR CUaRA sc-jSUZER esTqtV"]'
const inputHeroSearch = '[name="heroSearch"]'
const heroesCard = '[class="sc-dmctIk iYYAFs"]'
const amountOfHeroesFound = '[class="sc-dkrFOg hMttpz sc-kMjNwy iYpsLV"]'
const emptyReturnMessage = '[class="sc-hHTYSt jZvzgQ"]'
const switchOrder = '[class="sc-bjfHbI kYIzzT"]'
const favoriteButton = '[class="sc-hBxehG gAqrlK"]'
const favoritesFilter = '[class="sc-dIfARi heNqqT"]'
const imgSwitchOrder = '[class="sc-kDvujY jxMCeG sc-idXgbr fFhfgI"]'

class Home {

  //Vai para a pagina de login e verifica o titulo principal
  go(response) {
    cy.visit('/');
    cy.get(mainTitle).then(($el) => {
      expect($el).to.have.text("Explore o universo")
    });
    cy.get(amountOfHeroesFound).should("have.text", `Encontrados ${response.body.data.total} heróis`);
  }

  //Digita um nome na barra de pesquisa e clica Enter
  typeHeroSearch(data) {
    cy.get(inputHeroSearch).clear().type(data.name);
    cy.get(inputHeroSearch).type('{enter}');
  }

  //Check usado apenas em pesquisas válidas
  checkCardInformation(data) {
    cy.wait(1000);
    cy.contains(heroesCard, data.name).then(($el) => {
      expect($el).to.have.text(data.name)
    });
  }

  //Check usado apenas em pesquisas inválidas
  checkEmptyReturn() {
    cy.get(amountOfHeroesFound).should("have.text", "Encontrados 0 heróis");
    cy.get(emptyReturnMessage).then(($el) => {
      expect($el).to.have.text("Não achamos nenhum herói para os valores definidos")
    });
  }

  //Clica no botão favoritar herói
  clickOnFavorite(data) {
    cy.contains(heroesCard, data.name).find(favoriteButton).click();
  }

  //Limpa os dados da pesquisa e clica no botão filtrar Somente favoritos.
  filterFavoriteHeroes() {
    cy.get(inputHeroSearch).clear().type('{enter}');
    cy.get(amountOfHeroesFound).should("have.text", 'Encontrados 1562 heróis');
    cy.get(favoritesFilter).click();

  }

  //Verifica a ordenação pelo src da imagem. Se for A-Z, verifica o nome do primeiro herói. Se for Z-A, verifica se o último herói da lista está em primeiro.
  btnChangeOrder() {
    cy.get(switchOrder).click();
    cy.wait(1000);

    cy.get(imgSwitchOrder)
      .should("have.attr", 'src')
      .then((src) => {
        cy.log(src);
        if (src == '/static/media/toggle_on.1ba6e2047738122563913c11a00731b6.svg') {
          cy.get(heroesCard).first().then(($el) => {
            expect($el).to.have.text("3-D Man")
          });

        } else {
          cy.get(heroesCard).first().then(($el) => {
            expect($el).to.have.text("Zzzax")
          });
        }
      });
  }

}

export { Home }