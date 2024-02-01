// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 2.4, 3.5)).to.equal(6);
    });

    it('should return the sum of rounded zero values', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should round and sum large positive numbers', () => {
      expect(calculateNumber('SUM', 1000000.4, 999999.5)).to.equal(2000000);
    });

    it('should handle decimal rounding for positive numbers', () => {
      expect(calculateNumber('SUM', 1.1, 1.2)).to.equal(2);
    });

    it('should handle decimal rounding for negative numbers', () => {
      expect(calculateNumber('SUM', -1.1, -1.2)).to.equal(-2);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.4)).to.equal(3);
    });

    it('should return the subtraction of rounded negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5.5, -3.4)).to.equal(-2);
    });

    it('should return zero for the subtraction of equal rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 4.5)).to.equal(0);
    });

    it('should return a positive result for subtracting a negative from a positive', () => {
      expect(calculateNumber('SUBTRACT', 8.5, -2.5)).to.equal(11);
    });

    it('should return a negative result for subtracting a positive from a negative', () => {
      expect(calculateNumber('SUBTRACT', -8.5, 2.5)).to.equal(-11);
    });

    it('should handle decimal rounding for positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 1.1)).to.equal(1);
    });

    it('should handle decimal rounding for negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.2, -1.1)).to.equal(-1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8.4, 2)).to.equal(4);
    });

    it('should handle division by zero and return "Error"', () => {
      expect(calculateNumber('DIVIDE', 5.6, 0)).to.equal('Error');
    });

    it('should return the division of rounded negative numbers', () => {
      expect(calculateNumber('DIVIDE', -8.4, -2)).to.equal(4);
    });

    it('should handle decimal rounding for positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.5, 1.5)).to.equal(1.5);
    });

    it('should handle decimal rounding for negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.5, -1.5)).to.equal(2);
    });

    it('should handle division of zero by a positive number', () => {
      expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
    });

    it('should handle division of zero by a negative number', () => {
      expect(calculateNumber('DIVIDE', 0, -5)).to.equal(-0);
    });
  });

  describe('General test cases', () => {
    it('should throw an error for an invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw('Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.');
    });

    it('should throw an error for missing type argument', () => {
      expect(() => calculateNumber(5, 2, 3)).to.throw('Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.');
    });
    it('should throw an error for missing all arguments', () => {
      expect(() => calculateNumber()).to.throw('Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.');
    });
  });
});
