class Carrito {
  constructor() {
    this.tomosCarrito = this.recuperar();
  }

  recuperar() {
    return JSON.parse(localStorage.getItem("tomosParaCarrito")) || [];
  }

  actualizarStorage() {
    localStorage.setItem("tomosParaCarrito", JSON.stringify(this.tomosCarrito));
  }

  agregarTomo(tomo) {
    this.tomosCarrito.push(tomo);
    this.actualizarStorage();
  }

  estaLleno() {
    return this.tomosCarrito.length > 0 ? true : false;
  }

  ordenarAsc() {
    this.tomosCarrito.sort((a, b) => a.numeroTomo - b.numeroTomo);
  }

  getCarrito() {
    return this.tomosCarrito;
  }

  getCantidad() {
    return this.tomosCarrito.length;
  }

  getTotal() {
    return this.tomosCarrito.reduce(
      (acumulador, tomo) => acumulador + tomo.precio,
      0
    );
  }

  eliminarTomoPorNum(numTomo) {
    const tomoAquitar = this.tomosCarrito.findIndex(
      (tomo) => tomo.numeroTomo === parseInt(numTomo)
    );
    this.tomosCarrito.splice(tomoAquitar, 1);
    this.actualizarStorage();
  }
  vaciar() {
    this.tomosCarrito.length = 0;
    this.actualizarStorage();
  }
}
