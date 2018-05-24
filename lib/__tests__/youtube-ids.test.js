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
  it('Revese String', () => {
    return expect(youtubeIds.reverse('robert')).toEqual('trebor');
  });
});
