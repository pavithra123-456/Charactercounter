const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxCharacters = 200;

textarea.addEventListener("input", function () {

    let typed = textarea.value.length;
    let remaining = maxCharacters - typed;

    counter.textContent = typed + "/" + maxCharacters + " characters (" + remaining + " remaining)";

    if (typed === maxCharacters) {
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }

});