// Bajo ninguna circunstancia pude lograr que la variable acepte esta orden, y no se que hice mal, busqué x todos lados
// ((hoteles !== "genova") || (hoteles !== "roma") || (hoteles !== "fortunato"))
let dias, personas, hoteles
const habitacion = 2


do {

    destino = (prompt("BIENVENIDA LUCILA FORTUNATO A LA MEJOR CADENA DE VIAJES DEL MUNDO, INGRESÁ TU DESTINO EN MENTE PARA VIAJAR")).toLowerCase();
    if (destino !="italia") {
    alert("No mientas, vos dijiste Italia") 
} 

} while (destino != "italia")

    
do { 
    dias = parseFloat(prompt("Cuantos días tenés pensado quedarte en el paraíso della pasta?"))
if(isNaN(dias)) {
    alert("Por favor ingresa un número válido")
}
} while (isNaN(dias))

do{
    hoteles = prompt("Tenemos 3 hoteles para que elijas donde quedarte, el hotel ROMA, el hotel GENOVA, o el hotel FORTUNATO, elegí el que vos prefieras").toLowerCase()

    if (hoteles !=="genova" || hoteles !=="roma" || hoteles !=="fortunato"){

        alert("Ingresá un hotel de los dichos anteriormente")

    }


} while (hoteles !=="genova" || hoteles !=="roma" || hoteles !=="fortunato")



const total = (habitacion * dias)

    reserva = (prompt(`El total a pagar es de €${total} euros. Desea continuar con la reserva?`)).toLowerCase()
 
if (reserva === "no") {
    prompt("Que lástima, te lo perdés... mentira!")
}
if (reserva === "si") {
    alert("Entonces...")
}

// Bajo ninguna circunstancia pude lograr que la variable acepte esta orden, y no se que hice mal, busqué x todos lados
// ((hotel != "genova") || (hotel != "roma") || (hotel != "fortunato"))