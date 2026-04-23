let numero_contador = 0;
let display = document.getElementById("contador");

document.getElementById("increment").addEventListener("click", function() {
    numero_contador++;
    display.textContent = numero_contador;
});

document.getElementById("decrement").addEventListener("click", function() {
    numero_contador--;
    display.textContent = numero_contador;
});

document.getElementById("reset").addEventListener("click", function() {
    numero_contador = 0;
    display.textContent = numero_contador;
});