var coinFlip;

do {
    coinFlip = Math.round(Math.random() *2);
    console.log(coinFlip == 0 ? 'Heads' : 'Tails');
} while (coinFlip != 1)