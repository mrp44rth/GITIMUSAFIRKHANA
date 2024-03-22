// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++, "AbhishekGupta", "19333142", "./CCE2/AbhishekGupta_19333142/1.bmp", "./CCE2/AbhishekGupta_19333142/2.bmp", "./CCE2/AbhishekGupta_19333142/3.bmp", "./CCE2/AbhishekGupta_19333142/4.bmp", "./CCE2/AbhishekGupta_19333142/5.bmp"],
  [i++, "AbhishekKumarAgrahari", "71418915", "./CCE2/AbhishekKumarAgrahari_71418915/1.bmp", "./CCE2/AbhishekKumarAgrahari_71418915/2.bmp", "./CCE2/AbhishekKumarAgrahari_71418915/3.bmp", "./CCE2/AbhishekKumarAgrahari_71418915/4.bmp", "./CCE2/AbhishekKumarAgrahari_71418915/5.bmp"],
  [i++, "AshwiniKumar", "73654046", "./CCE2/AshwiniKumar_73654046/1.bmp", "./CCE2/AshwiniKumar_73654046/2.bmp", "./CCE2/AshwiniKumar_73654046/3.bmp", "./CCE2/AshwiniKumar_73654046/4.bmp", "./CCE2/AshwiniKumar_73654046/5.bmp"],
  [i++, "ChandreshKumar", "98805849", "./CCE2/ChandreshKumar_98805849/1.bmp", "./CCE2/ChandreshKumar_98805849/2.bmp", "./CCE2/ChandreshKumar_98805849/3.bmp", "./CCE2/ChandreshKumar_98805849/4.bmp", "./CCE2/ChandreshKumar_98805849/5.bmp"],
  [i++, "KuldeepKumar", "55839696", "./CCE2/KuldeepKumar_55839696/1.bmp", "./CCE2/KuldeepKumar_55839696/2.bmp", "./CCE2/KuldeepKumar_55839696/3.bmp", "./CCE2/KuldeepKumar_55839696/4.bmp", "./CCE2/KuldeepKumar_55839696/5.bmp"],
  [i++, "Lavkush", "65084883", "./CCE2/Lavkush_65084883/1.bmp", "./CCE2/Lavkush_65084883/2.bmp", "./CCE2/Lavkush_65084883/3.bmp", "./CCE2/Lavkush_65084883/4.bmp", "./CCE2/Lavkush_65084883/5.bmp"],
  [i++, "Maheshkumar", "75822681", "./CCE2/Maheshkumar_75822681/1.bmp", "./CCE2/Maheshkumar_75822681/2.bmp", "./CCE2/Maheshkumar_75822681/3.bmp", "./CCE2/Maheshkumar_75822681/4.bmp", "./CCE2/Maheshkumar_75822681/5.bmp"],
  [i++, "Mamta", "34089836", "./CCE2/Mamta_34089836/1.bmp", "./CCE2/Mamta_34089836/2.bmp", "./CCE2/Mamta_34089836/3.bmp", "./CCE2/Mamta_34089836/4.bmp", "./CCE2/Mamta_34089836/5.bmp"],
  [i++, "PankajSahu", "25388503", "./CCE2/PankajSahu_25388503/1.bmp", "./CCE2/PankajSahu_25388503/2.bmp", "./CCE2/PankajSahu_25388503/3.bmp", "./CCE2/PankajSahu_25388503/4.bmp", "./CCE2/PankajSahu_25388503/5.bmp"],
  [i++, "Pushpendra", "14148299", "./CCE2/Pushpendra_14148299/1.bmp", "./CCE2/Pushpendra_14148299/2.bmp", "./CCE2/Pushpendra_14148299/3.bmp", "./CCE2/Pushpendra_14148299/4.bmp", "./CCE2/Pushpendra_14148299/5.bmp"],
  [i++, "RajneeshkumarAgrahari", "71657496", "./CCE2/RajneeshkumarAgrahari_71657496/1.bmp", "./CCE2/RajneeshkumarAgrahari_71657496/2.bmp", "./CCE2/RajneeshkumarAgrahari_71657496/3.bmp", "./CCE2/RajneeshkumarAgrahari_71657496/4.bmp", "./CCE2/RajneeshkumarAgrahari_71657496/5.bmp"],
  [i++, "RiteshKumar", "74254101", "./CCE2/RiteshKumar_74254101/1.bmp", "./CCE2/RiteshKumar_74254101/2.bmp", "./CCE2/RiteshKumar_74254101/3.bmp", "./CCE2/RiteshKumar_74254101/4.bmp", "./CCE2/RiteshKumar_74254101/5.bmp"],
  [i++, "Shivamaurya", "46813712", "./CCE2/Shivamaurya_46813712/1.bmp", "./CCE2/Shivamaurya_46813712/2.bmp", "./CCE2/Shivamaurya_46813712/3.bmp", "./CCE2/Shivamaurya_46813712/4.bmp", "./CCE2/Shivamaurya_46813712/5.bmp"],
  [i++, "ShivamKanaujiya", "24775302", "./CCE2/ShivamKanaujiya_24775302/1.bmp", "./CCE2/ShivamKanaujiya_24775302/2.bmp", "./CCE2/ShivamKanaujiya_24775302/3.bmp", "./CCE2/ShivamKanaujiya_24775302/4.bmp", "./CCE2/ShivamKanaujiya_24775302/5.bmp"],
  [i++, "VinodYadav", "39573396", "./CCE2/VinodYadav_39573396/1.bmp", "./CCE2/VinodYadav_39573396/2.bmp", "./CCE2/VinodYadav_39573396/3.bmp", "./CCE2/VinodYadav_39573396/4.bmp", "./CCE2/VinodYadav_39573396/5.bmp"]

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
