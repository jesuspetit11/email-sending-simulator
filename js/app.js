//Para ejecutar después que todo el código HTML haya sido descargado
document.addEventListener("DOMContentLoaded", function() {
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    console.log(inputEmail); //Para verificar si se esta seleccionando adecuadamente
    console.log(inputAsunto); //Para verificar si se esta seleccionando adecuadamente

    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);

    function validar(e) {
        console.log(e.target.id);
        if (e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`);
        } else {
            //Generar alert
            
        }
    }
});

function mostrarAlerta(mensaje) {
            const error = document.createElement("p");
            error.textContent = mensaje;
            
            //Inyectar el error al formulario
            formulario.appendChild(error);
            // formulario.innerHTML = error.innerHTML;
}