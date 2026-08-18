/** 
* !operadores aritmeticos y condicionales
* ! nota, si intentamos castear num->char o viceversa saldra un error llamado NaN (not a number)
*/


const birthDay = Number(prompt("ingresa año de nacimiento"));
const year = Number(prompt("ingrese año actual", 2026));
let confirma = prompt("si su cumpleaños ya paso escriba si, de lo contrario escriba no")
let edad = 0
console.log("tu edad es: ", edad);
if (confirma == "si") {
    edad = year - birthDay;
}else if (confirma == "no") {
    edad = year - birthDay - 1;
} else{
    console.log("no escribas otras cosas, no puedo calcular tu edad")
} 
console.log("tu edad es: ", edad);