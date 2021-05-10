class Producto {
    constructor(id, precio, descripcion, stock) {
        this.id = id;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = parseInt(stock);
    }

    actualizaStock() {
        this.stock = this.stock - 1;
        return this.stock;
    }
}

// Se crean 4 objetos (Una lista de productos sencilla acorde con la clase ya declarada)
const producto1 = new Producto(1, 2580, "Alimento 50kg", 5);
const producto2 = new Producto(2, 350, "Juguete para perros hueso", 4)
const producto3 = new Producto(3, 4900, "Casa para perros", 2)
const producto4 = new Producto(4, 6900, "Casa para perro de lujo", 6)

// Armamos el array de los objetos de la lista haciendo push en el array "productos"
const productos = []
productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)


// ****************************//
// ENTRADA DE DATOS //

// Se usa ".map" para "imprimir" las opciones en el prompt (A traves de la funcion en el parametro)
let productosPrompt = productos.map(function (i) {
    return `${i.id}.- Nombre:- ${i.descripcion} - Precio: ${i.precio}- Stock: ${i.stock}`
}).join("\n")

// Pedir al usuario que ingrese un numero (Asi escoge un producto para ser cotizado)
let productoId = prompt("Seleccione el producto (Elija un número) \n" + productosPrompt)

//**************************//
//FUNCIONES Y PROCESOS//

//Buscar en array el dato ingresado con el metodo "find"
let seleccion = productos.find(j => j.id == productoId)

let monto = seleccion.precio
monto = parseInt(monto)

// Función de sumar (Utilizada a lo largo del programa), funcion anónima
const suma = function (a, b) { return parseInt(a) + parseInt(b) }

// Función para cálculo del IVA (Siempre es 21%)
const iva = a => { return parseInt(a) * 0.21 }

let montoMasIva = suma(monto, iva(monto))

// Funciones para calcular el descuento correspondiente (15 o 20 por ciento)
const descQuince = (a) => { return a * 0.85 }
const descVeinte = (a) => a * 0.80


// Calcular el descuento a ser aplicado en base al monto de compra
function calcularDescuento(d) {
    if (d > 999 && d < 5001) {
        return descQuince(d)
    }
    else if (d > 5000) {
        return descVeinte(d)
    }
    else {
        return d
    }
}
let costoSinEnvio = calcularDescuento(monto)

// Calculo de envio en base al monto comprado
function calcEnvio(f) {
    if (f > 2999) {
        return 0
    }
    else {
        return 120
    }
}
let costoDeEnvio = calcEnvio(monto)


// ***************************************//
// SALIDAS: 
/* Mostrar total del monto a pagar de acuerdo con los crietrios establecidos en la informacion plasmada
 en el index.html:*/

alert(`Precio neto con descuento ${costoSinEnvio}
\nCosto de envío ${costoDeEnvio} 
\nTotal a pagar por su compra ${suma(costoSinEnvio, costoDeEnvio)} 
\n Y la existencia en depósito ahora es ${seleccion.actualizaStock()} unidades`);


