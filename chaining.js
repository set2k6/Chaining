// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers.sort(function (first, second) {return second - first; })
console.log(integers);

integers = integers.filter(function (element) {return element <= 19; })
console.log(integers);

remaining = integers.map(function(element){return (element * 1.5) -1})
console.log(integers);

integers.reduce(function(previous, current){return previous + current});
console.log ("result", integers);