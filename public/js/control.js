let frame = document.getElementById('MainContaint');

document.getElementById('home').addEventListener("click", cambioInicio,false);
document.getElementById('informe').addEventListener("click", Informe, false);
document.getElementById('contact').addEventListener("click", Contacto, false);
document.getElementById('register').addEventListener("click", NuevoRegistro, false);
document.getElementById('update').addEventListener("click", EditarCuidador, false);

function cambioInicio(){
    frame.setAttribute('src', 'View/Main.html');
}

function NuevoRegistro(){

}

function EditarCuidador(){

}

function Informe(){
    frame.setAttribute('src', 'View/informe.html');
}

function Contacto(){
    frame.setAttribute('src', 'View/contact.html');
}

function cargado() {
    document.body.innerHTML += "<div class=\"modal fade\" id=\"EditingUser\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"staticBackdropLabel\">Iniciar Sesion</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"modal-body\"><div class=\"formulario de registro\"><form><label>Cedula: <input type=\"number\" size=\"10\" required></label><label>Password: <input type=\"password\" size=\"20\" required disabled></label><br></form></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cerrar</button><button id=\"login\" type=\"button\" class=\"btn btn-primary\">Iniciar</button></div></div></div></div>"
}
document.window.onload = cargado();