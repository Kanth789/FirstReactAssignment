import { cleanup } from "@testing-library/react"
import Login from "../fixtures/login"


  it('login with empty',()=>{
    cy.visit('http://localhost:3000/login')
    cy.intercept("POST","http://localhost:3000/login",Login("invalid-username"))
    cy.get('#username').type('rahul')
    cy.get('.login-button').click()
    cy.get('.error-message').contains('Username or password is invalid')
  })
  it('login with empty',()=>{
    cy.visit('http://localhost:3000/login')
    cy.intercept("POST","http://localhost:3000/login",Login("invalid-username"))
    cy.get('#password').type('rahul@2021')
    cy.get('.login-button').click()
    cy.get('.error-message').contains('Username or password is invalid')
  })
  it('login with empty',()=>{
    cy.visit('http://localhost:3000/login')
    cy.intercept("POST","http://localhost:3000/login",Login("invalid-username"))
    cy.get('#username').type('rahul1')
    cy.get('#password').type('rahul@2021')
    cy.get('.login-button').click()
    cy.get('.error-message').contains('invalid UserName')
  })
  it('login with empty',()=>{
    cy.visit('http://localhost:3000/login')
    cy.intercept("POST","http://localhost:3000/login",Login("invalid-username"))
    cy.get('#username').type('rahul')
    cy.get('#password').type('rahul@2021')
    cy.get('.login-button').click()
    cy.location('pathname').should('eq','/')
    cy.get('select').select(1).invoke('val').should('eq','te')
    cy.get('select').select(0).invoke('val').should('eq','en')
    cy.get('[data-testid="FindJobs"]').click()
    cy.location('pathname').should('eq','/jobs')
    cy.intercept('GET','/profile',{fixture: 'profileData.json'})
    cy.log('Test')
    cy.intercept('GET','/jobs?employment_type=&minimum_package=&search=',{fixture:'jobsData.json'})
    cy.log('Testss')
    cy.get('select').select(1).invoke('val').should('eq','te')
    cy.get('select').select(0).invoke('val').should('eq','en')
    cy.get('[type="checkbox"]').check('Freelance') 
    cy.get('[type="radio"]').check('30 LPA and above')
    cy.get('.search-input').type('Devops Engineer')
    cy.get('[href="/jobs/f7577c47-643d-41d0-8e59-e6129bb9ff21"] > .card').click()
    cy.intercept('GET','/jobs/f7577c47-643d-41d0-8e59-e6129bb9ff21',{fixture: 'jobItem.json'})
    cy.log('Testss JobItem')
    cy.get('#logOut').click()
   
  })

  

  
  
  




