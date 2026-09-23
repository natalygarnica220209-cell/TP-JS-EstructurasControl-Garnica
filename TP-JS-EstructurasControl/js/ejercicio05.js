// Ejercicio 5 - Evaluador de Categoría Tributaria

const ingresosTexto = prompt("Ingrese los ingresos brutos anuales en ARS:");
const superficieTexto = prompt("Ingrese la superficie afectada en m²:");

if (isNaN(ingresosTexto) || isNaN(superficieTexto)) {
    alert("Los valores ingresados no son válidos.");
} else {
    const ingresosAnuales = Number(ingresosTexto);
    const superficie = Number(superficieTexto);
    let categoria = "";

    if (ingresosAnuales <= 6000000 && superficie <= 30) {
        categoria = "Categoría A";
    } else if (ingresosAnuales <= 12000000 && superficie <= 45) {
        categoria = "Categoría B";
    } else if (ingresosAnuales <= 18000000 && superficie <= 85) {
        categoria = "Categoría C";
    } else {
        categoria = "Régimen General";
    }

    alert("Categoría asignada: " + categoria);
}
