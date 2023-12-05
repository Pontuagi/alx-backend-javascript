export default function cleanSet(set, startString) {
   if (startString === '') {
    return '';
  }

  let valuesStartingWith = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      valuesStartingWith.push(value.slice(startString.length));
    }
  });

  return valuesStartingWith.join('-');
}
