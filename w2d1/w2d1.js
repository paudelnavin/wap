
function sumClick() {
    const values = document.getElementById('sumArrayInput').value;
    const numberArray = values.trim().split(" ");
    const sumOfArray = numberArray.reduce((a,b) => parseInt(a)+parseInt(b),0);

    if(values == "" || values=='a'){
        window.alert("Please, enter an array of words separated by spaces!");
    }else {
        window.alert("The sum is : " + sumOfArray);
    }

}

function multiplyClick(){
    const values = document.getElementById('multiplyArrayInput').value;
    const numberArray = values.trim().split(" ");
    const multiplyOfArray = numberArray.reduce((a,b) => parseInt(a)*parseInt(b),1);
    if(values != ""){
        window.alert("The sum is : " + multiplyOfArray);
    }
}

function reverseClick() {
    const values = document.getElementById('reverseInput').value;
    //One method
    // const reverseString = values.split("").reverse().join("");

    //Second method
    const reverseString =  values.split("").reduce((rev, char)=> char + rev, '');

    if(values!=""){
        window.alert("The reverse is : " + reverseString);
    }
}

function longestWord() {
    const value = document.getElementById('findLongestWordInput').value;
    const stringArray = value.trim().split(" ");

    const longestWord = stringArray.reduce((string1, string2)=>{
        return (string2.length > string1.length) ? string2 : string1;
    });

    if(longestWord!=""){
        window.alert("The longest word is : " + longestWord);
    }
}


