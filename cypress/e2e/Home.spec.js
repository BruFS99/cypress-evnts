import { Home } from "../pages/Home"

describe('Teste automatizado da tela principal', () => {

  const home = new Home()

  it('Pesquisa por herói válido', () => {
    home.go()
  })
})