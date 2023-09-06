


alert("Bienvenidos al restaurante. Su cuenta es...");
var entrada = parseInt(prompt("ingrese el costo de la entrada"));
var segundo = parseInt(prompt("ingrese el costo del segundo"));
var postre = parseInt(prompt("ingrese el costo del postre"));



//Procesar datos
var suma = entrada + segundo + postre;
var IGV = suma + (suma*0.18);

alert("Presione la tecla F12 para mostrar los resultados")
//Mostrar datos
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es: " + segundo);
console.log("El costo del postre es: " + postre);
console.log("El costo total es :" + suma);
console.log("El costo total con IGV es: " + IGV);


