//Declarando variables
let numero = prompt("Ingrese un número entero:");

//Texto para cargar en la página 
document.write('<h2>' + "Tabla de multiplicar del " + numero + '</h2>');
document.write('<hr>')

//multiplicación
for(let i = 0; i < 12; i++) {
    document.write('<p>' + numero + " x " + i + " = " + (parseInt(numero) * parseInt(i)) + '<p>');
}