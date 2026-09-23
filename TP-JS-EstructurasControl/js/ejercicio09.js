// Ejercicio 9 - Sistema de Triaje para Urgencias Médicas

const dificultadRespirar = prompt("¿Presenta dificultad para respirar? (si/no)");
const dolorTexto = prompt("Ingrese el nivel de dolor del 1 al 10:");
const presionTexto = prompt("Ingrese la presión arterial sistólica:");

if (isNaN(dolorTexto) || isNaN(presionTexto)) {
    alert("El nivel de dolor o la presión ingresada no es válida.");
} else {
    const nivelDolor = Number(dolorTexto);
    const presionSistolica = Number(presionTexto);
    let nivelTriaje = "";
    let tiempoEspera = "";

    if (dificultadRespirar === "si" || presionSistolica > 180) {
        nivelTriaje = "Nivel Rojo - Atención Inmediata";
        tiempoEspera = "Atención inmediata.";
    } else if (nivelDolor >= 7 || (presionSistolica >= 140 && presionSistolica <= 180)) {
        nivelTriaje = "Nivel Amarillo - Urgencia Media";
        tiempoEspera = "Tiempo máximo de espera sugerido: 60 minutos.";
    } else {
        nivelTriaje = "Nivel Verde - Consulta Baja Prioridad";
        tiempoEspera = "Tiempo máximo de espera sugerido: 120 minutos.";
    }

    alert(nivelTriaje + "\n" + tiempoEspera);
}
