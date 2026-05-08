//your code here
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addBtn = document.getElementById("add");
const tableBody = document.getElementById("table-body");
const grandTotalEl = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", function () {
	let name = nameInput.value.trim();
	let price = parseFloat(priceInput.value);

	// Input valid check
	if(name === "" || isNaN(price) || price <= 0) {
		return;
	}

	// Create row
	const row = document.createElement("tr");

	// item cell
	const nameCell = document.createElement("td");
	nameCell.setAttribute("id", "item");
	nameCell.innerText = name;

	// price cell
	const priceCell = document.createElement("td");
	priceCell.setAttribute("id", "price");
	priceCell.innerText = price;

	// append cells
	row.appendChild(nameCell);
	row.appendChild(priceCell);

	// add row to table
	tableBody.appendChild(row);

	// update total
	total = total + price;
	grandTotalEl.innerText = `Grand Total: ${total}`;

	// Clear inputs
	nameInput.value = "";
	priceInput.value = "";
})