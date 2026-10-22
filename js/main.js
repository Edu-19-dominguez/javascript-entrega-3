const calcularSubtotal = (precio, cantidad) => precio * cantidad;

const calcularDescuento = (subtotal, porcentaje) => subtotal * porcentaje / 100;

function obtenerDescuento(subtotal) {
    if (subtotal > 10000) {
        return 10;
    } else {
        return 5;
    }
}

function mostrarResumen(producto, subtotal, porcentaje, descuento, total) {
    alert(
        "Resumen de compra" +
        "\nProducto: " + producto +
        "\nSubtotal: $" + subtotal +
        "\nDescuento (" + porcentaje + "%): $" + descuento +
        "\nTotal a pagar: $" + total
    );
}

let continuar = "si";

while (continuar == "si") {

    let producto = prompt("Ingrese el producto:");

    if (producto != "" && producto != null) {

        let precio = parseFloat(prompt("Ingrese el precio unitario:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad:"));

        if (!isNaN(precio) && !isNaN(cantidad) && precio > 0 && cantidad > 0) {

            let subtotal = calcularSubtotal(precio, cantidad);

            let porcentaje = obtenerDescuento(subtotal);

            let descuento = calcularDescuento(subtotal, porcentaje);

            let total = subtotal - descuento;

            console.log("Producto: " + producto);
            console.log("Subtotal: $" + subtotal);
            console.log("Descuento: $" + descuento);
            console.log("Total: $" + total);

            mostrarResumen(
                producto,
                subtotal,
                porcentaje,
                descuento,
                total
            );

        } else {
            alert("Error: ingrese valores validos.");
        }

        continuar = prompt("¿Desea ingresar otro producto? (si/no)");

        if (continuar == null) {
            continuar = "no";
        }

    } else {
        continuar = "no";
    }
}

alert("Muchas gracias.");