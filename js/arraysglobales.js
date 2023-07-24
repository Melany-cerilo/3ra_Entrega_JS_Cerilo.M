const tomos = [
  {
    numeroTomo: 1,
    titulo: "Crueldad",
    precio: 1500,
    imagen: "img/tomo1.png",
  },
  {
    numeroTomo: 2,
    titulo: "El extraño",
    precio: 1500,
    imagen: "img/tomo2.png",
  },
  {
    numeroTomo: 3,
    titulo: "El diario de Tanjiro - Primera parte",
    precio: 1500,
    imagen: "img/tomo3.png",
  },
  {
    numeroTomo: 4,
    titulo: "El diario de Tanjiro - Segunda parte",
    precio: 1500,
    imagen: "img/tomo4.png",
  },
  {
    numeroTomo: 5,
    titulo: "Una katana resistente",
    precio: 1500,
    imagen: "img/tomo5.png",
  },
  {
    numeroTomo: 6,
    titulo: "Al infierno",
    precio: 1500,
    imagen: "img/tomo6.png",
  },
  {
    numeroTomo: 7,
    titulo: "El juicio de los pilares del escuadrón mata demonios",
    precio: 1500,
    imagen: "img/tomo7.png",
  },
  {
    numeroTomo: 8,
    titulo: "La fuerza de una luna creciente y la fuerza de un pilar",
    precio: 1500,
    imagen: "img/tomo8.png",
  },
  {
    numeroTomo: 9,
    titulo: "Operación: Infiltración en el barrio rojo",
    precio: 1500,
    imagen: "img/tomo9.png",
  },
  {
    numeroTomo: 10,
    titulo: "Humanos y demonios",
    precio: 2000,
    imagen: "img/tomo10.png",
  },
  {
    numeroTomo: 11,
    titulo: "Batalla campal",
    precio: 2000,
    imagen: "img/tomo11.png",
  },
  {
    numeroTomo: 12,
    titulo: "Reunión de las lunas crecientes",
    precio: 2000,
    imagen: "img/tomo12.png",
  },
  {
    numeroTomo: 13,
    titulo: "Transición",
    precio: 2000,
    imagen: "img/tomo13.png",
  },
  {
    numeroTomo: 14,
    titulo: "El MU de Muichiro",
    precio: 2000,
    imagen: "img/tomo14.png",
  },
  {
    numeroTomo: 15,
    titulo: "La luz del sol al romper el alba",
    precio: 2000,
    imagen: "img/tomo15.png",
  },
  {
    numeroTomo: 16,
    titulo: "Inmortal",
    precio: 2500,
    imagen: "img/tomo16.png",
  },
  {
    numeroTomo: 17,
    titulo: "Herederos",
    precio: 2500,
    imagen: "img/tomo17.png",
  },
  {
    numeroTomo: 18,
    titulo: "Ataque de nostalgia",
    precio: 2500,
    imagen: "img/tomo18.png",
  },
  {
    numeroTomo: 19,
    titulo: "El aleteo de la mariposa",
    precio: 2500,
    imagen: "img/tomo19.png",
  },
  {
    numeroTomo: 20,
    titulo: "El camino que abre un corazón decidido",
    precio: 2500,
    imagen: "img/tomo20.png",
  },
  {
    numeroTomo: 21,
    titulo: "Recuerdos antiguos",
    precio: 2500,
    imagen: "img/tomo21.png",
  },
  {
    numeroTomo: 22,
    titulo: "Vínculo circulante",
    precio: 2500,
    imagen: "img/tomo22.png",
  },
  {
    numeroTomo: 23,
    titulo: "La vida brillando a través de los años",
    precio: 2500,
    imagen: "img/tomo23.png",
  },
];

function recuperarCarrito() {
  JSON.parse(localStorage.getItem("tomosParaCarrito"));
  if (localStorage.getItem("tomosParaCarrito") !== null) {
    return JSON.parse(localStorage.getItem("tomosParaCarrito"));
  } else {
    return [];
  }
}

let tomosParaCarrito = recuperarCarrito();
