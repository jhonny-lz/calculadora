precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const suma = () => {
    let numero = document.querySelector("#cantidad");


    let resultado = Number(numero.innerHTML);

    resultado = resultado + 1;

    numero.innerHTML = resultado;
};

const resta = () => {
    let numero = document.querySelector("#cantidad");


    let resultado = Number(numero.innerHTML);

    resultado = resultado - 1;

    numero.innerHTML = resultado;
};

const aumenta = () => {
    let numero = document.querySelector("#precio-inicial");


    let resultado = Number(numero.innerHTML);

    resultado = resultado - 1;

    numero.innerHTML = resultado;
};

const disminuye = () => {
    let numero = document.querySelector("#cantidad");


    let resultado = Number(numero.innerHTML);

    resultado = resultado - 1;

    numero.innerHTML = resultado;
};
