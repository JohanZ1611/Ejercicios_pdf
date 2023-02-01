//Intro_a_java

//1.
let miNombre ="Johan"
// console.log(miNombre)

//2.
let miApellido = "Zuluaga"
// console.log(miApellido)

//3.
let miEdad = 19
// console.log(miEdad)

//4.
let miMascota = "Dante"
// console.log(miMascota)

//5.
let edadMascota = 2
// console.log(edadMascota)

//6.captura guardada en carpeta img como intro_java-punto_6

//7.
let nombreCompleto = miNombre +" "+ miApellido
// console.log(nombreCompleto)

//8.
let textoPresentacion = "Hola me llamo " + nombreCompleto + " mi edad es " + miEdad + " y tengo una mascota llamad@ " + miMascota + " y su edad es " + edadMascota
// console.log(textoPresentacion)

//9.
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

// console.log(sumaEdades)
// console.log(restaEdades)
// console.log(productoEdades)
// console.log(divisionEdades)

//10.
// miNombre = prompt("Ingresa tu nombre: ")
// miApellido = prompt("Ingresa tu apellido: ")
// miEdad = prompt("Ingresa tu edad: ")
// miMascota = prompt("El nombre de tu mascota es: ")
// edadMascota = prompt("La edad de tu mascota es: ")

nombreCompleto = miNombre +" "+ miApellido
textoPresentacion = "Hola me llamo " + nombreCompleto + " mi edad es " + miEdad + " y tengo una mascota llamad@ " + miMascota + " y su edad es " + edadMascota

sumaEdades = miEdad + edadMascota
restaEdades = miEdad - edadMascota
productoEdades = miEdad * edadMascota
divisionEdades = miEdad / edadMascota

// console.log(nombreCompleto)
// console.log(textoPresentacion)
// console.log(sumaEdades)
// console.log(restaEdades)
// console.log(productoEdades)
// console.log(divisionEdades)

//11.
const alumno = {
    nombre : "Johan",
    apellido : "Zuluaga",
    edad : 19,
    carrera : "programacion",
    hobbies : "Musica"
}

// console.table(alumno)

// console.log(alumno.nombre)
// console.log(alumno.apellido)
// console.log(alumno.edad)
// console.log(alumno.carrera)
// console.log(alumno.hobbies)


//12.
const mascota = {
    nombre : "Dante",
    edadMascota : 2,
    actividad : "Jugar",
    color : "Negro",
    Raza : "Doberman"
}

// console.table(mascota)

// console.log(mascota.nombre)
// console.log(mascota.edadMascota)
// console.log(mascota.actividad)
// console.log(mascota.color)
// console.log(mascota.Raza)

//13.
const frutas = ["mango","piña","papaya","uvas","fresa"]

// console.log(frutas)

// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])
// console.log(frutas[4])

//14.
const numeros = [5,6,8,9,52]

// console.log(numeros)

// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])

//15.
const familia = [
    {
        nombre: "Johan"
    },
    {
        nombre: "Yeni"
    },
    {
        nombre: "Alfredo"
    },
    {
        nombre: "Alan"
    },
    {
        nombre: "Laura"
    }
]

// console.log(familia)

// console.log(familia[0])
// console.log(familia[1])
// console.log(familia[2])
// console.log(familia[3])
// console.log(familia[4])

//16.
let textoAleatoreo = frutas[1] +" "+ numeros[3] +" "+ familia[4].nombre

// console.log(textoAleatoreo)

//17.
// miEdad = prompt("MI EDAD ES: ")
// let edadCompañero = prompt("LA EDAD DE MI COMPAÑERO ES: ")

// let edadesIguales = miEdad === edadCompañero
// let soyMayor = miEdad > edadCompañero
// let soyMenor = miEdad < edadCompañero

// console.log("Mi edad es igual a la de mi compañero: " + edadesIguales) //a
// console.log("Mi edad es mayor a la de mi compañero: " + soyMayor) //b
// console.log("Mi edad es menor a la de mi compañero: " + soyMenor) //c


//18.
// miEdad = prompt("MI EDAD ES: ")

// let soyMayorDeEdad = miEdad >= 18

// console.log("Soy mayor de edad: " + soyMayorDeEdad)


//19.
// let edad = prompt("Cual es su edad: ")
// let altura = prompt("Cual es su altura: ")

// let puedeSubir = edad > 6 && altura >= 120

// console.log("Puede subir a la atracción: " + puedeSubir)

//20.
// let pase = prompt("Ingresa tu pase: ")
// let saldo = prompt("Ingresa tu saldo: ")
let puedePasar

//puedePasar = pase === "VIP" ||  saldo > 1000 // FORMA 1

// puedePasar = pase === "VIP" || pase === "NORMAL" || pase === "LIMITADO" ||  saldo > 1000 //FORMA 2

// console.log("La persona puede pasar: " + puedePasar)