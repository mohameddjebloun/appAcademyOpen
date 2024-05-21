// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'
function firstVowelIndex(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < word.length; i++) {
      if(vowels.includes(word[i])) {
        return i;
      }
    }
  }

function pigLatinWord(word) {
    // your code here...
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if(vowels.includes(word[0])){
      return word + 'yay';
    }

    let vowelIndex = firstVowelIndex(word);
    let newWord = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";;

    return newWord;
  };
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"