var person1 = prompt("Enter the first person's name: ");
var person1FirstChar = person1.slice(0,1);
var person1RestOfName = person1.slice(1, person1.length);

var person2 = prompt("Enter the second person's name: ");
var person2FirsrChar = person2.slice(0,1);
var person2RestOfName = person2.slice(1, person2.length);

var loveScore = Math.floor(Math.random() * 100) + 1;

person1FirstChar = person1FirstChar.toUpperCase();
person1RestOfName = person1RestOfName.toLowerCase();
person1 = person1FirstChar + person1RestOfName;

person2FirsrChar = person2FirsrChar.toUpperCase();
person2RestOfName = person2RestOfName.toLowerCase();
person2 = person2FirsrChar + person2RestOfName;

if (loveScore > 80) {
    alert ("The love score between " + person1 + " and " + person2 + " is: " + loveScore + "% You are meant to beee ♥");
} 
if  (loveScore > 30 && loveScore < 80) {
    alert ("The love score between " + person1 + " and " + person2 + " is: " + loveScore + "%");    
}
else {
    alert("The love score between " + person1 + " and " + person2 + " is: " + loveScore + "% Sorry, you're not compatible.")
}