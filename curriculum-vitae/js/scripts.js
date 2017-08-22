jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

}); // JQuery end

//------------------------------------------------------------
 // Get data Form contact and print console
//------------------------------------------------------------

function datosFormulario(frm) {
  let nombre= frm.nombre.value;
  let email = frm.email.value;
  let asunto= frm.asunto.value;
  let mensaje = frm.mensaje.value
  
  console.log("Nombre ",nombre);
  console.log("Email ",email);
  console.log("Asunto ",asunto);
  console.log("Mensaje ",mensaje);

}
