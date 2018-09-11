describe('Spain Locations weather', () => {
  it('Navigates to weather page for selected location', () => {
    cy.visit('/')
    cy.get('.Select-placeholder').click()
    cy.get('input').type('Comunitat Valenciana{enter}', {force: true})
    cy.get('button').click()
    cy.url().should('include', 'locationWeather/2593113')
  })

  it('Shows weater information for concrete location', () => {
    cy.visit('/locationWeather/2593113')

    cy.get('ul').contains('The weather is:')
    cy.get('#mainTemp').should($mainTemp => {
      expect($mainTemp.text()).to.greaterThan(0)
    })

    cy.get('#minTemp').should($minTemp => {
      expect($minTemp.text()).to.greaterThan(0)
    })

    cy.get('#maxTemp').should($maxTemp => {
      expect($maxTemp.text()).to.greaterThan(0)
    })

    cy.get('#pressure').should($pressure => {
      expect($pressure.text()).to.greaterThan(0)
    })

    cy.get('#humidity').should($humidity => {
      expect($humidity.text()).to.greaterThan(0)
    })
  })
})
