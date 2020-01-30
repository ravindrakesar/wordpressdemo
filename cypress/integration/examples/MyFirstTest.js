
describe('My Test Suite', function() {

    it('Launch and verify the title of the wordpress page', function() {
        cy.visit('https://wordpress.com/log-in')
        cy.title().should('eq','Log In — WordPress.com')
        cy.wait(25000)
      })

      it('Login to wordpress using username and password', function() {
        cy.get("#usernameOrEmail").type("ravindrakesar")
        cy.get("[type='submit']").click()
        cy.wait(3000)
        cy.get("#password").type("Shonu2014")
        cy.get("[type='submit']").click()
        cy.wait(25000)
      })

      it('Start creating a blog', function() {
        //Click Write button to start creating a blog
        cy.get("#header > div.masterbar__publish > a > span").click()
        cy.wait(35000)
      })
  

      it('Add title and descroption to the blog', function() {
        //Add a title to the blog
        cy.get("#post-title-0").type("Test")
        //Add description of the blog
        cy.get("[role='textbox']").type("TestOne")
      })
  
  })