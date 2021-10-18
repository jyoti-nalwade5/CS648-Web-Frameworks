//STEP 1
var favMovies = ["Tom & Jerry", "Dr Strange", "XXX", "Flash", "Wonder Women"];
    window.console.log(favMovies[1]);
    window.console.log("\n");
//STEP 2
var movies = new Array(5);
movies[0] = "Tom & Jerry";
movies[1] = "Dr. Strange";
movies[2] = "XXX";
movies[3] = "Flash";
movies[4] =  "Wonder Women";
window.console.log(movies[0]);
window.console.log("\n");
//STEP 3
var movies1 = new Array(5);
movies1[0] = "Tom & Jerry";
movies1[1] = "Dr. Strange";
movies1[2] = "XXX";
movies1[3] = "Flash";
movies1[4] =  "Wonder Women";

movies1.splice(2, 0, "Thor");
window.console.log(movies1.length);
window.console.log("\n");
//STEP 4
var favMovies1 = [];
favMovies1[0] = "Tom & Jerry";
favMovies1[1] = "Dr. Strange";
favMovies1[2] = "XXX";
favMovies1[3] = "Flash";
favMovies1[4] =  "Wonder Women";

delete favMovies1[0];
window.console.log(favMovies1);
window.console.log("\n");
//STEP 5
var favMovies2 = [];
favMovies2[0] = "Tom & Jerry";
favMovies2[1] = "Dr. Strange";
favMovies2[2] = "XXX";
favMovies2[3] = "Flash";
favMovies2[4] = "Wonder Women";
favMovies2[5] = "Iron Man";
favMovies2[6] = "Thor";

for(let i=0; i<favMovies2.length; i++){
    window.console.log(favMovies2[i]);
}

//STEP 6
window.console.log('\nQuestion 6 Answer: ');
var favMovies3 = [];
favMovies3[0] = "Tom & Jerry";
favMovies3[1] = "Dr. Strange";
favMovies3[2] = "XXX";
favMovies3[3] = "Flash";
favMovies3[4] = "Wonder Women";
favMovies3[5] = "Iron Man";
favMovies3[6] = "Thor";

for (i in favMovies3) {
        window.console.log(favMovies3[i]);
}
//STEP 7
window.console.log('\nQuestion 7 Answer: ');
var favMovies4 = [];
favMovies4[0] = "Tom & Jerry";
favMovies4[1] = "Dr. Strange";
favMovies4[2] = "XXX";
favMovies4[3] = "Flash";
favMovies4[4] = "Wonder Women";
favMovies4[5] = "Iron Man";
favMovies4[6] = "Thor";
favMovies4.sort();
for (i in favMovies4) {
        window.console.log(favMovies4[i]);
}
window.console.log("\n");
//STEP 8
var favMovies5 = [];
favMovies5[0] = "Tom & Jerry";
favMovies5[1] = "Dr. Strange";
favMovies5[2] = "XXX";
favMovies5[3] = "Flash";
favMovies5[4] = "Wonder Women";
favMovies5[5] = "Iron Man";
favMovies5[6] = "Thor";

var leastFavMovies = [];
leastFavMovies[0] = "Jaws";
leastFavMovies[1] = "F9";
leastFavMovies[2] = "Super Man";

window.console.log("Movies I like:\n\n");
for (let i = 0; i < favMovies5.length; i++) {
    window.console.log(favMovies5[i]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let i = 0; i < leastFavMovies.length; i++) {
    window.console.log(leastFavMovies[i]);
}
window.console.log("\n");
//STEP 9
var movies = favMovies5.concat(leastFavMovies);
movies.reverse();
for (let i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
window.console.log("\n");
//STEP 10

window.console.log(movies.pop());
