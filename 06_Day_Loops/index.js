// // Loops:
// // for loop,

// for(let i = 0; i <= 5; i++ ){
//     console.log(i);
// }

// console.log("Now, reverse counting");

// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }


// // Creating a new array based on the existing array

// const states = ["Punjab", "Rajasthan", "Karnataka", "Himachal Pradesh"];
// const newStates = [];

// for(let i = 0; i < states.length; i++){
//     newStates.push(states[i].toLocaleUpperCase());
// }
// console.log("Normal States array : ", states);
// console.log("Capitalize array : ", newStates);

// const numbers = [2, 4, 6, 8];
// const newNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     newNumbers.push(numbers[i] ** 2);
// }
// console.log("Normal array : ", numbers);
// console.log("Square of the above array : ", newNumbers);

// // Adding all elements in the array

// const num = [1, 2, 3, 4, 5];
// let sum = 0;

// for(let i = 0; i < num.length; i++){
//     sum = sum + num[i];
// }
// console.log("Sum of array elements are : ", sum);


// while loop & do while loop,
console.log("while loop");
let i = 10;
while(i >= 0){
    console.log(i);
    i--;
}

// do while loop, it will execute once, whether condition is true or not.
console.log("do while loop");
let j = 0;
do{
    console.log(j);
    j++;
}while(j <= 1)
