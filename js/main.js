function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}


const calcularDescuento = (subtotal, porcentaje) => subtotal * (porcentaje / 100);


function iniciarSimulador() {
    while (true) {
        let producto = prompt("Ingresa el producto (o 'salir'):");
        
        if (!producto || producto.toLowerCase() === 'salir') {
            alert("¡Muchas Gracias!");
            break;
        }

        let precio = parseFloat(prompt("Ingresa el precio unitario:"));
        let cantidad = parseInt(prompt("Ingresa la cantidad:"));

      
        if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
            alert("Error: Valores inválidos.");
            continue;
        }

        let subtotal = calcularSubtotal(precio, cantidad);
        
        
        let porcDesc;
        if (subtotal > 10000) {
            porcDesc = 10;
        } else {
            porcDesc = 5;
        }

        let descuento = calcularDescuento(subtotal, porcDesc);
        let totalFinal = subtotal - descuento;

  
        console.log(`Producto: ${producto} | Total: $${totalFinal}`);
        
        alert(`Resumen de compra:\n• Producto: ${producto}\n• Subtotal: $${subtotal}\n• Descuento (${porcDesc}%): -$${descuento}\n• Total a pagar: $${totalFinal}`);

      
        let respuesta = prompt("¿Deseas registrar otro producto? (si/no)")?.toLowerCase().trim();
        if (!respuesta || !respuesta.startsWith('s')) {
            alert("¡Muchas Gracias!");
            break;
        }
    }
}


iniciarSimulador();