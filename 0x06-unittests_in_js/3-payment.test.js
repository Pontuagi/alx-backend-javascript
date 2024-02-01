// Payment module test module

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Arrange
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Clean up
    calculateNumberSpy.restore();
  });

  it('should log the correct total', () => {
    // Arrange
    const consoleLogStub = sinon.stub(console, 'log');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWithExactly('The total is: 120')).to.be.true;

    // Clean up
    consoleLogStub.restore();
  });
});
