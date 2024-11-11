/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// Números entre 10 y 55, solo pares, sin 16 ni múltiplos de 3

for (let i = 10; i <= 55; i++) {
    if(i == 16 || i % 3 == 0 ){
        }else if (i % 2 == 0){
            console.log("Números entre 10 y 55, solo pares, sin 16 ni múltiplos de 3: " + i);
        }
}

// Operadores aritméticos, lógicos, de comparación, de asignación, de identidad, de pertenecia y de bits
let suma = 5 + 3;       // 8
let resta = 5 - 3;      // 2
let multiplicacion = 5 * 3; // 15
let division = 5 / 3;   // 1.666...
let modulo = 5 % 3;     // 2
let incremento = ++suma;  // 9
let decremento = --resta;  // 1

let and = true && false;  // false
let or = true || false;   // true
let not = !true;          // false

let igual = 5 == "5";         // true
let igualEstricta = 5 === "5"; // false
let diferente = 5 != "5";     // false
let diferenteEstricta = 5 !== "5"; // true
let mayor = 5 > 3;            // true
let menor = 5 < 3;            // false
let mayorOIgual = 5 >= 5;     // true
let menorOIgual = 5 <= 3;     // false

let x = 5;
x += 3;  // 8
x -= 2;  // 6
x *= 2;  // 12
x /= 2;  // 6
x %= 4;  // 2

let objeto1 = {};
let objeto2 = objeto1;
console.log("objeto1 es identico a objeto2? ");
console.log(objeto1 === objeto2); // true

let arr = [1, 2, 3];
console.log("El 2 está en el arreglo arr? ");
console.log(2 in arr);  // true

let andBits = 5 & 1;    // 1
let orBits = 5 | 1;     // 5
let xorBits = 5 ^ 1;    // 4
let notBits = ~5;       // -6
let desplazamientoIzq = 5 << 1; // 10
let desplazamientoDer = 5 >> 1; // 2


// Condicionales if-else, switch
let edad;
edad = Math.floor(Math.random() * (80 - 10 + 1)) + 10;

if (edad >= 18) {
    console.log("Tienes " + edad + " Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Tienes " + edad + " Eres adolescente");
} else {
    console.log("Tienes " + edad + " Eres menor de edad");
}

let diaEnNumero;
let diaEnTexto;

diaEnNumero = Math.floor(Math.random() * (7)) + 1;

switch (diaEnNumero) {
    case 1:
        diaEnTexto = "Domingo";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
        break;
    case 2:
        diaEnTexto = "Lunes";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
    break;
    case 3:
        diaEnTexto = "Martes";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
    break;
    case 4:
        diaEnTexto = "Miércoles";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
    break;
    case 5:
        diaEnTexto = "Jueves";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
    break;
    case 6:
        diaEnTexto = "Viernes";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
    break;
    case 7:
        diaEnTexto = "Sábado";
        console.log(diaEnNumero + " Hoy es " + diaEnTexto);
    break;
    default:
        console.log(diaEnNumero + " Hoy no se que día es");
}

// Ciclos For, While, Do While

for (let i = 0; i < 5; i++) {
    console.log("For " + i);
}

let contador = 0;

while (contador < 5) {
    console.log("While " + contador);
    contador++;
}

contador = 0;

do {
    console.log("Do While " + contador);
    contador++;
} while (contador < 5);

try {
    let x = y + 1; // y no está definido
} catch (error) {
    console.log("Ha ocurrido un error: " + error.message);
}
