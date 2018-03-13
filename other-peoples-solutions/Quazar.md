# [Quazar](https://www.codewars.com/users/Quazar)'s Solution

```js
function solution(str){
   return (str.length % 2 ? str + '_': str).match(/\w\w/g);
}
```
---

## Solution Explanation

This solution starts by checking if the string length is even. Then he devided the string into array of pairs using regular expression "/\w\w/g" and .match() method.


---

## Language Features

Quazar used:
* Ternary operator
* Concatenation
* String.match
* Regular expression




___
___


