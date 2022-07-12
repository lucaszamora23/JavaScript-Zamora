// Bajo ninguna circunstancia pude lograr que la variable acepte esta orden, y no se que hice mal, busqué x todos lados
// ((hoteles !== "genova") || (hoteles !== "roma") || (hoteles !== "fortunato"))
let dias, personas, destino
const habitacion = 2
let hoteles= "fortunato" || "genova" || "roma"

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
    hoteles = prompt("Tenemos 3 hoteles para que elijas donde quedarte, el hotel ROMA, el hotel GENOVA, o el hotel FORTUNATO, elegí el que vos prefieras");

    if (hoteles =="genova" || hoteles =="roma" || hoteles =="fortunato"){

        alert("perfecto!")
        break
    }
    else if (hoteles != "genova" || hoteles !="fortunato" ||hoteles != "roma"){
        alert("Ingresá un hotel de los dichos anteriormente")
    }

} while (hoteles !=="genova" || hoteles !=="roma" || hoteles !=="fortunato")



const total = (habitacion * dias)
do{
    reserva = (prompt(`El total a pagar es de €${total} euros. Desea continuar con la reserva?`)).toLowerCase()
 
if (reserva === "no") {
    alert("Que lástima, te lo perdés... mentira!")
    break
}
if (reserva === "si") {
    alert("Entonces...")
    break
}
else{
    alert("ingresar si o no")
}
}while(reserva !== "si" || reserva !== "no")

// Bajo ninguna circunstancia pude lograr que la variable acepte esta orden, y no se que hice mal, busqué x todos lados
// ((hotel != "genova") || (hotel != "roma") || (hotel != "fortunato"))