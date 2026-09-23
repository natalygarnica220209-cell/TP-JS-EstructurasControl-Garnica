// Ejercicio 7 - Cajero Automático Multiopción

const saldoInicial = 250000;
let saldoActual = saldoInicial;

const opcion = prompt(
    "CAJERO AUTOMÁTICO\n" +
    "1: Consultar Saldo\n" +
    "2: Extraer Dinero\n" +
    "3: Depositar Dinero\n" +
    "4: Salir"
);

switch (opcion) {
    case "1":
        alert("Saldo disponible: $" + saldoActual.toFixed(2) + " ARS");
        break;

    case "2":
        const extraccionTexto = prompt("Ingrese la cantidad a extraer:");

        if (isNaN(extraccionTexto)) {
            alert("El monto ingresado no es válido.");
        } else {
            const montoExtraccion = Number(extraccionTexto);

            if (montoExtraccion <= 0) {
                alert("El monto debe ser mayor a cero.");
            } else if (montoExtraccion % 1000 !== 0) {
                alert("La cantidad a extraer debe ser múltiplo de $1.000.");
            } else if (montoExtraccion > saldoActual) {
                alert("Fondos insuficientes.");
            } else {
                saldoActual -= montoExtraccion;
                alert(
                    "Extracción realizada correctamente.\n" +
                    "Nuevo saldo: $" + saldoActual.toFixed(2) + " ARS"
                );
            }
        }
        break;

    case "3":
        const depositoTexto = prompt("Ingrese el monto a depositar:");

        if (isNaN(depositoTexto)) {
            alert("El monto ingresado no es válido.");
        } else {
            const montoDeposito = Number(depositoTexto);

            if (montoDeposito <= 0) {
                alert("El depósito debe ser mayor a cero.");
            } else {
                saldoActual += montoDeposito;
                alert(
                    "Depósito realizado correctamente.\n" +
                    "Nuevo saldo: $" + saldoActual.toFixed(2) + " ARS"
                );
            }
        }
        break;

    case "4":
        alert("Operación finalizada.");
        break;

    default:
        alert("Opción no válida.");
        break;
}
