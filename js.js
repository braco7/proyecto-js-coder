class Producto {
    constructor(id,precio,descripcion,stock) {
        this.id=id;
        this.precio=precio;
        this.descripcion=descripcion;
        this.stock=stock;
    }
    actualizaStock(){
        this.stock = this.stock-1;
    }
}

const producto1 = new Producto(1,2580,"Alimento 50kg",5);
const producto2 = new Producto(2,350,"Juguete para perros hueso",4)
const producto3 = new Producto (3,4900,"Casa para perros",2)
const producto4 = new Producto(4,6900,"Casa para perro de lujo",6)

// console.log(producto1)

let productoId = prompt("Seleccione el producto (Elija un número) \n" + producto1.id + ".- " + producto1.descripcion + " ---> Precio: " + producto1.precio
+"\n" + producto2.id +  ".- "  + producto2.descripcion + " ---> Precio: " + producto2.precio
+"\n" + producto3.id +  ".- "  + producto3.descripcion + " ---> Precio: " + producto3.precio
+"\n" + producto4.id +  ".- "  + producto4.descripcion + " ---> Precio: " + producto4.precio)

const buscarMonto = function(productoId) {
    let monto = 0
    switch(productoId) {
        case "1":
            monto = producto1.precio
          break;
        case "2":
            monto = producto2.precio
          break;
        case "3":
            monto = producto3.precio
          break;
          case "4":
              monto = producto4.precio
            break;
        default:
           alert = "Error"
      }
    return monto
}


let monto = buscarMonto(productoId)
parseInt(monto)

// Función de sumar (Utilizada a lo largo del programa), variable anónima
const suma = function (a,b) {return parseInt(a)+parseInt(b)}

// Función para cálculo del IVA (Siempre es 21%)
const iva = a => {return parseInt(a)*0.21}

let montoMasIva = suma(monto,iva(monto))

// Funciones para calcular el descuento correspondiente (15 o 20 por ciento)
const descQuince = (a) => {return a*0.85}
const descVeinte = (a) => a*0.80


// Calcular el descuento a ser aplicado en base al monto de compra
function calcularDescuento (d) {
    if (d > 999 && d < 5001){
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

// Mostrar total del monto a pagar
alert(`Precio neto con descuento ${costoSinEnvio} \nCosto de envío ${costoDeEnvio} \nTotal a pagar por su compra ${suma(costoSinEnvio,costoDeEnvio)}`);


 