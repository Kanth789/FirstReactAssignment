describe('empty spec', () => {
 beforeEach('login to the app',()=>{
  cy.login()
 })
  it('get the deatils',()=>{
  cy.intercept('GET','/profile',{fixture: 'profileData.json'})
  cy.log('Test')
  })

})
