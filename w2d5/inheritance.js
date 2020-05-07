function removingBannedWords() {

    const bannedwords = document.getElementById("bwords").value;
    const bwords = bannedwords.trim().split(" ");

    const statement = document.getElementById("uname").value;
    const statmentArray = statement.trim().split(" ");

    console.log(bwords);
    console.log(statmentArray);

    let count =0;

    const removeStatement = [];
    for(let i=0; i<statmentArray.length; i++){
        count =0;
        for(let j=0; j<bwords.length; j++){
            if(statmentArray[i] === bwords[j])
                count++;
        }
        console.log('count is: '+count);
        if(count === 0)
            removeStatement.push(statmentArray[i]);

        var finalStatement = removeStatement.toString().replace(/[,]/g," ");
    }
    document.getElementById("result").innerHTML = finalStatement;
}
