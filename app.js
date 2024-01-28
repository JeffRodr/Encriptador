/*Reemplazos:
a - ai
e - enter
i - imes
o - ober
u - ufat */

function encriptar(){
    var texto = document.getElementById("textoAencriptar").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("img-persona").style.display = "none";
    document.getElementById("texto-mensaje").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("textoAencriptar").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("img-persona").style.display = "none";
    document.getElementById("texto-mensaje").style.display = "none";
    document.getElementById("texto-encriptado").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto-encriptado");
    contenido.select();
    document.execCommand("cut");
    alert("¡Se ha copiado tu respuesta! \n¡Reiniciando pagina!");
    location.reload();
}