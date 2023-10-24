// Crear constante para los grados de los minutos y segundos
const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

// Funcion intervalo
setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    // Se configura que todo aquello que esté relacionado con el nombre en HTML y CSS adquiera la función de rotar. Además, configura la operación sobre cada cuánto debe cambiar de posición.
    hora.style.transform = `rotate(${(hr + min / 12)}deg)`;
    minuto.style.transform = `rotate(${min}deg)`;
    segundo.style.transform = `rotate(${seg}deg)`;
}, 1000); // Intervalo de actualización cada segundo

const horaDigital = document.querySelector('.hora-digital');
// ...

function actualizarHoraDigital() {
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();

    // Variable para el formato de 12 horas
    const am_pm = horas >= 12 ? 'PM' : 'AM';

    // Convierte las horas al formato 12h
    let hora_12 = horas % 12 || 12;
    hora_12 = hora_12 < 10 ? '0' + hora_12 : hora_12;
    let minutos_12 = minutos < 10 ? '0' + minutos : minutos;
    let segundos_12 = segundos < 10 ? '0' + segundos : segundos;

    // Crear el tiempo en el formato de 12h
    const hora_12_str = `${hora_12}:${minutos_12}:${segundos_12} ${am_pm}`;

    // Actualizar la hora en el elemento HTML
    horaDigital.textContent = hora_12_str;
}

// Llamar a la función para actualizar la hora digital cada segundo
setInterval(actualizarHoraDigital, 1000);


