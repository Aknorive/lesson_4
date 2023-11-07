
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

