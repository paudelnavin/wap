document.getElementById("bling").onchange = function() {
    const body = document.body;
    if(this.checked == true) {
        text.className = "bling-checked";
        body.style.background = "url('hundred-dollar-bill.jpg')";
    } else {
        text.className = "bling-unchecked";
        body.style.background = "";
    }
}