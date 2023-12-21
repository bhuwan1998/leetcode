// Problem Statement:

// Design an algorithm to encode a list of strings to a string. 
//The encoded string is then sent over the network and is decoded back to the original list of strings.

// Example:

// Input: [“hello”,”world”] Output: “5#hello5#world”

/**
 * Input: ["lint", "code", "love", "you"]
 * Output: ["lint", "code", "love", "you"]
 * 
 * Explanation: One possible encode method is: "lint:;code:;love:;you:"
 * 
 */

// Explanation:
// The input list of strings is encoded as a single string 
// where ‘#’ separates the length of the string and the actual string. 
// So “hello” is represented as “5#hello” and “world” is represented as “5#world”. 
// The two strings are then concatenated to form the final encoded string “5#hello5#world”.