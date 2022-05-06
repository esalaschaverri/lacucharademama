function validar() {
    if (document.getElementById("nombre").value != "") {
        document.getElementById("nombre").classList.add("valid");
    }

    if (document.getElementById("precio").value != "") {
        document.getElementById("precio").classList.add("valid");
    }

    else {
        alert("Falta un dato.")
    }
    return false;

}
