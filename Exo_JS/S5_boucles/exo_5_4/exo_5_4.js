let nb = 0;
let i = 0;
let limit = 10;

nb = parseInt(prompt("Entrez un nombre : "));

while (i <= limit) {
    console.log(nb + " X " + i + " = " + nb * i);

    ++i;
}