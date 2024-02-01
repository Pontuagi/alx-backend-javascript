// Utils module

const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    default:
      throw new Error('Invalid type. Supported types are SUM.');
  }
};

const Utils = {
  calculateNumber,
};

module.exports = Utils;
