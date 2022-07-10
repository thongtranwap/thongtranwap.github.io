

function myFunctionTest(expected, found){
    if(expected === found){
        return `- Test Succeeded with output ${found}`
    }else{
        return `Test Failed. Expected ${expected} found ${found} ` 
    }
}

console.log("Expected output of max (20, 10) is 20 " + myFunctionTest(20, max(20,10)));
console.log("Expected output of maxOfThree (5, 4, 44) is 44 " + myFunctionTest(44, maxOfThree(5,4,44)));
console.log("Expected output of isVowel(e) is true " + myFunctionTest(true, isVowel("e")));
console.log("Expected output of sum(0,1,2,7) is 10 " + myFunctionTest(10, sum(0,1,2,7)));
console.log("Expected output of reverse(thong) is gnoht " + myFunctionTest("gnoht", reverse('thong')));
console.log("Expected output of findLongestWord(['he','hi', 'apple']) is 5 " + myFunctionTest(5, findLongestWord(['he','hi', 'apple'])));
console.log("Expected output of filterLongWords(['he','hi', 'orange']) is orange " + myFunctionTest("orange", filterLongWords(['he','hi', 'orange'], 5)));


function max(num1, num2){
    if(num1 > num2) return num1;
    return num2;
}

function maxOfThree(...nums){    
    return Math.max(...nums)   
}

function isVowel(char){
    switch (char){
     case "a":
     case "e":
     case "i":
     case "o":
     case "u":
     return true;   
     
     default: 
     return false;
    }
}

function sum(...nums){
    let res = nums.reduce( (x,y) =>{         
        return x + y;
    })
    return res;
}

function multiply(...nums){
    let res = nums.reduce( (x,y) =>{         
        return x * y;
    })
    return res;
}

function reverse(str){
    let strReversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    } 
    return strReversed;
}

function findLongestWord(words){
    const longest = words.map(x => x.length);
    return Math.max(...longest);
}

function filterLongWords(words, i){   
    const arr = words.filter(x => x.length > i)    
    return arr.toString();
}



