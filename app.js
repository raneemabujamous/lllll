let getForm = document.getElementById("form");
let getTable = document.getElementById("table");
let tbody = document.getElementById("tbody");
const Fruit = [];
let foodId = 0;
function Food(foodName, type, price) {
  foodId++;
  this.foodName = foodName;
  this.type = type;
  this.price = price;
  Fruit.push(this);
}
console.log(Fruit, "Fruit");
Food.prototype.renderTable = function () {
  console.log(this.foodName);
  let row = document.createElement("tr");
  getTable.appendChild(row);

  let tdElement = document.createElement("td");
  row.appendChild(tdElement);
  tdElement.textContent = foodId;

  let tdElement2 = document.createElement("td");
  row.appendChild(tdElement2);
  tdElement2.textContent = this.foodName;

  let tdElement3 = document.createElement("td");
  row.appendChild(tdElement3);
  tdElement3.textContent = this.type;

  let tdElement4 = document.createElement("td");
  row.appendChild(tdElement4);
  tdElement4.textContent = this.price;
};

getForm.addEventListener("submit", handleSubmitting);

function handleSubmitting(event) {
  event.preventDefault();
  let foodname = event.target.name.value;
  let foodtype = event.target.type.value;
  let foodprice = event.target.price.value;
  console.log(foodname, foodtype, foodprice);
  let newFruit = new Food(foodname, foodtype, foodprice);
  setToLocalStorage();
  newFruit.renderTable();
}
function setToLocalStorage() {
  let convertArr = JSON.stringify(Fruit);
  localStorage.setItem("data", convertArr);
}

function getToLocalStorage() {
  let data = localStorage.getItem("data");
  let newData = JSON.parse(data);
  if (newData) {
    for (let i = 0; i < newData.length; i++) {
      let reInstance = new Food(
        newData[i].foodName,
        newData[i].type,
        newData[i].price
      );
      reInstance.renderTable();
    }
  }
}
getToLocalStorage();
