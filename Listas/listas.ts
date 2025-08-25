//Los arrays son la forma más común de colección en TypeScript. Permiten almacenar múltiples valores del mismo tipo en una sola variable.

// Para declarar un array de strings:

let nombres: string[] = ["Ana", "Juan", "María"];
console.log(nombres);
// También podemos crear arrays de números:

let edades: number[] = [39, 25, 30];
console.log(edades);
// Una característica importante de los arrays es que pueden ser modificados en tiempo de ejecución, añadiendo o eliminando elementos según sea necesario.

// ¿Cómo trabajar con arrays de tipo any?
// Si necesitamos flexibilidad en los tipos de datos que almacenamos, podemos usar arrays de tipo any:

let mixto: any[] = ["Hola", 42, true];
console.log(mixto);
// Este tipo de array puede contener cualquier tipo de dato, lo que es útil en ciertos escenarios, pero sacrifica la seguridad de tipos que TypeScript ofrece.

// ¿Qué son los arrays de interfaces?
// Cuando necesitamos estructuras de datos más complejas, podemos crear arrays basados en interfaces:

interface Persona {
    nombre: string;
    edad: number;
    desarrollador: boolean;
}

let personas: Persona[] = [
    {
        nombre: "Avin",
        edad: 30,
        desarrollador: true
    }
];

// Podemos añadir elementos que cumplan con la interfaz
personas.push({
    nombre: "Miranda",
    edad: 28,
    desarrollador: true
});

console.log(personas);
// Estos arrays garantizan que todos los elementos tengan la misma estructura, lo que hace el código más predecible y fácil de mantener.

// ¿Qué son las tuplas y en qué se diferencian de los arrays?
// Las tuplas son colecciones con un número fijo de elementos, donde cada posición puede tener un tipo específico:

let personaTupla: [string, number, boolean] = ["Avin", 30, true];
console.log(personaTupla);
// La diferencia crucial entre tuplas y arrays es que las tuplas no pueden ser modificadas después de su creación. Una vez definidas, su estructura permanece inmutable, lo que proporciona mayor seguridad en ciertos escenarios.

// Para recorrer los elementos de una tupla, podemos usar un bucle forEach:

let [nombre, edad, desarrollador] = personaTupla;
console.log(nombre);
console.log(edad);
console.log(desarrollador);
// ¿Cómo utilizar enumeradores para limitar valores?
// Los enumeradores (enums) son una característica poderosa que permite definir un conjunto de constantes con nombre:

enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)
// Los enumeradores son especialmente útiles para limitar las opciones disponibles y hacer el código más legible. Si intentamos asignar un valor que no está en el enumerador, TypeScript mostrará un error:

// Esto generaría un error
// let diaInvalido: DiaSemana = DiaSemana.Enero;
/*
¿Por qué son importantes las colecciones tipadas en TypeScript?
El uso de colecciones tipadas en TypeScript ofrece múltiples ventajas:

- Prevención de errores: El sistema de tipos detecta inconsistencias antes de ejecutar el código.
- Mejor documentación: El tipo de una colección comunica claramente qué datos contiene.
- Autocompletado mejorado: Los editores pueden ofrecer sugerencias más precisas.
- Refactorización más segura: Los cambios en la estructura de datos se propagan a todo el código.
*/