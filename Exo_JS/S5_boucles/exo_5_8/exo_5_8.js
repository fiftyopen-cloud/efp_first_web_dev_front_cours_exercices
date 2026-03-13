let limit = 20;
let nb_plus_petit = 0;
let i = 0;

while (i <= limit) {
    let nb = parseInt(prompt("Entrez un nombre : "));
    console.log("le nombre introduit " + nb);

    if (nb == 0) i = limit;
    if (i == 0) 
        nb_plus_petit = nb;
    else {
        if (nb < nb_plus_petit) {
            nb_plus_petit = nb;
            console.log("le nombre le plus petit " + nb_plus_petit);
        }
    }
    
    ++i;
}

console.log("le numbre le plus petit est : " + nb_plus_petit);