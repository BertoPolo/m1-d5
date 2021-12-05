// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

const giveMeRandom = function (n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};

const checkArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i] + " is bigger than 5");
      sum = sum + arr[i];
      //   sum += arr[i];
    } else {
      console.log(arr[i] + " is not bigger than 5");
    }
  }
  console.log("The sum of the numbers greater than 5 is " + sum);
};

checkArray(giveMeRandom(5));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart = [
  {
    id: 321,
    name: "Bluetooth Headphones",
    price: 100,
    quantity: 2,
  },
  {
    id: 123,
    name: "Laptop",
    price: 1000,
    quantity: 1,
  },
  {
    id: 213,
    name: "USB Drive",
    price: 20,
    quantity: 5,
  },
];

const shoppingCartTotal = function () {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total = total + shoppingCart[i].price * shoppingCart[i].quantity;
    // total += (shoppingCart[i].price * shoppingCart[i].quantity)
  }
  return total;
};

console.log(shoppingCartTotal());

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

const newItem = {
  id: 132,
  name: "Wireless Keyboard",
  price: 30,
  quantity: 2,
};

const addToShoppingCart = function (itemToAdd) {
  const newLength = shoppingCart.push(itemToAdd);
  return newLength;
};

console.log(addToShoppingCart(newItem));

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

const maxShoppingCart = function (cart) {
  let mostExpensiveItem = cart[0];
  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > mostExpensiveItem.price) {
      mostExpensiveItem = cart[i];
    }
  }
  return mostExpensiveItem;
};

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = function (cart) {
  let lastItem = cart[cart.length - 1];
  return lastItem;
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

const loopUntil = function (n) {
  let counter = 0;

  while (counter !== 3) {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random > n) {
      counter++;
    } else {
      counter = 0;
    }
  }
};

console.log(loopUntil(8));

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

const average = function (arr) {
  const numbersInArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbersInArr.push(arr[i]);
    }
  }
  let sum = 0;
  for (let j = 0; j < numbersInArr.length; j++) {
    sum += numbersInArr[j];
  }
  return sum / numbersInArr.length;
};

console.log(average(["strive", 5, 2, "4", { name: "school" }, 8, 9]));

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

const longest = function (arr) {
  let longestString = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
};

console.log(longest(["strive", "school", "developer", "student"]));

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

const antiSpam = function (emailContent) {
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    return false;
  } else {
    return true;
  }
};

console.log(antiSpam("A SPAM MESSAGE"));
console.log(antiSpam("Personal invitation"));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

const howManyDays = function (selectedDate) {
  let today = new Date();
  let difference = today - selectedDate;
  return Math.floor(difference / (1000 * 60 * 60 * 24));
};

console.log(howManyDays(new Date("2011-05-30")));

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const matrixGenerator = function (x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      matrix.push(i.toString() + j.toString());
    }
  }
  let charsPerRow = matrix.length / y;
  for (let z = 0; z < y; z++) {
    console.log(matrix.slice(z * charsPerRow, (z + 1) * charsPerRow));
  }
};

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
