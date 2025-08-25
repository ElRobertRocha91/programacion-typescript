// En este ejemplo:

// Definimos una función llamada imprimeMensaje
// Recibe un parámetro de tipo string llamado mensaje
// No devuelve ningún valor (tipo void)
// Dentro de la función, utilizamos console.log para mostrar el mensaje recibido
// Finalmente, invocamos la función pasándole una cadena de texto

function imprimeMensaje(mensaje: string): void {
    console.log(mensaje);
}

imprimeMensaje("Hola, soy un mensaje");

// En este otro ejemplo vamos a especificar claramente el tipo de dato que devolvera la función

// La función sumar recibe dos parámetros de tipo number
// Especificamos que devolverá un valor de tipo number
// Creamos una variable resultado para almacenar el valor devuelto
// Invocamos la función con los valores 5 y 10
// Mostramos el resultado en la consola

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let resultado: number;
resultado = sumar(5, 10);
console.log("Tu resultado es", resultado);

// El tipado estricto de TypeScript nos ayuda a prevenir errores al asegurarse de que los valores que pasamos y recibimos son del tipo correcto.

// Alternativas para utilizar el resultado de una función
// Existen diferentes formas de utilizar el valor devuelto por una función:

// Asignándolo a una variable:

// let resultado: number = sumar(5, 10);
// console.log("Tu resultado es", resultado);
// Utilizándolo directamente:

// console.log("Tu resultado es", sumar(5, 10));
// La primera opción suele hacer que el código sea más legible, especialmente cuando necesitamos utilizar el resultado en múltiples lugares o cuando la llamada a la función es compleja.

// ¿Por qué son importantes los métodos en TypeScript?
/* Los métodos y funciones en TypeScript ofrecen ventajas significativas sobre JavaScript tradicional gracias al sistema de tipos:

 - Mayor claridad: El tipado explícito hace que sea más fácil entender qué espera recibir una función y qué devolverá.

 - Detección temprana de errores: El compilador de TypeScript puede identificar problemas antes de ejecutar el código.

 - Mejor documentación: Los tipos actúan como una forma de documentación integrada en el código.

 - Mejor autocompletado: Los editores como Visual Studio Code pueden ofrecer sugerencias más precisas.

 - Refactorización más segura: Al cambiar una función, el compilador te ayudará a identificar todos los lugares que necesitan actualizarse.
*/
// El uso de funciones bien tipadas establece una secuencia lógica en el flujo de trabajo de tu aplicación, haciendo que el código sea más mantenible y menos propenso a errores.