// Se asigna a la variable horario el dato introducido en el prompt de la funcion "escogerHorario"
horario = escogerHorario()

// Si la opcion es alguna de las tres:
if(horario == 1 || horario == 2 || horario == 3) {
    // Funcion pedir para solicitar datos de la persona
    let nombre = pedir("Nombre")
    let apellido = pedir("Apellido")
    let email = pedir("Email")
    mostrarReserva(horario)

} else {
    // (Si la opcion no es ninguna de las tres se notifica)
    alert("Opcion invalida")
}
