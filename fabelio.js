describe('Fabelio Technical Test', () => {

    it('Navigate to fabelio site', () => {
        cy.visit('http://qa.fabelio.com')
    })

    it('Search Product', () => {
        cy.get('.jss30 > .jss49').click()
        cy.get('.MuiInputBase-input').type("Cessi")
        cy.get(':nth-child(1) > a > .jss29 > .simple-img > [style="width: 100%; visibility: visible;"]').click()
        cy.wait(5000)
        cy.get('#addToCart').click()
        cy.screenshot()
    })

   
})