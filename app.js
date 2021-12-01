// variable name kelvin stands for value 293
const kelvin = 0;
//variable name celsius stands for value of kelvin - 273 which is 293 - 273
const celsius = kelvin - 273;
//variable name fahrenheit stands for the value of celsius multiplied by the division of 9 by 5 in additionn to the number 32;
let fahrenheit = celsius * (9/5) + 32;
// this code rounds down the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
