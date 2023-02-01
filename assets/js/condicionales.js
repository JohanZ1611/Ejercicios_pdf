//condicionales

//1.
function soyMayor (numero1,numero2){
    
    if(numero1 > numero2){
        return console.log("Soy mayor que el segundo")
    }else{
        return console.log("Soy mayor que el primero")
    }

}

//soyMayor (3,2)

//2.
function soyIgual (numero1,numero2){
    
    if(numero1 === numero2){
        return console.log("Somos iguales")
    }else{
        return console.log("Somos diferentes")
    }

}

//soyIgual (1,1)}

//3.

function soyMasgrande (numero1,numero2){
    

    if(numero1 > numero2){
        return console.log("Soy mas grande y soy el: "+numero1 )
    }else if(numero1 === numero2){
        return console.log("Somos iguales")
    }else{
        return console.log("soy mas grande y soy el: "+numero2)
    }

}

//soyMasgrande (1,1)

//4.

function soyMasChico (numero1,numero2,numero3){

    if(numero1 < numero2 && numero1 < numero3){
        return console.log("soy el mas chico y soy el numero1")
    }else if(numero2 < numero1 && numero2 < numero3){
        return console.log("soy el mas chico y soy el numero2")
    }else{
        return console.log("soy el mas chico y soy el numero3")
    }

}

//soyMasChico (1,3,3)

//5.

const persona1 = {
    nombre: "Johan",
    edad: 19,
    altura: 173
}
const persona2 = {
    nombre: "Laura",
    edad: 15,
    altura: 170
}

function personaMayor(persona1,persona2){

    if (persona1.altura > persona2.altura && persona1.edad > persona2.edad){
        return console.log("soy mayor de edad y soy mas alto que: " + persona2.nombre)
    }else{
        return console.log("soy mayor de edad y soy mas alto que: " + persona1.nombre)
    }

    
}

//personaMayor(persona1,persona2)

//6.
function permisoConduccion(nombre,edad,altura,vision) {

    if(edad >= 18 && altura >= 150 && vision >= 8 && vision <= 10){
        return console.log("Estas capacitado para conducir")
    }else{
        return console.log("No estas capacitado para conducir")
    }
}

//permisoConduccion("johan",19,150,8)

//7.
function ingreso(nombre,pase,entrada){

    if(nombre === "johan"){
        return console.log("tienes ingreso libre,¡BIENVENIDO!")
    }else if (pase === "VIP"){
        return console.log("tienes ingreso libre,¡BIENVENIDO!")
    }else if (entrada === "si"){
        let usaraEntrada = prompt("Deseas usar tu entrada?: ")

        if (usaraEntrada === "si"){
            return console.log("tienes ingreso libre,¡BIENVENIDO!")
        }else{
            return console.log("Rechazado, no eres bienvenido")
        }

    }else if (nombre != "johan" && pase != "VIP" && entrada === "no"){
        let pregunta = prompt("Desea comprar?: ")

        if(pregunta === "si"){
            let dineroDisponible = prompt("Cunato dinero tienes?: ")

            if(dineroDisponible >= 1000){
                return console.log("Haz comprado una entrada,¡BIENVENIDO!")
            }else{
                return console.log("Rechazado, no eres bienvenido")
            }

        }else{
            return console.log("Hasta luego con gusto.")
        }
    }

}

//ingreso("no","no","no")

//8.


function valor(){

    let numeroIngresado = prompt("ingresa un numero del 1 al 10: ")

    if(numeroIngresado >=1 && numeroIngresado <=10){
        return adivinanza(numeroIngresado)
    }else{
        alert("el numero ingresado no esta dentro del rango de 1 a 10 ngresa otro valor: ")
        return valor()
    }

}



function adivinanza(numero) {

    let numeroIncognita = 6

    if(numero > numeroIncognita){
        alert("El numero ingresado es mayor, vuelve a intentarlo")
        return valor()
    }else if(numero < numeroIncognita){
        alert("El numero ingresado es menor, vuelve a intentarlo")
        return valor()
    }else{
        alert("haz adivinado el  numero.")
    }
    
}

