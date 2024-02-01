// Payment token test module

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a success message when success is true', (done) => {
    // Act
    getPaymentTokenFromAPI(true).then((result) => {
      // Assert
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  });

  it('should resolve with no value when success is false', (done) => {
    // Act
    getPaymentTokenFromAPI(false).then((result) => {
      // Assert
      expect(result).to.be.undefined;
      done();
    }).catch(done);
  });
});
