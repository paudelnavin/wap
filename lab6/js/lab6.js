function max2Numbers(num1, num2)
{
    if(num1>num2)
    {
        window.alert(num1+"-is greatest");
    }
    else
    {
        window.alert(num2+"-is greatest");
    }
}

function max3Numbers(num3, num4, num5)
{
    if(num3>num4 && num3>num5)
    {
        window.alert(num3+"-is greatest");
    }
    else if (num4>num3 && num4>num5)
    {
        window.alert(num4+"-is greatest");
    }
    else if (num5>num3 && num5>num4){
        window.alert(num5+"-is greatest");
    }
}
function alphabetVowel(alphabet) {

    var argument = alphabet.toLowerCase();
        if (argument === 'a'||'e'||'i'||'o'||'u') {
            window.alert(alphabet + " is a vowel");
        }else {
            window.alert(alphabet + " is a consonant");
        }
}

function sum(){
    const num1 = document.getElementById("nu1").value;
    const num2 = document.getElementById("nu2").value;
    const num3 = document.getElementById("nu3").value;
    const num4 = document.getElementById("nu4").value;
    const num5 = document.getElementById("nu5").value;
    const num6 = document.getElementById("nu6").value;
    var number = [num1,num2,num3,num4,num5,num6];
    var sum=0;
    for(var i=0; i<number.length; i++){
        sum =sum+number[i];
    }
    window.alert(sum);
}

function multiply() {
    const num1 = document.getElementById("nu1").value;
    const num2 = document.getElementById("nu2").value;
    const num3 = document.getElementById("nu3").value;
    const num4 = document.getElementById("nu4").value;
    const num5 = document.getElementById("nu5").value;
    const num6 = document.getElementById("nu6").value;
    var number = [num1,num2,num3,num4,num5,num6];
    var product=1;
    for(var i=0; i<number.length; i++){
        product =product*number[i];
    }
    window.alert("Product of numbers is "+product);
}

function reverse(string){
    var str = [];
    for(var i=string.length;i>=0;--i){
        str.push(string[i]);
    }
        window.alert("Reverse string is "+str);

}

function longestWord() {
    const string1 = document.getElementById("str1").value;
    const string2 = document.getElementById("str2").value;
    const string3 = document.getElementById("str3").value;
    const string4 = document.getElementById("str4").value;
    const string5 = document.getElementById("str5").value;
    const string6 = document.getElementById("str6").value;
    var  strings = [string1,string2,string3,string4,string5,string6];

    var index = 0;
    var elementLength = strings[0].length;
    for(var i=1; i< strings.length; i++) {
        if(strings[i].length > elementLength) {
            index = i;
            elementLength = strings[i].length;
        }
    }
    window.alert(strings[index]);
}

function totalStringsGreater(){
    const string1 = document.getElementById("str1").value;
    const string2 = document.getElementById("str2").value;
    const string3 = document.getElementById("str3").value;
    const string4 = document.getElementById("str4").value;
    const string5 = document.getElementById("str5").value;
    const string6 = document.getElementById("str6").value;
    var  strings = [string1,string2,string3,string4,string5,string6];

    var j = 6;
    var str = [];
    for(var i = 0; i < strings.length; i++)
    {
        if(strings[i].length >= j){
            str.push("avin");
        }
    }
    window.alert(str);
}