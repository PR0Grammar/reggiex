/*
  Counts how many times a substring occurs within a string (DOESN'T ACCOUNT FOR WHITESPACE SEPERATION)

  strictCount('am', 'I am ham Samam') => 4
*/

function strictCount(subString, string) {
  const re = new RegExp(subString, 'g');
  return (string.match(re) || []).length;
}

export default strictCount;
