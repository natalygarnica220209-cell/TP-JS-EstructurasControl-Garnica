// Ejercicio 8 - Motor de Descuentos en Comercio Electrónico

const montoCarritoTexto = prompt("Ingrese el monto total del carrito:");
const categoriaUsuario = prompt("Ingrese la categoría (Bronce, Plata, Oro):");
const codigoDescuento = prompt("Ingrese el código (DESC10, SUPER20 o ninguno):");

if (isNaN(montoCarritoTexto)) {
    console.log("El monto ingresado no es válido.");
} else {
    const montoCarrito = Number(montoCarritoTexto);
    let descuentoMembresia = 0;
    let descuentoCupon = 0;

    switch (categoriaUsuario) {
        case "Plata":
            descuentoMembresia = 0.05;
            break;
        case "Oro":
            descuentoMembresia = 0.15;
            break;
        case "Bronce":
            descuentoMembresia = 0;
            break;
        default:
            console.log("Categoría de usuario no válida.");
            break;
    }

    const montoConMembresia = montoCarrito * (1 - descuentoMembresia);

    switch (codigoDescuento) {
        case "DESC10":
            descuentoCupon = 0.10;
            break;
        case "SUPER20":
            if (montoCarrito > 50000) {
                descuentoCupon = 0.20;
            }
            break;
        case "ninguno":
        case "":
            descuentoCupon = 0;
            break;
        default:
            console.log("Código de descuento no válido. No se aplicará cupón.");
            break;
    }

    const descuentoPorCupon = montoConMembresia * descuentoCupon;
    const subtotal = montoConMembresia - descuentoPorCupon;
    let costoEnvio = 0;

    if (subtotal > 100000) {
        costoEnvio = 0;
    } else {
        costoEnvio = 4500;
    }

    const totalNeto = subtotal + costoEnvio;

    console.log("===== DETALLE DE COMPRA =====");
    console.log("Monto del carrito: $" + montoCarrito.toFixed(2));
    console.log("Descuento por membresía: " + (descuentoMembresia * 100) + "%");
    console.log("Descuento por cupón: " + (descuentoCupon * 100) + "%");
    console.log("Subtotal: $" + subtotal.toFixed(2));
    console.log("Costo de envío: $" + costoEnvio.toFixed(2));
    console.log("Total neto a pagar: $" + totalNeto.toFixed(2));
}
