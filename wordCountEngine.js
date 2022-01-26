// Word Count Engine
// Implement a document scanning function wordCountEngine, which receives a string document and 
// returns a list of all unique words in it and their number of occurrences, sorted by the number 
// of occurrences in a descending order. If two or more words have the same count, they should be 
// sorted according to their order in the original sentence. Assume that all letters are in english 
// alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and 
// “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to 
// separate words.

// Analyze the time and space complexities of your solution. Try to optimize for time while 
// keeping a polynomial space complexity.

/* Examples:

input:  document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]

*/

function wordCountEngine(document) {
  let words = document.toLowerCase().split(" ");
  let count = {}, result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word.replace(/[^A-Za-z]/g, "");
    
    if (!(word in count)) {
      count[word] = 1;
    } else {
      count[word] += 1;
    }

    if (word in count) {
      if (word === '') delete count[word];
    }
  }

  for (const word in count) {
    result.push([word, `${count[word]}`])
  }
  
  result.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
  });

  return result;
}

// Time complexity: O(N) to iterate over all words, remove punctuations, and add to count map. 
// sorting takes O(N lg N)
// Space complexity: O(N) to store count map of words