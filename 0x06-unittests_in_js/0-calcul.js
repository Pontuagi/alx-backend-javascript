// calculateNumber module

function calculateNumber(a, b) {
  const roundedA = a >= 0 ? Math.round(a) : Math.floor(a);
  const roundedB = b >= 0 ? Math.round(b) : Math.floor(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
