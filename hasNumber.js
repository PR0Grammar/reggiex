/*
  Checks if a string contains at least one digit

  hasNumber('#2') => true

*/

function hasNumber(value) {
  return /\d+/g.test(value);
}

export default hasNumber;
