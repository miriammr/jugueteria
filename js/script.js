//Funcion de menu responsive
const toggleMenu = () => {
  document.getElementById("menu-principal").classList.toggle("menu-open");
  document.getElementById("burger").classList.toggle("is-active");
  document.getElementById("darkbg").classList.toggle("visible");
};
const mostrarGaleria = () => {
  document.getElementById("darkbg").classList.toggle("mostrar");
};
//Abrir una nueva pestaña
function abrirGaleria() {
  window.location.href = "../website-jugueteria/galeria.html";
}
function suscribirse() {
  window.location.href = "#suscribir-email";
}
//Galeria de productos mas vendidos
const listaGaleria = document.querySelector(".lista-galeria");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
buttonRight?.addEventListener("click", () => {
  listaGaleria.scrollLeft += listaGaleria.offsetWidth;
  console.log(listaGaleria.scrollLeft);
});
buttonLeft?.addEventListener("click", () => {
  listaGaleria.scrollLeft -= listaGaleria.offsetWidth;
});

$(document).ready(function () { 
  $('')
  //Efecto en items de la página galeria
  $(".producto-item").click(function (e) {
    let url = e.target.src;
    let tituloImg = $(this).find("figcaption").text();
    let precio = $(this).find(".precio").text();
    let descripcion = $(this).find(".descripcion-producto").text();

    let producto =
      '<div class="detalle-producto">' +
      '<img src="' +
      url +
      '" alt=""/>' +
      "<div>" +
      "<h3>" +
      tituloImg +
      "</h3>" +
      '<div class="precio-agregar">' +
      '<p class="detalle-precio">' +
      precio +
      "</p>" +
      '<button class="detalle-button">Agregar</button>' +
      "</div>" +
      "<h4>Detalle de Producto</h4>" +
      '<p class="descripcion">' +
      descripcion +
      "</p>" +
      "</div>" +
      '<button class="button-close">x</button>' +
      "</div>";

    $("descripcion").css("display", "block");
    $("body").append(producto);
    $(".button-close").click(function () {
      $(".detalle-producto").remove();
    });
  });

  //Realizando lightbox a los items de la galeria de la pagina principal
  $(".item-galeria img").click(function (e) {
    var url = e.target.src;
    var lightbox =
      '<div class="lightbox">' +
      '<img src="' +
      url +
      '" alt=""/>' +
      '<button class="button-close">x</button>' +
      "</div>";
    $("body").append(lightbox);
    $(".button-close").click(function () {
      $(".lightbox").remove();
    });
  });

  //Seccion que muestra formas de pago
  //Ocultar todas las secciones
  $(".detalles section").hide();
  //Mostrar la primera seccion
  $(".detalles section:first").show();
  //Cambiar color al primer item
  $(".detalles-titulo li:first").css({
    color: "#dd7deb",
    "border-color": "#dd7deb",
  });
  //Mostramos cada una de las secciones
  $(".detalles-titulo li").click(mostrar);
  //Funcion
  function mostrar() {
    let posicion = $(this).index() + 1;
    console.log(posicion);
    $(".detalles section").hide();
    switch (posicion) {
      case 1:
        $(".detalles .compras").fadeIn();
        break;
      case 2:
        $(".detalles .metodos-pago").fadeIn();
        break;
      case 3:
        $(".detalles .envios").fadeIn();
        break;
    }
    //Cambiando estilos a los detalles de la seccion
    $(".detalles-titulo li").css({
      color: "#7b7a86",
      "border-color": "#7b7a86",
    });
    $(this).css({ color: "#dd7deb", "border-color": "#dd7deb" });
  }
});
