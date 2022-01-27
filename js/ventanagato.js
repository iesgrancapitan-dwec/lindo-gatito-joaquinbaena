/**
 * @author Joaquín Baena Salas
 */

{
    document.addEventListener("DOMContentLoaded", function(){
        let peso = document.getElementById("peso");
        let edad = document.getElementById("edadDisplay");
        let foto = document.querySelector("img");
        let mensajeMuerte = document.querySelector("h2");
        
        document.getElementById("comer").addEventListener("click",function(){
            gato.comer();
            if(gato.estado()){
                foto.setAttribute("src", "img/comiendo.jpg")
                peso.value = gato.getPeso;
            }else{
                foto.setAttribute("src", "img/muerto.jpg");
                mensajeMuerte.innerHTML = `Su gato ${gato.getNombre} ha muerto de sobrepeso`;
                desabilitarBotones();
            }
        });
        document.getElementById("deporte").addEventListener("click",function(){
            gato.hacerEjercicio();
            if(gato.estado()){
                foto.setAttribute("src", "img/jugar.jpg");
                peso.value = gato.getPeso;
            }else{
                foto.setAttribute("src", "img/muerto.jpg");
                mensajeMuerte.innerHTML = `Su gato ${gato.getNombre} ha muerto de inanición`;
                desabilitarBotones();
            }
        });
        document.getElementById("edad").addEventListener("click",function(){
            let [,,,anio] = /([0-3][0-9])\/([0-1][0-9])\/([1-2][0-9]{3})/.exec(document.getElementById("nacimiento").value);
            let fechaActual = new Date();
            anio = fechaActual.getFullYear() - anio;
            edad.value = anio + " años";
        });
        document.getElementById("dormir").addEventListener("click",function(){
            foto.setAttribute("src", "img/dormir.jpg");
        });

        const desabilitarBotones = () => {
            document.querySelectorAll("input").forEach(Element =>{
                Element.disabled = true; 
            })
        }
    });
}