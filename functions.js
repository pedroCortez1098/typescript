// Parameters
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Caska");
// Return
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
// Funciones anónimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Funciones como Expresiones.
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var automovil = /** @class */ (function () {
    function automovil(nombre) {
        this.nombre = nombre;
    }
    return automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Paso Fino");
var miAutomovil = construirTransporte(automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi Automvil es un " + miAutomovil.nombre);
function sumar(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function saludar2(persona) {
    return "Hola $persona.nombre";
}
console.log("hola");
