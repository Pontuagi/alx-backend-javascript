export default function divideFunction(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both numerator and denominator must be numbers');
  }

  if (denominator === 0) {
    throw Error('Cannot divide by 0');
  }
  return (numerator / denominator);
}
