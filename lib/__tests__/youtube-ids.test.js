/* eslint no-undef: 0 */
/* eslint-env node */
/* eslint no-mixed-spaces-and-tabs: 0 */
const youtubeIds = require('..');

describe('Encode and Decode', () => {
  it('Encode the ID', () => {
    return expect(youtubeIds.encode(9871923729)).toEqual('ruAfMk');
  });
  it('Decode the string to the id', () => {
    return expect(youtubeIds.decode('ruAfMk')).toEqual(9871923729);
  });
});

describe('Encode and Decode long strings', () => {
  it('Encode the ID (456699000918376448)', () => {
    return expect(youtubeIds.encode(4566990009183766)).toEqual('uRHod0QUu');
  });
  it('Decode the string to the id', () => {
    console.log(youtubeIds.decode('uRHod0QUu'));
    return expect(youtubeIds.decode('uRHod0QUu')).toEqual(4566990009183766);
  });
});

describe('Common function tests', () => {
  it('Revese String', () => {
    return expect(youtubeIds.reverse('robert')).toEqual('trebor');
  });
  it('Get Number length ', () => {
    return expect(youtubeIds.getlength(456699000918376600)).toEqual(18);
  });
  it('Get Number length ', () => {
    return expect(youtubeIds.getlength(4566990009183766)).toEqual(16);
  });
  it('Get Number length ', () => {
    return expect(youtubeIds.getlength(4566)).toEqual(4);
  });
});
