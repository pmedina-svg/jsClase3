//FUNCTION 1 CAPTURA DATOS: le pedimos datos a quien interactua con parametro, utiliza el argumento y return el nombre.
function capturaDatos(inicio){
    const nombre = prompt(inicio);
    console.log("el nombre del participante es:", nombre);
    alert("Hola " + nombre);
    return nombre;
}

const nombre = capturaDatos("Bienvenido al ejercicio de la clase 3 de JS. ¿Cuál es tu nombre?");

// FUNCTION 2 ELECCION SOSPECHOSO, uso los parametros sospechoso y ladron, los compara y devuelve return TRUE o FALSE.
function eleccionSospechoso(sospechoso, ladron){
    return sospechoso==ladron;
}

// FUNCTION 3 NUMERO INTENTOS, conteo de número de intentos, suma cantidad de intentos y devuelve el número de intento.
function numeroIntentos(intentos){
    intentos++;
    console.log("número de intento:", intentos);
    return intentos;
}


//VARIABLES: las variables del juego, confirmación si acepta jugar, defino número de posición del ladrón, intentos, el estado si fue encontrado o no.
let confirmacion;
const ladron = 3;
let intentos = 0;
let encontrado = false;
let jugarDeNuevo;


//INICIO DEL JUEGO
do {
    confirmacion = prompt("Quieres jugar un juego? responde (si/no)").toLowerCase();
    console.log("Lo que respondio a la participación:", confirmacion);

    if(confirmacion == "si"){

        do{

            intentos = 0;
            encontrado = false;

            alert("Alguien han robado una joyería!");
            alert("La policía capturó a 4 sospechosos: Carlos, Diego, Martín y Sebastián");
            alert("Tienes 3 intentos para encontrar al ladrón.");

            //BUCLE: inicio de los intentos     
            while(intentos < 3 && !encontrado){
                const sospechoso = parseInt(prompt("Escribe el número de quién crees que es el ladrón: \n1. Carlos \n2. Diego \n3. Martín \n4. Sebastián"));
                console.log("la respuesta de quien cree que es el sospechoso:", sospechoso);

                //CONDICIONAL: depende la elección es el resultado
                if(eleccionSospechoso(sospechoso, ladron)){

                    encontrado = true;
                    alert("Felicidades " + nombre + " encontraste al ladrón");
                    console.log("Respuesta correcta, encontró al ladrón");
                }
                    
                else if(sospechoso >=1 && sospechoso <= 4){
                    intentos = numeroIntentos(intentos);
                    alert("Ups, no es el ladrón. Vuelve a intentarlo");
                }

                else{
                    alert("Pensé que lo podrías decir jajaja, pero no hay ese número de sospechoso, vuelve a intentarlo");
                }
            }

            
            //RESULTADO del juego
            if(encontrado == false){
                alert("Game over, el ladrón escapó");

                //FUNCION FLECHA para confirmar TRUE o FALSE en si quiere volver a intentarlo.
                const volverAJugar = (mensaje)=>{
                    return confirm(mensaje);
                }

                jugarDeNuevo = volverAJugar("Quieres intentarlo denuevo?");
                console.log("Lo que respondio a si quería volver a jugar:", jugarDeNuevo);
            }

            //SI NO quiere volver a jugar
            else{
                jugarDeNuevo = false;
            }

        } while(jugarDeNuevo);

    }

    else if(confirmacion =="no"){
        alert("No te preocupes " + nombre + " será en una próxima vez");
        console.log("No quiso jugar");
    }

    else{
        alert("respuesta invalida");
    }

}

while(confirmacion != "si" && confirmacion != "no");