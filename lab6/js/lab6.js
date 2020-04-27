function maxOf(num1, num2) {
    return Math.max(parseFloat(num1), parseFloat(num2));
}

function maxOf2Numbers(num1, num2)
{
    if (num1.trim().toString() !== "" && num2.trim().toString() !== "") {
        const max = maxOf(num1, num2);
        window.alert("The max number is : " + max);
    } else {
        window.alert("Please, enter two numbers!");
    }
}

function maxOf3Numbers(num3, num4, num5)
{
    if (num3.trim().toString() !== "" && num4.trim().toString() !== "" && num5.trim().toString() !== "") {
        const max = maxOf(num3, maxOf(num4, num5));
        window.alert("The max number is : " + max);
    } else {
        window.alert("Please, enter three numbers!");
    }
}
function isVowel(char) {

    var argument = char.toLowerCase();
            if (char.trim().toString() !== "") {
                if (argument == "a"||argument =="e"||argument =="i"||argument =="o"||argument =="u") {
                    window.alert("The '" + char + "' is a vowel.");
                } else {
                    window.alert("The '" + char + "' is NOT a vowel.");
                }
            } else {
                window.alert("Please, enter a Char!");
            }
}

function sum(numberArray){

    var res = numberArray.trim().split(" ");
    var sum =0;
    if (res.length >= 1) {
        for(var i=0; i<res.length; i++){
            sum =parseInt(sum)+parseInt(res[i]);
        }
        window.alert("The sum is : " + sum);
    } else {
            window.alert("Please, enter an array of integers separated by spaces!");
        }
}

function multiply(numberArray) {

    var res = numberArray.trim().split(" ");
    var product=1;
    if (res.length >= 1) {
        for(var i=0; i<res.length; i++){
            product =parseInt(product)*parseInt(res[i]);
        }
        window.alert("The total product is : " + product);
    }else
        {
            window.alert("Please, enter an array of integers separated by spaces!");
        }
}

function reverse(enteredString){

    if (enteredString.length >= 2) {
        window.alert("The reverse of " + enteredString + " is : " + enteredString.split("").reverse().join(""));
        // result.innerText = "The reverse of " + enteredString + " is : " + enteredString.split("").reverse().join("");

    } else {
        if (enteredString.length == 1) {
            window.alert("The reverse is : " + enteredString.trim());
            // result.innerText = "The reverse is : " + enteredString.trim();
        } else {
            window.alert("Please, enter any string!");
            // result.innerText = "Please, enter any string!";
        }

    }
}

// function getBigger(big, num) {
//     if (parseFloat(num) > parseFloat(big))
//         return parseFloat(num);
//     else
//         return parseFloat(big);
// }

function longestWord(enteredString) {

    const result = document.getElementById("findLongestWordResult");
    if (enteredString.length >= 1) {
        const results = enteredString.map(x => x.length);
        result.className = "success";
        var index = 0;
        var elementLength = enteredString[0].length;
        for(var i=1; i< enteredString.length; i++) {
            if(enteredString[i].length > elementLength) {
                index = i;
                elementLength = enteredString[i].length;
            }
        }
        window.alert("The longest word is  " + enteredString[index]);
        // result.innerText = "The longest word is  " + results.reduce(getBigger, results[0]);

    } else {
        result.className = "failed";
        window.alert("Please, enter an array of words separated by spaces!");
        // result.innerText = "Please, enter an array of words separated by spaces!";
    }
}

function filterWords(enteredString, x){
    if (enteredString.length >= 1 && x.trim() !== "") {
        var str = [];
        for(var i = 0; i < enteredString.length; i++)
        {
            if(enteredString[i].length > x){
                str[str.length] = enteredString[i];
            }
        }
        text = "";
        for (i = 0; i < str.length; i++) {
            text += fruits[i] + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
        // window.alert("The words are : " + str);

    } else {
        window.alert("Please, enter an array of words separated by spaces!");
    }
}

/*
Usage : test on the map/filter/reduce as follows:

a) multiply each element by 10;

b) return array with all elements equal to 3;

c) return the product of all elements;

and testing the console.assert.
 */
console.log("Modified the jsfiddle on the map/filter/reduce slide as follows:");
console.log("==============================================================");
console.log("a) multiply each element by 10 :");

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(b);

console.log("b) return array with all elements equal to 3 :");

const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c);

console.log("c) return the product of all elements :");

const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);

const d2 = a.find(function (elem) {
    return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
    return elem > 1;
}); //1
/*
 Note : The following two assertions will failed. Its for testing purposes.
 */
console.log("The following two assertions will failed. Its for testing purposes.");
console.assert(d2 === 0, {"find elem > 1": 1, errorMsg: "failed! should equal 3"});
console.assert(d3 === 0, {"findIndex elem > 1": 2, errorMsg: "failed! should equal 1"});

function wordLongerThan(x, enteredi) {
    return (x.length > parseInt(enteredi));
}
s