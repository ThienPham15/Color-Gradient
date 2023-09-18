const form = document.querySelector('form')
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const directions = document.querySelectorAll('[type="radio"]')
const colorCode = document.querySelector('#colorCode')

function bgGenerator() {
    let selectedValue;

    for (const item of directions) {
        if (item.checked) {
            selectedValue = item.value
        }
    }

    let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

    document.body.style.backgroundImage = gradient;

    colorCode.textContent = `${color1.value}, ${color2.value}`;
} 

form.addEventListener('change', bgGenerator);