
console.log("EJERCICIO  1------------------------------------------");
//EJERCICIO 1 __VARIABLES Y TIPOS DE DATOS pr

 //tenemos dos tipos de variables__const y let 

 //let cambia su valor y CONST no cambia su valor 

 const nombre = 'Rodrigo' ;
 const edad = 22;
const puedoConducir = true;
console.log(nombre);
console.log(edad);
console.log(puedoConducir);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof puedoConducir);

//EJERCICIO 2 operadores aritmeticos 
console.log("EJERCICIO  2------------------------------------------");
const numero1 = 20;
const numero2 = 40;

// Suma
console.log("Suma:", numero1 + numero2);

// Resta
console.log("Resta:", numero1 - numero2);

// Multiplicación
console.log("Multiplicación:", numero1 * numero2);

// División
console.log("División:", numero1 / numero2);

// Módulo esto era para cuando queremos saber si un número es divisible por otro o para obtener residuos (como al calcular pares/impares o ciclos).
console.log("Módulo:", numero2 % numero1);

console.log("EJERCICIO  3------------------------------------------");
//EJERCICIO 3 asignación y comparación 

const numero4 = 15; 1
const numero5 = 20; 2
const numero6s = '25';  3


console.log("1:", numero4 >= numero5);


console.log("2:", numero4 <= numero5);


console.log("3:", numero4 < numero6s); 


console.log("4:", numero6s < numero5); 


// 5. ¿numero3 es estrictamente diferente (tipo y valor) de numero1?
console.log("5:", numero6s !== numero4); // true, porque '25' (string) !== 15 (número)

// 6. ¿numero1 es estrictamente igual a numero2?
console.log("6:", numero4 === numero5); // false

console.log("EJERCICIO  4------------------------------------------");

//EJERCICIO 4  CONDICIONALES 

const numA = 10;
const numB = 20;
const numC = 30;

let mayor = numA;
if (numB > mayor) mayor = numB;
if (numC > mayor) mayor = numC;
console.log("El número mayor es:", mayor);

let menor = numA;
if (numB < menor) menor = numB;
if (numC < menor) menor = numC;
console.log("8: El número menor es:", menor);

console.log("9:", numA % 2 === 0 ? "numA es par" : "numA es impar");

console.log("10:", numB % 2 === 0 ? "numB es par" : "numB es impar");

console.log("11:", numC % 2 === 0 ? "numC es par" : "numC es impar");

console.log("12:", numA % 5 === 0 ? "numA es múltiplo de 5" : "numA no es múltiplo de 5");

console.log("13:", numB % 5 === 0 ? "numB es múltiplo de 5" : "numB no es múltiplo de 5");

console.log("14:", numC % 5 === 0 ? "numC es múltiplo de 5" : "numC no es múltiplo de 5");





console.log("EJERCICIO 5 CICLOS ------------------------------------------");

//EJERCICIO 5 CICLOS 


//  Números del 1 al 10
console.log("15: Números del 1 al 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Números del 10 al 1
console.log("16: Números del 10 al 1");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//  Números pares del 1 al 10
console.log("17: Pares del 1 al 10");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  Números impares del 1 al 10
console.log("18: Impares del 1 al 10");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Múltiplos de 3 del 1 al 10
console.log("19: Múltiplos de 3 del 1 al 10");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Múltiplos de 5 del 1 al 10
console.log("20: Múltiplos de 5 del 1 al 10");
for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Múltiplos de 3 y 5 (ambos)
console.log("21: Múltiplos de 3 y 5 del 1 al 10");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Múltiplos de 3 o 5
console.log("22: Múltiplos de 3 o 5 del 1 al 10");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}


console.log("EJERCICIO 6 ------------------------------------------");
//EJERCICIO 6 

//  Función que convierte un string a mayúsculas
function aMayusculas(texto) {
  return texto.toUpperCase();
}
console.log(":un string a mayúsculas", aMayusculas("hola mundo")); 

//  Función que convierte un string a minúsculas
function aMinusculas(texto) {
  return texto.toLowerCase();
}
console.log("un string a minúsculas:", aMinusculas("HOLA MUNDO"));

//  Función que reste dos números
function restar(num1, num2) {
  return num1 - num2;
}
console.log("reste dos números", restar(15, 5)); // 10

//  Función que divida dos números
function dividir(num1, num2) {
  return num1 / num2;
}
console.log("divida dos números:", dividir(20, 4)); // 5

//  Función que multiplique dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}
console.log("multiplique dos números:", multiplicar(6, 3)); // 18

//  Función que devuelva la longitud de un string
function obtenerLongitud(texto) {
  return texto.length;
}
console.log(" longitud de un string:", obtenerLongitud("Me gusta el pan con JAMON ")); 



//EJERCICIO 7 
console.log("EJERCICIO 7 ------------------------------------------");


// . Función que suma todos los números de un array
function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
console.log("suma todos los números de un array", sumarArray([1, 2, 3, 4, 5])); 

//  Función que calcula el promedio de un array de números
function promedioArray(numeros) {
  if (numeros.length === 0) return 0;
  let suma = sumarArray(numeros);
  return suma / numeros.length;
}
console.log(" promedio de un array de números:", promedioArray([1, 2, 3, 4, 5]));

// Función que convierte un arreglo de strings a mayúsculas
function convertirAMayusculas(arr) {
  return arr.map((texto) => texto.toUpperCase());
}
console.log("un arreglo de strings a mayúsculas:", convertirAMayusculas(["hola", "mundo"])); 

//Función que filtra y retorna solo los pares de un arreglo
function filtrarPares(numeros) {
  return numeros.filter((num) => num % 2 === 0);
}
console.log("filtra y retorna solo los pares de un arreglo:", filtrarPares([1, 2, 3, 4, 5, 6])); 

//EJERCICIO 8 
console.log("EJERCICIO 8 ----------------------------objetos xd --------------");
const persona = {
  nombre: "Olivia Ortega",
  edad: 1,
  genero: "femenino"
};

console.log("objeto persona ", persona);
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Género:", persona.genero);

console.log("Tipo de nombre:", typeof persona.nombre);   
console.log("Tipo de edad:", typeof persona.edad);       
console.log("Tipo de género:", typeof persona.genero);   

const caja = {
  cuadernos: 3,
  lapices: 10,
  papel: 20,
  fotografias: 5,
  enBuenEstado: false
};

console.log("Objeto caaja", caja);
console.log("Cuadernos:", caja.cuadernos);
console.log("Lápices:", caja.lapices);
console.log("Papel:", caja.papel);
console.log("Fotografías:", caja.fotografias);
console.log("¿Está en buen estado?", caja.enBuenEstado);

console.log("Tipo de cuadernos:", typeof caja.cuadernos);         
console.log("Tipo de lapices:", typeof caja.lapices);             
console.log("Tipo de papel:", typeof caja.papel);                
console.log("Tipo de fotografias:", typeof caja.fotografias);     
console.log("Tipo de enBuenEstado:", typeof caja.enBuenEstado);   

