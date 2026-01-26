function isLeap(year){
    var year = year;
    var result;
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                result = console.log("Leap year.");
            } else {
                result = console.log("Not leap year.");
            }
        } else {
            result = console.log("Leap year.");
        }
    } else {
        result = console.log("Not leap year.");
    }
    return result;
}

isLeap(2000);