// Ejercicio 1 - Control de Acceso y Gestión de Permisos por Rol

const rolUsuario = prompt("Ingrese el rol (admin, editor, cliente):");
const estadoCuenta = prompt("Ingrese el estado de la cuenta (activa o suspendida):");
const horaActualTexto = prompt("Ingrese la hora actual (0 a 23):");

if (isNaN(horaActualTexto)) {
    alert("La hora ingresada no es válida.");
} else {
    const horaActual = Number(horaActualTexto);
    let resultado = "";

    if (estadoCuenta === "suspendida") {
        resultado = "Acceso denegado: la cuenta está suspendida.";
    } else if (rolUsuario === "admin") {
        resultado = "Acceso permitido: acceso total.";
    } else if (rolUsuario === "editor") {
        if (horaActual >= 8 && horaActual <= 18) {
            resultado = "Acceso permitido para editor.";
        } else {
            resultado = "Acceso denegado: el editor solo puede ingresar entre las 8 y las 18 hs.";
        }
    } else if (rolUsuario === "cliente") {
        if (estadoCuenta === "activa") {
            resultado = "Acceso permitido para cliente.";
        } else {
            resultado = "Acceso denegado.";
        }
    } else {
        resultado = "Rol no autorizado.";
    }

    alert(resultado);
}
