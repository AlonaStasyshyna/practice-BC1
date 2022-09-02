//Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
//(Потрібно мутувати даний масив, створювати новий не потрібно)

// const products = [
//   {
//     id: "sku1",
//     qty: 1,
//   },
//   {
//     id: "sku2",
//     qty: 2,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku1",
//     qty: 6,
//   },
//   {
//     id: "sku1",
//     qty: 8,
//   },
//   {
//     id: "sku2",
//     qty: 19,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   },
//   {
//     id: "sku1",
//     qty: 22,
//   },
// ];

// function getNewProducts(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     for (let j = i - 1; j >= 0; j -= 1) {
//       if (arr[j].id === arr[i].id) {
//         arr[i].qty += arr[j].qty;
//         arr.splice(j, 1);
//         i -= 1;
//       }
//     }
//   }
// }

// getNewProducts(products);
// console.log(products);

// __________________________________________________________//
// // // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).
// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)

// class User {
//   #name;
//   #surname;

//   constructor({ name, surname }) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   year;

//   constructor({ name, surname, year }) {
//     super({ name, surname });
//     this.year = year;
//   }

//   getCourse() {
//     const date = new Date();
//     const currentYear = date.getFullYear();
//     const course = currentYear - this.year;

//     if (course > 5) {
//       return "Студент - випускник!";
//     }

//     return course;
//   }
// }

// const student = new Student({
//   name: "Петрик",
//   surname: "Пяточкин",
//   year: 2019,
// });

// console.log(student.getFullName());
// console.log(student.getCourse());
