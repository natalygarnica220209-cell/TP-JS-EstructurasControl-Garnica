// Ejercicio 2 - Cotizador Dinámico de Pólizas de Seguro Automotor

const edadTexto = prompt("Ingrese la edad del conductor:");
const cobertura = prompt("Ingrese el tipo de cobertura (terceros, terceros_completo, todo_riesgo):");
const accidentesTexto = prompt("Ingrese la cantidad de accidentes del último año:");

if (isNaN(edadTexto) || isNaN(accidentesTexto)) {
    alert("La edad o la cantidad de accidentes ingresada no es válida.");
} else {
    const edad = Number(edadTexto);
    const cantidadAccidentes = Number(accidentesTexto);
    let tarifaBase = 0;
    let coberturaValida = true;

    switch (cobertura) {
        case "terceros":
            tarifaBase = 45000;
            break;
        case "terceros_completo":
            tarifaBase = 70000;
            break;
        case "todo_riesgo":
            tarifaBase = 110000;
            break;
        default:
            coberturaValida = false;
            break;
    }

    if (!coberturaValida) {
        alert("Tipo de cobertura no válido.");
    } else if (cantidadAccidentes >= 3 && cobertura === "todo_riesgo") {
        alert("Negativa de contratación: con 3 o más accidentes no se puede contratar Todo Riesgo.");
    } else {
        let valorFinal = tarifaBase;
        let detalle = "";

        if (edad < 25) {
            valorFinal = valorFinal * 1.20;
            detalle += "Recargo por ser menor de 25 años: 20%.\n";
        }

        if (cantidadAccidentes === 0) {
            valorFinal = valorFinal * 0.90;
            detalle += "Bonificación por no registrar accidentes: 10%.\n";
        }

        if (cantidadAccidentes >= 3) {
            valorFinal = valorFinal * 1.30;
            detalle += "Recargo por 3 o más accidentes: 30%.\n";
        }

        alert(
            "Póliza calculada\n" +
            "Cobertura: " + cobertura + "\n" +
            "Valor final: $" + valorFinal.toFixed(2) + " ARS\n\n" +
            detalle
        );
    }
}
