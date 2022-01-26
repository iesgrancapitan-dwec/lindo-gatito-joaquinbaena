/**
 * @author Joaquín Baena Salas
 */

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("crear").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const peso = document.getElementById("peso").value;
        const fecha = document.getElementById("nacimiento").value;
        const raza = document.getElementById("raza").value;

        try {
            if (nombre == "") {
                throw new Error("El nombre no puede estar vacio");
            }

            if (fecha == "") {
                throw new Error("La fecha no puede estar vacia");
            } else if (new Date(fecha) > new Date()) {
                throw new Error("La fecha no puede ser mayor a la actual");
            }

            if (raza == "") {
                throw new Error("La raza no puede estar vacia");
            }

            if (peso < 1 || peso > 15) {
                throw new Error("El peso debe estar entre 1 y 15");
            } else if (isNaN(peso)) {
                throw new Error("El peso debe ser un numero");
            }
            gatito = new Gato(nombre, peso, fecha, raza);
            let ventana = document.open("", "", "width=500,height=700");
            ventana.gato = gatito;
            ventana.document.write(`
        <html>
        <head>
            <title>${ventana.gato.getNombre()}</title>
            <script src="js/ventanagato.js"></script>
        </head>
        <body>
            <h1>${ventana.gato.getNombre()}</h1>
            <img src="img/dormir.jpg" alt="gato" width="200px">
            <form>
                <label >Nombre: <input type="text" readonly="true" value="${ventana.gato.getNombre()}" disabled></label><br><br>
                <label>Peso: <input type="text" id="peso" readonly="true" value="${ventana.gato.getPeso()}" disabled></label><br><br>
                <label>Raza: <input type="text" readonly="true" value="${ventana.gato.getRaza()}" disabled></label><br><br>
                <label>Fecha nacimiento: <input type="text" id="nacimiento" readonly="true" disabled value="${ventana.gato.getEdad().split("-").reverse().join("/")}"></label><br><br>
                <label>Edad: <input type="text" id="edadDisplay" readonly="true" disabled></label><br><br>
                <input type="button" value="Comer" id="comer">
                <input type="button" value="Hacer deporte" id="deporte">
                <input type="button" value="Dormir" id="dormir">
                <input type="button" value="Saber edad" id="edad">
            </form>
            <h2></h2>
        </body>
        </html>`);
            ventana.document.close();
        } catch (Error) {
            document.querySelector("h2").innerHTML = Error.message;
        }


    });
});