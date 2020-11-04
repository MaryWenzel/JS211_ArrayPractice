// 1) .length
const cars = ["Ford", "Chevy", "Honda", "Toyota"];
console.log(cars.length)

// 2) .concat()
let moreCars = ["Lexus", "BMW", "Jeep", "Honda"];
// combines the two arrays together
let totalCars = cars.concat(moreCars);
console.log(totalCars.length)

// 3) .indexOf() & .lastIndexOf
console.log(cars.indexOf('Honda')) 
console.log(cars.lastIndexOf('Ford')) 

// 4) .join()
// converts array into string
let stringOfCars = totalCars.join();
console.log(stringOfCars)

console.log(" ")

// 5) .split()
// converts string back into an array
let split = stringOfCars.split();
console.log("totalCars: " + split)

console.log(" ")

// 6) .reverse()
// reverses the array
let carsInReverse = totalCars.reverse();
console.log("carsInReverse: " + carsInReverse)

console.log(" ")

// 7) .sort()
// sorts the array alphabetically 
carsInReverse.sort();
console.log("Alphabetical Order: " + carsInReverse)

console.log(" ")

// 8) .slice()
let removedCars = carsInReverse.slice(2, 4)
console.log("Removed Cars: " + removedCars)

console.log(" ")

// 9) .splice()
carsInReverse.splice(1, 2, "Ford", "Honda")
console.log("Spliced Cars: " + carsInReverse)

console.log(" ")

// 10) .push()
// Push Ford and Honda onto the end of carsInReverse
carsInReverse.push(removedCars[0])
carsInReverse.push(removedCars[1])
console.log("Pushed Cars: " + carsInReverse)

console.log(" ")

// 11) .pop()
carsInReverse.pop();
console.log("Popped Car: " + carsInReverse)

console.log(" ")

// 12) .shift()
console.log("Shifted Car: " + carsInReverse.shift(0))

console.log(" ")

// 13) .unshift()
carsInReverse.unshift("Tesla")
console.log("Unshifted Cars: " + carsInReverse)

console.log(" ")

// 14) .forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
console.log("Number Array: " + numbers)

const addTwo = (num) => {
    return num + 2
}
numbers.forEach(function(item, index, arr) {
    arr[index] = item + 2
})

console.log(" ")
console.log("Number Array Plus 2: " + numbers)