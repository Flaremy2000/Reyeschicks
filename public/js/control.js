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
    alert("Se mostro esto al cargar la pagina");
}
document.window.onload = cargado();