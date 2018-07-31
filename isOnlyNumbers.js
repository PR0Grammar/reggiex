/*
  Checks if value only contains numbers

  isOnlyNumbers(432) => true

  isOnlyNumbers('432') => true

  isOnlyNumbers('432a') => false

  isOnlyNumbers('432#') => false

*/

function isOnlyNumbers(value) {
  return /^\d+$/.test(value);
}

export default isOnlyNumbers;
