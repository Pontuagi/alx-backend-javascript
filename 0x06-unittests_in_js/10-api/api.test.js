const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  before((done) => {
    app.listen(7865, () => {
      console.log('API available on localhost port 7865');
      done();
    });
  });

  after((done) => {
    app.close(() => {
      console.log('API closed');
      done();
    });
  });

  it('correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

   describe('Cart page', () => {
    it('correct status code when :id is a number', (done) => {
      const cartId = 123; // Replace with the actual cart ID
      request.get(`http://localhost:7865/cart/${cartId}`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    it('correct status code when :id is NOT a number (=> 404)', (done) => {
      const invalidCartId = 'invalid'; // Replace with an invalid cart ID
      request.get(`http://localhost:7865/cart/${invalidCartId}`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
   });

  // New test suite for the /available_payments endpoint
  describe('Available Payments', () => {
    it('correct result', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const result = JSON.parse(body);
        expect(result).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  // New test suite for the /login endpoint
  describe('Login endpoint', () => {
    it('correct result', (done) => {
      const username = 'JohnDoe'; // Replace with the desired username
      request.post({
        url: 'http://localhost:7865/login',
        json: { userName: username }
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${username}`);
        done();
      });
    });
  });
});
