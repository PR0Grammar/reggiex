/*
  Returns an array of ending indices of all occurances of a substring within a string (0-based)

    end('foo', 'My foot is not food') => [5,17]

*/

function endIndices(subString, string) {
  let re = RegExp(subString,'g');
  let indices = [];

  while (re.exec(string) !== null) {
    indices.push(re.lastIndex-1);
  }

  return indices;
}

export default endIndices;
