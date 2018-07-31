/*
  Checks if string has only lowercased English letters

  onlyLowerAlpha('abcd') => true

  onlyLowerAlpha('abcD') => false

  onlyLowerAlpha('ab4#') => false

*/

function onlyLowerAlpha(value) {
  return /^[a-z]+$/g.test(value);
}

export default onlyLowerAlpha;
