/**
 * @author Joaquín Baena Salas
 */

function Gato(nombre, peso, edad, raza){
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.raza = raza;
}

Gato.prototype.hacerEjercicio = function(){
    --this.peso;
    if(this.peso < 1){
        console.log("Su gato a muerto de inanición");
    }
}

Gato.prototype.comer = function(){
    ++this.peso;
    if(this.peso > 15){
        console.log("Su gato a muerto de sobrepeso.");
    }
}

Gato.prototype.getNombre = function(){
    return this.nombre;
}

Gato.prototype.getPeso = function(){
    return this.peso;
}

Gato.prototype.getEdad = function(){
    return this.edad;
}

Gato.prototype.getRaza = function(){
    return this.raza;
}