/*const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

document.body.innerHTML = `
<h2>Detail objednavky</h2>

<p>ID objednavky: ${order.id}</p>
<p>Nazev produktu: ${order.product}</p>
<p>Ocekavane dodani: ${order.delivery}</p>
<p>Delka jmena produktu: ${order.product.length}</p>
<p>Matematicka operace: ${365 + 44 - 12}</p>*/

/*const title = "Pan Prstenu"

document.body.innerHTML += title.length
document.body.innerHTML += title.toUpperCase ()
document.body.innerHTML += title.slice(0,6)
document.body.innerHTML += title.slice(title.length - 5, title.length)*/

/*const email = prompt("Zadejte svuj email")

const atIndex = email.indexOf("@")
const parsedEmail = {
  userName: email.slice()
  domain: 'yahoo.com',
};
document.body.innerHTML += email.slice(0, @)*/

/*const vek = 18
const preference = "cervene"
const naSklade = false
const dostupne = false

// < <= > >= 
// == ===
// != !==

// String   Number
if(naSklade === false) { 
    document.body.innerHTML = `<p>produkt je na sklade</p>`
} else { 
    document.body.innerHTML = `<p>produkt neni na sklade</p>`
}


/*
if(vek >= 18) {
    document.body.innerHTML = `Je ti vic nez 18, muzes nakupovat`
    
    if(preference === "cervene") {
        document.body.innerHTML = `Je ti vic nez 18, muzes nakupovat, tady je vyber cerveneho vina`
    }
} else {
    document.body.innerHTML = `Je ti vic mene 18, nemuzes nakupovat`
}
*/
/*

const znamka = 5

if(znamka !== 5) {
    document.body.innerHTML += `vyborny`
} else if(znamka === 2) {
    document.body.innerHTML = `chvalitebny`
} else if(znamka === 3) {
    document.body.innerHTML = `dobry`
} else if(znamka === 4) {
    document.body.innerHTML = `dostatecny`
} else if(znamka === 1) {
    document.body.innerHTML = `nedostatecny`
} else {
    document.body.innerHTML += `spatne zadana znamka`
}

switch(znamka) {
    case 1:
        document.body.innerHTML += `vyborny`
        break

    case 2:
        document.body.innerHTML += `chvalitebny`
        break

    default:
        document.body.innerHTML += `spatne zadana znamka`
        break
}*/

//cviceni podminky 1 --------- Registrace ockovani

/*const jmeno = prompt('Zadejte jmeno a prijmeni:');
const vek = Number(prompt('Zadejte vek:'));
const heslo = prompt('Zadejte heslo:');
const hesloLength = heslo.length;


if (vek >= 65) {
  document.body.innerHTML += 'Vek v poradku';
} else if (vek < 65) {
  document.body.innerHTML += 'Nizky vek';
}

if (hesloLength < 8 ) {

  document.body.innerHTML += ' Slabe heslo';} */

//cviceni podminky 2 - ---Cena Vstupenky

/*const vek = Number(prompt('Zadejte vek:'));
const plnaCena = 12;

if (vek <= 6) {
    document.body.innerHTML += '<p>Cena vstupenky je ' + plnaCena * 0 + ' €</p>';
} else if (vek >= 6 && vek <= 27) {
    document.body.innerHTML += '<p>Cena vstupenky je ' + Math.round(plnaCena * 0.65) + ' €</p>';
} else if (vek >= 27 && vek <= 64) {
    document.body.innerHTML += '<p>Cena vstupenky je ' + plnaCena + ' €</p>';
} else if (vek >= 64) {
    document.body.innerHTML += '<p>Cena vstupenky je ' + Math.round(plnaCena * 0.50) + ' €</p>';
} else {
    document.body.innerHTML += 'error';
}*/

//ulozky na doma 1 Fit email - nemam bez diakritiky!!
var str = 'áàâäãéèëêíìïîóòöôõúùüûñçăşţ';
var asciiStr = str.normalize('NFKD').replace(/[^\w]/g, '');
console.info(str, asciiStr);

const firstName = prompt('Zadejte sve krestni jmeno:')
  .trim()
  .slice(0, 3)
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^\w]/g, '');
const lastName = prompt('Zadejte sve prijmeni:')
  .trim()
  .slice(0, 5)
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^\w]/g, '');

document.body.innerHTML += `<p>${lastName}${firstName}@fit.cvut.cz</p>`;

