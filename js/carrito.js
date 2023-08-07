const tabla = document.querySelector("tbody");
const botonRealizarCompra = document.querySelector(
  "button#botonComprar.botonComprar.btn.btn-light"
);
const muestraTotal = document.querySelector("div.muestratotal.card-body");

function tomosEnCarritoHTML(tomo) {
  return `
    <tr>
        <th scope="row">${tomo.numeroTomo}</th>
        <td>${tomo.titulo}</td>
        <td>$ ${tomo.precio}</td>
        <td ><button id="${tomo.numeroTomo}" type="button" class="btn btn-outline-danger">❌</button></td>
        
  </tr>
    `;
}

function armarHTMLCarrito() {
  tabla.innerHTML = "";
  if (carrito.estaLleno()) {
    carrito.ordenarAsc();
    carrito.getCarrito().forEach((tomo) => {
      tabla.innerHTML += tomosEnCarritoHTML(tomo);
    });
  }
}

function eventosEliminarTomoCarrito() {
  const botonesEliminar = document.querySelectorAll(
    "button.btn.btn-outline-danger"
  );
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      carrito.eliminarTomoPorNum(boton.id);
      armarPaginaCarrito();
    });
  });
}

function calcularDescuento() {
  let cantidadTomos = carrito.getCantidad();
  let descuento;
  if (cantidadTomos >= 5 && cantidadTomos <= 10) {
    descuento = 10;
  } else if (cantidadTomos > 10 && cantidadTomos <= 15) {
    descuento = 20;
  } else if (cantidadTomos > 15) {
    descuento = 40;
  } else if (cantidadTomos > 0 && cantidadTomos < 5) {
    descuento = 0;
  }
  let total = carrito.getTotal();
  let importeDescuento = (descuento / 100) * total;
  let totalConDescuento = total - importeDescuento;

  //se agrega OP ternario pero se me acomoda de esta forma automaticamente.
  descuento > 0
    ? (muestraTotal.textContent =
        "Se te realizó un descuento del %" +
        descuento +
        ", " +
        "Tu total a pagar es de: $" +
        totalConDescuento)
    : (muestraTotal.textContent = "Tu total a pagar es: $" + total);
}

function realizarCompra() {
  const botonRealizarCompra = document.querySelector(
    "#botonComprar.botonComprar.btn.btn-light"
  );

  botonRealizarCompra.addEventListener("click", () => {
    if (carrito.estaLleno()) {
      Swal.fire(
        "Compra realizada con exito",
        "Gracias por tu compra, hasta la proxima.",
        "success"
      );
      carrito.vaciar();
      armarPaginaCarrito();
    } else {
      Swal.fire(
        "Seleccionar al menos un tomo",
        "No podes realizar compra si no agregaste nada al carrito",
        "error"
      );
    }
  });
}

function armarPaginaCarrito() {
  armarHTMLCarrito();
  eventosEliminarTomoCarrito();
  calcularDescuento();
}

// ________________________________

armarPaginaCarrito();
realizarCompra();
