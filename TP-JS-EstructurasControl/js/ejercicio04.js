// Ejercicio 4 - Tarificador Dinámico de Plataforma de Transporte

const distanciaTexto = prompt("Ingrese la distancia en kilómetros:");
const tiempoTexto = prompt("Ingrese el tiempo estimado en minutos:");
const nivelDemanda = prompt("Ingrese el nivel de demanda (baja, media, alta):");

if (isNaN(distanciaTexto) || isNaN(tiempoTexto)) {
    alert("La distancia o el tiempo ingresado no es válido.");
} else {
    const distancia = Number(distanciaTexto);
    const tiempoEstimado = Number(tiempoTexto);
    const bajadaBandera = 800;
    const costoPorKm = 350;
    const costoPorMinuto = 80;
    let factorDemanda;

    switch (nivelDemanda) {
        case "baja":
            factorDemanda = 1.0;
            break;
        case "media":
            factorDemanda = 1.3;
            break;
        case "alta":
            factorDemanda = 1.8;
            break;
        default:
            factorDemanda = null;
            break;
    }

    if (factorDemanda === null) {
        alert("Nivel de demanda no válido.");
    } else {
        let costoBase = bajadaBandera + (distancia * costoPorKm) + (tiempoEstimado * costoPorMinuto);
        let costoPeaje = 0;

        if (distancia > 20) {
            costoPeaje = 1500;
        }

        const costoTotal = (costoBase * factorDemanda) + costoPeaje;

        alert("Costo estimado total del viaje: $" + costoTotal.toFixed(2) + " ARS");
    }
}
