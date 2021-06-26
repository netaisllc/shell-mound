describe('Menu actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  context('at Desktop widths and orientations', () => {
    const sizes = ['macbook-16', [1024, 768]];

    sizes.forEach((size) => {
      it(`[${size}] It should navigate to all the pages`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.get('[data-cy=menu-icon]').click();

        cy.get('[data-cy=table-link]').click();
        cy.get('[data-cy=table-page]').should('be.visible');
        cy.url().should('contain', '/#/table');

        cy.get('[data-cy=form-link]').click();
        cy.get('[data-cy=form-page]').should('be.visible');
        cy.url().should('contain', '/#/form');

        cy.get('[data-cy=map-link]').click();
        cy.get('[data-cy=map-page]').should('be.visible');
        cy.url().should('contain', '/#/map');

        cy.get('[data-cy=video-link]').click();
        cy.get('[data-cy=video-page]').should('be.visible');
        cy.url().should('contain', '/#/video');

        cy.get('[data-cy=dashboard-link]').click();
        cy.get('[data-cy=dashboard-page]').should('be.visible');
        cy.url().should('contain', '/#/dashboard');

        cy.get('[data-cy=drawer-close-icon]').click();
      });
    });
  });

  context('at Mobile widths', () => {
    const sizes = ['ipad-2', 'iphone-7'];

    sizes.forEach((size) => {
      it(`[${size}] It should navigate to all the pages`, () => {
        cy.viewport(size, 'portrait');

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=scrim]').should('exist');
        cy.get('[data-cy=table-link]').click();
        cy.get('[data-cy=table-page]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=scrim]').should('not.be.visible');
        cy.url().should('contain', '/#/table');

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=scrim]').should('exist');
        cy.get('[data-cy=form-link]').click();
        cy.get('[data-cy=form-page]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=scrim]').should('not.be.visible');
        cy.url().should('contain', '/#/form');

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=scrim]').should('exist');
        cy.get('[data-cy=map-link]').click();
        cy.get('[data-cy=map-page]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=scrim]').should('not.be.visible');
        cy.url().should('contain', '/#/map');

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=scrim]').should('exist');
        cy.get('[data-cy=video-link]').click();
        cy.get('[data-cy=video-page]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=scrim]').should('not.be.visible');
        cy.url().should('contain', '/#/video');

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=scrim]').should('exist');
        cy.get('[data-cy=dashboard-link]').click();
        cy.get('[data-cy=dashboard-page]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=scrim]').should('not.be.visible');
        cy.url().should('contain', '/#/dashboard');
      });
    });
  });
});
