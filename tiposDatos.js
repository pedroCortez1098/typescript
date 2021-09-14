// Bool
var esVerdadero = true;
console.log(esVerdadero);
// Number
var entero = 6;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
// String
var marca = 'toyota';
var modelo = "Tacoma";
// String Compuesto
var nombre = "Santi";
var apellido = "Gimenez";
var impresion = "\n    Nombre: " + nombre + "\n    Apellido: " + apellido + "\n";
// Arrays
var listaDeNumeros = [1, 2, 3];
var listaDeNumeros2 = [1, 2, 3];
// Tuples
var futbolista;
futbolista = ["Luis Romo", 26];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
// ENUMS
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 2] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
var MarcasDeAutos2;
(function (MarcasDeAutos2) {
    MarcasDeAutos2[MarcasDeAutos2["Toyota"] = 100] = "Toyota";
    MarcasDeAutos2[MarcasDeAutos2["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos2[MarcasDeAutos2["Ford"] = 102] = "Ford";
})(MarcasDeAutos2 || (MarcasDeAutos2 = {}));
var tacoma2 = MarcasDeAutos2.Toyota;
console.log(tacoma2);
console.log(MarcasDeAutos[0]);
// Any
var variableSinTipo = 'Hola';
variableSinTipo = 100;
// Unknown
var valorDesconocido = 4;
valorDesconocido = true;
// Void
function saludar2() {
    console.log("Hola Mundo... Cruel");
}
saludar2();
// Null & Undefined
var variableSinDefinir = undefined;
var variableNula = null;
// Never
function error(mensaje) {
    throw new Error(mensaje);
}
function fallo() {
    return error("Reportar fallo");
}
/*function loopInfinito(): never{
    while(true);
}*/
// Objects
function crear(o) {
    console.log(o);
}
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//crear(fallo());
// Unions
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId("abc");
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirId2("este_es_mi_id");
imprimirId2(100.23156153);
function imprimirCoordenada(punto) {
    console.log("La coordenada X es: " + punto.x);
    console.log("La coordenada Y es: " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
// Interfaces
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta2(miEtiqueta2);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 10;
// Tipos Literales
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('Soltero');
function opcional(id) {
    if (id === void 0) { id = 10; }
    console.log("El id es " + id);
}
opcional();
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
Luis.edad++;
Luis.edad++;
Luis.edad--;
Luis.edad = Pedro.edad;
//Pedro.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);
