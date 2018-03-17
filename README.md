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
        result < - ""
        string to array
        split the array
        return result
    End solution   
    ```
5. Begin exploring the challenging bit.
    ```
    solution(string)
        result < - ""
        available options:
            + for or while loops
            + if statements
            + string methods
            + array methods
        return result
    End solution   
    ```
6. Continue exploring the challenging bit.
    ```
    solution(string)
        result < - ""
        available options: 
            + String.length
            + String.map
            + String.match
            + String.slice
            + array.push
        return result
    End solution   
    ```

7. Continue exploring the challenging bit.
    ```
    solution(string)
        declare new array
        result <- ""
            if statements 
            for loop
                - string.match
                + string.slice
                + Array.push
        return result
    End solution   
    ```
8. Decided on a strategy.
    ```
    solution(string)
        result <- ""
            if statements 
            for loop
            string.slice
            Array.push
        return result
    End solution   
    ```

9. Convert pseudocode to real code.
    ```
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

This solution works in 8 steps:

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
* if statement
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


