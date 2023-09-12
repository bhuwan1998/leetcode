/* 
Medium: Check if Object Instance of class 

Write a function that checks if given a value is a 
instance of a given class or superclass. For this problem, 
an object is considered an instance of a given class if that 
objet has access ot that class's methods. 

There are no constraints on the data types that can be passed to the 
function. For example, the value or the class could be **undefined**.

*/

// Example 1
/* 

input: checkIfInstance(new Date(), Date)
output: true
Explanation: The object returned by the Date constructor 
is, by definition, an instance of Date. 


*/

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */

var checkIfInstaceOf = function (obj, classFunction) {
  if(obj == null) return false; 
  if(typeof(classFunction)  !== 'function') return false;
  return Object(obj) instanceof classFunction;
}


class Animal {}
class Dog extends Animal {}

console.log(checkIfInstaceOf(5, Number));

