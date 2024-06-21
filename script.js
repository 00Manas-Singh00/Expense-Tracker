const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expense-list");

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const desc = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;

  if (document && category && !isNaN(amount)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${desc}</td><td>${category}</td><td>${amount}<td>`;
    expenseList.appendChild(newRow);

    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please Fill out all fields with valid data");
  }
});
