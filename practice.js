
let age = 19;
let country = "UK"; 

if (age > 17 && country == "UK"){
    console.log("Yes, I can serve you")
}
else {
    console.log("you aren't old enough")
}


// challenge 1
let password = "khdjfdhidf"; 
if (password.length < 8)
{
    console.log("password too short")
}
else 
{
    console.log(password)
}


// challenge 2
let num = 45; 
if (num % 3 == 0 || num % 5 == 0)
{
    console.log("This number is divisible by 3 or 5")
}
else
{
    console.log("This number is not divisible by 3 or 5")
}


// challenge 3
let num = 45; 
if (num % 3 == 0 && num % 5 == 0)
{
    console.log("fizz buzz")
}
else if (num % 5 == 0)
{
    console.log("buzz")
}
else if (num % 3 == 0)
{
    console.log("fizz")
}
else 
{
    console.log(num)
}

// challenge 4 -> check if palindrome
let num = 20202; 
if (num == num.toString().split("").reverse().join(""))
{
    console.log("this number is a palindrome")
}


// challenge 5
let time = 7; 
let placeOfWork = "Code Nation";
let townOfHome = "Manchester";

if (time == 7 && townOfHome == "Manchester")
{
    console.log("At 7am, I am at home.")
}
else if (time == 8 && townOfHome == "Witingthon")
{
    console.log("At 8 am, I am commuting.")
}
else if (time == 9 && placeOfWork == "Code Nation")
{
    console.log("At 9am, I am at work.")
}

// challenge 7 - find the index of a last vowel 
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowel = "aeiouy"

// Challenge 8 
let word = "string"; 
firstLetter = word.charAt(0); 
lastLetter = word.charAt(word.length-1); 

if (firstLetter == lastLetter)
{
    console.log(true); 
}
else 
{
    console.log(false); 
}

// Challenge 9 
let num1 = 1; 
let num2 = 2; 
let num3 = num1 + num2; 

if (num3 % 2 == 0)
{
    console.log(num3); 
}
else 
{
    console.log(num1 * num2); 
}


// ============================= FUNCTION 
const sayHi = () => {
    console.log("Hiya")
} 
sayHi()

const coffeeOrder = (size, typeOfDrink) => {
    console.log(`I'd like to order ${size} ${typeOfDrink}`); 
}
coffeeOrder("large", "chocolate")

// change it to arrow function
function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1; 
    }
    else 
    {
        return (n * factorial (n-1))
    }
}
console.log(factorial(33));


// arrow function syntax 
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1; 
    }
    else 
    {
        return (n * factorial (n-1))
    }
}
console.log(factorial(5));


// cash machine 
// check if pin is correct 
const correctPin = (pin) => {
    if (pin == 1234)
    {
        return true;
    }
    else 
    {
        return false;  
    }
}
// console.log(correctPin)

//check if there is enough money in account 
const fundsCheck = (balance) => {
    if (balance <= 200) 
    {
        return true; 
    }
    else 
    {
        return false; 
    }
}

const moneyWithdraw = (pin, withdraw) => {
    if (correctPin(pin))
    {
        if (fundsCheck(withdraw))
        {
           console.log("Here is your money") 
        }
        else 
        {
            console.log("Go away, you're broke!")
        }
    }
    else 
    {
        console.log("Wrong ping, try again")
    }
}

// let correctPin = checkPin(1237); 
// let correctAmount = accBalance(130); 
moneyWithdraw(1234, 40); 

// after you got out £40 from your account, take more money out, £30. 



let foodOrder = ["Anna - sushi", "Karen - crisps", "Gareth - salad"]; 
console.log(foodOrder[2]); 


// change an item in an array 
let foodOrder = ["Anna - sushi", "Karen - crisps", "Gareth - salad"]; 
foodOrder[1] = "Cheewing gum"
console.log(foodOrder[1]) */

// checking the amount of items in array
let foodOrder = ["Anna - sushi", "Karen - crisps", "Gareth - salad"]; 
console.log(foodOrder.length); 


// add to array .push 
let foodOrder = ["Anna - sushi", "Karen - crisps", "Gareth - salad"]; 
console.log(foodOrder.push("Andy - tea"))


// removes last item .pop
let foodOrder = ["Anna - sushi", "Karen - crisps", "Gareth - salad"]; 
foodOrder.pop()
console.log(foodOrder); 

// Challenge 2:
// Create a function that takes a number as a parameter and converts it to a string.
const convertToString = (num) => {
    return num.toString();
}
console.log(typeof convertToString(3))


// Challenge 3:
// Create a function that takes a number as a parameter and adds one. 
const addUp = (num) => {
    return num + 1;  
}
console.log(addUp(4)); 

