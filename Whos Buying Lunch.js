var friendsArray = ["Alec", "Mary", "Jonathan", "Elizabeth", "Fabiola", "Ricardo", "Maia", "Maggie"];
var pickName;

function whosBuyingLunch() {
    pickName = Math.floor(Math.random() * friendsArray.length);
    
    return alert(friendsArray[pickName] + " is going to buy lunch today!");
}

whosBuyingLunch();