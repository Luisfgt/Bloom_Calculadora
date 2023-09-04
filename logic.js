let display = document.getElementById("display")

function marcar(value) {
    display.value += value;
}

function limpiarDisplay(){
    display.value = ""
}

function calcularResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error"
        setTimeout(limpiarDisplay, 1000)
    }
}


