// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"Aakanksha","46149219","./SBT/Aakanksha_46149219/1.bmp","./SBT/Aakanksha_46149219/2.bmp","./SBT/Aakanksha_46149219/3.bmp","./SBT/Aakanksha_46149219/4.bmp","./SBT/Aakanksha_46149219/5.bmp"],
[i++,"Nisha","8711437","./SBT/Nisha_8711437/1.bmp","./SBT/Nisha_8711437/2.bmp","./SBT/Nisha_8711437/3.bmp","./SBT/Nisha_8711437/4.bmp","./SBT/Nisha_8711437/5.bmp"],
[i++,"Anchal","58618650","./SBT/Anchal_58618650/1.bmp","./SBT/Anchal_58618650/2.bmp","./SBT/Anchal_58618650/3.bmp","./SBT/Anchal_58618650/4.bmp","./SBT/Anchal_58618650/5.bmp"],
[i++,"Anjani","66514519","./SBT/Anjani_66514519/1.bmp","./SBT/Anjani_66514519/2.bmp","./SBT/Anjani_66514519/3.bmp","./SBT/Anjani_66514519/4.bmp","./SBT/Anjani_66514519/5.bmp"],
[i++,"AnkitaSingh","46470161","./SBT/AnkitaSingh_46470161/1.bmp","./SBT/AnkitaSingh_46470161/2.bmp","./SBT/AnkitaSingh_46470161/3.bmp","./SBT/AnkitaSingh_46470161/4.bmp","./SBT/AnkitaSingh_46470161/5.bmp"],
[i++,"Anshu","19335761","./SBT/Anshu_19335761/1.bmp","./SBT/Anshu_19335761/2.bmp","./SBT/Anshu_19335761/3.bmp","./SBT/Anshu_19335761/4.bmp","./SBT/Anshu_19335761/5.bmp"],
[i++,"Antima","41070753","./SBT/Antima_41070753/1.bmp","./SBT/Antima_41070753/2.bmp","./SBT/Antima_41070753/3.bmp","./SBT/Antima_41070753/4.bmp","./SBT/Antima_41070753/5.bmp"],
[i++,"Archana","36318488","./SBT/Archana_36318488/1.bmp","./SBT/Archana_36318488/2.bmp","./SBT/Archana_36318488/3.bmp","./SBT/Archana_36318488/4.bmp","./SBT/Archana_36318488/5.bmp"],
[i++,"Arti Yadav","92227266","./SBT/ArtiYadav_92227266/1.bmp","./SBT/ArtiYadav_92227266/2.bmp","./SBT/ArtiYadav_92227266/3.bmp","./SBT/ArtiYadav_92227266/4.bmp","./SBT/ArtiYadav_92227266/5.bmp"],
[i++,"Chandani","16799582","./SBT/Chandani_16799582/1.bmp","./SBT/Chandani_16799582/2.bmp","./SBT/Chandani_16799582/3.bmp","./SBT/Chandani_16799582/4.bmp","./SBT/Chandani_16799582/5.bmp"],
[i++,"Chandani","92732597","./SBT/Chandani_92732597/1.bmp","./SBT/Chandani_92732597/2.bmp","./SBT/Chandani_92732597/3.bmp","./SBT/Chandani_92732597/4.bmp","./SBT/Chandani_92732597/5.bmp"],
[i++,"Diksha","21464115","./SBT/Diksha_21464115/1.bmp","./SBT/Diksha_21464115/2.bmp","./SBT/Diksha_21464115/3.bmp","./SBT/Diksha_21464115/4.bmp","./SBT/Diksha_21464115/5.bmp"],
[i++,"Jashan Preet","5911984","./SBT/JashanPreet_5911984/1.bmp","./SBT/JashanPreet_5911984/2.bmp","./SBT/JashanPreet_5911984/3.bmp","./SBT/JashanPreet_5911984/4.bmp","./SBT/JashanPreet_5911984/5.bmp"],
[i++,"Jyoti Yadav","60524560","./SBT/JyotiYadav_60524560/1.bmp","./SBT/JyotiYadav_60524560/2.bmp","./SBT/JyotiYadav_60524560/3.bmp","./SBT/JyotiYadav_60524560/4.bmp","./SBT/JyotiYadav_60524560/5.bmp"],
[i++,"KamlaNisad","53550337","./SBT/KamlaNisad_53550337/1.bmp","./SBT/KamlaNisad_53550337/2.bmp","./SBT/KamlaNisad_53550337/3.bmp","./SBT/KamlaNisad_53550337/4.bmp","./SBT/KamlaNisad_53550337/5.bmp"],
[i++,"Kiran","3019355","./SBT/Kiran_3019355/1.bmp","./SBT/Kiran_3019355/2.bmp","./SBT/Kiran_3019355/3.bmp","./SBT/Kiran_3019355/4.bmp","./SBT/Kiran_3019355/5.bmp"],
[i++,"Komal","19335761","./SBT/Komal_19335761/1.bmp","./SBT/Komal_19335761/2.bmp","./SBT/Komal_19335761/3.bmp","./SBT/Komal_19335761/4.bmp","./SBT/Komal_19335761/5.bmp"],
[i++,"Komal-19","55331209","./SBT/Komal-19_55331209/1.bmp","./SBT/Komal-19_55331209/2.bmp","./SBT/Komal-19_55331209/3.bmp","./SBT/Komal-19_55331209/4.bmp","./SBT/Komal-19_55331209/5.bmp"],
[i++,"Laxmi","16248925","./SBT/Laxmi_16248925/1.bmp","./SBT/Laxmi_16248925/2.bmp","./SBT/Laxmi_16248925/3.bmp","./SBT/Laxmi_16248925/4.bmp","./SBT/Laxmi_16248925/5.bmp"],
[i++,"Laxmi","62440528","./SBT/Laxmi_62440528/1.bmp","./SBT/Laxmi_62440528/2.bmp","./SBT/Laxmi_62440528/3.bmp","./SBT/Laxmi_62440528/4.bmp","./SBT/Laxmi_62440528/5.bmp"],
[i++,"Mahak","40295313","./SBT/Mahak_40295313/1.bmp","./SBT/Mahak_40295313/2.bmp","./SBT/Mahak_40295313/3.bmp","./SBT/Mahak_40295313/4.bmp","./SBT/Mahak_40295313/5.bmp"],
[i++,"Manju","30540048","./SBT/Manju_30540048/1.bmp","./SBT/Manju_30540048/2.bmp","./SBT/Manju_30540048/3.bmp","./SBT/Manju_30540048/4.bmp","./SBT/Manju_30540048/5.bmp"],
[i++,"Meera","51662813","./SBT/Meera_51662813/1.bmp","./SBT/Meera_51662813/2.bmp","./SBT/Meera_51662813/3.bmp","./SBT/Meera_51662813/4.bmp","./SBT/Meera_51662813/5.bmp"],
[i++,"Pooja","46681736","./SBT/Pooja_46681736/1.bmp","./SBT/Pooja_46681736/2.bmp","./SBT/Pooja_46681736/3.bmp","./SBT/Pooja_46681736/4.bmp","./SBT/Pooja_46681736/5.bmp"],
[i++,"PoojaShukla","85255113","./SBT/PoojaShukla_85255113/1.bmp","./SBT/PoojaShukla_85255113/2.bmp","./SBT/PoojaShukla_85255113/3.bmp","./SBT/PoojaShukla_85255113/4.bmp","./SBT/PoojaShukla_85255113/5.bmp"],
[i++,"PoojaSingh","92784202","./SBT/PoojaSingh_92784202/1.bmp","./SBT/PoojaSingh_92784202/2.bmp","./SBT/PoojaSingh_92784202/3.bmp","./SBT/PoojaSingh_92784202/4.bmp","./SBT/PoojaSingh_92784202/5.bmp"],
[i++,"Poonam-37","89622999","./SBT/Poonam-37_89622999/1.bmp","./SBT/Poonam-37_89622999/2.bmp","./SBT/Poonam-37_89622999/3.bmp","./SBT/Poonam-37_89622999/4.bmp","./SBT/Poonam-37_89622999/5.bmp"],
[i++,"PoonamMaurya-19","97852634","./SBT/PoonamMaurya-19_97852634/1.bmp","./SBT/PoonamMaurya-19_97852634/2.bmp","./SBT/PoonamMaurya-19_97852634/3.bmp","./SBT/PoonamMaurya-19_97852634/4.bmp","./SBT/PoonamMaurya-19_97852634/5.bmp"],
[i++,"Pragati","24391149","./SBT/Pragati_24391149/1.bmp","./SBT/Pragati_24391149/2.bmp","./SBT/Pragati_24391149/3.bmp","./SBT/Pragati_24391149/4.bmp","./SBT/Pragati_24391149/5.bmp"],
[i++,"PujaPrajapati","97725874","./SBT/PujaPrajapati_97725874/1.bmp","./SBT/PujaPrajapati_97725874/2.bmp","./SBT/PujaPrajapati_97725874/3.bmp","./SBT/PujaPrajapati_97725874/4.bmp","./SBT/PujaPrajapati_97725874/5.bmp"],
[i++,"RenuYadav","14990235","./SBT/RenuYadav_14990235/1.bmp","./SBT/RenuYadav_14990235/2.bmp","./SBT/RenuYadav_14990235/3.bmp","./SBT/RenuYadav_14990235/4.bmp","./SBT/RenuYadav_14990235/5.bmp"],
[i++,"RinkiSahu","78097394","./SBT/RinkiSahu_78097394/1.bmp","./SBT/RinkiSahu_78097394/2.bmp","./SBT/RinkiSahu_78097394/3.bmp","./SBT/RinkiSahu_78097394/4.bmp","./SBT/RinkiSahu_78097394/5.bmp"],
[i++,"Roopa","54454143","./SBT/Roopa_54454143/1.bmp","./SBT/Roopa_54454143/2.bmp","./SBT/Roopa_54454143/3.bmp","./SBT/Roopa_54454143/4.bmp","./SBT/Roopa_54454143/5.bmp"],
[i++,"Roopa","96162073","./SBT/Roopa_96162073/1.bmp","./SBT/Roopa_96162073/2.bmp","./SBT/Roopa_96162073/3.bmp","./SBT/Roopa_96162073/4.bmp","./SBT/Roopa_96162073/5.bmp"],
[i++,"Sarita","34514148","./SBT/Sarita_34514148/1.bmp","./SBT/Sarita_34514148/2.bmp","./SBT/Sarita_34514148/3.bmp","./SBT/Sarita_34514148/4.bmp","./SBT/Sarita_34514148/5.bmp"],
[i++,"Sejal Pandey","6475232","./SBT/SejalPandey_6475232/1.bmp","./SBT/SejalPandey_6475232/2.bmp","./SBT/SejalPandey_6475232/3.bmp","./SBT/SejalPandey_6475232/4.bmp","./SBT/SejalPandey_6475232/5.bmp"],
[i++,"Shweta","43846701","./SBT/Shweta_43846701/1.bmp","./SBT/Shweta_43846701/2.bmp","./SBT/Shweta_43846701/3.bmp","./SBT/Shweta_43846701/4.bmp","./SBT/Shweta_43846701/5.bmp"],
[i++,"Srishti","25354261","./SBT/Srishti_25354261/1.bmp","./SBT/Srishti_25354261/2.bmp","./SBT/Srishti_25354261/3.bmp","./SBT/Srishti_25354261/4.bmp","./SBT/Srishti_25354261/5.bmp"],
[i++,"Suman","67188404","./SBT/Suman_67188404/1.bmp","./SBT/Suman_67188404/2.bmp","./SBT/Suman_67188404/3.bmp","./SBT/Suman_67188404/4.bmp","./SBT/Suman_67188404/5.bmp"],
[i++,"Swati Yadav","67464925","./SBT/SwatiYadav_67464925/1.bmp","./SBT/SwatiYadav_67464925/2.bmp","./SBT/SwatiYadav_67464925/3.bmp","./SBT/SwatiYadav_67464925/4.bmp","./SBT/SwatiYadav_67464925/5.bmp"],
[i++,"Mahima Yadav","31604376","./SBT/MahimaYadav_31604376/1.bmp","./SBT/MahimaYadav_31604376/2.bmp","./SBT/MahimaYadav_31604376/3.bmp","./SBT/MahimaYadav_31604376/4.bmp","./SBT/MahimaYadav_31604376/5.bmp"],
[i++,"NehaNishad","75040829","./SBT/NehaNishad_75040829/1.bmp","./SBT/NehaNishad_75040829/2.bmp","./SBT/NehaNishad_75040829/3.bmp","./SBT/NehaNishad_75040829/4.bmp","./SBT/NehaNishad_75040829/5.bmp"],
[i++,"Neha Yadav","90354510","./SBT/NehaYadav_90354510/1.bmp","./SBT/NehaYadav_90354510/2.bmp","./SBT/NehaYadav_90354510/3.bmp","./SBT/NehaYadav_90354510/4.bmp","./SBT/NehaYadav_90354510/5.bmp"]

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
