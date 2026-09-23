// Ejercicio 3 - Calculadora de Liquidación de Sueldos

const sueldoBrutoTexto = prompt("Ingrese el sueldo bruto:");

if (isNaN(sueldoBrutoTexto)) {
    console.log("El sueldo ingresado no es válido.");
} else {
    const sueldoBruto = Number(sueldoBrutoTexto);

    const jubilacion = sueldoBruto * 0.11;
    const obraSocial = sueldoBruto * 0.03;
    const ley19032 = sueldoBruto * 0.03;
    const descuentosLey = jubilacion + obraSocial + ley19032;
    const sueldoNetoProvisorio = sueldoBruto - descuentosLey;

    let impuestoGanancias = 0;

    if (sueldoNetoProvisorio <= 1200000) {
        impuestoGanancias = 0;
    } else if (sueldoNetoProvisorio <= 2000000) {
        impuestoGanancias = (sueldoNetoProvisorio - 1200000) * 0.15;
    } else {
        impuestoGanancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    }

    const sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;

    console.log("===== RECIBO DE SUELDO =====");
    console.log("Sueldo Bruto: $" + sueldoBruto.toFixed(2));
    console.log("Jubilación (11%): $" + jubilacion.toFixed(2));
    console.log("Obra Social (3%): $" + obraSocial.toFixed(2));
    console.log("Ley 19.032 (3%): $" + ley19032.toFixed(2));
    console.log("Descuentos de Ley: $" + descuentosLey.toFixed(2));
    console.log("Retención de Ganancias: $" + impuestoGanancias.toFixed(2));
    console.log("Sueldo Neto Final: $" + sueldoNetoFinal.toFixed(2));
}
