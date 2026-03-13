let hour, minute;

hour = prompt("Entrez l'heure courante (0-23) :");
minute = prompt("Entrez les minutes (0-59) :");

hour = parseInt(hour) + 1
minute = parseInt(minute) + 1;

if (minute == 60) {
    minute = 0;
    hour = hour + 1;
    if (hour == 24) {
        hour = 0;
    }
}

console.log("Il est " + hour + "h" + minute + ".");