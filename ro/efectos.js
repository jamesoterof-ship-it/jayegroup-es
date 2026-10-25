/* ============================================================
   EFECTOS COMPARTIDOS · encabezado y apariciones
   RUMANÍA: copia propia de ../efectos.js (25-10-2026, James: tienda de Rumania
   independiente de España y Portugal). Las categorias llevan a /ro/, no a la
   tienda de España.
   ============================================================ */
(function () {
  'use strict';

  function cabecera() {
    var p = document.getElementById('pegado');
    if (!p) return;
    var esperando = false, bajando = false;
    /* Dos umbrales distintos (se activa a 90, se suelta a 24). Con un solo
       umbral, al quedar el dedo justo en el borde la barra oscilaba entre
       gris y negro y el logo parecia parpadear. */
    function mirar() {
      var y = window.scrollY || window.pageYOffset || 0;
      if (!bajando && y > 90) { bajando = true; p.classList.add('bajando'); }
      else if (bajando && y < 24) { bajando = false; p.classList.remove('bajando'); }
      esperando = false;
    }
    window.addEventListener('scroll', function () {
      if (esperando) return;
      esperando = true;
      requestAnimationFrame(mirar);
    }, { passive: true });
    mirar();
  }

  /* La barra de categorias: la misma de la tienda. Aca no hay rejilla que
     filtrar, asi que cada categoria lleva a la tienda de Rumania ya filtrada. */
  function categorias() {
    var cont = document.getElementById('cats');
    if (!cont) return;
    var cats = ['Todos'];
    (window.PRODUCTOS || []).forEach(function (p) {
      if (p.categoria && cats.indexOf(p.categoria) < 0) cats.push(p.categoria);
    });
    var mia = (window.PRODUCTO_ACTUAL && window.PRODUCTO_ACTUAL.categoria) || '';
    cont.innerHTML = cats.map(function (c) {
      var url = (c === 'Todos') ? '/ro/' : ('/ro/?cat=' + encodeURIComponent(c));
      return '<a href="' + url + '" role="button" aria-pressed="' +
             (c === mia) + '" data-cat="' + c + '">' + c + '</a>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    categorias();
    cabecera();
  });
})();
