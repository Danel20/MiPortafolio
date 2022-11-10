$(document).ready(function () {
  AOS.init({ disable: "mobile" }),
    (function () {
      if (
        "requestAnimationFrame" in window &&
        !/Mobile|Android/.test(navigator.userAgent)
      ) {
        var n = [];
        if (
          ($("[data-bs-parallax-bg]").each(function () {
            var e = $(this),
              t = $("<div>");
            t.css({
              backgroundImage: e.css("background-image"),
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              height: "200%",
              width: "100%",
              top: 0,
              left: 0,
              zIndex: -100,
            }),
              t.appendTo(e),
              n.push(t[0]),
              e.css({
                position: "relative",
                background: "transparent",
                overflow: "hidden",
              });
          }),
          n.length)
        ) {
          var e,
            t = [];
          $(window).on("scroll resize", o), o();
        }
      }
      function o() {
        t.length = 0;
        for (var o = 0; o < n.length; o++) {
          var a = n[o].parentNode.getBoundingClientRect();
          a.bottom > 0 &&
            a.top < window.innerHeight &&
            t.push({ rect: a, node: n[o] });
        }
        cancelAnimationFrame(e), t.length && (e = requestAnimationFrame(i));
      }
      function i() {
        for (var n = 0; n < t.length; n++) {
          var e = t[n].rect,
            o = t[n].node,
            i = Math.max(e.bottom, 0) / (window.innerHeight + e.height);
          o.style.transform = "translate3d(0, " + -50 * i + "%, 0)";
        }
      }
    })();
});

/*Inicia: Efectos para Barra de Progreso*/
window.addEventListener('load',()=>{
  let progreso__ = document.getElementById('progreso__');
requestAnimationFrame(actualizar__barra);
})

function actualizar__barra(){
  progreso__.style.width=`${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
  requestAnimationFrame(actualizar__barra);
}
/*Termina: Efectos paraBarra de Progreso*/

/*Inicia: Efectos para Rotar Tarjetas*/
var btn_gir = document.querySelectorAll(".boton-gir");
function flecha_girar_tarjeta(element, index, array) {
  var tar_inn = element.parentNode.parentNode;
  element.addEventListener("click", () => {
    if (tar_inn.style.transform != "rotateY(180deg)") {
      tar_inn.style.transform = "rotateY(180deg)";
    } else {
      tar_inn.style.transform = "rotateY(0deg)";
    }
  });
}
btn_gir.forEach(flecha_girar_tarjeta);
/*Termina: Efectos para Rotar Tarjetas*/

/*Inicia: Efectos maquina escribir*/
/*function animar_cont_cards_subtitle() {
  var dtext = document.getElementsByClassName("cont_cards_subtitle")[0];
  var texto = dtext.innerHTML;
  dtext.innerHTML = "";
  var speed = 50;
  var o = 0;
  function maquina() {
    if (o < texto.length) {
      dtext.innerHTML += texto[o];
      o++;
      setTimeout(maquina, speed);
    }
  }
  setTimeout(maquina, speed);
}
animar_cont_cards_subtitle();*/
/*Termina: Efectos maquina escribir*/
