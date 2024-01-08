const interes = 1.4 


function solicitarDatosusuario()  {
    let nombre = prompt ("Ingresa tu nombre");
    let apellido = prompt ("Ingresa tu apellido");
    let genero = prompt ("Ingresa M si sos hombre o F si sos mujer; En caso de no ser ninguno ingresa X").toLowerCase();
    let saludo;
    let nombreCompleto = nombre + " " + apellido;

    switch (genero) {
        case "f" :
            saludo = "Bienvenida " + nombreCompleto
            break;
        case "m" :
            saludo = "Bienvenido " + nombreCompleto
            break;
        case "x":
            saludo = "Bienvenidx " + nombreCompleto
            break;
        default:
            saludo = "No te entendi, pero sos libre de percibirte como sea. Welcome " + nombreCompleto +"!" 
            break
    }
    alert(saludo)
}    
    
        


function calcularAltura() {
    let edad = prompt("Que edad tiene tu hijo?")
    console.log(edad)
    let Altura;
switch (edad){
	case "1":
    case "2":
    case "3":    
		Altura = "Pone la pale a 10cm del suelo";
		break;
	case "4":
    case "5":
    case "6":        
		Altura = "Pone la pale a 20cm del suelo"
        break
	case "7":
    case "8":
    case "9":        
		Altura = "Pone la pale a 30cm del suelo"
		break
	default:
		Altura = "Si tiene 10 años o mas podes ponerla a cualquier altura"
		break
    }
    alert(Altura)
}



function calcularCuota(monto, meses, interes) {
    console.log ("Detalle mensual ⬇")
let importeCuotas = []
    for (let i = 0; i <= meses-1 ; i++ ) { 
        importeCuotas[i] = ("Cuota nro " + (i+1) + " $" + ((monto * interes) / meses).toFixed(2))
    }
console.table (importeCuotas)
      
}

function simularCompra() {
    let tamanox = prompt("¿Qué palestra quieres comprar? (grande, chica, mediana)");
    let tamano = tamanox.toLowerCase()

    if (tamano !== "grande" && tamano !== "mediana" && tamano !== "chica") {
        alert("La opción indicada no es válida, por favor intenta nuevamente.");
        simularCompra();
    } else {
        console.log(tamano);
        let cuotas = prompt("¿En cuántos meses nos quieres pagar?");
        console.log (typeof(cuotas))
        if (cuotas > 12) {
            console.log(cuotas)
            console.log(cuotas > 12)
            alert("Si necesitas una financiación tan larga, por favor contáctanos por teléfono. De lo contrario, intenta nuevamente.");
        
            simularCompra();
        } else {
            let monto;

            switch (tamano) {
                case "grande":
                    monto = 200000;
                    break;
                case "mediana":
                    monto = 150000;
                    break;
                case "chica":
                    monto = 100000;
                    break;
                default:
                    monto = 0;
                    alert("La opción elegida no es válida.");
            }

            console.log(monto + "$ con interés del 1.4");
            calcularCuota(monto, cuotas, interes);
            
        }
    }
}
let retry;
let iteracion;

// Este es el programa que se ejecuta y llama a las funciones.

solicitarDatosusuario() 
    do {   
        let interaccion = prompt("Indique 1 para simular su compra O indique 2 para calcular la altura de su palestra")
            switch (interaccion){
                case "1":
                    simularCompra();
                    break;
                case "2":
                    calcularAltura()
                    break;
                default:
                    prompt("Por favor intenta nuevamente")
                    interaccion
            }
            let retry = prompt("¿Desea realizar otra operación? (Responda 'si' o 'no')");
            iteracion = retry.toLowerCase()
                if (iteracion !== "si") {
                    alert("Gracias por tu visita")
                }

        } while  (iteracion === "si");