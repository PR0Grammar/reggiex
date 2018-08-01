/*
Counts how many times a substring occurs within a string (ACCOUNTS FOR WHITESPACE SEPERATION)

  count('am', 'I am ham Samam am') => 2
*/

function count(subString, string) {
  const re = new RegExp(' ' + subString + ' ', 'g');
  return (string.match(re) || []).length;
}

export default count;
