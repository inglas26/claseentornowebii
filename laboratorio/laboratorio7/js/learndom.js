//Declarando una variable para la etiqueta de id titulo
let elementoTitulo = document.getElementById('titulo');
//Asignando nuevo contenido a la etiqueta titulo
elementoTitulo.innerHTML = 'ACTUALIZANDO DATOS PERSONALES';

//Declarando una variable para la etiqueta de id nombre
let elementoNombre = document.getElementById('nombre');
//Asignando nuevo contenido a la etiqueta nombre
elementoNombre.innerHTML = 'Nombres: Lucrecia Campos';

//let elementosParrafo = document.getElementsByClassName('parrafo');
document.write('<p>' + 'Existen ' + elementosParrafo.length + ' párrafos' + '</p>');


// Declarando variable para clase de párrafo a fin de modificar uno de sus elementos
let elementosParrafo = document.getElementsByClassName('parrafo');
//Visualizando el cambio de dato en un elemento de clase de acuerdo a su posicion en el arreglo
elementosParrafo[0].innerHTML = 'nuevo';
elementosParrafo[0].innerHTML = 'soy otro párrafo';