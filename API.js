describe('API Testing', () => {
    
    Cypress.config('baseUrl', 'https://httpbin.org')
    
    it('GET - read', () => {
        cy.request('/get').then((response) => {
        expect(response).to.have.property('status', 200)
        })
    })

    it('POST - create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST', '/post', item)
        .its('body')
        .its('data')
       // .should('deep.eq', item)
      //  .should('include', {name:'test'})
    })

    it('PUT - update', () => {
        const item = {"name":"test1"}
        cy.request({method:'PUT', url:'/update/1', body:item, failOnStatusCode: false}).its('status').should('eq', 404)
    })
})