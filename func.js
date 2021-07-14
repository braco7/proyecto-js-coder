// Datos ser desplegados como las opciones disponibles

let disponible1 = "Martes 14 Julio 13:00 horas"
let disponible2 = "Miercoles 15 Julio 12:00 horas"
let disponible3 = "Lunes 19 Julio 10:00 horas"
let horario = ""

// Funcion para pedir en el prompt
function escogerHorario() {
    horario = prompt(`Escoja una opcion: \n 1.- ${disponible1} \n 2.- ${disponible2} \n 3.- ${disponible3}`)
    return horario
    }

// Esta se utiliza para pedir datos de la persona
function pedir(f) {
    prompt(f)
}

// Para seleccionar a traves de un "if" y desplegar el resultado correspondiente
function mostrarReserva(variable) {
    if(variable == 1) {
        alert(`Usted esta reservado para el dia ${disponible1}` )
    } if(variable == 2) {
        alert(`Usted esta reservado para el dia ${disponible3}` )
    } if (variable == 3) {
        alert(`Usted esta reservado para el dia ${disponible2}` )
    }
}