// Challenge 4:
// Create a function that takes a number as a parameter and takes one off.
const minus = (num) => {
    return num - 1; 
}
console.log(minus(10)); 


// Challenge 5:
// Create a function that takes two numbers as a parameters and adds them together.
const addUp = (num1, num2) =>
{
    return num1 + num2; 
}
console.log(addUp(2,3)); 

// Challenge 6:
// Create a function that takes two numbers as a parameters and takes the second one away from the first one.
const minus = (num1, num2) =>
{
    return num1 - num2; 
}
console.log(minus(10,2)); 


// Challenge 7:
// Create a function that takes two numbers as a parameters and multiplies them together.
const multiplyNum = (num1, num2) =>
{
    return num1 * num2; 
}
console.log(multiplyNum(2,3)); 

// Challenge 8:
// Create a function that takes two numbers as a parameters and divides the first one by the second one.
const divideNum = (num1, num2) =>
{
    return num1 / num2; 
}
console.log(divideNum(10,2)); 

// Challenge 9:
// Create a function that takes a number as a parameter and multiplies it by itself.
const square = (num) =>
{
    return num * num; 
}
console.log(square(2))


// Challenge 10:
// Create a function that takes two numbers and an operator as parameters. It should return a print out of the sum e.g. “1 + 2 = 3” or “4 x 6 = 24”.
function sum (num1, num2, operator) 
{
    if (operator)
    {
        num3 = num1 + num2; 
        return num1 + '+' + num2 + '=' + num3;  
    }
}
console.log(sum(1, 6, '+')); 

// take the string 
let string = "alsjdkfdkhfjlhalkh"; 
for (let i = 0; i < string.length; i++)
{
    console.log(string[i])
}


// ================================ ARRAYS
// list of 3 fav websites 
let favWeb = [
    "w3schools.com", 
    "moodlecloud.com", 
    "github.com"
]; 
let favWeb1 = favWeb.push("stackoverflow.com", "freecodecamp.com")
let favWeb2 = favWeb.pop(); 

console.log(favWeb)

// LOOPS 
const sandwichOrder = (top1, top2, top3, top4, top5) =>
{
    console.log(`Your order is on it's way, chosen toppings: ${top1}, ${top2}, ${top3}, ${top4}, ${top5}`); 
}
sandwichOrder("ham", "cheese", "mushroms", "pulled pork", "salad");


let iceCream = [
    'vanila', 
    'chocollate', 
    'peanut butter'
]
iceCream.unshift('mango', 'apple', 'lemon'); 
console.log(iceCream); 


// generate 6 random numbers between 1-50 
for (let i = 0; i < 6; i++)
{
    console.log(Math.floor(Math.random() * 50 + 1));  
}


for (let i = 0; i <= 9; i++)
{
    console.log(i); 
}


for (let i = 9; i >= 0; i--)
{
    console.log(i); 
}


let favDrink = [
    'coke', 
    'fanta', 
    'tonic', 
    'red bull'
]; 

for (i = 0; i < favDrink.length; i++)
{
    console.log(favDrink[i]); 
}


let favFilms = [
    "Top Gun", 
    "Lion King", 
    "The joungle book", 
    "Dirty Dancing", 
    "Back to Future"
]; 

favFilms.push("Harry Potter", "Hobbit"); 

for (i = 0; i < favFilms.length; i++)
{
    console.log(favFilms[i])
}


let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Spade";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*3)];
}
console.log(currentCard);


let favFilms = [
    "Top Gun", 
    "Lion King", 
    "Ghostbusters", 
    "The joungle book", 
    "Dirty Dancing", 
]; 

for (let i = 0; i < favFilms.length; i++)
{
    console.log(favFilms[i]); 
}

const filmCheck = (filmName) => {
    if (favFilms[2] == filmName)
    {
        console.log("yey, it's Ghostbusters")
    }
    else 
    {
        console.log("boo, we want Ghostbusters")
    }
}
filmCheck("Ghostbusters"); 

// ==================================== OBJECTS 
const checkLikes = (game1, game2) => {
    if (game1 == "Nintendo" && game2 == "Mario Kart")
    {
        console.log("Let's play next week")
    }
    else
    {
        console.log("you're missing out")
    }
}
checkLikes("Nintendo", "Mario")


let person = {
    name: 'Anna', 
    age: 34
}
console.log(person.name); 
console.log(person['name']); 


const deliveryStrategy = {
    averageDay: "mild insult needed - you oaf", 
    badDay: "The eyes are open, the mouth moves, but Mr Brain has long since departed, hasn't he?"
}

let day = 'bad'; 
let insult = 'none'; 

