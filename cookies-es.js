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

  var dec = null;
  try { dec = localStorage.getItem(KEY); } catch (e) {}
  if (dec === 'si') { if (window._cargarPixel) window._cargarPixel(); }
  else if (dec !== 'no') { caja.hidden = false; }

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
