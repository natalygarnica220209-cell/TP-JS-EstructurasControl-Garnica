// Ejercicio 10 - Conversor Monetario con Ajuste por Inflación e Impuestos

const montoArsTexto = prompt("Ingrese el monto en Pesos Argentinos (ARS):");
const monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, BRL):");
const mesesTexto = prompt("Ingrese los meses de proyección de inflación (1 a 12):");

if (isNaN(montoArsTexto) || isNaN(mesesTexto)) {
    console.log("Uno o más datos numéricos no son válidos.");
} else {
    const montoArs = Number(montoArsTexto);
    const meses = Number(mesesTexto);
    let cotizacion = 0;

    switch (monedaDestino) {
        case "USD":
            cotizacion = 1300;
            break;
        case "EUR":
            cotizacion = 1420;
            break;
        case "BRL":
            cotizacion = 220;
            break;
        default:
            console.log("Moneda de destino no válida.");
            break;
    }

    if (cotizacion > 0 && meses >= 1 && meses <= 12) {
        const montoConComision = montoArs * 0.98;
        const montoRecibido = montoConComision / cotizacion;
        const valorProyectado = montoArs * (1 + 0.04 * meses);

        console.log("===== CONVERSIÓN MONETARIA =====");
        console.log("Monto original: $" + montoArs.toFixed(2) + " ARS");
        console.log("Comisión (2%): $" + (montoArs * 0.02).toFixed(2) + " ARS");
        console.log("Monto recibido: " + montoRecibido.toFixed(2) + " " + monedaDestino);
        console.log("Valor equivalente proyectado por inflación: $" + valorProyectado.toFixed(2) + " ARS");
    } else if (meses < 1 || meses > 12) {
        console.log("La cantidad de meses debe estar entre 1 y 12.");
    }
}
