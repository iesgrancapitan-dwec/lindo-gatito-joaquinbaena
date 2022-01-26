/**
 * @author Joaquín Baena Salas
 */

{
    document.addEventListener("DOMContentLoaded", function(){
        let peso = document.getElementById("peso");
        let edad = document.getElementById("edadDisplay");
        let foto = document.querySelector("img");
        
        document.getElementById("comer").addEventListener("click",function(){
            if(gato.estado()){
                gato.comer();
                foto.setAttribute("src", "img/comiendo.jpg")
                peso.value = gato.peso;
            }else{
                foto.setAttribute("src", "img/muerto.jpg")
                desabilitarBotones();
            }
        });
        document.getElementById("deporte").addEventListener("click",function(){
            if(gato.estado()){
                gato.hacerEjercicio();
                foto.setAttribute("src", "img/jugar.jpg")
                peso.value = gato.peso;
            }else{
                foto.setAttribute("src", "img/muerto.jpg")
            }
        });
        document.getElementById("edad").addEventListener("click",function(){
            let [,,,anio] = /([0-3][0-9])\/([0-1][0-9])\/([1-2][0-9]{3})/.exec(document.getElementById("nacimiento").value);
            let fechaActual = new Date();
            anio = fechaActual.getFullYear() - anio;
            edad.value = anio + " años";
        });
        document.getElementById("dormir").addEventListener("click",function(){
            foto.setAttribute("src", "img/dormir.jpg")
        });

        const desabilitarBotones = () => {
            document.querySelectorAll("input").forEach(Element =>{
                Element.disabled = true;
            })
        }
    });
}