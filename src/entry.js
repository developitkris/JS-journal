export function countWords(word) {
  var output = [];
  var count = 0;
  for(var i=0; i<word.length; i++){
    word.split(" ");
    if (word[i] == 0){
      count ++;
    }
    output.push()
  }
}

export function countVowCons(word) {
  var output2 = [];
  var countVowels = 0;
  var countConsonants = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = [];
  // /[a-z^aeiou]/gi
  // var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  for(var i=0; i<word.length; i++){
    word.split(" ");
    if (word[i].includes(vowels) && word[i].includes(!vowels)){
      countVowels ++;
      countConsonants ++;
    }
    else if (word[i].includes(vowels)){
      countVowels ++;
    }
    else {
      countConsonants ++;
    }
  }
  output2 = console.log("vowels:" + countVowels + ", " + "consonants:" + countConsonants);
}

export function getTeaser(words) {
  var output3 = [];
  var count = 0;
  for (var i=0; i<words.length; i++){
    words.split(" ");
    count ++;
    if (count >= 7){
      output3 = console.log(words[i]);
    }
    else{
      output3 = console.log(words);
    }
  }
}
