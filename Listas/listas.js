//Los arrays son la forma más común de colección en TypeScript. Permiten almacenar múltiples valores del mismo tipo en una sola variable.
// Para declarar un array de strings:
var nombres = ["Ana", "Juan", "María"];
console.log(nombres);
// También podemos crear arrays de números:
var edades = [39, 25, 30];
console.log(edades);
// Una característica importante de los arrays es que pueden ser modificados en tiempo de ejecución, añadiendo o eliminando elementos según sea necesario.
// ¿Cómo trabajar con arrays de tipo any?
// Si necesitamos flexibilidad en los tipos de datos que almacenamos, podemos usar arrays de tipo any:
var mixto = ["Hola", 42, true];
console.log(mixto);
var personas = [
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
var personaTupla = ["Avin", 30, true];
console.log(personaTupla);
// La diferencia crucial entre tuplas y arrays es que las tuplas no pueden ser modificadas después de su creación. Una vez definidas, su estructura permanece inmutable, lo que proporciona mayor seguridad en ciertos escenarios.
// Para recorrer los elementos de una tupla, podemos usar un bucle forEach:
var nombre = personaTupla[0], edad = personaTupla[1], desarrollador = personaTupla[2];
console.log(nombre);
console.log(edad);
console.log(desarrollador);
// ¿Cómo utilizar enumeradores para limitar valores?
// Los enumeradores (enums) son una característica poderosa que permite definir un conjunto de constantes con nombre:
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Domingo;
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
