alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-laptop $3000 2-auriculares $1500 3-tablet $5000 4-smart tv Samsung $6000 "))
let seleccionarCantidad;
let total = 0;

    

const cantidad = (cant, precio) => {
    
    return cant * precio
    
}

    




while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es laptop, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es auriculares, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es tablet, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es smart tv Samsung, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 6000)
    break;
    case 5:
        alert("No existe, buen intento jeje (:")
        break;
    default:
        alert("ingreso una opcion inexistente")
      break;

  }
  seleccionarProductos = Number(prompt( "1-laptop $3000 2-auriculares $1500 3-tablet $5000 4-smart tv Samsung $6000 "))
}

alert("el total de la compra es de: " + total)

const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
      
      
    }
    
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  
}

}



metodoDePago()
alert("se realizo su compra, gracias por elegirnos")