// import { StringHelper } from './string.helper';
//
// describe('String Helper', () => {
//   describe('stripAccents', () => {
//     it('should strip accents correctly', () => {
//       const strWithAccents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖòóôõöÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
//       const expectedResult = 'AAAAAAaaaaaaOOOOOOoooooEEEEeeeeCcIIIIiiiiUUUUuuuuNnSsYyyZz';
//       expect(StringHelper.stripAccents(strWithAccents)).toEqual(expectedResult);
//     });
//   });
//   describe('indexesOf', () => {
//     it('should get all the matching indexes correctly', () => {
//       expect(StringHelper.indexesOf('parvv par vvpar', 'par')).toEqual([0, 6, 12]);
//     });
//     it('should be case-sensitive', () => {
//       expect(StringHelper.indexesOf('PAR', 'par')).toEqual([]);
//     });
//     it('should be accent-sensitive', () => {
//       expect(StringHelper.indexesOf('pér', 'per')).toEqual([]);
//     });
//   });
// });
