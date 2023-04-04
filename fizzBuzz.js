//Write a program that counts from 1 to 50 in fizzbuzz fashion.
//To do so, loop from 1 to 50(inclusive).Each time through, 
//if the number is evenly divisible by 3, say ‘fizz’. 
//If the number is evenly divisible by 5, say ‘buzz’. 
//If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’.Otherwise, say the number.

// Write your solution below this line:
let  numbers = []

for (let i=1; i < 50; i++) {
    numbers[i-1] = i
}

for (let j = 1; j < numbers.length; j++) {
    if ((j%3==0) && (j%5==0)) console.log("fizzbuzz")
    else if (j%3==0) console.log("fizz")
    else if (j%5==0) console.log("buzz")
    else console.log(j)
}

