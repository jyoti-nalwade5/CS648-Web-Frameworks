var coinFlip = Math.floor(Math.random() * 10);
var choice = prompt("Choose Heads (H) or Tails (T):");

isHeads = Boolean (coinFlip > 3);
isUserChoiceHeads = Boolean (choice.toUpperCase() == "H" || choice.toLowerCase() == "heads");
isUserChoiceTails = Boolean (choice.toUpperCase() == "T" || choice.toLowerCase() == "tails");

if (isHeads) {          //Result is Heads
    
    if (isUserChoiceHeads) {
        alert("The flip was heads and you chose heads...you win!");
    } else if (isUserChoiceTails) {
        alert("The flip was heads but you chose tails...you lose!");
    } else {
        alert("Invalid choice.");
    }
} else {  //Result is Tails
    
    if (isUserChoiceHeads) {
        alert("The flip was tails but you chose heads...you lose!");
    } else if (isUserChoiceTails) {
        alert("The flip was tails and you chose tails...you win!");
    } else {
        alert("Invalid choice.");
    }
}