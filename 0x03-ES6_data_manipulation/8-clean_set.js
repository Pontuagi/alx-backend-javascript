export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const valuesStartingWith = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      valuesStartingWith.push(value.slice(startString.length));
    }
  });

  return valuesStartingWith.join('-');
}
