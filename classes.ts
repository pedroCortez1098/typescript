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