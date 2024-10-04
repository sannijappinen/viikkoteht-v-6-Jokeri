const button = document.querySelector('button');
const table = document.querySelector('table');
const countDisplay = document.querySelector('p');
let rowCount = 0;  
function arvoNumero() {
    return Math.floor(Math.random() * 10);
}

function lisaaRivi() {
    const row = table.insertRow();

    for (let i = 0; i < 7; i++) {
        const cell = row.insertCell();
        cell.textContent = arvoNumero();
    }

    rowCount++;
    countDisplay.textContent = `Arvottuja rivejä: ${rowCount}`;
}

button.addEventListener('click', lisaaRivi);
