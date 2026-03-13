let nb_string = "";
let total = 1;
let nb = parseInt(prompt("Entrez un nombre : "));
let i = 1;

while (i <= nb) {
    nb_string += i;
    
    if (i < nb) nb_string += " x ";

    total *= i;
    ++i;
}

console.log(nb + "! = " + nb_string + " = " + total);