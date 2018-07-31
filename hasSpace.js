/*
  Checks if a string contains any whitespace

  hasSpace('ab c5#') => true

  hasSpace('fa4##') => false
*/

function hasSpace(value) {
  return /\s/g.test(value);
}

export default hasSpace;
