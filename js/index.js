/* Este es un simulador donde podras elegir los tomos del manga Demon Slayer.
* El usuario podrá seleccionar los tomos deseados aleatoriamente desde el botón "comprar" en cada card, 
se mostrará que fue seleccionado con un mensaje "agregado al carrito" (borde superior izquierdo).
Una vez seleccionados los tomos el usuario deberá dirigirse al carrito de compras desde el botón carrito (arriba a la derecha).
* Se agrega un carrito de compras donde se visualizan los tomos elegidos por el usuario en una tabla y debajo se mostrará el total de su compra y 
su descuento si es que aplica(si quita o agrega tomos el valor se modificará en pantalla junto con su descuento).
  - descuentos: (  un 10% de descuento al comprar a partir de 5 tomos, un 20% al adquirir más de 10 y un increíble descuento del 40% si completas la colección con más de 15 tomos. )
Desde el mismo podrá eliminar si es que eligió un tomo incorrecto, o podrá
seguir agregando tomos desde el boton "seguir comprando", sin perder el registro de los que ya seleccionó antes. Luego si desea realizar la compra continua apretando 
el boton "realizar compra". Si el usuario decide cerrar el sumilador, cuando vuelva a ingresar quedaran sus tomos ya seleccionados en el carrito.

               

*/
const contenedor = document.querySelector("div#contenedor.contenedor");
const inputSearch = document.querySelector("input#inputSearch");

function retornarCardHTML(tomo) {
  return `
  
  
        <div class="col">
            <div class="card shadow bg-body-tertiary rounded h-100">
            <img
                src="${tomo.imagen}"
                class="card-img-top foto_generos"
                alt="${tomo.titulo}"
            />
            <div class="card-body">
                <h5 class="card-title text-center">Título: ${tomo.titulo}</h5>
                <p><strong>Precio: $ ${tomo.precio}</strong></p>

            </div>
            <div><button id="${tomo.numeroTomo}" type="button" class="btn btn-danger">Comprar</button></div>
            </div>
        </div>
    
        `;
}

function activarBotones() {
  const botones = document.querySelectorAll("button.btn.btn-danger");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      let tomoElegido = tomos.find(
        (tomo) => tomo.numeroTomo === parseInt(boton.id)
      );
      tomosParaCarrito.push(tomoElegido);
      localStorage.setItem(
        "tomosParaCarrito",
        JSON.stringify(tomosParaCarrito)
      );

      Toastify({
        text: `Se agregó al carrito el tomo: ${tomoElegido.numeroTomo}`,
        className: "success",
        position: "left",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    });
  });
}

function cargarTomos(arrayTomos) {
  contenedor.innerHTML = "";
  arrayTomos.forEach((tomo) => {
    contenedor.innerHTML += retornarCardHTML(tomo);
  });
  activarBotones();
}
cargarTomos(tomos);

inputSearch.addEventListener("search", () => {
  const eleccion = tomos.filter((tomo) =>
    tomo.numeroTomo.toString().includes(inputSearch.value)
  );
  cargarTomos(eleccion);
});
