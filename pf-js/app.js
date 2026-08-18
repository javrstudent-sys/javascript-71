/** 
* !uso de prompts para ingresar datos del usuario 
*/

let anno = Number(prompt("ingresa año de nacimiento"));
console.log("tu año de nacimiento es: ", anno);
/* ! De la siguiente forma el 15 se sugiere al usuario pero si da enter entra como un defaulth */

const edad = Number(prompt("ingresa tu edad", 15));  
console.log("tu edad es: ", edad);

let nombre = prompt("dime tu nombre")

console.log("hola, me llamo "+ nombre + " y tengo " + anno +" años" )