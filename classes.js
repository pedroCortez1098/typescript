var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.endender = function () {
        console.log("El televisor se ha encendido");
    };
    return Television;
}());
var tv = new Television();
tv.endender();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("Guau Guau");
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.ladrar();
miPerro.moverse();
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (!!nombre) {
            console.log("Hola, " + nombre);
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Pedro");
var h = new Hijo();
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "definicion";
        console.log("Mi nombre es " + this.nombre);
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion));
var d = new Implementacion();
var Saludo = /** @class */ (function () {
    function Saludo() {
    }
    Saludo.prototype.getDestinatario = function () {
        return "amigos";
    };
    return Saludo;
}());
var SaludoEspecial = /** @class */ (function (_super) {
    __extends(SaludoEspecial, _super);
    function SaludoEspecial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaludoEspecial.prototype.saludar = function () {
        console.log("Hola, " + this.getDestinatario());
    };
    return SaludoEspecial;
}(Saludo));
var inst = new SaludoEspecial();
inst.saludar();
