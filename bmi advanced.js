function bmiCalculator(weight, height) {
    bmi = Math.round(weight / (height ** 2));
    var interpretation;
    if (bmi < 18.5) {
    interpretation = console.log("Your BMI is " + bmi + ", so you're underweight.");
}
if (bmi > 18.5 && bmi < 24.9) {
    interpretation = console.log("Your BMI is " + bmi + ", so you have a normal weight.");
}
if (bmi > 24.9) {
    interpretation = console.log("Your BMI is " + bmi + ", so you are overweight.");
}
    
    return interpretation;
}
var bmi = bmiCalculator (200, 1.8);

