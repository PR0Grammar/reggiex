/*
  Checks if string has only English letters

  isOnlyAlpha('abcDEef') => true

  isOnlyAlpha('abcd3f') => false

  isOnlyAlpha('abcd$#') => false

  isOnlyAlpha('äÖñ') => false
 */

 function isOnlyAlpha(value) {
   return /^[A-Za-z]+$/g.test(value);
 }

 export default isOnlyAlpha;
