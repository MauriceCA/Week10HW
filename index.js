let id = 0;


document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(1).innerHTML = document.getElementById('title').value;
    row.insertCell(2).innerHTML = document.getElementById('author').value;
    row.insertCell(3).innerHTML = document.getElementById('media-type').value;
    row.insertCell(4).innerHTML = document.getElementById('warning').value;
    row.insertCell(5).innerHTML = document.getElementById('info').value;
    row.insertCell(6).innerHTML = document.getElementById('submitted-by').value;
    resetForm();
});

function resetForm(){
    document.getElementById('new-start-date').value = '';
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('media-type').value = '';
    document.getElementById('warning').value = '';
    document.getElementById('info').value = '';
    document.getElementById('submitted-by').value = '';
}