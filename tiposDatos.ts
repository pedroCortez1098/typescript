// Bool
let esVerdadero = true;
console.log(esVerdadero);

// Number
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// String
let marca: string = 'toyota';
let modelo: string = "Tacoma";

// String Compuesto
let nombre: string = "Santi";
let apellido: string = "Gimenez";
let impresion: string = `
    Nombre: ${nombre}
    Apellido: ${apellido}
`;

// Arrays
let listaDeNumeros: number[] = [1, 2, 3];
let listaDeNumeros2: Array<number> = [1, 2, 3];

// Tuples
let futbolista: [string, number];
futbolista = ["Luis Romo", 26];
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

// ENUMS
enum MarcasDeAutos{
    Toyota,
    Chevrolet,
    Ford
}
let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma);

enum MarcasDeAutos2{
    Toyota = 100,
    Chevrolet,
    Ford
}
let tacoma2: MarcasDeAutos2 = MarcasDeAutos2.Toyota;
console.log(tacoma2);
console.log(MarcasDeAutos[0]);

// Any
let variableSinTipo: any = 'Hola';
variableSinTipo = 100;

// Unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;

// Void
function saludar2(): void{
    console.log("Hola Mundo... Cruel");
}
saludar2();

// Null & Undefined
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

// Never
function error(mensaje: string): never{
    throw new Error(mensaje);
}

function fallo(): never{
    return error("Reportar fallo");
}

/*function loopInfinito(): never{
    while(true);
}*/

// Objects
function crear(o: object): void{
    console.log(o);
}
crear({prop: 0});
crear(null);
crear(undefined);
crear([]);
//crear(fallo());

// Unions
function imprimirId(id: number | string){
    console.log(`El id es ${id}`);
}
imprimirId(1);
imprimirId("abc");
function imprimirId2(id: number | string){
    if(typeof id==="string"){
        console.log(`El id es ${(id as string).toUpperCase()}`);
    }
    else{
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirId2("este_es_mi_id");
imprimirId2(100.23156153);

// Aliases
type Punto = {
    x: number;
    y: number;
}
function imprimirCoordenada(punto: Punto){
    console.log(`La coordenada X es: ${punto.x}`);
    console.log(`La coordenada Y es: ${punto.y}`);
}
imprimirCoordenada({x: 10, y:25});

// Interfaces
function imprimirEtiqueta(etiqueta: {label: string}){
    console.log(etiqueta.label);
}
let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

interface Etiqueta{
    label: string;
}
function imprimirEtiqueta2(etiqueta: Etiqueta){
    console.log(etiqueta.label);
}
let miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta2(miEtiqueta2);

// Propiedades opcionales de las interfaces
interface Cuadrado{
    color?: string;
    ancho: number;
}
function crearCuadrado(cuadrado: Cuadrado): {area:number}{
    const area = cuadrado.ancho * cuadrado.ancho;
    return {area: area};
}
crearCuadrado({ancho: 10});

// Interface Read Only
interface Punto2{
    readonly x: number;
    readonly y: number;
}
let punto1: Punto = { x: 10, y:20};
punto1.x = 10;

// Interfaces extendibles
interface Transporte{
    nombre: string;
}
interface Auto extends Transporte{
    ruedas: number;
}

// Extender type
type Figura = {
    nombre: string;
}
type Cuadrado2 = Figura & {
    lados: 4;
}

// Tipos Literales
function imprimir(estadoCivil: 'Soltero' | 'Casado'){
    console.log(estadoCivil);
}
imprimir('Soltero');


function opcional(id = 10){
    console.log(`El id es ${id}`);
}
opcional();


interface Persona{
    edad: number;
}
interface EdadNoEscribible{
    readonly edad:number;
}
const Luis: Persona = { edad: 20 };
const Pedro :EdadNoEscribible = Luis;

Luis.edad++;
Luis.edad++;
Luis.edad++;
Luis.edad--;
Luis.edad = Pedro.edad;
//Pedro.edad++;
console.log(Luis.edad);
console.log(Pedro.edad);