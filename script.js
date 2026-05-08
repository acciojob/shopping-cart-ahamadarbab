//your code here
const nameInput = document.getElementById("item-name-input");
const qtyInput = document.getElementById("item-qty-input");
const priceInput = document.getElementById("item-price-input");
const addBtn = document.getElementById("add");
const tableBody = document.getElementById("table-body");
const grandTotalEl = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", function () {
	let name = nameInput.value.trim();
	let qty = parseInt(qtyInput.value);
	let price = parseFloat(priceInput.value);

	// Input valid check
	if(name === "" || isNaN(qty) || qty <= 0 || isNaN(price) || price <= 0) {
		return;
	}

	let itemTotal = qty * price;
	
	// Create row
	const row = document.createElement("tr");

	row.innerHTML = `
		<td>${name}</td>
		<td>${qty}</td>
		<td>${price}</td>
		<td>${itemTotal}</td>
	`;

	// add row to table
	tableBody.appendChild(row);

	// update total
	total += itemTotal;
	grandTotalEl.innerText = `Grand Total: ${total}`;

	// Clear inputs
	nameInput.value = "";
	qtyInput.value = "";
	priceInput.value = "";
})