// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let min = array[0], max = array[1]

for (let i = 2; i < array.length; i++) {
    if (array[i] < min) min = array[i]
    if (array[i] > max) max = array[i]
}
console.log(min, max)