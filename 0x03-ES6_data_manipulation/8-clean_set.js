export default function cleanSet(set, startString) {
  let returnString = '';

  if (startString == null || startString.length === 0) return returnString;

  for (const str of set) {
    if (str && str.startsWith(startString)) {
      returnString += `${str.slice(startString.length)}-`;
    }
  }

  return returnString.slice(0, returnString.length - 1);
}
