# Racecar

<a href="https://goo.gl/znbKy7" target="_blank">Permalink to my step-through</a>

See the Permalink for detailed step-by-step solution

```js
function solution(str){
var result = [];

if(str.length % 2 !== 0){
str += "_"; 
}

for (var i = 0; i < str.length; i += 2){
result.push(str.slice(i, i + 2));
}

return result;
}

var str = "racecar"

console.log(solution(str));

```

---


