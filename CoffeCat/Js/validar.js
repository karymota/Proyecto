
jQuery.extend (jQuery.validator.messages , {
    required: "Este campo es obligatorio.",
    email: "Por favor, escribe una dirección de correo válida",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres.")

});

$.validator.addMethod('validarCorreo', function(value, e, parametro){
    if(value.endsWith(parametro)){
        return true
    }
    return false
}, 'debe contener {0}')

$('#form').validate({
    rules: {
        nombre: {
            required: true,
            minlength: 4,
            maxlength: 30
        },
        password: {
            required: true,
            minlength: 4,
            maxlength: 20
        }
    }
})

$('#form2').validate({
    rules: {
        nombre: {
            required: true,
            minlength: 4,
            maxlength: 30
        },
        email: {
            required: true,
            email: true,
            validarCorreo: 'gmail.com'
        },

        password: {
            required: true,
            minlength: 4,
            maxlength: 20
        }
    }
})


$('#btnini').click(function() {
    if($('#form').valid() == false){
        return
    }
    let email = $('#typeEmailX').val()
    let password = $('#typePasswordX').val()
})
$('#btnreg').click(function() {
    if($('#form2').valid() == false){
        return
    }
    let nom = $('#name').val()
    let correo = $('#email').val()
    let contra = $('#password').val()
    
})


/*var attempt = 3;
function validate() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (user == "admin" && password == "1234") {
        alert("ingreso exitoso");
        window.location = "Home.html";
        return false;

    } if (user == "cliente" && password == "1234") {
        alert("ingreso exitoso");
        window.location = "Home.html";
        return false;
    }

    else {
        attempt--;
    }

    alert("te queda " + attempt + " intentos mas")
    if (attempt == 0) {
        document.getElementById("user").disable = true;
        document.getElementById("password").disable = true;
        document.getElementById("sumbit").disable = true;
    }
}


function enviar() {
alert("enviado con exito");
window.location = "HOME.HTML";
return false;
}
*/