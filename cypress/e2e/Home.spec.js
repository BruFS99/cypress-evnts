import { cyan } from "colorette"
import { Home } from "../pages/Home"
import generateKeys from "../../utils/generateKeyApi"

describe('Teste automatizado da tela principal', () => {

  const home = new Home()
  const dadosapi = generateKeys()

  it('Pesquisa por herói válido', () => {
    home.go()

    cy.getHeroes(dadosapi)
  })
})