//Para ejecutar después que todo el código HTML haya sido descargado
document.addEventListener("DOMContentLoaded", function() {
    //Creamos objeto para que se habilite la opción de enviar

    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    };

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");   

    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);

    function validar(e) {
        // console.log(e.target.parentElement); //Traversing de dom para añadir el mensaje de error al final de cada parant element del input
        //Generar alert
        if (e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); //Segundo parámetro de referencia donde se mostrará
            return; //El return corta la ejecución del código
        }
        

        if(e.target.id === "email" && !validarEmail(e.target.value)){
            mostrarAlerta("El email no es válido", e.target.parentElement);
            return;
        };

        limpiarAlerta(e.target.parentElement);

        //Asignar los valores al obj de email vacío
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el obj de email
        comprobarEmail();
    }


function mostrarAlerta(mensaje, referencia) {
            //Comprueba si ya existe una alerta
            limpiarAlerta(referencia);

            const error = document.createElement("p");
            error.textContent = mensaje;
            error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

            //Inyectar el error al formulario
            referencia.appendChild(error); //Se añade al final de cada parentElement
            // formulario.innerHTML = error.innerHTML;
}

function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector(".bg-red-600");
        if(alerta){
        alerta.remove();
    }
}

function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
}

function comprobarEmail() {
    console.log(Object.values(email)); //Devuelve un array con los valores del objeto
    console.log(Object.values(email).includes(""));
}

});