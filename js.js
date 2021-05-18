class Producto {
    constructor(id, precio, descripcion, stock) {
        this.id = id;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = parseInt(stock);
    }

    actualizaStock() {
        return this.stock - 1;
    }
}

// Se crean 4 objetos (Una lista de productos sencilla acorde con la clase ya declarada)
const producto1 = new Producto(1, 2580, "Alimento 50kg", 5);
const producto2 = new Producto(2, 350,  "Juguete para perros hueso", 4)
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

class Iva {
    constructor(id,monto,porcentaje) {
        this.id = id;
        this.monto = parseFloat(monto);
        this.percent = porcentaje;
    }
}

// Creando objetos de IVA y array de posibles alícuotas de IVA
const iva1 = new Iva("A",0.20,"20%")
const iva2 = new Iva("B",0.15,"15%")
const iva3 = new Iva("C",0.10,"10%")

const ivas = []
ivas.push(iva1)
ivas.push(iva2)
ivas.push(iva3)

// Que el cliente escoja diferentes alicuotas de impuesto al valor agregado
let ivaPrompt = prompt(`¿Cual es la tasa de IVA?
A.- 20%
B.- 15%
C.- 10%
Introduzca una de las letras en el menú
`)
ivaPrompt = ivaPrompt.toUpperCase()

//**************************//
//FUNCIONES Y PROCESOS//

//Buscar en array el producto ingresado con el metodo "find"
let seleccion = productos.find(j => j.id == productoId)

//Buscar en el array el iva ingresado con el metodo "find"
let seleccionIva = ivas.find(k => k.id == ivaPrompt)
let ivaReal = seleccionIva.percent

// Convertir el monto a integer
let monto = seleccion.precio
monto = parseInt(monto)

//convertir el IVA a flotante
let montoIva = seleccionIva.monto
montoIva = parseFloat(montoIva)

// Función de sumar (Utilizada a lo largo del programa), funcion anónima
const suma = function (a, b) { return a + b }

// Función para cálculo del IVA (Siempre es 21%)
const iva = a => { return a * seleccionIva.monto }

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
let costoConIva = costoSinEnvio + (costoSinEnvio * seleccionIva.monto)

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


// Modificar la linea que indica el costo de envío de acuerdo a la selección del usuario
let costoEnHtml = document.getElementById("costo")
costoEnHtml.innerText = `Costo de envío (${costoDeEnvio}$)`


// Modificar la linea que indica el IVA de acuerdo a la selección que hizo el usuario
let ivaEnHtml = document.getElementById("spanDeIva")
ivaEnHtml.innerText = `${ivaReal}`

function unoUn(unid) {
    if (unid == 1) {
        return "unidad"
    } else {
        return "unidades"
    }
}

//Crear elemento "DIV" y dentro de el dar la salida de las operaciones
let division = document.createElement("div");
division.className = "container";
division.innerHTML = `<h2 class= "azul" id="tituloresult">Resultados</h2>
                      <h4 class= "azul">Precio neto con descuento: $${costoSinEnvio}</h4>
                      <h4 class= "azul">Costo de envío: $${costoDeEnvio} </h4>
                      <h4 class= "azul">Total a pagar por su compra: $${suma(costoConIva, costoDeEnvio)} </h4> 
                      <h4 class= "azul">Y la existencia en depósito ahora es de ${seleccion.actualizaStock()} ${unoUn(seleccion.actualizaStock())}</h4>`
                      //console.log(seleccion.actualizaStock())

document.body.appendChild(division)

