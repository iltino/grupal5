


function login () {
   
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    var contraseña1 = document.getElementById('password1').value;
    var contraseña2 = document.getElementById('password2').value;
    let checkbox = document.getElementById('terminos').checked;
   
    if (nombre = "" || apellido == "" || email == "" || contraseña1  == "" || contraseña2 == ""){
        showAlertError();
    }else if (contraseña1!==contraseña2){
        showAlertError();
    }else if(!checkbox) {

        showAlertError();
    }else{
        showAlertSuccess();

    }
    
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    console.log("showAlertSuccess")
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    console.log("showAlertError")
}



document.addEventListener('DOMContentLoaded', () => {   
    let boton = document.getElementById('registro')
    boton.addEventListener('click', () => {
        login();
        
        (function () {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    cheked()
                    validarContraseña()
                    event.preventDefault()
                    event.stopPropagation()
                  }
          
                  form.classList.add('was-validated')
                }, false)
              })
          })()
    })
})

function cheked(){
    let chekear= document.getElementById("terminos").checked
    if (!chekear){
        document.getElementById("btnTerminos").classList.remove("valid")
        document.getElementById("btnTerminos").classList.add("invalid")
        document.getElementById("invalidoTermino").innerHTML="<p class='invalid'>Falta aceptar los Terminos y Condiciones</p>"
    }
    else{
        document.getElementById("btnTerminos").classList.remove("invalid")
        document.getElementById("btnTerminos").classList.add("valid")
        document.getElementById("invalidoTermino").innerHTML=""
    }
  }
  
  function validarContraseña(){
    var contraseña1= document.getElementById('password1').value;
    var contraseña2=document.getElementById('password2').value;

    if (contraseña1!==contraseña2){
        document.getElementById("passwordcheck").classList.remove("d-none")
        document.getElementById("passwordcheck").classList.add("invalid-feedback")
    }
  }