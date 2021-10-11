var coinFlip;

for(let i=0; i<10; i++ ){

coinFlip = Math.floor(Math.random()*2);
window.console.log(coinFlip == 0 ? 'Heads' : 'Tails');

}