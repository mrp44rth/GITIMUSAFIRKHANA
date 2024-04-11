let i=1;
const data = [
[i++, "Amita Yadav", "28970299", "./data/AmitaYadav_28970299/1.bmp", "./data/AmitaYadav_28970299/2.bmp", "./data/AmitaYadav_28970299/3.bmp", "./data/AmitaYadav_28970299/4.bmp", "./data/AmitaYadav_28970299/5.bmp"],
[i++, "ANEETA", "25579942", "./data/ANEETA_25579942/1.bmp", "./data/ANEETA_25579942/2.bmp", "./data/ANEETA_25579942/3.bmp", "./data/ANEETA_25579942/4.bmp", "./data/ANEETA_25579942/5.bmp"],
[i++, "Antima Maurya", "92906481", "./data/AntimaMaurya_92906481/1.bmp", "./data/AntimaMaurya_92906481/2.bmp", "./data/AntimaMaurya_92906481/3.bmp", "./data/AntimaMaurya_92906481/4.bmp", "./data/AntimaMaurya_92906481/5.bmp"],
[i++, "ARCHANA", "50072964", "./data/ARCHANA_50072964/1.bmp", "./data/ARCHANA_50072964/2.bmp", "./data/ARCHANA_50072964/3.bmp", "./data/ARCHANA_50072964/4.bmp", "./data/ARCHANA_50072964/5.bmp"],
[i++, "Archna Yadav", "75837424", "./data/ArchnaYadav_75837424/1.bmp", "./data/ArchnaYadav_75837424/2.bmp", "./data/ArchnaYadav_75837424/3.bmp", "./data/ArchnaYadav_75837424/4.bmp", "./data/ArchnaYadav_75837424/5.bmp"],
[i++, "Arti", "74719238", "./data/Arti_74719238/1.bmp", "./data/Arti_74719238/2.bmp", "./data/Arti_74719238/3.bmp", "./data/Arti_74719238/4.bmp", "./data/Arti_74719238/5.bmp"],
[i++, "Arti Yadav", "46781493", "./data/ArtiYadav_46781493/1.bmp", "./data/ArtiYadav_46781493/2.bmp", "./data/ArtiYadav_46781493/3.bmp", "./data/ArtiYadav_46781493/4.bmp", "./data/ArtiYadav_46781493/5.bmp"],
[i++, "Chandani", "94966400", "./data/Chandani_94966400/1.bmp", "./data/Chandani_94966400/2.bmp", "./data/Chandani_94966400/3.bmp", "./data/Chandani_94966400/4.bmp", "./data/Chandani_94966400/5.bmp"],
[i++, "Chandani", "82316273", "./data/Chandani_82316273/1.bmp", "./data/Chandani_82316273/2.bmp", "./data/Chandani_82316273/3.bmp", "./data/Chandani_82316273/4.bmp", "./data/Chandani_82316273/5.bmp"],
[i++, "Gudiya", "12963559", "./data/Gudiya_12963559/1.bmp", "./data/Gudiya_12963559/2.bmp", "./data/Gudiya_12963559/3.bmp", "./data/Gudiya_12963559/4.bmp", "./data/Gudiya_12963559/5.bmp"],
[i++, "JYOTI", "82048954", "./data/JYOTI_82048954/1.bmp", "./data/JYOTI_82048954/2.bmp", "./data/JYOTI_82048954/3.bmp", "./data/JYOTI_82048954/4.bmp", "./data/JYOTI_82048954/5.bmp"],
[i++, "KARISHMA", "57836360", "./data/KARISHMA_57836360/1.bmp", "./data/KARISHMA_57836360/2.bmp", "./data/KARISHMA_57836360/3.bmp", "./data/KARISHMA_57836360/4.bmp", "./data/KARISHMA_57836360/5.bmp"],
[i++, "Km Sudha Pal", "41676841", "./data/KmSudhaPal_41676841/1.bmp", "./data/KmSudhaPal_41676841/2.bmp", "./data/KmSudhaPal_41676841/3.bmp", "./data/KmSudhaPal_41676841/4.bmp", "./data/KmSudhaPal_41676841/5.bmp"],
[i++, "Komal Maurya", "98077641", "./data/KomalMaurya_98077641/1.bmp", "./data/KomalMaurya_98077641/2.bmp", "./data/KomalMaurya_98077641/3.bmp", "./data/KomalMaurya_98077641/4.bmp", "./data/KomalMaurya_98077641/5.bmp"],
[i++, "Komal Pandey", "7380090", "./data/KomalPandey_7380090/1.bmp", "./data/KomalPandey_7380090/2.bmp", "./data/KomalPandey_7380090/3.bmp", "./data/KomalPandey_7380090/4.bmp", "./data/KomalPandey_7380090/5.bmp"],
[i++, "KUSHMA", "19117693", "./data/KUSHMA_19117693/1.bmp", "./data/KUSHMA_19117693/2.bmp", "./data/KUSHMA_19117693/3.bmp", "./data/KUSHMA_19117693/4.bmp", "./data/KUSHMA_19117693/5.bmp"],
[i++, "Laxmi Chauhan", "33046601", "./data/LaxmiChauhan_33046601/1.bmp", "./data/LaxmiChauhan_33046601/2.bmp", "./data/LaxmiChauhan_33046601/3.bmp", "./data/LaxmiChauhan_33046601/4.bmp", "./data/LaxmiChauhan_33046601/5.bmp"],
[i++, "Nandani", "83726612", "./data/Nandani_83726612/1.bmp", "./data/Nandani_83726612/2.bmp", "./data/Nandani_83726612/3.bmp", "./data/Nandani_83726612/4.bmp", "./data/Nandani_83726612/5.bmp"],
[i++, "Neelam", "6246606", "./data/Neelam_6246606/1.bmp", "./data/Neelam_6246606/2.bmp", "./data/Neelam_6246606/3.bmp", "./data/Neelam_6246606/4.bmp", "./data/Neelam_6246606/5.bmp"],
[i++, "Pal Khushi", "73580549", "./data/PalKhushi_73580549/1.bmp", "./data/PalKhushi_73580549/2.bmp", "./data/PalKhushi_73580549/3.bmp", "./data/PalKhushi_73580549/4.bmp", "./data/PalKhushi_73580549/5.bmp"],
[i++, "Pinki", "75767177", "./data/Pinki_75767177/1.bmp", "./data/Pinki_75767177/2.bmp", "./data/Pinki_75767177/3.bmp", "./data/Pinki_75767177/4.bmp", "./data/Pinki_75767177/5.bmp"],
[i++, "Pooja Yadav", "44130781", "./data/PoojaYadav_44130781/1.bmp", "./data/PoojaYadav_44130781/2.bmp", "./data/PoojaYadav_44130781/3.bmp", "./data/PoojaYadav_44130781/4.bmp", "./data/PoojaYadav_44130781/5.bmp"],
[i++, "Poonam", "97311364", "./data/Poonam_97311364/1.bmp", "./data/Poonam_97311364/2.bmp", "./data/Poonam_97311364/3.bmp", "./data/Poonam_97311364/4.bmp", "./data/Poonam_97311364/5.bmp"],
[i++, "Preeti Mishra", "68526813", "./data/PreetiMishra_68526813/1.bmp", "./data/PreetiMishra_68526813/2.bmp", "./data/PreetiMishra_68526813/3.bmp", "./data/PreetiMishra_68526813/4.bmp", "./data/PreetiMishra_68526813/5.bmp"],
[i++, "Priya", "29246025", "./data/Priya_29246025/1.bmp", "./data/Priya_29246025/2.bmp", "./data/Priya_29246025/3.bmp", "./data/Priya_29246025/4.bmp", "./data/Priya_29246025/5.bmp"],
[i++, "Priyanka Maurya", "44536879", "./data/PriyankaMaurya_44536879/1.bmp", "./data/PriyankaMaurya_44536879/2.bmp", "./data/PriyankaMaurya_44536879/3.bmp", "./data/PriyankaMaurya_44536879/4.bmp", "./data/PriyankaMaurya_44536879/5.bmp"],
[i++, "Rajani", "47881510", "./data/Rajani_47881510/1.bmp", "./data/Rajani_47881510/2.bmp", "./data/Rajani_47881510/3.bmp", "./data/Rajani_47881510/4.bmp", "./data/Rajani_47881510/5.bmp"],
[i++, "REENA", "92293963", "./data/REENA_92293963/1.bmp", "./data/REENA_92293963/2.bmp", "./data/REENA_92293963/3.bmp", "./data/REENA_92293963/4.bmp", "./data/REENA_92293963/5.bmp"],
[i++, "Reshama Bano", "45748385", "./data/ReshamaBano_45748385/1.bmp", "./data/ReshamaBano_45748385/2.bmp", "./data/ReshamaBano_45748385/3.bmp", "./data/ReshamaBano_45748385/4.bmp", "./data/ReshamaBano_45748385/5.bmp"],
[i++, "Sadhana Yadav", "55545805", "./data/SadhanaYadav_55545805/1.bmp", "./data/SadhanaYadav_55545805/2.bmp", "./data/SadhanaYadav_55545805/3.bmp", "./data/SadhanaYadav_55545805/4.bmp", "./data/SadhanaYadav_55545805/5.bmp"],
[i++, "Sadhna", "92749031", "./data/Sadhna_92749031/1.bmp", "./data/Sadhna_92749031/2.bmp", "./data/Sadhna_92749031/3.bmp", "./data/Sadhna_92749031/4.bmp", "./data/Sadhna_92749031/5.bmp"],
[i++, "Savita Kumari", "82315522", "./data/SavitaKumari_82315522/1.bmp", "./data/SavitaKumari_82315522/2.bmp", "./data/SavitaKumari_82315522/3.bmp", "./data/SavitaKumari_82315522/4.bmp", "./data/SavitaKumari_82315522/5.bmp"],
[i++, "SEEMA", "47801157", "./data/SEEMA_47801157/1.bmp", "./data/SEEMA_47801157/2.bmp", "./data/SEEMA_47801157/3.bmp", "./data/SEEMA_47801157/4.bmp", "./data/SEEMA_47801157/5.bmp"],
[i++, "SHEELA", "35169585", "./data/SHEELA_35169585/1.bmp", "./data/SHEELA_35169585/2.bmp", "./data/SHEELA_35169585/3.bmp", "./data/SHEELA_35169585/4.bmp", "./data/SHEELA_35169585/5.bmp"],
[i++, "SHIVANI", "92305895", "./data/SHIVANI_92305895/1.bmp", "./data/SHIVANI_92305895/2.bmp", "./data/SHIVANI_92305895/3.bmp", "./data/SHIVANI_92305895/4.bmp", "./data/SHIVANI_92305895/5.bmp"],
[i++, "Shivani Modanwal", "80060251", "./data/ShivaniModanwal_80060251/1.bmp", "./data/ShivaniModanwal_80060251/2.bmp", "./data/ShivaniModanwal_80060251/3.bmp", "./data/ShivaniModanwal_80060251/4.bmp", "./data/ShivaniModanwal_80060251/5.bmp"],
[i++, "Shivani Yadav", "36923214", "./data/ShivaniYadav_36923214/1.bmp", "./data/ShivaniYadav_36923214/2.bmp", "./data/ShivaniYadav_36923214/3.bmp", "./data/ShivaniYadav_36923214/4.bmp", "./data/ShivaniYadav_36923214/5.bmp"],
[i++, "Shiwani", "88773021", "./data/Shiwani_88773021/1.bmp", "./data/Shiwani_88773021/2.bmp", "./data/Shiwani_88773021/3.bmp", "./data/Shiwani_88773021/4.bmp", "./data/Shiwani_88773021/5.bmp"],
[i++, "Sindhu Yadav", "22597770", "./data/SindhuYadav_22597770/1.bmp", "./data/SindhuYadav_22597770/2.bmp", "./data/SindhuYadav_22597770/3.bmp", "./data/SindhuYadav_22597770/4.bmp", "./data/SindhuYadav_22597770/5.bmp"],
[i++, "Sonal", "88646089", "./data/Sonal_88646089/1.bmp", "./data/Sonal_88646089/2.bmp", "./data/Sonal_88646089/3.bmp", "./data/Sonal_88646089/4.bmp", "./data/Sonal_88646089/5.bmp"],
[i++, "Sonal", "9067487", "./data/Sonal_9067487/1.bmp", "./data/Sonal_9067487/2.bmp", "./data/Sonal_9067487/3.bmp", "./data/Sonal_9067487/4.bmp", "./data/Sonal_9067487/5.bmp"],
[i++, "Sonali Yadav", "68870643", "./data/SonaliYadav_68870643/1.bmp", "./data/SonaliYadav_68870643/2.bmp", "./data/SonaliYadav_68870643/3.bmp", "./data/SonaliYadav_68870643/4.bmp", "./data/SonaliYadav_68870643/5.bmp"],
[i++, "Sonam Saroj", "96748857", "./data/SonamSaroj_96748857/1.bmp", "./data/SonamSaroj_96748857/2.bmp", "./data/SonamSaroj_96748857/3.bmp", "./data/SonamSaroj_96748857/4.bmp", "./data/SonamSaroj_96748857/5.bmp"],
[i++, "Uma Maurya", "2077087", "./data/UmaMaurya_2077087/1.bmp", "./data/UmaMaurya_2077087/2.bmp", "./data/UmaMaurya_2077087/3.bmp", "./data/UmaMaurya_2077087/4.bmp", "./data/UmaMaurya_2077087/5.bmp"],
[i++, "Vaishnavi Pandey", "67373040", "./data/VaishnaviPandey_67373040/1.bmp", "./data/VaishnaviPandey_67373040/2.bmp", "./data/VaishnaviPandey_67373040/3.bmp", "./data/VaishnaviPandey_67373040/4.bmp", "./data/VaishnaviPandey_67373040/5.bmp"],
[i++, "Vidyottama", "1420943", "./data/Vidyottama_1420943/1.bmp", "./data/Vidyottama_1420943/2.bmp", "./data/Vidyottama_1420943/3.bmp", "./data/Vidyottama_1420943/4.bmp", "./data/Vidyottama_1420943/5.bmp"],

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

    const contrastRange = document.getElementById('contrast');
    contrastRange.addEventListener('input', function () {
        const contrastValue = this.value;
        document.querySelector('.contrast-value').textContent = `${contrastValue}%`;
        updateImageContrast(contrastValue);
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
                img.style.filter = `invert(100%) contrast(${document.getElementById('contrast').value}%)`; // Color invert and apply contrast
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

function updateImageContrast(contrastValue) {
    const images = document.querySelectorAll('td img');
    images.forEach(img => {
        img.style.filter = `invert(100%) contrast(${contrastValue}%)`;
    });
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
