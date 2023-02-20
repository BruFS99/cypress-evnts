const mainTitle = '[class="sc-gswNZR CUaRA sc-jSUZER esTqtV"]'
const inputHeroSearch = '[name="heroSearch"]'

class Home {

  go() {
    cy.visit('/');
    cy.get(mainTitle).then(($el) => {
      expect($el).to.have.text("Explore o universo")
    });
  }

  typeHeroSearch(data) {
    cy.get(inputHeroSearch).clear().type(data.name)
  }

}

export { Home }