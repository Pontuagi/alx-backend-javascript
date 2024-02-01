// 1-calculateNumber test module

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.5), 6);
    });

    it('should return the sum of rounded zero values', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should round and sum large positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1000000.4, 999999.5), 2000000);
    });

    it('should handle decimal rounding for positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.1, 1.2), 2);
    });

    it('should handle decimal rounding for negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.1, -1.2), -2);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.4), 3);
    });
    it('should return the subtraction of rounded negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.5, -3.4), -2);
    });

    it('should return zero for the subtraction of equal rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 4.5), 0);
    });

    it('should return a positive result for subtracting a negative from a positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 8.5, -2.5), 11);
    });

    it('should return a negative result for subtracting a positive from a negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -8.5, 2.5), -11);
    });

    it('should handle decimal rounding for positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 1.1), 1);
    });

    it('should handle decimal rounding for negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.2, -1.1), -1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2), 4);
    });

    it('should handle division by zero and return "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.6, 0), 'Error');
    });
    it('should return the division of rounded negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.4, -2), 4);
    });

    it('should handle decimal rounding for positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 1.5), 1.5);
    });

    it('should handle decimal rounding for negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.5, -1.5), 2);
    });

    it('should handle division of zero by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
    });

    it('should handle division of zero by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, -5), -0);
    });
  });

  describe('General test cases', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), { message: 'Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.' });
    });

    it('should throw an error for missing type argument', () => {
      assert.throws(() => calculateNumber(5, 2, 3), { message: 'Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.' });
    });

    it('should throw an error for missing all arguments', () => {
      assert.throws(() => calculateNumber(), { message: 'Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.' });
    });
  });
});
