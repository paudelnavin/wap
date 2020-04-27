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
    if(res==""){
        window.alert("Please, enter an array of integers separated by spaces!");
    }else{
        for(var i=0; i<res.length; i++){
            sum =parseInt(sum)+parseInt(res[i]);
        }
        window.alert("The sum is : " + sum);
    }
}

function multiply(numberArray) {

    var res = numberArray.trim().split(" ");
    var product=1;
    if(res==""){
        window.alert("Please, enter an array of integers separated by spaces!");
    }else{
        for(var i=0; i<res.length; i++){
            product =parseInt(product)*parseInt(res[i]);
        }
        window.alert("The total product is : " + product);
    }
}

function reverse(enteredString){

    if (enteredString.length >= 2) {
        window.alert("The reverse of " + enteredString + " is : " + enteredString.split("").reverse().join(""));
    } else {
        if (enteredString.length == 1) {
            window.alert("The reverse is : " + enteredString.trim());
        } else {
            window.alert("Please, enter any string!");
        }

    }
}

function longestWord(enteredString) {


    var res = enteredString.trim().split(" ");
    console.log(res);
    if(res=="") {
        window.alert("Please, enter an array of words separated by spaces!");
    }else{
        var index = 0;
        var elementLength = res[0].length;
        for(var i=1; i< res.length; i++) {
            if(res[i].length > elementLength) {
                index = i;
                elementLength = res[i].length;
            }
        }
        window.alert("The longest word is  " + res[index]);
    }
}

function filterWords(enteredString, x){

    var res = enteredString.trim().split(" ");
    console.log(x);
    console.log(res);
    if( x=="" || res==""){
        window.alert("Please, enter an array of words separated by spaces! and enter i value too!");
    }else{
        var str = [];
        for(var i = 0; i < res.length; i++)
        {
            if(res[i].length > x){
                str.push(res[i]);
            }
        }
        window.alert("The word(s) longer than "+x+" are "+str);
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