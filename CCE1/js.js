// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"AmanMaurya","12598331","./CCE1/AmanMaurya_12598331/1.bmp","./CCE1/AmanMaurya_12598331/2.bmp","./CCE1/AmanMaurya_12598331/3.bmp","./CCE1/AmanMaurya_12598331/4.bmp","./CCE1/AmanMaurya_12598331/5.bmp"],
[i++,"Vishal","13611738","./CCE1/Vishal_13611738/1.bmp","./CCE1/Vishal_13611738/2.bmp","./CCE1/Vishal_13611738/3.bmp","./CCE1/Vishal_13611738/4.bmp","./CCE1/Vishal_13611738/5.bmp"],
[i++,"Anurag","71840790","./CCE1/Anurag_71840790/1.bmp","./CCE1/Anurag_71840790/2.bmp","./CCE1/Anurag_71840790/3.bmp","./CCE1/Anurag_71840790/4.bmp","./CCE1/Anurag_71840790/5.bmp"],
[i++,"DevShangamShukla","30076343","./CCE1/DevShangamShukla_30076343/1.bmp","./CCE1/DevShangamShukla_30076343/2.bmp","./CCE1/DevShangamShukla_30076343/3.bmp","./CCE1/DevShangamShukla_30076343/4.bmp","./CCE1/DevShangamShukla_30076343/5.bmp"],
[i++,"Dileep","13040151","./CCE1/Dileep_13040151/1.bmp","./CCE1/Dileep_13040151/2.bmp","./CCE1/Dileep_13040151/3.bmp","./CCE1/Dileep_13040151/4.bmp","./CCE1/Dileep_13040151/5.bmp"],
[i++,"DurgeshKumar","33372290","./CCE1/DurgeshKumar_33372290/1.bmp","./CCE1/DurgeshKumar_33372290/2.bmp","./CCE1/DurgeshKumar_33372290/3.bmp","./CCE1/DurgeshKumar_33372290/4.bmp","./CCE1/DurgeshKumar_33372290/5.bmp"],
[i++,"DurgeshKumari","1374746","./CCE1/DurgeshKumari_1374746/1.bmp","./CCE1/DurgeshKumari_1374746/2.bmp","./CCE1/DurgeshKumari_1374746/3.bmp","./CCE1/DurgeshKumari_1374746/4.bmp","./CCE1/DurgeshKumari_1374746/5.bmp"],
[i++,"Hargovind","34055497","./CCE1/Hargovind_34055497/1.bmp","./CCE1/Hargovind_34055497/2.bmp","./CCE1/Hargovind_34055497/3.bmp","./CCE1/Hargovind_34055497/4.bmp","./CCE1/Hargovind_34055497/5.bmp"],
[i++,"HariOm","19496609","./CCE1/HariOm_19496609/1.bmp","./CCE1/HariOm_19496609/2.bmp","./CCE1/HariOm_19496609/3.bmp","./CCE1/HariOm_19496609/4.bmp","./CCE1/HariOm_19496609/5.bmp"],
[i++,"Harshit","62114567","./CCE1/Harshit_62114567/1.bmp","./CCE1/Harshit_62114567/2.bmp","./CCE1/Harshit_62114567/3.bmp","./CCE1/Harshit_62114567/4.bmp","./CCE1/Harshit_62114567/5.bmp"],
[i++,"Indrabhan","72674384","./CCE1/Indrabhan_72674384/1.bmp","./CCE1/Indrabhan_72674384/2.bmp","./CCE1/Indrabhan_72674384/3.bmp","./CCE1/Indrabhan_72674384/4.bmp","./CCE1/Indrabhan_72674384/5.bmp"],
[i++,"KalpanaTiwari","55821393","./CCE1/KalpanaTiwari_55821393/1.bmp","./CCE1/KalpanaTiwari_55821393/2.bmp","./CCE1/KalpanaTiwari_55821393/3.bmp","./CCE1/KalpanaTiwari_55821393/4.bmp","./CCE1/KalpanaTiwari_55821393/5.bmp"],
[i++,"KalpanaYadav","84905219","./CCE1/KalpanaYadav_84905219/1.bmp","./CCE1/KalpanaYadav_84905219/2.bmp","./CCE1/KalpanaYadav_84905219/3.bmp","./CCE1/KalpanaYadav_84905219/4.bmp","./CCE1/KalpanaYadav_84905219/5.bmp"],
[i++,"Manisha","29965135","./CCE1/Manisha_29965135/1.bmp","./CCE1/Manisha_29965135/2.bmp","./CCE1/Manisha_29965135/3.bmp","./CCE1/Manisha_29965135/4.bmp","./CCE1/Manisha_29965135/5.bmp"],
[i++,"MohdAshifAli","68305282","./CCE1/MohdAshifAli_68305282/1.bmp","./CCE1/MohdAshifAli_68305282/2.bmp","./CCE1/MohdAshifAli_68305282/3.bmp","./CCE1/MohdAshifAli_68305282/4.bmp","./CCE1/MohdAshifAli_68305282/5.bmp"],
[i++,"PradhumnPandey","4055410","./CCE1/PradhumnPandey_4055410/1.bmp","./CCE1/PradhumnPandey_4055410/2.bmp","./CCE1/PradhumnPandey_4055410/3.bmp","./CCE1/PradhumnPandey_4055410/4.bmp","./CCE1/PradhumnPandey_4055410/5.bmp"],
[i++,"Ruchi","36705662","./CCE1/Ruchi_36705662/1.bmp","./CCE1/Ruchi_36705662/2.bmp","./CCE1/Ruchi_36705662/3.bmp","./CCE1/Ruchi_36705662/4.bmp","./CCE1/Ruchi_36705662/5.bmp"],
[i++,"SantoshKumari","90560106","./CCE1/SantoshKumari_90560106/1.bmp","./CCE1/SantoshKumari_90560106/2.bmp","./CCE1/SantoshKumari_90560106/3.bmp","./CCE1/SantoshKumari_90560106/4.bmp","./CCE1/SantoshKumari_90560106/5.bmp"],
[i++,"ShaliniYadav","81657444","./CCE1/ShaliniYadav_81657444/1.bmp","./CCE1/ShaliniYadav_81657444/2.bmp","./CCE1/ShaliniYadav_81657444/3.bmp","./CCE1/ShaliniYadav_81657444/4.bmp","./CCE1/ShaliniYadav_81657444/5.bmp"],
[i++,"ShivamMishra","11782766","./CCE1/ShivamMishra_11782766/1.bmp","./CCE1/ShivamMishra_11782766/2.bmp","./CCE1/ShivamMishra_11782766/3.bmp","./CCE1/ShivamMishra_11782766/4.bmp","./CCE1/ShivamMishra_11782766/5.bmp"],
[i++,"Shivani","12295180","./CCE1/Shivani_12295180/1.bmp","./CCE1/Shivani_12295180/2.bmp","./CCE1/Shivani_12295180/3.bmp","./CCE1/Shivani_12295180/4.bmp","./CCE1/Shivani_12295180/5.bmp"],
[i++,"ShivMoorat","19848663","./CCE1/ShivMoorat_19848663/1.bmp","./CCE1/ShivMoorat_19848663/2.bmp","./CCE1/ShivMoorat_19848663/3.bmp","./CCE1/ShivMoorat_19848663/4.bmp","./CCE1/ShivMoorat_19848663/5.bmp"],
[i++,"Soni","33879430","./CCE1/Soni_33879430/1.bmp","./CCE1/Soni_33879430/2.bmp","./CCE1/Soni_33879430/3.bmp","./CCE1/Soni_33879430/4.bmp","./CCE1/Soni_33879430/5.bmp"],
[i++,"SushilKumar","61857780","./CCE1/SushilKumar_61857780/1.bmp","./CCE1/SushilKumar_61857780/2.bmp","./CCE1/SushilKumar_61857780/3.bmp","./CCE1/SushilKumar_61857780/4.bmp","./CCE1/SushilKumar_61857780/5.bmp"],
[i++,"VikashYadav","6679517","./CCE1/VikashYadav_6679517/1.bmp","./CCE1/VikashYadav_6679517/2.bmp","./CCE1/VikashYadav_6679517/3.bmp","./CCE1/VikashYadav_6679517/4.bmp","./CCE1/VikashYadav_6679517/5.bmp"],
[i++,"VikramYadav","32495369","./CCE1/VikramYadav_32495369/1.bmp","./CCE1/VikramYadav_32495369/2.bmp","./CCE1/VikramYadav_32495369/3.bmp","./CCE1/VikramYadav_32495369/4.bmp","./CCE1/VikramYadav_32495369/5.bmp"],
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
    img.style.filter = 'contrast(130%) invert(100%)'; // Contrast and color invert
    td.appendChild(img);
} 
            else {
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
