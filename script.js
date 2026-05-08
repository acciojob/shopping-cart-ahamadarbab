//your code here
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addBtn = document.querySelector("button");
const tableBody = document.querySelector("tbody");
const grandTotalEl = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", function () {
	let name = nameInput.value.trim();
	let price = parseFloat(priceInput.value);

	if(name === "" || isNaN(price) || price <= 0) {
		return;
	}

	const row = document.createElement("tr");
	
	const nameCell = document.createElement("td");
	nameCell.setAttribute("id", "item");
	nameCell.innerText = name;

	const priceCell = document.createElement("td");
	priceCell.setAttribute("id", "price");
	priceCell.innerText = price;

	row.appendChild(nameCell);
	row.appendChild(priceCell);

	tableBody.appendChild(row);

	total = total + price;
	grandTotalEl.innerText = total;

	nameInput.value = "";
	priceInput.value = "";
})