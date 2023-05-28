var a = new Date();
día = a.getDay();
switch (día) {
case 5: alert("Viernes social"); break;
case 6: alert("Sábado deportivo"); break;
case 0: alert("Domingo familiar"); break;
default: alert("Día de semana");
}