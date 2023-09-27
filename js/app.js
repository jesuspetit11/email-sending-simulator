//Para ejecutar después que todo el código HTML haya sido descargado
document.addEventListener("DOMContentLoaded", function() {
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    console.log(inputEmail); //Para verificar si se esta seleccionando adecuadamente
    console.log(inputAsunto); //Para verificar si se esta seleccionando adecuadamente

    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);

    function validar() {
        if (e.target.value === ""){
            console.log("Esta vacio");
        } else {
            console.log("Si hay algo")
        }
    }
});