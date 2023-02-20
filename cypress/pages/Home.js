const mainTitle = '[class="sc-gswNZR CUaRA sc-jSUZER esTqtV"]'

class Home {

  go() {
    cy.visit('/');
    cy.get(mainTitle).should('have.text', 'Explore o universo')
  }

  
}

export { Home }