const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  before(() => {
    // Start the server
    app.listen(7865);
  });

  it('correct status code', (done) => {
    request.get(baseUrl, (error, response, body) => {
      // Assert
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      // Assert
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after(() => {
    // Close the server
    app.close();
  });
});
