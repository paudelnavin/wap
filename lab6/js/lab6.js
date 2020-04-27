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

function sum(numbers){
    var sum=0;
    for(var i=0; i<numbers.length; i++){
        sum =sum+numbers[i];
    }
}

function multiply(numbers) {
    var multiply=0;
    for(var i=0; i<numbers.length; i++){
        multiply =multiply*numbers[i];
    }
}