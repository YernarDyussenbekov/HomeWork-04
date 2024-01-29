// //1
const age = 20;
//?
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
const result = checkAge(age);
alert(result);

//||
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

//2
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n >= 1 && n % 1 == 0) {
  alert(pow(x, n));
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}

//3
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
);

//4

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr);

// //5
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((user) => user.name);

// alert(names.join(", "));

// //6
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => ({
//   id: user.id,
//   fullName: `${user.name} ${user.surname}`,
// }));

// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);

//7
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // 28
