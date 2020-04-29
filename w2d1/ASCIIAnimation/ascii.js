/* jshint strict: true */

/* assign event handlers */
document.getElementById('fontOps').onchange = fontsize;
document.getElementById('animation').onchange = animation;
document.getElementById('start').onclick = startAnimationBtn;
document.getElementById('stop').onclick = stopAnimationBtn;
document.getElementById('turbo').onclick = speedUpTurbo;

/* declare and initial public variables */
var animationArray = [];
var animationIntervalID;
var speed = 250;

/* prepare the default environment */
toggleButtons("initial"); // disable buttons by default

/* change the font size in the text area */
function fontsize() {
    var size = this.value;
    var textArea = document.getElementById("text");
    textArea.style.fontSize = parseInt(size) + 'pt';
}
/* change the animation array in the text area */
function animation() {
    var target = this.value;
    var textArea = document.getElementById("text");
    if(target !== "Blank"){
        animationArray = Animation[target].split("=====\n");
        toggleButtons('stop'); // active start button after the animation chose.
    }else{
        toggleButtons("initial");
    }

}

/* start the animation in the text area */
function startAnimationBtn() {
    toggleButtons('start');
    var textArea = document.getElementById("text");
    var i =0;
    animationIntervalID = setInterval(function () {
        if (i < animationArray.length){
            textArea.textContent = animationArray[i];
        }else{
            i=0;
            textArea.textContent = animationArray[i];
        }
        i++;
    },speed);
}

/* stop the animation in the text area */
function stopAnimationBtn() {
    toggleButtons('stop');
    clearInterval(animationIntervalID);
}

function speedUpTurbo(){

    if (this.checked === true){
        clearInterval(animationIntervalID);
        speed = 50;
        startAnimationBtn(); // start again.
    }else{
        clearInterval(animationIntervalID);
        speed = 250;
        startAnimationBtn(); // start again.
    }
}

/* change the disable buttons when start or stop */
function toggleButtons(clickedButton) {
    var stop = document.getElementById("stop");
    var start = document.getElementById("start");

    if (clickedButton === 'start'){
        stop.disabled = false;
        start.disabled = true;
    }else if (clickedButton === 'stop'){
        start.disabled = false;
        stop.disabled = true;
    }else{
        // initial state buttons are disabled.
        start.disabled = true;
        stop.disabled = true;
    }
}

