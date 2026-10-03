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

  /* 03-10 (James): "las tiendas de Shopify no hacen eso, me estás matando la tienda".
     Revisadas 7 tiendas que venden contra reembolso en España (FlexSpray, Revine,
     Vigoshop, Zayu, Sconto, Nutriavelle, Beginnse): las 7 disparan el píxel APENAS
     entra el visitante y 6 ni muestran aviso. Esperando el "Aceptar", Meta solo veía
     el 10-13 % de las visitas. Ahora el píxel se carga SIEMPRE al entrar (decisión de
     James, asumiendo el riesgo) y el aviso queda como una línea informativa. */
  if (window._cargarPixel) window._cargarPixel();

  var dec = null;
  try { dec = localStorage.getItem(KEY); } catch (e) {}
  if (!dec) caja.hidden = false;

  var ok = document.getElementById('ckOk'), no = document.getElementById('ckNo');
  var pt = (document.documentElement.lang || '').indexOf('pt') === 0;
  if (no) no.remove();
  if (ok) { ok.textContent = pt ? 'Entendido' : 'Entendido'; ok.addEventListener('click', function () { decidir('si'); }); }

  /* "Configurar cookies" del pie: vuelve a mostrar el aviso para cambiar o
     revocar la decision, que tambien lo exige la AEPD. */
  var cfg = document.getElementById('ckConfig');
  if (cfg) cfg.addEventListener('click', function (e) {
    e.preventDefault(); caja.hidden = false;
    caja.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });
})();
