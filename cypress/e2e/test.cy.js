/// <reference types= "cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })
describe('Aspire test cases ', () => {
  it('randomly enter the website arabic or english ', () => {
    let Website =['https://global.almosafer.com/ar','https://global.almosafer.com/en']

    let RandomIndex = Math.floor(Math.random()*Website.length)
    cy.visit(Website[RandomIndex])

     let ArabicCities=["جدة","دبي"]
     let ArabicRandomIndex =Math.floor(Math.random()*ArabicCities.length)
     let englishCities =["riyadh","dubai","jeddah"]
     let EnglishRandoomIndex=Math.floor(Math.random()*englishCities.length)

    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()

    if (RandomIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type(ArabicCities[ArabicRandomIndex])

    } else {
      cy.get('[data-testid="AutoCompleteInput"]').type(englishCities[EnglishRandoomIndex])
    }

     
  })
})