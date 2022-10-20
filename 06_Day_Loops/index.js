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


// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
console.log("for of loop");

const numbers = [2, 5, 8, 11, 14];
let sum = 0;
for (const nums of numbers) {
    console.log(nums);
}

for (const nums of numbers) {
    sum = sum + nums;
}
console.log(sum);

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}
console.log(countries);
console.log(newArr);


// break
// Break is used to interrupt a loop.
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i);
}           // 0 1 2
// The above code stops if 3 found in the iteration process.

// continue
// We use the keyword continue to skip a certain iterations.
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
}           // 0 1 2 4 5
