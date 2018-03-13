# [Quazar](https://www.codewars.com/users/Quazar)'s Solution

```js
function solution(str){
   return (str.length % 2 ? str + '_': str).match(/\w\w/g);
}
```
---

## Solution Explanation

This solution starts by creating an empty string.  Then in a for loop, she concatenates the letters in reverse order from the argument to the new string.  Finally she returns the newly constructed string.


---

## Language Features

Dimitrk used a couple String features:
* Concatenation
* String.length
* String indexing

And a for loop checked by the length of the string.


___
___


