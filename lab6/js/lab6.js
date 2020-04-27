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

// function getSum(total, num) {
//     return parseFloat(total) + parseFloat(num);
// }

function sum(numberArray){

    const result = document.getElementById("sumArrayResult");
    var sum =0;
    if (numberArray.length >= 2) {
        result.className = "success";
        for(var i=0; i<numberArray.length; i++){
            sum =parseInt(sum)+parseInt(numberArray[i]);
        }
        window.alert("The sum is : " + sum);
        // result.innerText = "The sum is : " + enteredArray.reduce(getSum, 0);

    } else {
        if (numberArray.length == 1) {
            result.className = "success";
            window.alert("The sum is : " + numberArray[0].trim());
            // result.innerText = "The sum is : " + enteredArray[0].trim();
        } else {
            result.className = "failed";
            window.alert("Please, enter an array of integers separated by spaces!");
            // result.innerText = "Please, enter an array of integers separated by spaces!";
        }

    }
}

function multiply(numberArray) {
    const result = document.getElementById("multiplyArrayResult");
    var product = 1;
    if (numberArray.length >= 2) {
        result.className = "success";
        for(var i=0; i<numberArray.length; i++){
            product =product*numberArray[i];
        }
        window.alert("The total product is : " + product);
        // result.innerText = "The sum is : " + enteredArray.reduce(getSum, 0);

    } else {
        if (numberArray.length == 1) {
            result.className = "success";
            window.alert("The product is : " + numberArray[0].trim());
            // result.innerText = "The sum is : " + enteredArray[0].trim();
        } else {
            result.className = "failed";
            window.alert("Please, enter an array of integers separated by spaces!");
            // result.innerText = "Please, enter an array of integers separated by spaces!";
        }

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

function getBigger(big, num) {
    if (parseFloat(num) > parseFloat(big))
        return parseFloat(num);
    else
        return parseFloat(big);
}

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
    if (enteredString.length >= 1 && enteredi.trim() !== "") {
        var str = [];
        for(var i = 0; i < enteredString.length; i++)
        {
            if(enteredString[i].length >= x){
                str.push(enteredString[i]);
            }
        }
        window.alert("The words are : " + str);
        // result.innerText = "The words are : " + enteredString.filter(x => wordLongerThan(x, enteredi)).toString();

    } else {
        window.alert("Please, enter an array of words separated by spaces!");
        // result.innerText = "Please, enter an array of words separated by spaces!";
    }
}