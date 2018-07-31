/*
  Checks if a string has only uppercased English letters

  onlyUpperAlpha('ABC') => true

  onlyUpperAlpha('ABCd') => false

  onlyUpperAlpha('AB*$F') => false
*/

function onlyUpperAlpha(value) {
  return /^[A-Z]+$/g.test(value);
}

export default onlyUpperAlpha;
