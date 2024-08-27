function validarTextoIngresado(texto) {
    if (texto.trim() === "") {
        document.getElementById("resultado").innerText = "Debes ingresar un texto para encriptar.";
        return false;
    }
    return true;
}

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function procesarTexto(accion) {
    const texto = document.getElementById("inputTexto").value;

// Se valida si hay un texto ingresado
    if (!validarTextoIngresado(texto)) {
        return;
    }

// Se valida si el texto cumple con las reglas permitidas
    if (!validarTexto(texto)) {
        document.getElementById("resultado").innerText = "El texto contiene caracteres no permitidos.";
        return;
    }

    let resultado;
    if (accion === "encriptar") {
        resultado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    } else if (accion === "desencriptar") {
        resultado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    } else {
        document.getElementById("resultado").innerText = "Acción no válida.";
        return;
    }

 // Mostrar el resultado.
    document.getElementById("resultado").innerText = resultado;
    inputTexto.value = "";
}

function copiarTexto(){
    const textarea = document.getElementById("resultado");
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            alert("Texto copiado: " + textarea.value);
            textarea.innerText = '';
            
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
        });
}




