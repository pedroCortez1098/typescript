interface Encendible{
    endender();
}

class Television implements Encendible{
    endender(): void {
        console.log("El televisor se ha encendido");
    }
}

let tv = new Television();
tv.endender();

class Animal{
    moverse(){
        console.log("El animal se mueve");
    }
}

class Perro extends Animal{
    ladrar(){
        console.log("Guau Guau");
    }
}

const miPerro = new Perro();
miPerro.ladrar();
miPerro.moverse();

class Padre{
    saludar(){
        console.log("Hola");
    }
}

class Hijo extends Padre{
    saludar(nombre?: string) {
        if(!!nombre){
            console.log(`Hola, ${nombre}`);
        }
        else {
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Pedro");

const h: Padre = new Hijo();

class Definicion{
    nombre = "definicion";
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Implementacion extends Definicion {}
const d = new Implementacion();

class Saludo{
    protected getDestinatario(){
        return "amigos";
    }
}

class SaludoEspecial extends Saludo{
    saludar(){
        console.log(`Hola, ${this.getDestinatario()}`);
    }
}

const inst = new SaludoEspecial();
inst.saludar();

class MiClase{
    private static x = 10;
    static imprimirX(){
        console.log(`El valor de X es: ${this.x}`);
    }
}

MiClase.imprimirX();

class Base2{
    static saludar(){
        console.log("Hola Mundo");
    }
}

class Derivada2 extends Base2{}

Derivada2.saludar();
Base2.saludar();

class Caja{
    contenido = "";
    set(valor: string){
        this.contenido = valor;
        return this;
    }
}

const miCaja: Caja = new Caja();
const valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);

