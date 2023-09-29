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
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');   
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner");

    // inputEmail.addEventListener("blur", validar); //evento blur cuando se hace click en el evento y se sale
    inputEmail.addEventListener("input", validar); //evento input captar evento en tiempo real
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);
    formulario.addEventListener("submit", enviarEmail);

    btnReset.addEventListener("click", function (e) {
        e.preventDefault();
        resetFormulario();
    });
    
    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(()=>{
            spinner.classList.remove("flex");
            spinner.classList.add("hidden");

            resetFormulario();
            //Crear una alerta
            const alertaExito = document.createElement("P");
            alertaExito.classList.add("bg-green-500", "text-white", "p-2", "text-center", "rounded-lg", "mt-10", "font-bold", "text-sm", "uppercase");
            alertaExito.textContent = "Mensaje enviado correctamente";
            formulario.appendChild(alertaExito);

            setTimeout(() =>{
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    function validar(e) {
        // console.log(e.target.parentElement); //Traversing de dom para añadir el mensaje de error al final de cada parant element del input
        //Generar alert
        if (e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); //Segundo parámetro de referencia donde se mostrará
            email[e.target.name] = ""; 
            comprobarEmail();
            return; //El return corta la ejecución del código
        }
        
        
        if(e.target.id === "email" && !validarEmail(e.target.value)){
            mostrarAlerta("El email no es válido", e.target.parentElement); //Segundo parámetro de referencia donde se mostrará
            email[e.target.name] = ""; 
            comprobarEmail();
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
    // console.log(Object.values(email)); //Devuelve un array con los valores del objeto
    // console.log(Object.values(email).includes("")); //Devuelve un boolean si incluye un espacio en blanco en uno de los inputs
    if(Object.values(email).includes("")){
        btnSubmit.classList.add("opacity-50");
        btnSubmit.disable = true;
        return;
    } 
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disable = false;
    
}

function resetFormulario() {
       //Reiniciar el obj
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
}

});