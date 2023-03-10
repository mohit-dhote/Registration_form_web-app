var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["collegeName"] = document.getElementById("collegeName").value;
    formData["collegeID"] = document.getElementById("collegeID").value;
    formData["Number"] = document.getElementById("Number").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Gender"] = document.getElementById("Gender").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document
        .getElementById("storeList")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Number;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.collegeName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.collegeID;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Gender;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("collegeName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("collegeID").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[5].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.collegeName;
    selectedRow.cells[2].innerHTML = formData.Number;
    selectedRow.cells[3].innerHTML = formData.collegeID;
    selectedRow.cells[4].innerHTML = formData.Email;
    selectedRow.cells[5].innerHTML = formData.Gender;

}

function onDelete(td) {
    if (("confirm are you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("collegeName").value = "";
    document.getElementById("Number").value = "";
    document.getElementById("collegeID").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Gender").value = "";

    selectedRow = null;
}