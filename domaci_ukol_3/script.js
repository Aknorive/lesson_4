const inputDate = prompt('Zadejte datum ve formatu: DD.MM.YYYY');

const day = Number(inputDate.slice(0, 2));
const month = Number(inputDate.slice(4, 5));
const year = Number(inputDate.slice(6));

document.body.innerHTML += `day: ${day}, month: ${month}, year: ${year}`;
