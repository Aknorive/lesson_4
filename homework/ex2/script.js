const trickoPocet = Number(prompt('Zadejte pocet kusu: '));

if (trickoPocet <= 49) {
    document.body.innerHTML += '<p>Celkova cena objednavky: ' + (trickoPocet * 300) + ' czk</p>';
} else if (trickoPocet >= 50 && trickoPocet <= 200) {
    document.body.innerHTML += '<p>Celkova cena objednavky: ' + (trickoPocet * 250) + ' czk</p>';
} else if (trickoPocet >= 201 && trickoPocet <= 500) {
    document.body.innerHTML += '<p>Celkova cena objednavky: ' + (trickoPocet * 200) + ' czk</p>';
} else if (trickoPocet >= 501 && trickoPocet <= 999) {
    document.body.innerHTML += '<p>Celkova cena objednavky: ' + (trickoPocet * 150) + ' czk</p>';
}
else if (trickoPocet >= 1000) {
    document.body.innerHTML += '<p>Celkova cena objednavky: ' + (trickoPocet * 120) + ' czk</p>';
} else {
    document.body.innerHTML += '<p>Neplatný počet kusů tricka</p>';
};
