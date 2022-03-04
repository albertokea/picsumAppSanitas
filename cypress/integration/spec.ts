describe('Main', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Picsum App Sanitas');
  });

  it('Should have at least one of the pictures that must be shown', () => {
    cy.intercept('GET', '/', {
      fixture: 'picture.json',
    });
    cy.get('h4');
  });

  it('Should have 4000 pictures', () => {
    cy.get('.picture-container').find('.picture').should('have.length', 4000);
  });

  it('Should search a picture succesfully', () => {
    cy.get('[placeholder="Buscar foto..."]').type('escamilla');
    cy.contains('Escamilla');
  });
});
