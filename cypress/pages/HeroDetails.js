const heroesCard = '[class="sc-dmctIk iYYAFs"]'
const heroTitle = '[class="sc-gswNZR CUaRA sc-AHaJN bhuPmH"]'
const numberViews = '[class="sc-gswNZR CUaRA sc-iTFTee dSfDVg"]'
const favoriteButton = '[class="sc-hBxehG gAqrlK"]'

class HeroDetail {

  //Clica no card para abrir os detalhes, e verifica o nome do herói
  clickOpenDetails(data) {
    cy.contains(heroesCard, data.name).click();
    cy.get(heroTitle).then(($el) => {
      expect($el).to.have.text(data.name)
    });
  }

  //Verifica se o número de quadrinhos esta de acordo com o retorno da API
  checkNumberComics(data) {
    cy.contains(numberViews, 'Quadrinhos').siblings().then(($el) => {
      expect($el).to.have.text(data.comics.available)
    });
  }

  //Verifica se o número de filmes esta de acordo com o retorno da API
  checkNumberMovies(data) {
    cy.contains(numberViews, 'Filmes').siblings().then(($el) => {
      expect($el).to.have.text(data.series.available)
    });
  }

  //Clica no botão favoritar herói na página de detalhe do herói
  clickOnFavoriteDetail() {
    cy.get(favoriteButton).click();
  }
}

export { HeroDetail }