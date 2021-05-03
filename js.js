let monto = prompt("Cual es el monto de su compra")
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
    if (d > 999 && d < 3001){
        return descQuince(d)
    }
    else if (d > 3000) {
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


 