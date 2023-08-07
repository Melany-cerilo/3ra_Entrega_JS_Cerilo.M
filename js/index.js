/* Este es un simulador donde podras elegir los tomos del manga Demon Slayer.
-El usuario podrá seleccionar los tomos deseados aleatoriamente desde el botón "comprar" en cada card.
  Si desea puede buscar por la barra de filtro (FILTRA POR NÚMERO) donde indica INGRESAR EL NÚMERO DE TOMO A BUSCAR. 
  Al utilizar el metodo includes() traera todos los tomos que incluyan ese número, Ej: ingresa 2, trae 2, 12, 20, 21, 22 y 23.
-Se mostrará que fue seleccionado con un mensaje "agregado al carrito + el numero de tomo" (borde superior izquierdo).
-Una vez seleccionados los tomos el usuario deberá dirigirse al carrito de compras desde el botón carrito (arriba a la derecha).
* Se agrega un carrito de compras donde se visualizan los tomos elegidos por el usuario en una tabla y debajo se mostrará el total
 de su compra y su descuento si es que aplica(si quita o agrega tomos el valor se modificará en pantalla junto con su descuento).
  - Descuentos: (  un 10% de descuento al comprar a partir de 5 tomos, un 20% al adquirir más de 10 y un increíble descuento del 40% si completas la colección con más de 15 tomos. )
-Desde el mismo podrá eliminar si es que eligió un tomo incorrecto o podrá seguir agregando tomos desde el boton "seguir comprando",
 sin perder el registro de los que ya seleccionó antes. Luego si desea realizar la compra continua apretando 
el boton "realizar compra". Si el usuario decide cerrar el sumilador, cuando vuelva a ingresar quedaran sus tomos ya seleccionados en el carrito.
si quiere confimar compra sin haber seleccionado al menos un tomo, se mostara un mensaje de error. 
*/
const contenedor = document.querySelector("div#contenedor.contenedor");
const inputSearch = document.querySelector("input#inputSearch");
const URL = "js/tomos.json";

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
      carrito.agregarTomo(tomoElegido);

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

function obtenerTomos() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => tomos.push(...data))
    .then(() => cargarTomos(tomos))
    .catch((error) =>
      Swal.fire(
        "Ocurrió un error",
        "Vuelve a intentar en unos minutos",
        "error"
      )
    );
}

// ________________________________

inputSearch.addEventListener("search", () => {
  const eleccion = tomos.filter((tomo) =>
    tomo.numeroTomo.toString().includes(inputSearch.value)
  );
  cargarTomos(eleccion);
});

obtenerTomos();
