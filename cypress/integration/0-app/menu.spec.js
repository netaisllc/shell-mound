describe('Menu actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  context('at Desktop widths and orientations', () => {
    const sizes = ['macbook-16', [1024, 768]];

    sizes.forEach((size) => {
      it(`[${size}] It starts with menu closed`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.get('[data-cy=menu-icon]').should('be.visible');
        cy.get('[data-cy=drawer]').should('not.be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.exist');
      });

      it(`[${size}] It should open the drawer menu`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=drawer]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.exist');
      });

      it(`[${size}] It should close the drawer menu`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=drawer-close-icon]').click();
        cy.get('[data-cy=drawer]').should('not.be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.exist');
      });
    });
  });

  context('at Mobile widths', () => {
    const sizes = ['ipad-2', 'iphone-7'];

    sizes.forEach((size) => {
      it(`[${size}] It starts with menu closed`, () => {
        cy.viewport(size, 'portrait');
        cy.get('[data-cy=menu-icon]').should('be.visible');
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=drawer]').should('not.exist');
      });

      it(`[${size}] It should open the mobile menu`, () => {
        cy.viewport(size, 'portrait');
        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=mobile-menu]').should('be.visible');
        cy.get('[data-cy=drawer]').should('not.exist');
      });

      it(`[${size}] It should close the mobile menu`, () => {
        cy.viewport(size, 'portrait');
        cy.get('[data-cy=menu-icon]').click();
        cy.get('[data-cy=mobile-menu-close-icon]').click();
        cy.get('[data-cy=mobile-menu]').should('not.be.visible');
        cy.get('[data-cy=drawer]').should('not.exist');
      });
    });
  });
});
