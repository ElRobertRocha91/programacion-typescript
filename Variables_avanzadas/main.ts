// Variables avanzadas en TypeScript

/* El tipo "any" es el mas flexible en TypeScript, ya que permite
asignar cualquier tipo de valor a una variable */ 
let variableAny : any;

// Una vez declarada podemos asignarle diferentes tipos de valores sin restricciones
// variableAny = "Hola";
variableAny = 42;
// variableAny = true;

// Importante destacar que al usa "any" seeliminan las ventajes del sistema de tipos de Typescript
console.log("Valor de la variables any: " + variableAny);

/*=====================================================*/

/*El tipo "unknown" es similar a "any", pero con un diferencia crucial: es más seguro.
Una variable de tipo unknown puede recibir cualquier valor, pero no podemos realizar operaciones 
en ella sin antes verificar su tipo */
let variableDesconocida: unknown;

variableDesconocida = "Hola";
// variableDesconocida = 42;
// variableDesconocida = true;

/* Su principal ventaja sobre any esta en que nos obliga a realizar
comprobación de tipo antes de utilizarla, reduciendo errores en tiempo de ejecución*/
if (typeof variableDesconocida === "string") {
    console.log("Variable unknown is a string: ", variableDesconocida);
}

/*=====================================================*/
/*El tipo "never" se utiliza para funciones que nunca retornan un valro,
generalmente por que:
- Lanzan una excepción 
- Tienen un bucle infinito
- Terminan el programa

Un ejemplo comun es para funciones que lanzan errores. Ejemplo; */
// function throwError(message: string): never {
//     throw new Error(message);
// }

/* El tipo "never" es muy útil para manejar casos de errores en aplicaciones complejas.
Asegurando que nunca se ejecuten normalmente */
// throwError("Este es un mensaje de error");

/*=====================================================*/
/*El tipo "void" se utiliza principalmente para funciones que no retornan ningún valor,
Pero que si terminan su ejecución normal, a diferencia de "never"*/
function logMessage(message: string): void {
    console.log("Log message: ", message);
}

// Es una buena opción para usarlas en alguna acción pero que no necesite retronar nada
logMessage("Este es un mensaje de log");

// CONCLUCIÓN
/**
- Usa any cuando realmente no puedas predecir el tipo (aunque es mejor evitarlo cuando sea posible).
- Prefiere unknown sobre any cuando necesites flexibilidad pero quieras mantener la seguridad de tipos.
- Utiliza never para funciones que lanzan excepciones o nunca terminan.
- Aplica void para funciones que realizan acciones pero no retornan valores.
 */