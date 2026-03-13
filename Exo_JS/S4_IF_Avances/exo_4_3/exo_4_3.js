let total;
let nombre_photocopie;

nombre_photocopie = parseInt(prompt("Entrez le nombre de photocopies : "));

if (nombre_photocopie <= 10) {
    total = nombre_photocopie * 0.20;
} else if (nombre_photocopie <= 30) {
    total = 10 * 0.20 + (nombre_photocopie - 10) * 0.10;
} else {
    total = 10 * 0.20 + 20 * 0.10 + (nombre_photocopie - 30) * 0.05;
}

console.log(`Le total à payer pour ${nombre_photocopie} photocopies est de ${total.toFixed(2)} euros.`);
