/*
  Returns regular expression to string

  regToString(/a+b+c/)
  => '/a+b+c/'

  regToString(new RegExp('fooFighters', 'g'))
  => '/fooFighters/g'

*/

function regToString(regexp) {
  return regexp instanceof RegExp ?
    regexp.toString() : '';
}

export default regToString;
