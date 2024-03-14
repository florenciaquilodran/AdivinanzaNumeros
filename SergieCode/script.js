//El juego selecciona un número al azar para que adivines
let numeroAzar = Math.floor(Math.random() *100) + 1;

//Obtenemos los objetos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

//La acción se ejecutará cuando se aprete el botón chequear
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Introduce un número válido entre 1 y 100';
        mensaje.style.color = 'red';
        return;
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Woho felicitaciones ganaste el juego';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto! El numero es mayor al que ingresaste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Mas bajo! El número es menor al que ingresaste';
        mensaje.styler.color = 'red';
    }
}