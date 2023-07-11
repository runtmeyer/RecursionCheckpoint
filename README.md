# RecursionCheckpoint
# Palindrome checker 

This is a simple JavaScript program that uses recursion to check if a given word is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

## How it works

The program uses a recursive approach to check if a word is a palindrome. Here's a breakdown of the process:

1. The `isPalindrome` function takes a word as input.
2. If the word has 0 or 1 character, it is considered a palindrome, and the function returns `true` as the base case.
3. In the recursive case, the function compares the first and last characters of the word.
4. If the characters are the same, it removes the first and last characters from the word and recursively calls `isPalindrome` on the remaining word.
5. This process continues until either the word is determined to be a palindrome (base case) or the comparison fails, in which case the function returns `false`.
6. The program includes some example test cases to demonstrate the functionality of the `isPalindrome` function.
