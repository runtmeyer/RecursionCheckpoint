function isPalindrome(word) {
  // Base case: if the word has 0 or 1 character, it is a palindrome
  if (word.length <= 1) {
    return true;
  }

  // Recursive case: compare the first and last characters of the word
  if (word[0] === word[word.length - 1]) {
    // Remove the first and last characters and recursively check the remaining word
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    return false; // Not a palindrome
  }
}

// Test the program
console.log(isPalindrome("radar"));    // Output: true
console.log(isPalindrome("level"));    // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("madam"));    // Output: true