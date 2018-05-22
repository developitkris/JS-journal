import { Word } from './../src/js/entry.js';


describe('Word', function() {
  it('should test whether a word is correctly matched', function() {
    var entry = new Word("word", "otherword");
    expect(entry.word).toEqual("word");
    expect(entry.otherword).not.toEqual("word");
  });
});



// describe('entry', function() {
//   it('should determine whether words make an entry', function(){
//     var notWord = new Entry(onelongword);
//     expect(notEntry.checkType()).toEqual("not a valid entry");
//   })
// })
//
// describe('word' function() {
//   it('should test whether words are counted', function() {
//     var word = new Word(word1, word2, word3);
//     expect(word.word1).toEqual(word1);
//     expect(word.word2).toEqual(word2);
//     expect(word.word3).toEqual(word3);
//   });
// });
