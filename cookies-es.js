/* ============================================================
   AVISO DE COOKIES · España (obligatorio)

   Lo exige el art. 22.2 de la LSSI y la guia de la AEPD: sin que el visitante
   diga que si, NO se puede cargar el pixel de Meta ni ninguna cookie de
   medicion. "Aceptar" y "Rechazar" pesan igual a proposito: la AEPD multa
   cuando el boton de rechazar esta escondido o cuesta mas encontrarlo.
   La decision se guarda 6 meses en el propio navegador del visitante.

   Se carga en TODAS las paginas de la tienda. El pixel se prende solo desde
   aqui, llamando a window._cargarPixel(), nunca antes.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'ck_meta';
  var caja = document.getElementById('cookies');
  if (!caja) return;

  function decidir(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    caja.hidden = true;
    if (v === 'si' && window._cargarPixel) window._cargarPixel();
  }

  /* 03-10 (James: "estoy botando plata"): la franja delgada pasaba desapercibida y casi
     nadie decidía; Meta solo veía el 10-13 % de las visitas. Ahora sale como TARJETA
     clara, con título y texto honesto, cuando el visitante ya empezó a mirar (primer
     gesto o 2,5 s). Los dos botones siguen en la misma capa y del mismo tamaño (AEPD). */
  function comoTarjeta() {
    if (caja.classList.contains('ck-tarjeta')) return;
    caja.classList.add('ck-tarjeta');
    var p = caja.querySelector('p');
    var pt = (document.documentElement.lang || '').indexOf('pt') === 0;
    if (p) {
      var enl = p.querySelector('a'), href = enl ? enl.getAttribute('href') : 'privacidad.html#cookies';
      var tit = document.createElement('p');
      tit.className = 'ck-tit';
      tit.textContent = pt ? 'Aceita os cookies?' : '¿Aceptas las cookies?';
      caja.insertBefore(tit, p);
      p.innerHTML = pt
        ? 'Usamos cookies próprios e da Meta para medir as visitas e mostrar-lhe ofertas que lhe interessam. Pode recusar sem problema. <a href="' + href + '">Mais informação</a>'
        : 'Usamos cookies propias y de Meta para medir las visitas y mostrarte ofertas que te interesen. Puedes rechazarlas sin problema. <a href="' + href + '">Más información</a>';
    }
  }
  function mostrarAviso() {
    if (!caja.hidden) return;
    comoTarjeta();
    caja.hidden = false;
  }

  var dec = null;
  try { dec = localStorage.getItem(KEY); } catch (e) {}
  if (dec === 'si') { if (window._cargarPixel) window._cargarPixel(); }
  else if (dec !== 'no') {
    var ya = false;
    var sale = function () { if (ya) return; ya = true; mostrarAviso(); };
    ['scroll', 'touchstart', 'pointerdown', 'keydown'].forEach(function (ev) {
      window.addEventListener(ev, sale, { once: true, passive: true });
    });
    setTimeout(sale, 2500);
  }

  var ok = document.getElementById('ckOk'), no = document.getElementById('ckNo');
  if (ok) ok.addEventListener('click', function () { decidir('si'); });
  if (no) no.addEventListener('click', function () { decidir('no'); });

  /* "Configurar cookies" del pie: vuelve a mostrar el aviso para cambiar o
     revocar la decision, que tambien lo exige la AEPD. */
  var cfg = document.getElementById('ckConfig');
  if (cfg) cfg.addEventListener('click', function (e) {
    e.preventDefault(); caja.hidden = false;
    caja.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });
})();