//valor()

//9.
function tuGeneracion(edad) {

    if (edad > 0 && edad <=12) {
        return console.log("Eres un infante")
    }else if(edad >= 13 && edad <= 18){
        return console.log("Eres adolecente")
    }else if(edad >=19 && edad < 45){
        return console.log("Eres Mayor joven")
    }else if(edad >= 45 && edad < 100){
        return console.log("Eres un anciano")
    }else if(edad >= 100){
        return prompt("¡Enrrealidad tienes mas de 100!")
    }
    
}

//tuGeneracion(100)

//10.


function juego(jugador1,jugador2) {

    if (jugador1 === "PIEDRA" && jugador2 === "PAPEL"){
        return console.log("ha ganado el jugador 2")
    }else if (jugador1 === "PAPEL" && jugador2 === "PIEDRA"){
        return console.log("ha ganado el jugador 1")
    }else if (jugador1 === "PIEDRA" && jugador2 === "TIJERA"){
        return console.log("ha ganado el jugador 1")
    }else if (jugador1 === "TIJERA" && jugador2 === "PIEDRA"){
        return console.log("ha ganado el jugador 2")
    }else if (jugador1 === "TIJERA" && jugador2 === "PAPEL"){
        return console.log("ha ganado el jugador 1")
    }else if (jugador1 === "PAPEL" && jugador2 === "TIJERA"){
        return console.log("ha ganado el jugador 2")
    }else if (jugador1 === "PAPEL" && jugador2 === "PAPEL"){
        return console.log("Empate")
    }else if (jugador1 === "TIJERA" && jugador2 === "TIJERA"){
        return console.log("Empate")
    }else if (jugador1 === "PIEDRA" && jugador2 === "PIEDRA"){
        return console.log("Empate")
    }else{
        return console.log("Alguno de los dos jugadores hizo trampa.")
    }
    
}

//juego("PIEDRA","PAPEL")

//11.
function ingrasaColor(color){
    switch (color) {
        case "blanco":
            console.log("Falta de color")
            break;
        case "negro":
            console.log("Falta de color")
            break;
        case "verde":
            console.log("El color de la naturaleza")
            break;
        case "azul":
            console.log("El color del agua")
            break;
        case "amarillo":
            console.log("El color del sol")
            break;
        case "rojo":
            console.log("El color del fuego")
            break;
        case "marron":
            console.log("El color de la tierra")
            break;
        default:
            console.log("Excelente elección, no lo teníamos pensado")
            break;
    }
}

//ingrasaColor("verde")

//12.
function operaciones(numero1,numero2,operacion)  {
    if(operacion === "suma"){
        return console.log(`La suma es: ${numero1 + numero2}`)

    }else if (operacion === "resta") {
        return console.log(`La suma es: ${numero1 - numero2}`)
        
    }else if (operacion === "multiplicacion") {
        return console.log(`La suma es: ${numero1 * numero2}`)
        
    }else if (operacion === "division" && numero2 != 0) {
        return console.log(`La suma es: ${numero1 / numero2}`)
        
    } else {
        return console.log("ERROR si el divisor ingresado fue 0.")
        
    }
    
}

//operaciones(1,2,"division")

//13.
function Datos(nombre,CC,fechaNacimiento,nacionalidad){
    
    console.log("Estos son tus datos?:"+"\n- "+ nombre +"\n- "+ CC +"\n- "+ fechaNacimiento +"\n- "+ nacionalidad)
    let confirmacion = prompt("Responde si/no si son tus Datos:")


    if(confirmacion === "si"){

        const dni = {
            nombre,
            CC,
            fechaNacimiento,
            nacionalidad
        }
        console.table(dni)
        alert("Registro EXITOSO!")
    }else{
        alert("Vuelve a intentarlo en 1 mes.")
    }
}

//Datos("Johan Zuluaga",1001526481,"16-nov-2003","Colombia")