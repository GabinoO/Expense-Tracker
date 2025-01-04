let buttonCounter = 0;
function displayItem() {
  let itemName = document.getElementById("expenseField").value;
  let itemDate = document.getElementById("dateField").value;
  let itemPrice = document.getElementById("priceField").value;
  
  if (itemName.trim() == "" || itemDate.trim() =="" || itemPrice.trim() == "") {
    return;
  }
  
  if (buttonCounter == 0) { document.getElementById("myTable").deleteRow(1); }

  let tableRow = document.createElement("tr");
  let tableData1 = document.createElement("td");
  let tableData2 = document.createElement("td");
  let tableData3 = document.createElement("td");
  tableData1.textContent = itemName;
  tableData2.textContent = itemDate;
  tableData3.textContent = itemPrice;
  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableRow.appendChild(tableData3);
  let table = document.getElementById("myTable");
  table.appendChild(tableRow);
  document.getElementById("expenseField").value = "";
  document.getElementById("dateField").value = "";
  document.getElementById("priceField").value = "";
  itemPrice = "";
  
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  tableRow.appendChild(deleteButton);
 
 deleteButton.addEventListener("click",function() {
   table.removeChild(tableRow);
 });
 
  buttonCounter++;
}