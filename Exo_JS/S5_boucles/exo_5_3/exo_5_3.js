let nb = 0;
let nb_string = "";
let nb_string1 = "";

nb = parseInt(prompt("Entrez un nombre : "));
limit = nb+10;

for (let i=nb; i <= limit; i++) {
    nb_string += i;

    if (i < limit) nb_string += ", ";
}
console.log(nb_string);

while (nb <= limit) {
    nb_string1 += nb;

    if (nb < limit) nb_string1 += ", ";
    nb++;
}

console.log(nb_string1);
    
