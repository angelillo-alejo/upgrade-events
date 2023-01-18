/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

function handleClick(btn$$){
    console.log(event.target);
}

const btn$$ = document.querySelector("#btnToClick").addEventListener("click", handleClick);



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.


function inputFocus(event){
let focusValue = event.target.value;
console.log(`Valor: ${focusValue}`);
}
document.querySelector('.focus').addEventListener('focus', inputFocus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let valorInputs = document.querySelectorAll('input[type="text"]');
for (let valor of valorInputs){
    valor.addEventListener('change', value);
}

function value(event) {
    let inputText = event.target.value;
    console.log("Valor de input: " + inputText);
}