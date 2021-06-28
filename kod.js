var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var elem = document.getElementById("elem");
var feGomb = document.getElementById("fe-gomb");

window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("ratechange", meretezes);

function meretezes() {
    var szel = window.innerWidth;
    var mag = window.innerHeight;
    var body = document.body;
    if (szel <= 550) {
        elem.style.width = szel - 50 + "px";
    } else {
        elem.style.width = "500px";
    }
    if (mag <= 400) {
        body.style.marginTop = "50px";
        body.style.marginBottom = "50px";
    } else {
        body.style.marginTop = "0px";
        body.style.marginBottom = "0px";
    }
}

fnev.addEventListener("focusin", animalas);
fnev.addEventListener("focusout", animalas);
email.addEventListener("focusin", animalas);
email.addEventListener("focusout", animalas);
jszo.addEventListener("focusin", animalas);
jszo.addEventListener("focusout", animalas);

var be = false;

function animalas(elem) {
    var alap = document.getElementById(elem.path[0].id);
    var elem = document.getElementById(elem.path[0].id + "s");
    if (be == false) {
        be = true;
        if (alap.value == "") {
            elem.style.zIndex = "1";
            elem.style.top = "11px";
            elem.style.display = "block";
            elem.style.animation = "fel 0.3s";
            elem.style.animationFillMode = "forwards";
            elem.style.color = "rgb(24, 112, 184)";
        } else {
            elem.style.zIndex = "1";
            elem.style.top = "-7.9px";
            elem.style.display = "block";
            elem.style.animation = "none";
            elem.style.color = "rgb(24, 112, 184)";
        }
    } else {
        be = false;
        if (alap.value == "") {
            elem.style.zIndex = "1";
            elem.style.top = "-7.9px";
            elem.style.display = "block";
            elem.style.animation = "le 0.3s";
            elem.style.animationFillMode = "forwards";
            elem.style.color = "gray";
            setTimeout(function() {
                elem.style.zIndex = "-1";
            }, 300);
        } else {
            elem.style.zIndex = "-1";
            elem.style.top = "11px";
            elem.style.display = "none";
            elem.style.animation = "none";
            elem.style.color = "gray";
        }
    }
}

function fe() {
    if (jszo.type == "password") {
        jszo.type = "text";
        feGomb.innerText = "Elrejt";
    } else {
        jszo.type = "password";
        feGomb.innerText = "Felfed";
    }
}