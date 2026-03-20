/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "pasan";
collection[collection.length] = "last";
console.log(collection);
console.log(collection.length);
collection[9] = "ten slot";
console.log(collection);
console.log(collection[8]);
