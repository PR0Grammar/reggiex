/*
  Checks if a string has only uppercased English letters

  isOnlyBigAlpha('ABC') => true

  isOnlyBigAlpha('ABCd') => false

  isOnlyBigAlpha('AB*$F') => false
*/

function isOnlyBigAlpha(value) {
  return /^[A-Z]+$/g.test(value);
}

export default isOnlyBigAlpha;
