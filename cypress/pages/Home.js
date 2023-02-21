const mainTitle = '[class="sc-gswNZR CUaRA sc-jSUZER esTqtV"]'
const inputHeroSearch = '[name="heroSearch"]'
const heroesCard = '[class="sc-dmctIk iYYAFs"]'
const amountOfHeroesFound = '[class="sc-dkrFOg hMttpz sc-kMjNwy iYpsLV"]'

class Home {

  go(response) {
    cy.visit('/');
    cy.get(mainTitle).then(($el) => {
      expect($el).to.have.text("Explore o universo")
    });
    cy.get(amountOfHeroesFound).should("have.text",`Encontrados ${response.body.data.total} heróis`);
  }

  typeHeroSearch(data) {
    cy.get(inputHeroSearch).clear().type(data.name);
    cy.get(inputHeroSearch).type('{enter}');
    cy.get(amountOfHeroesFound).should("have.text","Encontrados 1 heróis");
  }

  checkCardInformation(data) {
    cy.get(heroesCard).then(($el) => {
      expect($el).to.have.text(data.name)
    });
  }

}

export { Home }