/*
  Checks if a string contains at least one digit

  /\d+/g.test('#2')

*/

function hasNumber(value) {
  return /\d+/g.test(value);
}

export default hasNumber;
