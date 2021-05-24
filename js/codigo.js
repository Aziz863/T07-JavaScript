//guardamos el codigo en este archivo y lo llamamos des del HTML

//1-
//muestra el texto por la consola
console.log("Hola Mundo!");

//lanza un aviso en el navegador
alert("Soy el primer script");

//2-
/*segundo aviso en el navegador que nos muestra el texto requerido
donde usamos \n \' y \" para mostrar estos caracteres y saltar de línia*/
var mensaje = alert("Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \" comillas dobles\"");

//3-
//Creación de array donde guardamos los meses y luego imprimir el contenido con un bucle for
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

console.log("");
console.log("Meses del año:");

for (var i = 0; i < 12; i++) {
    console.log(meses[i]);
}

//4-
//Trabajamos con el array valores para conseguir el resultado que nos pide

//4.1
var valores = [true, 5, false, "hola", "adios", 2];

//array de strings donde guardamos los strings de valores utilizando un for
var strings = [];

for (var j = 0; j < 6; j++) {
    if (typeof(valores[j]) == 'string') {
        strings.push(valores[j])
    }
}

//guardamos el mayor string en la var maxStrings y lo mostramos por consola
var maxString = "";
for (var a = 0; a < strings.length; a++) {
    if (strings[a].length > maxString.length) {
        maxString = strings[a];
    }
}

console.log("");
console.log("El string mayor és:");
console.log(maxString);

//4.2

//array de booleanos donde guardamos los booleanos de valores utilizando un for
var booleanos = [];

for (var j5 = 0; j5 < 6; j5++) {
    if (typeof(valores[j5]) == 'boolean') {
        booleanos.push(valores[j5])
    }
}

//mostramos los valores de los booleanos y los cambiamos
console.log("");
console.log("Muestra de booleanos y cambio de valores:");
console.log("Valores booleanos originales: " + booleanos);

for (let index = 0; index < booleanos.length; index++) {
    if (booleanos[index] == true) {
        booleanos[index] = false;
    } else {
        booleanos[index] = true;
    }
}

console.log("Valores booleanos originales: " + booleanos);

//4.3
//array de numeros donde guardamos los numeros de valores utilizando un for
var numeros = [];

for (var i1 = 0; i1 < 6; i1++) {
    if (typeof(valores[i1]) == 'number') {
        numeros.push(valores[i1])
    }
}

//mostramos por consola las operaciones
console.log("");
console.log("Operaciones:");
console.log("Suma: " + (numeros[0] + numeros[1]));
console.log("resta: " + (numeros[0] - numeros[1]));
console.log("Multiplicación: " + (numeros[0] * numeros[1]));
console.log("División: " + (numeros[0] / numeros[1]));
console.log("Resto: " + (numeros[0] % numeros[1]));

//5-
//Completar los if para cumplir las condiciones
var numero1 = 5;
var numero2 = 8;

console.log("");
console.log("Condiciones if:");

if (numero1 < numero2) {
    console.log(numero1 + " no es mayor que " + numero2);
}
if (numero2 > 0) {
    console.log(numero2 + " es positivo ");
}
if (numero1 < 0) {
    console.log(numero1 + " es negativo o distinto de " + 0);
}
if (++numero1 >= numero2) {
    console.log(" Incrementar en 1 unidad el valor de  " + numero1 +
        " no lo hace mayor o igual que " + numero2);
}

//6-
//Hacer el cálculo de la letra del DNI
console.log("");
console.log("Comprobación del DNI:");

//declaramos el array con las letras
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//pedimos los valores de DNI y letras al usuario
var dni = prompt("Inserte el dni sin letra:");
var letraDni = prompt("Inserte la letra en mayúsculas:");

//verificamos que el numero es correcto
if (dni > 99999999 || dni < 0) {
    console.log("Número de DNI no válido")
}

//calculamos la letra
function letraDNI(numeroDNI, letra) {
    var resto = numeroDNI % 23;
    return letra[resto];
}

//devolvemos el resultado de la comprbación
if (letraDNI(dni, letras) == letraDni) {
    console.log("DNI correcto");
} else {
    console.log("DNI incorrecto")
}

//7-
//Calculo del factorial de un numero entero
var numeroF = 5;

console.log("");
console.log("El factorial del numero " + numeroF + " es:");

for (let index = numeroF - 1; index > 1; index--) {
    numeroF = numeroF * index;
}

console.log(numeroF);

//8-
//Calcular si un numero es par o impar

console.log("");
console.log("Calcular si un numero es par o impar");

function parOimpar(num) {
    if ((num % 2) == 0) {
        return console.log("El número " + num + " es par");
    } else {
        return console.log("El número " + num + " es impar");
    }
}

//ejecutamos la función
console.log(parOimpar(264));

//9-
//Información sobre una cadena de texto

console.log("");
console.log("Búsqueda de mayúsculas y minúsculas en un texto:")

//declaramos primero las variables
let mayus = 0;
let minus = 0;
let space = 0;

//función donde recorremos el texto y sumamos contadores de mayus y minus
function mayusString(text) {
    for (let index = 0; index < text.length; index++) {
        //declaro las variables porque las interpreta como mayúsculas
        if (text.charAt(index) == " ") {
            space++;
        } else if (text.charAt(index) == text.charAt(index).toLowerCase()) {
            minus++;
        } else if (text.charAt(index) == text.charAt(index).toUpperCase()) {
            mayus++;
        }
    }

    //devolvemos 3 posibles resultados comparando los contadores usados anteriormente
    if (mayus > 0 && minus > 0) {
        return console.log("El texto contiene mayúsculas y minúsculas.");
    } else if (mayus > 0 && minus == 0) {
        return console.log("El texto sólo contiene mayúsculas.");
    } else if (mayus == 0 && minus > 0) {
        return console.log("El texto sólo contiene minúsculas.");
    }
}

//ejecutamos la función
mayusString("CAMello");

//10-
//Ver si una frase es un palíndromo
console.log("");
console.log("Verificar texto palíndromo:");

//declaración de variables
let textoTemp = [];
let textoInvertido = [];
let contador = 0;

function paliString(text) {
    for (let index = 0; index < text.length; index++) {

        //recorremos la cadena de texto y guardamos los carácteres que sean letras
        if ((/[a-zA-Z]/).test(text.charAt(index))) {
            textoTemp.push(text.charAt(index));
        }
    }

    //guardamos en otra array los mismos carácteres invertidos
    for (let index2 = textoTemp.length; index2 >= 0; index2--) {
        textoInvertido.push(text.charAt(index2));

        /*recorremos la primera array dentro de la segunda para ir comprobando las 
        coincidencias y las guardamos en un contador*/
        for (let index = 0; index < textoTemp.length; index++) {
            if (textoInvertido[index2] == textoTemp[index]) contador++;
        }
    }

    //si el contador tiene el mismo valor que el tamaño del array significa que coinciden todos los campos
    if (contador == textoTemp.length) {
        return console.log("El texto es palíndromo.")
    } else {
        return console.log("El texto no es palíndromo.")
    }
}

//ejecutamos la función
paliString("pato otap");