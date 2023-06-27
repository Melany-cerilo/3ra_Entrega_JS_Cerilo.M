/*
Solicitar al usuario que ingrese la cantidad de tomos que desea comprar, dentro del rango del 1 al 23.

El simulador mostrará secuencialmente desde el primer tomo (mostrará su numero y título) hasta el numero que ingrese el usuario.  

Verificar si el número de tomos ingresado es válido. Si es mayor a 23, mostrar un mensaje de error indicando que ese tomo no existe.

Solicitar al usuario que confirme la compra.

Si el usuario confirma la compra:

Calcular el descuento aplicable según la cantidad de tomos seleccionados:
Si se compran todos los tomos, aplicar el %40 de descuento, 
Si se compran más de 10 tomos, aplicar un descuento del 20%.
Si se compran entre 6 y 10 tomos, aplicar un descuento del 10%.
Si se compran menos de 5 tomos, no aplicar descuento.
Calcular y mostrar el total con el descuento aplicado. 

Mostrar al usuario:

El total de mangas con sus respectivos titulos que está comprando.
El precio a pagar con el descuento aplicado.
Si el usuario no confirma la compra, mostrar un mensaje indicando que la compra ha sido cancelada.



 */

function titulosTomos(numeroTomo) {
  let tituloTomo = "";
  switch (numeroTomo) {
    case 1:
      tituloTomo = "Crueldad";
      break;
    case 2:
      tituloTomo = "El extraño";
      break;
    case 3:
      tituloTomo = "El diario de Tanjiro - Primera parte";
      break;
    case 4:
      tituloTomo = "El diario de Tanjiro - Segunda parte";
      break;
    case 5:
      tituloTomo = "Una katana resistente";
      break;
    case 6:
      tituloTomo = "Al infierno";
      break;
    case 7:
      tituloTomo = "El juicio de los pilares del escuadrón mata demonios";
      break;
    case 8:
      tituloTomo = "La fuerza de una luna creciente y la fuerza de un pilar";
      break;
    case 9:
      tituloTomo = "Operación: Infiltración en el barrio rojo";
      break;
    case 10:
      tituloTomo = "Humanos y demonios";
      break;
    case 11:
      tituloTomo = "Batalla campal";
      break;
    case 12:
      tituloTomo = "Reunión de las lunas crecientes";
      break;
    case 13:
      tituloTomo = "Transición";
      break;
    case 14:
      tituloTomo = "El MU de Muichiro";
      break;
    case 15:
      tituloTomo = "La luz del sol al romper el alba";
      break;
    case 16:
      tituloTomo = "Inmortal";
      break;
    case 17:
      tituloTomo = "Herederos";
      break;
    case 18:
      tituloTomo = "Ataque de nostalgia";
      break;
    case 19:
      tituloTomo = "El aleteo de la mariposa";
      break;
    case 20:
      tituloTomo = "El camino que abre un corazón decidido";
      break;
    case 21:
      tituloTomo = "Recuerdos antiguos";
      break;
    case 22:
      tituloTomo = "Vínculo circulante";
      break;
    case 23:
      tituloTomo = "La vida brillando a través de los años";
      break;
    default:
      console.error(" No existe ese número de tomo");
      break;
  }
  return tituloTomo;
}

function tomosElegidos(cantidadTomos) {
  console.log("Tus tomos elegidos son: ");
  for (let i = 1; i <= cantidadTomos; i++)
    console.log(i + " " + titulosTomos(i));
}

function calcularDescuentov2(cantidadTomos) {
  let descuento;
  if (cantidadTomos >= 5 && cantidadTomos <= 10) {
    descuento = 10;
  } else if (cantidadTomos > 10 && cantidadTomos <= 15) {
    descuento = 20;
  } else if (cantidadTomos > 15 && cantidadTomos <= 23) {
    descuento = 40;
  } else if (cantidadTomos > 0 && cantidadTomos < 5) {
    descuento = 0;
    console.log("El descuento se aplica llevando a partir de 5 tomos");
  } else {
    alert("numero de tomo incorrecto");
    return;
  }

  let valorManga = 2000;
  let total = cantidadTomos * valorManga;
  let importeDescuento = (descuento / 100) * total;
  let totalConDescuento = total - importeDescuento;

  if (descuento > 0) {
    console.log("Se te realizó un descuento del %" + descuento);
  }

  console.log("Tu total a pagar es: $" + totalConDescuento);
}

function confirmarCompra() {
  let resultado = confirm("¿Deseas confirmar tu compra?");

  if (resultado === true) {
    console.log("Tu compra se realizó con exito");
  } else {
    console.log("Has cancelado tu compra");
  }
  return resultado;
}

function comprarColeccion() {
  let respuestaUsuario;
  let cantidadTomos;

  alert(
    "¡Aprovecha nuestro descuento especial! Cuantos más tomos elijas, mayor será el descuento aplicado a tu compra. No dudes en llevarte toda la colección."
  );

  respuestaUsuario = prompt(
    "Por favor, ingresa del 1 al 23 el número del último tomo que deseas adquirir. Por ejemplo, si deseas comprar hasta el tomo 5, ingresa 5. Esto incluirá todos los mangas desde el primer tomo hasta el número que indiques."
  );

  cantidadTomos = parseInt(respuestaUsuario);
  if (cantidadTomos > 0 && cantidadTomos <= 23) {
    tomosElegidos(cantidadTomos);
    if (confirmarCompra()) {
      calcularDescuentov2(cantidadTomos);
    }
  } else if (respuestaUsuario == null) {
    alert("Has cancelado tu compra, hasta la proxima");
  } else {
    alert("Ingresaste un dato invalido");
  }
}

comprarColeccion();
