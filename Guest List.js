var guestList = ["Alec", "Mary", "Jonathan", "Elizabeth"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome, " + guestName);
} else {
    alert("Sorry, maybe next time.")
}
