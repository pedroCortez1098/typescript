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
// Funciones como Expresiones
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
