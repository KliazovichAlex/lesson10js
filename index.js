const form = document.querySelector("#form");
const data = document.querySelectorAll("input");
const tab = document.querySelector(".tab");
const away = document.querySelector("#away");
const arr = [];
function User(name, age, date, money, check) {
  this.name = name;
  this.age = age;
  this.date = date;
  this.money = money;
}
console.log(data, form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let check = "";
  arr.push(
    new User(data[0].value, data[1].value, data[2].value, data[3].value)
  );
  console.log(arr);
  write();
  counter();
  countMoney(arr);
});

function write() {
  tab.innerHTML = "";

  arr.forEach((element) => {
    if (!element.check) {
      tab.innerHTML += `
      <tr class="card">
      <td class="first"><input class="checkbox" type="checkbox"></td>
      <td id="userName">${element.name}</td>
      <td>${element.age}</td>
      <td>${element.date}</td>
      <td>${element.money}</td>
      </tr>
      `;
    }
  });
}

away.addEventListener("click", () => {
  toFree();
});

function toFree() {
  const selectedCheckBoxes = [
    ...document.querySelectorAll("input.checkbox:checked"),
  ];
  selectedCheckBoxes.forEach((element) => {
    const card = element.closest(".card");
    const name = card.querySelector("#userName").textContent;
    arr.forEach((val, index) => {
      if (name == val.name) {
        card.innerHTML = "";
        arr.splice(index, 1);
        write();
      }
    });
  });
  countMoney(arr);
  counter();
}

function counter() {
  const count = document.querySelector(".count");
  count.innerHTML = "";
  count.innerHTML += `Колличество сотрудников: ${arr.length}`;
}

function countMoney(array) {
  let sumOfMoney = 0;
  const moneyResult = document.querySelector(".countMoney");
  array.forEach((element) => {
    sumOfMoney += +element.money;
  });
  moneyResult.innerHTML = "";
  moneyResult.innerHTML += `СУММА$: ${sumOfMoney}`;
}
