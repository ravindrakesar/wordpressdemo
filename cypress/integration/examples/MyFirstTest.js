
describe('My Test Suite', function() {
    it('Verify the title of the page-positive', function() {
      cy.visit('https://wordpress.com/log-in')
      cy.title().should('eq','Log In — WordPress.com')
      cy.get("#usernameOrEmail").type("ravindrakesar")
      cy.get("[type='submit']").click()
      cy.wait(3000)
      cy.get("#password").type("*********")
      cy.get("[type='submit']").click()
      cy.wait(8000)
      cy.get("#header > div.masterbar__publish > a > span").click()
      cy.wait(22000)
      cy.get(".editor-post-title__input").type("MyFirstBlogOnWordPress")
      cy.get("[role='textbox']").type("It feels good to write a blog")


      

    })
  
  })
