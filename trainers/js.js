// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++,"Ankita","57334538","./trainers/Ankita/1.bmp","./trainers/Ankita/2.bmp","./trainers/Ankita/3.bmp","./trainers/Ankita/4.bmp","./trainers/Ankita/5.bmp"],
[i++,"Pinki","88239824","./trainers/Pinki/1.bmp","./trainers/Pinki/2.bmp","./trainers/Pinki/3.bmp","./trainers/Pinki/4.bmp","./trainers/Pinki/5.bmp"],
 [i++,"Mohit","47690306","./trainers/Mohit/1.bmp","./trainers/Mohit/2.bmp","./trainers/Mohit/3.bmp","./trainers/Mohit/4.bmp","./trainers/Mohit/5.bmp"],
   [i++, "Vaishali Sharma", "92166322", "./trainers/vaishali sharma_92166322/1.bmp", "./trainers/vaishali sharma_92166322/2.bmp", "./trainers/vaishali sharma_92166322/3.bmp", "./trainers/vaishali sharma_92166322/4.bmp", "./trainers/vaishali sharma_92166322/5.bmp"],
   [i++, "Hemant", "76334842", "./trainers/hemant/1.bmp", "./trainers/hemant/2.bmp", "./trainers/hemant/3.bmp", "./trainers/hemant/4.bmp", "./trainers/hemant/5.bmp"],


         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
