"use strict"

class Persona {
    
    #nombre;
    #apellidos;

    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }

    // getters y setters al estilo de Java
    // se utilizan poco en JavaScript
    getNombre() { return this.#nombre}
    setNombre(nombre) { 
        this.#nombre = nombre
    }

    // Getters y setters al estilo JS
    get nombre() { return this.#nombre }
    set nombre(nombre) { 
        this.#nombre = nombre 
        console.log('Llamando al setter...')
    }

    saludar() {
        console.log(`Hola ${this.#nombre}!`)
    }
}

// Podria modificar el prototipo
Persona.prototype.valido = true

const persona = new Persona('Pepe', 'Perez')
persona.nombre = 'Juan'   // llamando al setter
persona.saludar()

// No funciona
// console.log(persona.#nombre)

class Estudiante extends Persona {
    constructor(nombre, apellidos, numeroMatricula) {
        super(nombre, apellidos)
        this.numeroMatricula = numeroMatricula
    }

    saludar() {
        // llama al getter
        console.log(`Hola ${this.nombre} tu numero de matricula es ${this.numeroMatricula}`)
    }
}

const est = new Estudiante('Pepe', 'Perez', 33)
est.nombre = 'Natalia'      // llama al setter
est.saludar()

// implementar clase Trabajador
// extiende Persona
// tiene ademas salario y horas semanales que trabaja

