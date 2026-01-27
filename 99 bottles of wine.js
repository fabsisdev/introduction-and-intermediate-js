var bottles = 99;

function beerSong() {
    while (bottles >= 1) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down, pass it around, " + bottles + " bottles of beer on the wall.");
        bottles--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}
