// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"Anchal","72776068","./FAP/Anchal_72776068/1.bmp","./FAP/Anchal_72776068/2.bmp","./FAP/Anchal_72776068/3.bmp","./FAP/Anchal_72776068/4.bmp","./FAP/Anchal_72776068/5.bmp"],
[i++,"Reecha","50165912","./FAP/Reecha_50165912/1.bmp","./FAP/Reecha_50165912/2.bmp","./FAP/Reecha_50165912/3.bmp","./FAP/Reecha_50165912/4.bmp","./FAP/Reecha_50165912/5.bmp"],
[i++,"Anjali","93025657","./FAP/Anjali_93025657/1.bmp","./FAP/Anjali_93025657/2.bmp","./FAP/Anjali_93025657/3.bmp","./FAP/Anjali_93025657/4.bmp","./FAP/Anjali_93025657/5.bmp"],
[i++,"Anshika","22439737","./FAP/Anshika_22439737/1.bmp","./FAP/Anshika_22439737/2.bmp","./FAP/Anshika_22439737/3.bmp","./FAP/Anshika_22439737/4.bmp","./FAP/Anshika_22439737/5.bmp"],
[i++,"AnshikaYadav","24974165","./FAP/AnshikaYadav_24974165/1.bmp","./FAP/AnshikaYadav_24974165/2.bmp","./FAP/AnshikaYadav_24974165/3.bmp","./FAP/AnshikaYadav_24974165/4.bmp","./FAP/AnshikaYadav_24974165/5.bmp"],
[i++,"AradhyaYadav","42534413","./FAP/AradhyaYadav_42534413/1.bmp","./FAP/AradhyaYadav_42534413/2.bmp","./FAP/AradhyaYadav_42534413/3.bmp","./FAP/AradhyaYadav_42534413/4.bmp","./FAP/AradhyaYadav_42534413/5.bmp"],
[i++,"Ayushi","26004570","./FAP/Ayushi_26004570/1.bmp","./FAP/Ayushi_26004570/2.bmp","./FAP/Ayushi_26004570/3.bmp","./FAP/Ayushi_26004570/4.bmp","./FAP/Ayushi_26004570/5.bmp"],
[i++,"Divyanshi","20408289","./FAP/Divyanshi_20408289/1.bmp","./FAP/Divyanshi_20408289/2.bmp","./FAP/Divyanshi_20408289/3.bmp","./FAP/Divyanshi_20408289/4.bmp","./FAP/Divyanshi_20408289/5.bmp"],
[i++,"Gunjan","34485903","./FAP/Gunjan_34485903/1.bmp","./FAP/Gunjan_34485903/2.bmp","./FAP/Gunjan_34485903/3.bmp","./FAP/Gunjan_34485903/4.bmp","./FAP/Gunjan_34485903/5.bmp"],
[i++,"Khushi","84654326","./FAP/Khushi_84654326/1.bmp","./FAP/Khushi_84654326/2.bmp","./FAP/Khushi_84654326/3.bmp","./FAP/Khushi_84654326/4.bmp","./FAP/Khushi_84654326/5.bmp"],
[i++,"Komal","29619490","./FAP/Komal_29619490/1.bmp","./FAP/Komal_29619490/2.bmp","./FAP/Komal_29619490/3.bmp","./FAP/Komal_29619490/4.bmp","./FAP/Komal_29619490/5.bmp"],
[i++,"KshamaTiwari","43937206","./FAP/KshamaTiwari_43937206/1.bmp","./FAP/KshamaTiwari_43937206/2.bmp","./FAP/KshamaTiwari_43937206/3.bmp","./FAP/KshamaTiwari_43937206/4.bmp","./FAP/KshamaTiwari_43937206/5.bmp"],
[i++,"Lalti","18845914","./FAP/Lalti_18845914/1.bmp","./FAP/Lalti_18845914/2.bmp","./FAP/Lalti_18845914/3.bmp","./FAP/Lalti_18845914/4.bmp","./FAP/Lalti_18845914/5.bmp"],
[i++,"Mahak","50078452","./FAP/Mahak_50078452/1.bmp","./FAP/Mahak_50078452/2.bmp","./FAP/Mahak_50078452/3.bmp","./FAP/Mahak_50078452/4.bmp","./FAP/Mahak_50078452/5.bmp"],
[i++,"Manisha","22333363","./FAP/Manisha_22333363/1.bmp","./FAP/Manisha_22333363/2.bmp","./FAP/Manisha_22333363/3.bmp","./FAP/Manisha_22333363/4.bmp","./FAP/Manisha_22333363/5.bmp"],
[i++,"ManishaYadav","64612154","./FAP/ManishaYadav_64612154/1.bmp","./FAP/ManishaYadav_64612154/2.bmp","./FAP/ManishaYadav_64612154/3.bmp","./FAP/ManishaYadav_64612154/4.bmp","./FAP/ManishaYadav_64612154/5.bmp"],
[i++,"Manju","11176108","./FAP/Manju_11176108/1.bmp","./FAP/Manju_11176108/2.bmp","./FAP/Manju_11176108/3.bmp","./FAP/Manju_11176108/4.bmp","./FAP/Manju_11176108/5.bmp"],
[i++,"Nainci","93146325","./FAP/Nainci_93146325/1.bmp","./FAP/Nainci_93146325/2.bmp","./FAP/Nainci_93146325/3.bmp","./FAP/Nainci_93146325/4.bmp","./FAP/Nainci_93146325/5.bmp"],
[i++,"Nandini","66347788","./FAP/Nandini_66347788/1.bmp","./FAP/Nandini_66347788/2.bmp","./FAP/Nandini_66347788/3.bmp","./FAP/Nandini_66347788/4.bmp","./FAP/Nandini_66347788/5.bmp"],
[i++,"NiraliYadav","62722542","./FAP/NiraliYadav_62722542/1.bmp","./FAP/NiraliYadav_62722542/2.bmp","./FAP/NiraliYadav_62722542/3.bmp","./FAP/NiraliYadav_62722542/4.bmp","./FAP/NiraliYadav_62722542/5.bmp"],
[i++,"Pinki","52559123","./FAP/Pinki_52559123/1.bmp","./FAP/Pinki_52559123/2.bmp","./FAP/Pinki_52559123/3.bmp","./FAP/Pinki_52559123/4.bmp","./FAP/Pinki_52559123/5.bmp"],
[i++,"Poonam","37494608","./FAP/Poonam_37494608/1.bmp","./FAP/Poonam_37494608/2.bmp","./FAP/Poonam_37494608/3.bmp","./FAP/Poonam_37494608/4.bmp","./FAP/Poonam_37494608/5.bmp"],
[i++,"PoonamYadav","55234489","./FAP/PoonamYadav_55234489/1.bmp","./FAP/PoonamYadav_55234489/2.bmp","./FAP/PoonamYadav_55234489/3.bmp","./FAP/PoonamYadav_55234489/4.bmp","./FAP/PoonamYadav_55234489/5.bmp"],
[i++,"Priyanka","14187135","./FAP/Priyanka_14187135/1.bmp","./FAP/Priyanka_14187135/2.bmp","./FAP/Priyanka_14187135/3.bmp","./FAP/Priyanka_14187135/4.bmp","./FAP/Priyanka_14187135/5.bmp"],
[i++,"Ragini","33525035","./FAP/Ragini_33525035/1.bmp","./FAP/Ragini_33525035/2.bmp","./FAP/Ragini_33525035/3.bmp","./FAP/Ragini_33525035/4.bmp","./FAP/Ragini_33525035/5.bmp"],
[i++,"Raginikumari","14903146","./FAP/Raginikumari_14903146/1.bmp","./FAP/Raginikumari_14903146/2.bmp","./FAP/Raginikumari_14903146/3.bmp","./FAP/Raginikumari_14903146/4.bmp","./FAP/Raginikumari_14903146/5.bmp"],
[i++,"Renu","67979285","./FAP/Renu_67979285/1.bmp","./FAP/Renu_67979285/2.bmp","./FAP/Renu_67979285/3.bmp","./FAP/Renu_67979285/4.bmp","./FAP/Renu_67979285/5.bmp"],
[i++,"Renu","99897080","./FAP/Renu_99897080/1.bmp","./FAP/Renu_99897080/2.bmp","./FAP/Renu_99897080/3.bmp","./FAP/Renu_99897080/4.bmp","./FAP/Renu_99897080/5.bmp"],
[i++,"Ritika","95323041","./FAP/Ritika_95323041/1.bmp","./FAP/Ritika_95323041/2.bmp","./FAP/Ritika_95323041/3.bmp","./FAP/Ritika_95323041/4.bmp","./FAP/Ritika_95323041/5.bmp"],
[i++,"Roli","79180699","./FAP/Roli_79180699/1.bmp","./FAP/Roli_79180699/2.bmp","./FAP/Roli_79180699/3.bmp","./FAP/Roli_79180699/4.bmp","./FAP/Roli_79180699/5.bmp"],
[i++,"RomiMaurya","31001405","./FAP/RomiMaurya_31001405/1.bmp","./FAP/RomiMaurya_31001405/2.bmp","./FAP/RomiMaurya_31001405/3.bmp","./FAP/RomiMaurya_31001405/4.bmp","./FAP/RomiMaurya_31001405/5.bmp"],
[i++,"Rooby","96144178","./FAP/Rooby_96144178/1.bmp","./FAP/Rooby_96144178/2.bmp","./FAP/Rooby_96144178/3.bmp","./FAP/Rooby_96144178/4.bmp","./FAP/Rooby_96144178/5.bmp"],
[i++,"Rubi","8927118","./FAP/Rubi_8927118/1.bmp","./FAP/Rubi_8927118/2.bmp","./FAP/Rubi_8927118/3.bmp","./FAP/Rubi_8927118/4.bmp","./FAP/Rubi_8927118/5.bmp"],
[i++,"Sadhna","68326145","./FAP/Sadhna_68326145/1.bmp","./FAP/Sadhna_68326145/2.bmp","./FAP/Sadhna_68326145/3.bmp","./FAP/Sadhna_68326145/4.bmp","./FAP/Sadhna_68326145/5.bmp"],
[i++,"SantoshKumari","64785151","./FAP/SantoshKumari_64785151/1.bmp","./FAP/SantoshKumari_64785151/2.bmp","./FAP/SantoshKumari_64785151/3.bmp","./FAP/SantoshKumari_64785151/4.bmp","./FAP/SantoshKumari_64785151/5.bmp"],
[i++,"Saraswati","87388799","./FAP/Saraswati_87388799/1.bmp","./FAP/Saraswati_87388799/2.bmp","./FAP/Saraswati_87388799/3.bmp","./FAP/Saraswati_87388799/4.bmp","./FAP/Saraswati_87388799/5.bmp"],
[i++,"Sarita","36454682","./FAP/Sarita_36454682/1.bmp","./FAP/Sarita_36454682/2.bmp","./FAP/Sarita_36454682/3.bmp","./FAP/Sarita_36454682/4.bmp","./FAP/Sarita_36454682/5.bmp"],
[i++,"Seema","92320640","./FAP/Seema_92320640/1.bmp","./FAP/Seema_92320640/2.bmp","./FAP/Seema_92320640/3.bmp","./FAP/Seema_92320640/4.bmp","./FAP/Seema_92320640/5.bmp"],
[i++,"Shilpa","94330998","./FAP/Shilpa_94330998/1.bmp","./FAP/Shilpa_94330998/2.bmp","./FAP/Shilpa_94330998/3.bmp","./FAP/Shilpa_94330998/4.bmp","./FAP/Shilpa_94330998/5.bmp"],
[i++,"Shivani","56588434","./FAP/Shivani_56588434/1.bmp","./FAP/Shivani_56588434/2.bmp","./FAP/Shivani_56588434/3.bmp","./FAP/Shivani_56588434/4.bmp","./FAP/Shivani_56588434/5.bmp"],
[i++,"Sonam","86453089","./FAP/Sonam_86453089/1.bmp","./FAP/Sonam_86453089/2.bmp","./FAP/Sonam_86453089/3.bmp","./FAP/Sonam_86453089/4.bmp","./FAP/Sonam_86453089/5.bmp"],
[i++,"SunitaYadav","27158104","./FAP/SunitaYadav_27158104/1.bmp","./FAP/SunitaYadav_27158104/2.bmp","./FAP/SunitaYadav_27158104/3.bmp","./FAP/SunitaYadav_27158104/4.bmp","./FAP/SunitaYadav_27158104/5.bmp"]
[i++, "Anshu", "49974388", "./FAP/Anshu_49974388/1.bmp", "./FAP/Anshu_49974388/2.bmp", "./FAP/Anshu_49974388/3.bmp", "./FAP/Anshu_49974388/4.bmp", "./FAP/Anshu_49974388/5.bmp"],
  [i++, "Khushbu Varma", "82451623", "./FAP/Khushbu Varma_82451623/1.bmp", "./FAP/Khushbu Varma_82451623/2.bmp", "./FAP/Khushbu Varma_82451623/3.bmp", "./FAP/Khushbu Varma_82451623/4.bmp", "./FAP/Khushbu Varma_82451623/5.bmp"],
  [i++, "Neha", "03192939", "./FAP/Neha_03192939/1.bmp", "./FAP/Neha_03192939/2.bmp", "./FAP/Neha_03192939/3.bmp", "./FAP/Neha_03192939/4.bmp", "./FAP/Neha_03192939/5.bmp"],
  [i++, "Savita", "58608967", "./FAP/Savita_58608967/1.bmp", "./FAP/Savita_58608967/2.bmp", "./FAP/Savita_58608967/3.bmp", "./FAP/Savita_58608967/4.bmp", "./FAP/Savita_58608967/5.bmp"],
  [i++, "Sonam", "73199791", "./FAP/Sonam_73199791/1.bmp", "./FAP/Sonam_73199791/2.bmp", "./FAP/Sonam_73199791/3.bmp", "./FAP/Sonam_73199791/4.bmp", "./FAP/Sonam_73199791/5.bmp"],
  [i++, "Sonam", "73623002", "./FAP/Sonam_73623002/1.bmp", "./FAP/Sonam_73623002/2.bmp", "./FAP/Sonam_73623002/3.bmp", "./FAP/Sonam_73623002/4.bmp", "./FAP/Sonam_73623002/5.bmp"],

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
