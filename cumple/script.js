const boton = document.getElementById("btnCumple");
const sorpresa = document.getElementById("sorpresa");
const fondo = document.querySelector(".background");
const audio = new Audio("cornetita.mp3");


boton.addEventListener("click", function() {

    sorpresa.classList.remove("oculto");

    audio.currentTime = 0;
    audio.play();


    for (let i = 0; i < 30; i++) {

        const confeti = document.createElement("div");

        confeti.classList.add("confeti");

        confeti.textContent = "✨" ;

        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confeti);
    
    }

});


let tiempo = 0;

let mouseX = 50;
let mouseY = 50;

let posicionX = 50;
let posicionY = 50;


document.addEventListener("mousemove", function(event) {

    mouseX = event.clientX / window.innerWidth * 100;
    mouseY = event.clientY / window.innerHeight * 100;

});


function animar() {

    tiempo += 0.01;


    // 1. Movimiento automático
    const movimientoX = 50 + Math.sin(tiempo) * 20;
    const movimientoY = 50 + Math.cos(tiempo) * 20;


    // 2. El mouse modifica ese movimiento
    const objetivoX =
        movimientoX + (mouseX - 50) * 0.8;

    const objetivoY =
        movimientoY + (mouseY - 50) * 0.8;


    // 3. Movimiento suave hacia el objetivo
    posicionX += (objetivoX - posicionX) * 0.05;
    posicionY += (objetivoY - posicionY) * 0.05;


    // 4. Mandamos la posición al CSS
    document.documentElement.style.setProperty(
        "--mouse-x",
        posicionX + "%"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        posicionY + "%"
    );


    requestAnimationFrame(animar);
}


animar();