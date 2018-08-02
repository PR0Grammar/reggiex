/*
  Checks if string has only lowercased English letters

  isOnlySmallAlpha('abcd') => true

  isOnlySmallAlpha('abcD') => false

  isOnlySmallAlpha('ab4#') => false

*/

function isOnlySmallAlpha(value) {
  return /^[a-z]+$/g.test(value);
}

export default isOnlySmallAlpha;
