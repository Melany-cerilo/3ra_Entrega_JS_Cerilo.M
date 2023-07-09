class CompraTomos {
  constructor() {
    this.tomosElegidos = [];

    this.tomos = [
      { numeroTomo: 1, titulo: "Crueldad", precio: 1500 },
      { numeroTomo: 2, titulo: "El extraño", precio: 1500 },
      {
        numeroTomo: 3,
        titulo: "El diario de Tanjiro - Primera parte",
        precio: 1500,
      },
      {
        numeroTomo: 4,
        titulo: "El diario de Tanjiro - Segunda parte",
        precio: 1500,
      },
      { numeroTomo: 5, titulo: "Una katana resistente", precio: 1500 },
      { numeroTomo: 6, titulo: "Al infierno", precio: 1500 },
      {
        numeroTomo: 7,
        titulo: "El juicio de los pilares del escuadrón mata demonios",
        precio: 1500,
      },
      {
        numeroTomo: 8,
        titulo: "La fuerza de una luna creciente y la fuerza de un pilar",
        precio: 1500,
      },
      {
        numeroTomo: 9,
        titulo: "Operación: Infiltración en el barrio rojo",
        precio: 1500,
      },
      { numeroTomo: 10, titulo: "Humanos y demonios", precio: 2000 },
      { numeroTomo: 11, titulo: "Batalla campal", precio: 2000 },
      {
        numeroTomo: 12,
        titulo: "Reunión de las lunas crecientes",
        precio: 2000,
      },
      { numeroTomo: 13, titulo: "Transición", precio: 2000 },
      { numeroTomo: 14, titulo: "El MU de Muichiro", precio: 2000 },
      {
        numeroTomo: 15,
        titulo: "La luz del sol al romper el alba",
        precio: 2000,
      },
      { numeroTomo: 16, titulo: "Inmortal", precio: 2500 },
      { numeroTomo: 17, titulo: "Herederos", precio: 2500 },
      { numeroTomo: 18, titulo: "Ataque de nostalgia", precio: 2500 },
      { numeroTomo: 19, titulo: "El aleteo de la mariposa", precio: 2500 },
      {
        numeroTomo: 20,
        titulo: "El camino que abre un corazón decidido",
        precio: 2500,
      },
      { numeroTomo: 21, titulo: "Recuerdos antiguos", precio: 2500 },
      { numeroTomo: 22, titulo: "Vínculo circulante", precio: 2500 },
      {
        numeroTomo: 23,
        titulo: "La vida brillando a través de los años",
        precio: 2500,
      },
    ];
  }
  eleccionTomos() {
    //Guardo resultado de prompt en string para poder validar null en el caso de que el usuario cancele.
    let respuestaUsuario = prompt(
      "Por favor ingresa el tomo ingresado, recuerda que son del 1 al 23"
    );
    //Parseo la respuesta del usuario para simplificar la validación númerica.
    let numeroIngresado = parseInt(respuestaUsuario);
    let tomoElegido = this.tomos.find(
      (tomo) => tomo.numeroTomo === numeroIngresado
    );

    if (tomoElegido !== undefined) {
      this.tomosElegidos.push(tomoElegido);
      let respuesta = confirm(
        "Si deseas elegir otro tomo presiona continuar, de lo contrario presiona cancelar para continuar con tu compra"
      );
      if (respuesta === true) {
        this.eleccionTomos();
      }
    } else if (respuestaUsuario == null) {
      alert("Has cancelado tu compra, hasta la proxima");
      this.tomosElegidos = [];
    } else {
      alert("Ingresaste un dato invalido");
      this.eleccionTomos();
    }
  }
  mostrarTomosElegidos() {
    console.log("Tus tomos elegidos son: ");
    this.tomosElegidos.forEach((tomoElegido) => {
      console.log(
        tomoElegido.numeroTomo +
          "-" +
          " " +
          tomoElegido.titulo +
          " $" +
          tomoElegido.precio
      );
    });
  }
  confirmarCompra() {
    let resultado = confirm("¿Deseas confirmar tu compra?");

    if (resultado === true) {
      console.log("Tu compra se realizó con exito");
    } else {
      console.log("Has cancelado tu compra. Hasta la próxima");
    }
    return resultado;
  }
  calcularDescuentov2() {
    let cantidadTomos = this.tomosElegidos.length;
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
    }
    let total = this.tomosElegidos.reduce(
      (acumulador, tomoElegido) => acumulador + tomoElegido.precio,
      0
    );
    let importeDescuento = (descuento / 100) * total;
    let totalConDescuento = total - importeDescuento;

    if (descuento > 0) {
      console.log("Se te realizó un descuento del %" + descuento);
    }

    console.log("Tu total a pagar es: $" + totalConDescuento);
  }
  ordenarPorNumTomo() {
    this.tomosElegidos.sort((a, b) => a.numeroTomo - b.numeroTomo);
  }
  iniciarCompra() {
    alert(
      "¡Aprovecha nuestro descuento especial! Cuantos más tomos elijas, mayor será el descuento aplicado a tu compra. No dudes en llevarte toda la colección."
    );
    this.eleccionTomos();
    if (this.tomosElegidos.length > 0) {
      this.ordenarPorNumTomo();
      this.mostrarTomosElegidos();
      if (this.confirmarCompra()) {
        this.calcularDescuentov2();
      }
    }
  }
}
