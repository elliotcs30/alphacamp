// A5: Debugging 小練習
// Q1: 除錯練習
//calculate the area of a rectangle

let length = 12
let width = 10
// let area_rectangle = width * width
let area_rectangle = width * length
console.log(area_rectangle)

// Q2: 
//print "hello world" for 10 times
let x = 1

// while (x < 10) {
while (x <= 10) {
    console.log('hello world')
    x = x + 1
}

// Q3:
//Write a program that prints the numbers from 1 to 30. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
for (let x = 1; x <= 30; x++) {
    if (x % 15 == 0) {
        console.log('FizzBuzz')
    } else if (x % 5 == 0) {
        console.log('Buzz')
    } else if (x % 3 == 0) {
        // console.log('Fizz')'
        console.log('Fizz')
    } else {
        console.log('x')
    }
}

// Q4:
//Write a program that prints the numbers from 1 to 30. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
for (let x = 1; x <= 30; x++) {
    if (x % 15 == 0) {
        console.log('Fizzbuzz')
    } else if (x % 5 == 0) {
        console.log('Buzz')
    } else if (x % 3 == 0) {
        console.log('Fizz')
    } else {
        console.log(x)
    }
}
