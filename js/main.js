
//CAPTURA DATOS: le pedimos datos a quien interactua
const nombre = prompt("Bienvenido al ejercicio de la clase 2 de JS. ¿Cuál es tu nombre?");
console.log("el nombre del participante es:", nombre);
alert("Hola " + nombre);

//VARIABLES: las variables del juego, confirmación si acepta jugar, defino número de posición del ladrón, intentos, el estado si fue encontrado o no.
let confirmacion;
const ladron = 3;
let intentos = 0;
let encontrado = false;


//INICIO DEL JUEGO
do {
    confirmacion = prompt("Quieres jugar un juego? responde (si/no)").toLowerCase();
    console.log("Lo que respondio a la participación:", confirmacion);

    if(confirmacion == "si"){

        alert("Alguien han robado una joyería!");
        alert("La policía capturó a 4 sospechosos: Carlos, Diego, Martín y Sebastián");
        alert("Tienes 3 intentos para encontrar al ladrón.");

        //BUCLE: inicio de los intentos     
        while(intentos < 3 && !encontrado){
            const sospechoso = parseInt(prompt("Escribe el número de quién crees que es el ladrón: \n1. Carlos \n2. Diego \n3. Martín \n4. Sebastián"));
            console.log("la respuesta de quien cree que es el sospechoso:", sospechoso);

            //CONDICIONAL: depende la elección es el resultado
            if(sospechoso == ladron){

                encontrado = true;
                alert("Felicidades " + nombre + " encontraste al ladrón");
            }
                
            else if(sospechoso >=1 && sospechoso <= 4){
                intentos++;
                console.log(intentos);
                alert("Ups, no es el ladrón. Vuelve a intentarlo");
            }

            else{
                alert("Pensé que lo podrías decir jajaja, pero no hay ese número de sospechoso, vuelve a intentarlo");
            }
        }

        
        //RESULTADO del juego
        if(encontrado == false){
            alert("Game over, el ladrón escapó");
        }


    }

    else if(confirmacion =="no"){
        alert("No te preocupes " + nombre + " será en una próxima vez");
    }

    else{
        alert("respuesta invalida");
    }

}

while(confirmacion != "si" && confirmacion != "no");