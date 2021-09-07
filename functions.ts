// Parameters
function saludar3(nombre: string){
    console.log(`Hola ${nombre}`);
}
saludar3("Caska");

// Return
function elevarAlCuadrado(base: number): number{
    return base*base;
}
let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

// Funciones anónimas
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s){
   console.log(s.toUpperCase());
});

nombres.forEach((s) =>{
    console.log(s.toUpperCase());
});

// Funciones como Expresiones
function saludar4(fn: (a: string) => void){
    fn("Hola Mundo");
}
function imprimirEnConsola(s: string){
    console.log(s);
}
saludar4(imprimirEnConsola);

interface transporte{
    nombre: string;
}

class Caballo implements transporte{
    constructor(public nombre: string) {    }
}

class automovil implements transporte{
    constructor(public nombre: string) {    }
}

type ConstructorDeTransporte = {
    new (nombre: string): transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre:string){
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Paso Fino");
const miAutomovil = construirTransporte(automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi Automvil es un " + miAutomovil.nombre);