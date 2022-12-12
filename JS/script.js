"use strict"
const ul = document.querySelector("ul");

function frames() {
    const animacion = ul.animate([
        //keyframes
        { transform: "translateY(0px)" },
    ], {
        //opciones
        //velocidad:
        easing: "linear",
        iterations: 1,
        duration: 500 //milisegundos
    });
    return animacion.finished;
}

function displace() {
    frames()
        .then((res) => {
            console.log(res);
            ul.appendChild(document.querySelectorAll("ul>li")[0]) //aprenChild coloca un hijo al elemento 
        })
}

//setInterval repite operaciones cada cierto tiempo determinado.
setInterval(() => {
    displace();
}, 1000);