if (day == 'bad') {
    insult = deliveryStrategy.badDay
    console.log(deliveryStrategy.badDay); 
}
else if (day == 'average'){
    insult = deliveryStrategy['averageDay']
    console.log(deliveryStrategy['averageDay'])
}


let person = {
    name: 'Anna', 
    age: 21, 
    favSongs: [ 
        "Man in the Mirror - Michael Jackson", 
        "Get busy living - Goldfish", 
        "Wide open spaces - Dixy Chicks"
    ],
    sayHi (){
        console.log(`Hello my name is ${this.name}`)
    }
}; 
// console.log(person['favSongs']); 

// add fav biscuits to person objects
person.biscuits = ['chocolate', 'shortbread']; 
// console.log(person.biscuits); 

person.sayHi(); 


let checkAlarm = {
    weekendAlarm: "no alarm needed", 
    weekdayAlarm: "get up at 7am"
}

let day = 'Saturday'; 
let alarm = 'none';

if (day == 'Saturday' || day == 'Sunday') 
{
    alarm = checkAlarm['weekendAlarm']; 
    console.log(checkAlarm['weekendAlarm']); 
}
else // if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday')
{
    alarm = checkAlarm['weekdayAlarm']; 
    console.log(checkAlarm['weekdayAlarm']); 
}

 
const pet = {
    name: 'Missy', 
    typeOfPet: 'cat', 
    age: 2, 
    colour: 'black', 
    eat (){
        console.log(`${this.name} is eating`)
    }, 
    drink () {
        console.log(`${this.name} is drinking`)
    }
}; 
pet.eat(); 
pet.drink(); 


let item1 = "string"; 
let item2 = 23; 
let item3 = true; 

let item4 = ['sun', 'moon', 'mars', 'venus']
item4.push('earth'); 

for (let i = 0; i < item4.length; i++)
{
    console.log(item4[i]); 
}


// Create a function that when called asks you to
// withdraw an amount. Balance should reduce as
// appropriate.
 
let balance = 100; 
const withdrawCash = (firstWithdraw) => {
  if (firstWithdraw <= balance ){
    console.log('Here is your money')
    balance -= firstWithdraw;
  }
  else {
    console.log('bugger off')
  }
}
withdrawCash(50); 
withdrawCash(80); 


// naughts and crosses 

let space1 = 'x'
let space2 = 'o'
let space3 = 'x'
let space4 = 'x'
let space5 = 'o'
let space6 = 'o'
let space7 = 'o'
let space8 = 'x'
let space9 = 'o'

console.log("  | | ")
console.log(` ${space1}|${space2}| `)
console.log("  | | ")
console.log("--------")
console.log("  | | ")
console.log(` ${space3}|${space4}| `)
console.log("  | | ")
console.log("--------")
console.log("  | | ")
console.log(` ${space5}| | `)
console.log("  | | ")


const gameNaughtsCrosses = {
    playerX: 'x', 
    playerO: 'o', 
    grid: [['', '', ''], ['', '', ''], ['', '', '']], 
    // 4. Write a function within your object that when run, will display what your naughts and crosses table looks like (based on the values in grid)
    displayGrid (){
        console.log(this.grid[0]); 
        console.log(this.grid[1]); 
        console.log(this.grid[2]); 
    }, 
    // 5. Write a function within your object that takes a parameter of a row, column and a value of either ‘x’ or ‘o. The function will update the value in grid for that row and column. To check this is working you can use your function from part 4.
    item1 (row, column, value){
        if ()
    }
    // 6. Write a function within your object that takes three parameters and checks if all these values are the same. It should also make sure it’s an x or an o. This should return true if they are all x’s or o’s and false if they are different or all ‘ ’s.
    // 7. Write a function within your object that checks all the possible win conditions (rows, columns and diagonals), hint, you can use for loops to help with this.
}
gameNaughtsCrosses.displayGrid(); 
*/ 

// ======================= OOP 
// cars 

// This will allow you to store information of: car, registration number, number of hours parked and total, amount charged. (Say £1.50 per hour?). 
// The first car entered the car park, parked for 5 hours and ready to pay. Display this information so the driver can pay for his/her parking fee.


// Let’s create a class called Cars for a car parking company. This will allow you to store information of: car registration number, number of hours parked and total amount charged. (Say £1.50 per hour?) The first car entered the car park, parked for 5 hours and ready to pay. Display this information so the driver can pay for his/her parking fee. 


// Add a subclass for staff, so that staff can provide their staff number, and credits they have left to pay for the
// car park fees. Given a staff member parked for 5 hours as before, show how much it will be charged and remaining balance.


