# [Split Strings](https://www.codewars.com/kata/split-strings)

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

### Index
* [Solution Process](#solution-process)
* [Solution Explanation](#solution-explanation)
* [Language Features](#language-features)
* [Uses](#uses)
* [Notes](#notes)

---

## Solution Process
0. Codewars challenge
    ```
    Complete the solution so that it splits the string into pairs of two characters.
    ```
1. Phrased as a function  
    ```
    Write a function that splits the string into pairs of two characters.
    ```
2. Define arguments and return value   
    ```
    Write a function that takes in a string and returns the array of two characters elements.
    ```
3. Convert that sentence into high-high level pseudocode.
    ```
    solution(string)
        string to array
        split the array
        return array of two characters elements
    End solution
    ```
4. Declare return value, isolate the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        reverse the string
        return reversed_string
    End solution   
    ```
5. Begin exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        available options:
            - for or while loops
            - if statements
            + string methods
        return reversed_string
    End solution   
    ```
6. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        available options: String methods
            - String.length
            - String.indexOf
            - String.search
            + String.split
            - String.substring
            + String.slice
            + String.replace
        return reversed_string
    End solution   
    ```
7. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        two possible strategies:
            + convert to array and back to string
                String.split
                + arrays have a reverse method
            - slice the end replace at the beginning    
                String.slice, String.replace
                - this could get tricky with for loops
        return reversed_string
    End solution   
    ```
8. Continue exploring the challenging bit.
    ```
    solution(string)
        reversed_string <- ""
        convert to array and back to string
            String.split
            Array.reverse
            convert array back to string
                - read out and concatinate each element in a loop
                + Array.join
        return reversed_string
    End solution   
    ```
9. Decided on a strategy.
    ```
    solution(string)
        reversed_string <- ""
        convert to array and back to string
            String.split
            Array.reverse
            Array.join
        return reversed_string
    End solution   
    ```
10. Refactoring pseudocode closer to real code
    ```
    solution(string)
        reversed_string <- ""
        temp_array = [];
        temp_array <- string.split("")
        temp_array <- temp_array.reverse()
        reversed_string <- temp_array.join("")
        return reversed_string
    End solution   
    ```
11. Convert pseudocode to real code.
    ```js
function solution(str){
var result = [];

if(str.length % 2 !== 0){
str += "_"; 
}

for (i = 0; i < str.length; i += 2){
result.push(str.slice(i, i + 2));
}

return result;
};
    ```    
    
[TOP](#index)

---

## Solution Explanation

This solution works in 4 steps:
0. Take in a string as an argument.
1. Check if string length is odd or even.
2. Declare Result variable as array.
3. If length of the string is odd, add underscore symbol to sting with str += "underscore"; 
4. Iterate string with (i = 0; i < str.length; i += 2).
5. Split string into pairs with .slice().
6. Push pairs to the new array with .push().
7. Return Result


[TOP](#index)

---

## Language Features

This solution relied on a few native methods:
* String.length
* String.slice()
* Array.push()



[TOP](#index)

---
## Uses


* No Idea


[TOP](#index)

---

## Notes

Things I learned studying this problem:
* Reading MDN documentation
* What "native language features" means
* How to write specs


New vocabulary:
* Method: A function property in an object
* Test case: A sample input/output pair for a function 

Things I still struggle with:
* Finding helpful stack-overflow questions
* Understanding other people's solutions

Next study goals:
* Practice reading documentation
* Finding more test cases for each problem
* Writing more readable solutions


[TOP](#index)

___
___


