/**
 * @author Joaquín Baena Salas
 */

function Gato(nombre, peso, edad, raza){
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.raza = raza;
}

Gato.prototype.estado = function(){
    if(this.peso < 1 || this.peso > 14){
        return false;
    }
    return true;
}

Gato.prototype.hacerEjercicio = function(){
    if(this.estado()){
        --this.peso;
        return true;
    }
}

Gato.prototype.comer = function(){
    if(this.estado()){
        ++this.peso;
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