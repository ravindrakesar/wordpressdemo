
describe('Wordpress Blog Creation Test Suite', function() {
    it('launch and verify the title of wordpress page', function() {
      cy.visit('https://wordpress.com/log-in')
      cy.title().should('eq','Log In — WordPress.com')
      cy.wait(3000)
    })

    it('Login to wordpress website', function() {
      cy.get("#usernameOrEmail").type("ravindrakesar")
      cy.get("[type='submit']").click()
      cy.wait(3000)
      cy.get("#password").type("Shonu2014")
      cy.get("[type='submit']").click()
      cy.wait(10000)
    })

    it('Start creating a blog', function() {
      cy.get("#header > div.masterbar__publish > a > span").click()
      cy.wait(30000)
    })

    it('Add page title and desciption', function() {
      cy.get("#post-title-0").type("MyFirstBlogOnWordPress")
      cy.wait(10000)
      //cy.get("[placeholder='Add title']").type("MyFirstBlogOnWordPress")
      //cy.wait(10000)
      //cy.get(".editor-post-title__input").type("MyFirstBlogOnWordPress")
      //cy.wait(10000)
      cy.get("[role='textbox']").type("It feels good to write a blog")
      cy.wait(22000)
    })


  
  })