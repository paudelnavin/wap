window.onload = function() {
    "use strict";
    const myTextArea = document.getElementById("textarea");
    const myTextAreaStyle = myTextArea.style;

    function grow() {
        let oldSize = parseInt(myTextAreaStyle.fontSize);
        if (isNaN(oldSize)) {
            oldSize = 12;
        }
        myTextAreaStyle.fontSize = (oldSize + 2) + "pt";
    }

    document.getElementById("button").onclick = function () {
        setInterval(grow, 500);
    };

    document.getElementById("bling").onchange = function () {
        const body = document.body;
        if (this.checked == true) {
            textarea.className = "bling-checked";
            body.style.background = "url('hundred-dollar-bill.jpg')";
        } else {
            textarea.className = "bling-unchecked";
            body.style.background = "";
        }
    }

    document.getElementById("malkovitchBtn").onclick = function() {
        const originalText = myTextArea.value;
        let newText = "";
        let nextWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter == ' ' || letter == '\n' || i >= originalText.length-1) {
                if(nextWord.trim().length >= 5)
                    nextWord = "Malkovitch ";
                newText += nextWord;
                nextWord = "";
            }
        }
        myTextArea.value = newText;
    };
}