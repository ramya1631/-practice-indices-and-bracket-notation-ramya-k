//Task 1: Create a multi-dimensional array with nine books and/or movies of your choice.

let library = [
  ["Bhagavad Gita", "Inception", "1984"],
  ["Harry Potter", "The Dark Knight", "Chiranjeevi"],
  ["The Matrix", "Aravinda", "Interstellar"]
];

//Task 2: Access and log all the elements in the array using bracket notation with numbers.

console.log(library[0][0]); // "Bhagavad Gita"
console.log(library[0][1]); // "Inception"
console.log(library[0][2]); // "1984"

console.log(library[1][0]); // "Harry Potter"
console.log(library[1][1]); // "The Dark Knight"
console.log(library[1][2]); // "Chiranjeevi"

console.log(library[2][0]); // "The Matrix"
console.log(library[2][1]); // "Aravinda"
console.log(library[2][2]); // "Interstellar"


//Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item.

let row = 0;
let item = 0;
console.log(library[row][item]); // "Bhagavad Gita"

row = 0;
item = 1;
console.log(library[row][item]); // "Inception"

row = 1;
item = 0;
console.log(library[row][item]); // "Harry Potter"

row = 1;
item = 1;
console.log(library[row][item]); // "The Dark Knight"

row = 2;
item = 2;
console.log(library[row][item]); // "Interstellar"



//Task 4: Write a loop that prints all the items on the second shelf.
for (let i = 0; i < library[1].length; i++) {

  console.log(library[1][i]);
}