import CryptoJS from "crypto-js"

function generateKeys() {
  
  const ts = new Date().getTime()

  const publicKey = Cypress.env('PUBLIC_KEY_API');
  const privateKey = Cypress.env('PRIVATE_KEY_API');

  const hash = CryptoJS.MD5(`${ts}${privateKey}${publicKey}`)

  return {
    ts,
    publicKey,
    privateKey,
    hash,
  }
}

export default generateKeys
