var counter;
var value = parseInt(prompt("Enter integer value to start countdown:"))

for (counter = value; counter >= 0; counter--) {
    document.write(counter + '<br>');
}
