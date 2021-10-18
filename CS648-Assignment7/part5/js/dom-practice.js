/*eslint-env browser*/
var message = "I have been clicked";

//STEP 1
function displayMessage() {
    "use strict";
    alert(message);
}

//STEP 2
var button2 = document.getElementById("button2");
button2.onclick = function () {
    "use strict";
    alert("I have been clicked");
};

//STEP 3
var button3 = document.getElementById("button3");
button3.addEventListener("click", onBtnClick, false);
function onBtnClick() {
    "use strict";
    alert("I have been clicked");
}

//STEP 4
var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
    "use strict";
    alert("I have been clicked");
}, false);

//STEP 5
function init() {
    "use strict";
    var button5 = document.getElementById("button5");
    button5.addEventListener("click", function () {
        alert("I have been clicked");
    });
}

window.addEventListener("load", init);
