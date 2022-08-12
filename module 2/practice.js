// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let totalPrice = message.split(" ").length * pricePerWord;

//   console.log(totalPrice);

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function calculateTotal(number) {
//   // Change code below this line
//   let summa = 0;

//   for (let i = 1; i <= number; i += 1) {
//     summa += i;
//   }
//   return summa;

//   // Change code above this line
// }

// calculateTotal(3);
// calculateTotal(7);

// function findLongestWord(string) {
//   // Change code below this line
//   const stringToArr = string.split(" ");
//   let longestWord = stringToArr[0];

//   for (let i = 0; i < stringToArr.length; i += 1) {
//     if (stringToArr[i].length > longestWord.length) {
//       longestWord = stringToArr[i];
//     }
//   }

//   return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const numbersNew = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] > value) {
//       numbersNew.push(numbers[i]);
//     }
//   }
//   return numbersNew;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let arrayCombi = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       arrayCombi.push(array1[i]);
//     }
//   }
//   return arrayCombi;

//   // Change code above this line
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   let newObject = [];
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObject.push(key);
//       console.log(newObject);
//     }
//   }
//   propCount = newObject.length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   return keys.length;
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   // return propCount;
//   // // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));
