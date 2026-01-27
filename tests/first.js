/*console.log("Welcome Apna college")

const student = {
    fullname: "rahul kumar",
    age: 20,
    cgpa: 8.2,
    ispass: true,
};

console.log(student["cgpa"])

const product ={
  title: "Ball pen",
  rating: 4,
  offer: 5,
  price: 270,
}

console.log(product)
*/

let gameNum = 30;
let userNum = prompt("Guess the game number: ");

while( userNum != gameNum ){
   userNum =  prompt("You entered the wrong number. Guess Again");

}
console.log("Congralutions you entered the correct number");
