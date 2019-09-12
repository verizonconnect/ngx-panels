/// <reference types="Cypress" />

context('Actions', () => {
  function openPanel() {
    cy.get('.app-root__button')
      .first()
      .click();
  }

  function openStackedPanel() {
    openPanel();
    cy.get('.ngx-panel-body__content button')
      .first()
      .click();
  }

  beforeEach(() => {
    cy.visit('http://localhost:4300');
  });

  it('Should open the panel with the right robot name', () => {
    openPanel();
    cy.get('.ngx-panel-body__content .name').should('have.text', 'Ufo Robot');
  });

  it('Should open a stacked panel', () => {
    openStackedPanel();

    cy.get('.ngx-panel__main')
      .last()
      .should('be.visible');

    cy.get('.ngx-panel-header__content')
      .last()
      .should('have.text', 'Ufo Robot');
  });

  it('should close a stacked panel and its container', () => {
    openStackedPanel();

    cy.get('.ngx-panel-footer__main button')
      .last()
      .click();

    cy.wait(300)
      .get('.ngx-panel-footer__main .button')
      .first()
      .click();

    cy.get('.ngx-panel__main').should('not.be.visible');
  });
});
