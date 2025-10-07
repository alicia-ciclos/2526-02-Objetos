"use strict"

// let cliente = {
//     nombre: "Francisco",
//     apellidos: "Gonzalez",
//     saludar: function() {
//         console.log(`Hola ${this.nombre}`)
//     }
// }

// Constructor de Cliente
function Cliente(nombre, apellidos, edad) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
}

// Añado un método a Cliente
Cliente.prototype.saludar = function() {
    console.log(`Hola ${this.nombre}`)
}

Cliente.prototype.activo = false

// Creando un objeto Cliente
let cliente = new Cliente("nombre", "apellidos", 24)

let clientes = [
    new Cliente("nombre1", "apellidos1", 22),
    new Cliente("nombre 2", "apellidos 2", 33),
// ... etc etc
]
