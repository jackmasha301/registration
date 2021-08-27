var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData)
    }

    resetForm();
}

function readFormData() {
    formData["fullName"] = document.getElementById("fullName").value
    formData["studno"] = document.getElementById("stduentno").value
    formData["location"] = document.getElementById("location").value
    formData["age"] = document.getElementById("age").value

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertcell(0);
    cell1.innerHTML = data.fullname;

    cell2 = newRow.insertcell(1);
    cell2.innerHTML = data.studno;

    cell3 = newRow.insertcell(2);
    cell3.innerHTML = data.location;

    cell4 = newRow.insertcell(3);
    cell4.innerHTML = data.age;

    cell4 = newRow.insertcell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("studno").value = "";
    document.getElementById("location").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parantElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studno").value = selectedRow.cells[1].innerHTML;
    document.getElementById("location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.studno;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.age;
}

function onDelete(td) {
    if (comfirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
    }

    resetForm();
}