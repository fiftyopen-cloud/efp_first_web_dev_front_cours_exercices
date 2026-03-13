let total = 0;
let prix = 0;
do {
    prix = parseInt(prompt("Entrez le prix d'un article : "));
    console.log("le prix de l'article est " + prix);
    total += prix;
} while (prix != 0);

console.log("Le prix total est : " + total);

let payer_client = 0;
let rendre = 0;

payer_client = parseInt(prompt("Entrez le montant à payer : "));
rendre = payer_client - total;
console.log("le montant à rendre est de " + rendre);

let man = [10, 5, 2, 1];
let i = 0;
let operation = "";

while (rendre > 0) {
    if (man[i] <= rendre) {
       operation += man[i] + " € ";
       rendre -= man[i];
    } else {
        ++i;
    }
}
console.log(operation);