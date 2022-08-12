const warning = 'WARNING ALL SYSTEMS ARE GOING DOWN';

console.log(warning); // prints to the console  the warning message
console.warn(warning); // prints to the console with a warning icon
console.error(new Error (warning)); // prints to the console with an error icon
console.assert(warning); // prints to the console with an error icon if the condition is false
console.table(warning); // prints to the console a table with the warning message

