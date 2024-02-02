// 9 api test module

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
});
