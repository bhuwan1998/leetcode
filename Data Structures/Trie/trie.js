/*
TrieNode: Node which contains children map with characters as keys and values as another TrieNode
An indication for the current character as the end of word property 

*/

var TrieNode = function() {
    this.children = new Map(); 
    this.endOfWord = false; 
}



var Trie = function() {
    this.root = new TrieNode();
};


/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root; 

    for (let i = 0; i < word.length; i++) {
        if(!current.children[word[i]]){
            current.children[word[i]] = new TrieNode(); 
        }
        current = current.children[word[i]];
    }
    current.endOfWord = true; // as we reach at the end of the word
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

    let current = this.root; 

    for(let i = 0; i < word.length; i++){
        if(!current.children[word[i]]){
            return false; 
        }
        current = current.children[word[i]];
    }
    return current.endOfWord; 
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root; 

    for(let i = 0; i < word.length; i++){
        if(!current.children[word[i]]){
            return false; 
        }
        current = current.children[word[i]];
    }

    return true; 
    
};

let word = "apple";
let prefix = "app";
var obj = new Trie();
obj.insert(word);
var param_2 = obj.search("app");
var param_3 = obj.startsWith(prefix);
console.log(param_2, param_3);
