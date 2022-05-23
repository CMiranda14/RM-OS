//etiqueta del index

/*var vent_menu = document.getElementById('vent_menu');
var ico_menu = document.getElementById('ico_menu');*/

//Funcion



/*function activar(){
    vent_menu.classList.add("activar");

}



ico_menu.addEventListener('click' ,activar);*/


function activar_desactivar() {
    var x = document.getElementById("vent_menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

ico_menu.addEventListener('click' ,activar_desactivar);

function act_desct() {
    var x = document.getElementById("ventana_carp");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

bt_carp.addEventListener('click' ,act_desct);

/*------------------------------------------------------------*/
function act_desct2() {
    var x = document.getElementById("ventana_carp");
    if (x.style.display === "none") {

    } else {
        x.style.display = "none";
    }
}

bt3.addEventListener('click' ,act_desct2);

/*------------------------------------------------------------*/
function act_desct3() {
    var x = document.getElementById("ventana_carp");
    if (x.style.display === "none") {

    } else {
        x.style.display = "none";
    }
}

bt.addEventListener('click' ,act_desct3);

/*------------------------------------------------------------*/
