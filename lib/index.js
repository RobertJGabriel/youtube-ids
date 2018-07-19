'use strict';
const AlphabeticString = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //

/**
 * @param  {} _number
 */
function encode(_number) {
  if (typeof _number === 'undefined') {
    return null;
  }
  if (typeof _number !== 'number') {
    return 'Wrong parameter type';
  }

  let returnHolder = '';

  const randomId = Math.floor(
    Math.log(parseInt(_number, 10)) / Math.log(AlphabeticString.length)
  );

  for (let i = randomId; i >= 0; i--) {
    returnHolder += AlphabeticString.substr(
      Math.floor(parseInt(_number, 10) / bcpow(AlphabeticString.length, i)) %
        AlphabeticString.length,
      1
    );
  }
  return reverse(returnHolder);
}

exports.encode = encode;

/**
 * @param  {} _string
 */
function decode(_string) {
  if (typeof _string === 'undefined') {
    return null;
  }
  if (typeof _string !== 'string') {
    return 'Wrong parameter type';
  }

  const str = reverse(_string);
  let returnHolder = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    returnHolder +=
      AlphabeticString.indexOf(str.substr(i, 1)) *
      bcpow(AlphabeticString.length, str.length - 1 - i);
  }
  return returnHolder;
}

exports.decode = decode;

/**
 * @param  {} _a
 * @param  {} _b
 */
function bcpow(_a, _b) {
  return Math.floor(Math.pow(parseFloat(_a, 10), parseInt(_b, 10)));
}

/**
 * @param  {} string
 */
function reverse(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

exports.reverse = reverse;
