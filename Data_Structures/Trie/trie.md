**Inpu**
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
**Output**
[null, null, true, false, true, null, true]

**Explanation**
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

*Apple starts with App, App is the prefix* 

*Limitation is that the words only have lower case letters so we have 26 letters to worry about.* 

#### What is a Trie? 

- Create a central node for every new character **a -> p -> p -> l  -> e** ---- this is just one branch. We need to mark the end of the word, in this case "e" node. The first node is always empty and any branch from the root is a new word. The first node from the root node is telling us that all words starting from that character start here. For example  root-> a  root-> b, both indicate that all words starting from a start fromt he first branch and the second branch contains all words starting from b. 


- Assuming we search for "app" in the Trie. It will return **false** as the second p is not the end of the word. Therefore, we have to branch from first p to another p and mark it as the end of the word for the word to exist in the Trie. 

- StartsWith(app) -> We are guaranteed that there is some word that exists with prefix "app". Therefore return value is **true**. 
-   

![Alt text](https://g.gravizo.com/source/custom_mark10?https%3A%2F%2Fraw.githubusercontent.com%2FTLmaK0%2Fgravizo%2Fmaster%2FREADME.md)
