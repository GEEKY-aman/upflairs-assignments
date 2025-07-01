
let list = document.getElementById("list");
let balance = document.getElementById("balance");
let income = document.getElementById("income");
let expense = document.getElementById("expense");
let form = document.getElementById("form");
let textInput = document.getElementById("text");
let amountInput = document.getElementById("amount");


let allData = JSON.parse(localStorage.getItem("allData")) || [];


showItems();


form.addEventListener("submit", function (e) {
  e.preventDefault();


  let item = {
    id: Date.now(),             
    text: textInput.value,
    amount: Number(amountInput.value)
  };

  allData.push(item);           
  saveItems();                  
  showItems();                 
  form.reset();                 
});


function showItems() {
  list.innerHTML = "";          

  let totalIncome = 0;
  let totalExpense = 0;

  allData.forEach(function (item) {
    let li = document.createElement("li");

    
    if (item.amount >= 0) {
      li.style.color = "green";
      totalIncome += item.amount;
    } else {
      li.style.color = "red";
      totalExpense += item.amount;
    }

    
    li.innerHTML = `
      ${item.text} ₹${item.amount}
      <button onclick="deleteItem(${item.id})">❌</button>
    `;

    list.appendChild(li); 
  });

  
  let total = totalIncome + totalExpense;
  balance.innerText = "₹" + total;
  income.innerText = "₹" + totalIncome;
  expense.innerText = "₹" + Math.abs(totalExpense);
}


function deleteItem(id) {
  allData = allData.filter(function (item) {
    return item.id !== id;
  });

  saveItems();
  showItems();
}


function saveItems() {
  localStorage.setItem("allData", JSON.stringify(allData));
}