class Cars {
    constructor (regNum) {
      this.regNum = regNum; 
      this.hours = 0; 
      this.GBPCharge = 0.00; 
    }
    get registarionNr() {
      return this.regNum; 
    }
    get numOfHrParked() {
      return this.hours; 
    }
    get totalGBPCharge() {
      return this.GBPCharge; 
    }
    increaseHrPay() {
      this.hours++; 
      this.GBPCharge += 1.50; 
    }
  } 
  
  const payment = (regNum, hours) => {
    const car1 = new Cars(regNum);
    
    for (let i = 0; i < hours; i++)
    {
      car1.increaseHrPay(); 
    }
    console.log(`Notice: you parked for ${car1.numOfHrParked} hours and your charge is £${car1.totalGBPCharge}`)
  }
  payment("Herbie", 5);
  
  class Staff extends Cars {
    constructor(regNum, staffNum) {
      super(regNum); 
      this.staffNum = staffNum; 
      this.credit = 100.00; 
    }
    get staffNumber() {
      return this.staffNum; 
    }
    get creditLeft() {
      return this.credit; 
    }
    reduceCredit () {
      this.credit -= this.GBPCharge; 
    }
  }
  
  const staffPayment = (regNum, staffNum, hours) => {
    const car2 = new Staff(regNum, staffNum); 
    
    for (let i = 0; i < hours; i++)
    {
      car2.increaseHrPay(); 
    }
    // solution 1: 
    car2.reduceCredit(); 
  
    // solution 2: 
    // let carBalance = car2.creditLeft - car2.totalGBPCharge; // ${carBalance}
  
    console.log(`Notice: you parked for ${car2.numOfHrParked} hours and your charge is £${car2.totalGBPCharge}, your remaining balance is ${car2.creditLeft}`)
  }
  staffPayment("The Love Bug", "12345", 8); 


// Cyber Pet - User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc. There should be consequences across the board – if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty, that kind of thing. 

// ================================  ERROR 

//validation check 
var x = 99;
 try {
    if(x < 5) throw "too low";
    if(x > 10) throw "too high, re-enter again";
    }
catch(err) {
    console.log(err);
 }

 // reference error 
 var x; 
 try {
    x = y + 1; // y is not declared 
 }
 catch(err) {
    console.log(err.name); 
 }

 // syntax error 
 try {
    eval ("alert('Hello)"); // Missing '
 }
 catch (err) {
    console.log(err.name); 
 }
 
 // extended syntax 
 
 try {
 ... try to execute the code ...
} catch(e) {
 ... handle errors ...
} finally {
 ... execute always ...
}
*/ 


// function that takes a string and returns it written backwards
const returnStringBackwards = (string) => {
    return string.split('').reverse().join(''); 
}
console.log(returnStringBackwards("gabehcoud"))


// Declare a variable that stores an array. This array should have three items and each of these items should be an array with 3 items. Log the 3rd item of the 2nd item to the console.
let storeArray = [
    ['item1', 'item2', 'item3'], 
    ['item4', 'item5', 'item6'], 
    ['item7', 'item8', 'item9']
]
console.log(storeArray[1][2]); 


// check if a given string is an anagram of a palindrome and return true if it is

console.log(string.split('').reverse().join('')); // check if palindrome == 2 pairs of char and 1 odd char 
console.log(string.split('').sort().join('')) // check if anagram 

checkAnagramOfPalindrome = (word) => {
    return word; 
}
console.log(checkAnagramOfPalindrome('aao'))

// convert objet into array
const convertToArray = (word) => {

    // create an object, need key value pairs, eg word = 'aao', so a: 1, a:1,  o: 1 
    word = {
        // a: 1, 
        // a: 1, 
        // o: 1, 
    }; 

    // conver object into array in order to loop through it 
    const keys = Object.keys(word); 
    console.log(keys);

    // loop through keys to see how many are the same letters 
    for (let i = 0; i < keys.length; i++){
        console.log(keys[i], word[keys[i]])
    }
}
*/ 


// for in and for of loops 
let array = ["alpha", "bravo", "charlie"]; 
let object = {
    a: 'a', 
    b: 'b', 
    c: 'c'
}

// can't ise to loop through objects
for (let item of array) {
    console.log(item) // values of the array
}

// in is for objects
for(let item in object) {
    console.log(item) // keys of the objects
}
*/ 

// write a function that takes an array as a parameter and returns a random item out of the array

let myArray = ['item1', 'item2', 'item3']; 
console.log(myArray.sort()); 

let myArray = [45, 4, 5, 6, 7, 23]; 
let myArray1 = myArray.map(myFunction); 
function myFunction(value, index, array) {
    return value * 2; 
}
console.log(myArray1)
