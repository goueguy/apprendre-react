
const input = document.querySelector('input');
input.addEventListener('keyup', (event) => {
    //const currentValue = (event.target.value).replace(/\./g, '');
    const currentValue = (event.target.value).replace(/\s/g, '');
    //const newValue = Number.parseInt(currentValue).toLocaleString('id-ID');
    const newValue = Number.parseInt(currentValue).toLocaleString('fr-FR');
    console.log(Number(currentValue.replace(/\s/g, '')));
    event.target.value = newValue;
});