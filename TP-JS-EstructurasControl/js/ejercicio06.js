// Ejercicio 6 - Scoring Crediticio para Pre-Aprobación

const ingresoTexto = prompt("Ingrese el ingreso mensual neto:");
const antiguedadTexto = prompt("Ingrese la antigüedad laboral en años:");
const deudasPendientes = prompt("¿Tiene deudas pendientes? (si/no)");
const montoCreditoTexto = prompt("Ingrese el monto del crédito solicitado:");

if (isNaN(ingresoTexto) || isNaN(antiguedadTexto) || isNaN(montoCreditoTexto)) {
    alert("Uno o más datos numéricos no son válidos.");
} else {
    const ingresoMensual = Number(ingresoTexto);
    const antiguedadLaboral = Number(antiguedadTexto);
    const montoCredito = Number(montoCreditoTexto);
    const cuotaMensual = (montoCredito * 1.30) / 12;
    const limiteCuota = ingresoMensual * 0.30;

    if (deudasPendientes === "si") {
        alert("Rechazada: posee deudas pendientes.");
    } else if (antiguedadLaboral < 1) {
        alert("Rechazada: la antigüedad laboral debe ser de al menos 1 año.");
    } else if (cuotaMensual > limiteCuota) {
        alert(
            "Rechazada: la cuota mensual estimada ($" + cuotaMensual.toFixed(2) +
            ") supera el 30% del ingreso mensual neto ($" + limiteCuota.toFixed(2) + ")."
        );
    } else {
        alert("Pre-Aprobada: cumple con todas las condiciones.");
    }
}
