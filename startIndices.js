/*
  Returns an array of starting indices of all occurances of a substring within a string (0-based)

    startIndices('foo', 'My foot is not food') => [3,15]

*/

function startIndices(subString, string) {
  let re = RegExp(subString,'g');
  let reExec = [];
  let indices = [];

  while ((reExec = re.exec(string)) !== null) {
    indices.push(reExec.index);
  }

  return indices;
}

export default startIndices;
