/// <reference types="Cypress" />
describe('Render', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:3000/');
  });

  it('successfylly renders the page header', () => {
    cy.contains('Today');
  });

  it('successfylly type a city', () => {
    cy.get('#search-input').type('berlin').should('have.value', 'berlin');
  });

  it('successfylly type a city and request weather api', () => {
    cy.get('#search-input').type('berlin');
    cy.get('#search-form').submit();
    cy.server();
    cy.route({
      method: 'GET',
      url: `${process.env.OPEN_WEATHER_API_WEATHER}*`,
    });
  });

  it('successfylly type a city and request forecast api', () => {
    cy.get('#search-input').type('london');
    cy.get('#search-form').submit();
    cy.server();
    cy.route({
      method: 'GET',
      url: `${process.env.OPEN_WEATHER_API_FORECAST}*`,
    });
  });

  it('successfylly request bing api', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: `*${process.env.BING_IMAGE_OF_DAY_API}*`,
    });
  });
});
