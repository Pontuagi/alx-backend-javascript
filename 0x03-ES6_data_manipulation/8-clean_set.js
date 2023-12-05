export default function cleanSet(set, startString) {
  if (startString.trim() === '') {
    return '';
  }

  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  if (startString === '') {
    return Array.from(set).join('-');
  }

  return filteredValues.join('-');
}
