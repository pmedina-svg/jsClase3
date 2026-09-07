//FUNCTION DATOS: función para pedir datos usando scope local y return para usar el valor nombre fuera de la función
function bienvenidaPedirDatos() {
    const nombre = prompt("Bienvenido al ejercicio de la clase 3 de JS. ¿Cuál es tu nombre?");
    console.log("el nombre del participante es:", nombre);
    alert("Hola " + nombre);
    return nombre;
}

//FUNCTION DECLARADA: pide al usuario si quiere jugar, procesa la respuesta y la retorna para continuar
function quieresJugar() {
    const respuesta = prompt("Quieres jugar un juego? responde (si/no)").toLowerCase();
    console.log("Lo que respondio a la participación:", respuesta);
    return respuesta;
}

//FUNCTION Juego: corre automatico el juego
function runJuego() {
    alert("Alguien han robado una joyería!");
    alert("La policía capturó a 4 sospechosos: Carlos, Diego, Martín y Sebastián");
    alert("Tienes 3 intentos para encontrar al ladrón.");
}

function intentoSospechoso() {
    const sospechoso = parseInt(prompt("Escribe el número de quién crees que es el ladrón: \n1. Carlos \n2. Diego \n3. Martín \n4. Sebastián"));
    console.log("la respuesta de quien cree que es el sospechoso:", sospechoso);
    return sospechoso;
}

//FUNCIÓN PARA COMPROBAR QUIEN ES EL LADRÓN
function comprobarSospechoso(sospechoso, ladron) {
    return sospechoso == ladron;
}

const nombre = bienvenidaPedirDatos();

//VARIABLES: las variables del juego, confirmación si acepta jugar, defino número de posición del ladrón, intentos, el estado si fue encontrado o no.
let confirmacion;
const ladron = 3;
let intentos = 0;
let encontrado = false;
let jugarDeNuevo;


//INICIO DEL JUEGO
do {
    confirmacion = quieresJugar();

    if (confirmacion == "si") {

        //INICIO DE PARTIDA
        do {
        
            // Reinicio de datos para comenzar una partida nueva
            intentos = 0;
            encontrado = false;

            runJuego();

            //BUCLE: inicio de los intentos
            while (intentos < 3 && !encontrado) {

                const sospechoso = intentoSospechoso();

                //CONDICIONAL: depende la elección es el resultado
                if (comprobarSospechoso(sospechoso, ladron)) {
                    encontrado = true;
                    console.log("Encontró al ladrón");
                    alert("Felicidades " + nombre + " encontraste al ladrón");
                } 
                
                else if (sospechoso >= 1 && sospechoso <= 4) {
                    intentos++;
                    console.log(intentos);
                    alert("Ups, no es el ladrón. Vuelve a intentarlo");
                } 
                
                else {
                    alert("Pensé que lo podrías decir jajaja, pero no hay ese número de sospechoso, vuelve a intentarlo");
                }
            }

            //RESULTADO del juego
            if (encontrado == false) {
                alert("Game over, el ladrón escapó");
                jugarDeNuevo = confirm("¿Quieres intentarlo de nuevo?");
                console.log("Quiere volver a intentarlo?:", jugarDeNuevo);
            } 
            
            else {
                jugarDeNuevo = false;
            }

        } while (jugarDeNuevo);

    } 
    
    else if (confirmacion == "no") {
        alert("No te preocupes " + nombre + " será en una próxima vez");
    } 
    
    else {
        alert("respuesta invalida");
    }

} while (confirmacion != "si" && confirmacion != "no");