/**
 * @author Joaquín Baena Salas
 */

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("crear").addEventListener("click", function(){
        let gatito = new Gato(document.getElementById("nombre").value, document.getElementById("peso").value, document.getElementById("nacimiento").value, document.getElementById("raza").value)
        // let [,anio, mes, dia] = /([1-2][0-9]{3})-([0-1][0-9])-([0-3][0-9])/.exec(document.getElementById("nacimiento").value);
        let ventana = document.open("","",600,1100);
        ventana.gato = gatito;
        ventana.document.write(`
        <html>
        <head>
            <title>${ventana.gato.getNombre()}</title>
            <script src="js/ventanagato.js"></script>
        </head>
        <body>
            <h1>${ventana.gato.getNombre()}</h1>
            <form>
                <label >Nombre: <input type="text" readonly="true" value="${ventana.gato.getNombre()}"></label><br><br>
                <label>Peso: <input type="text" readonly="true" value="${ventana.gato.getPeso()}"></label><br><br>
                <label>Raza: <input type="text" readonly="true" value="${ventana.gato.getRaza()}"></label><br><br>
                <label>Fecha nacimiento: <input type="text" readonly="true" value="${ventana.gato.getEdad().split("-").reverse().join("/")}"></label><br><br>
            </form>
        </body>
        </html>`);
        ventana.document.close();
    });
});