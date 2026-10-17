/* ============================================================
   RULETA DE REGALO · para cualquier producto con `regalo` en productos.js
   (17-10, bálsamo VITALIS + crema de contorno de ojos). Misma mecánica que
   la del sellador: al entrar gira y SIEMPRE cae en el regalo; las demás
   casillas son cosas que el cliente igual recibe. El regalo lo agrega el
   montador (uno por pedido): aquí solo se cuenta. Nunca tapa la compra:
   el premio se cierra solo a los 5 s, con un toque o con Escape.
   Los colores van en el .css de cada página (body.p-<id> .rg-*).
   ============================================================ */
(function () {
  'use strict';
  var q = '';
  try { q = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  var P = (window.PRODUCTOS || []).filter(function (x) { return x.id === q; })[0];
  if (!P || !P.regalo) return;
  var R = P.regalo;
  var CLAVE = 'rg_gano_' + P.id;
  var CALMA = false;
  try { CALMA = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var CASILLAS = [R.casilla, 'Envío gratis', 'Pago al recibir', 'Entrega a domicilio', 'Llega en 24-48 h', 'Ayuda por WhatsApp'];

  function guarda(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lee(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function rueda() {
    var n = CASILLAS.length, paso = 360 / n, out = '';
    CASILLAS.forEach(function (t, i) {
      var a0 = (i * paso - 90 - paso / 2) * Math.PI / 180, a1 = ((i + 1) * paso - 90 - paso / 2) * Math.PI / 180;
      var x0 = 130 + 120 * Math.cos(a0), y0 = 130 + 120 * Math.sin(a0), x1 = 130 + 120 * Math.cos(a1), y1 = 130 + 120 * Math.sin(a1);
      var gana = i === 0, clara = !gana && i % 2 === 1;
      out += '<path d="M130 130L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'A120 120 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + 'Z" class="' + (gana ? 'rg-gana' : (clara ? 'rg-a' : 'rg-b')) + '"/>';
      var w = t.split(' '), med = Math.ceil(w.length / 2);
      out += '<g transform="rotate(' + (i * paso) + ' 130 130)"><text x="130" y="52" text-anchor="middle" class="rg-txt' + (gana ? ' rg-txt-gana' : '') + (clara ? ' rg-txt-osc' : '') + '">'
        + '<tspan x="130" dy="0">' + esc(w.slice(0, med).join(' ')) + '</tspan><tspan x="130" dy="15">' + esc(w.slice(med).join(' ')) + '</tspan></text></g>';
    });
    return '<svg class="rg-rueda" viewBox="0 0 260 260" role="img" aria-label="Ruleta de regalo">' + out + '<circle cx="130" cy="130" r="22" class="rg-eje"/></svg>';
  }

  var caja = null, cierre = 0, primera = false, festejo = 0;
  function teclas(ev) { if (ev.key === 'Escape') cerrar(); }
  function cerrar() {
    clearTimeout(cierre); clearInterval(festejo);
    if (!caja) return;
    caja.hidden = true;
    document.removeEventListener('keydown', teclas);
    insignia();
    if (primera) { primera = false; window.scrollTo({ top: 0, behavior: CALMA ? 'auto' : 'smooth' }); }
  }
  function burbujas(cuantas) {
    if (CALMA) return;
    for (var i = 0; i < cuantas; i++) {
      var s = document.createElement('span'), an = Math.random() * 6.283, d = 120 + Math.random() * 200, t = 8 + Math.random() * 16;
      s.className = 'rg-pop';
      s.style.cssText = 'left:50%;top:45%;width:' + t + 'px;height:' + t + 'px;--x:' + (Math.cos(an) * d).toFixed(0) + 'px;--y:' + (Math.sin(an) * d).toFixed(0) + 'px;animation-delay:' + (Math.random() * .2).toFixed(2) + 's';
      document.body.appendChild(s);
      setTimeout(function (el) { el.remove(); }, 1700, s);
    }
  }
  function abrir(modo) {
    if (!document.getElementById('rg-letra')) {
      var l = document.createElement('link');
      l.id = 'rg-letra'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cormorant:wght@600;700&family=Montserrat:wght@500;600;700;800&display=swap';
      document.head.appendChild(l);
    }
    if (!caja) {
      caja = document.createElement('div');
      caja.className = 'rg'; caja.setAttribute('role', 'dialog'); caja.setAttribute('aria-modal', 'true'); caja.setAttribute('aria-label', 'Tu regalo');
      caja.addEventListener('click', function (e) {
        if (e.target.closest('.rg-x')) { cerrar(); return; }
        if (caja.dataset.modo === 'ruleta') girar(); else cerrar();
      });
      document.body.appendChild(caja);
    }
    caja.dataset.modo = modo;
    if (modo === 'ruleta') {
      caja.innerHTML = '<div class="rg-tarjeta"><button type="button" class="rg-x" aria-label="Cerrar">×</button><span class="rg-rot">Solo por entrar</span>'
        + '<h3>Gira y descubre tu regalo</h3><p>Todas las casillas ganan. Toca en cualquier parte.</p>'
        + '<div class="rg-marco"><span class="rg-flecha" aria-hidden="true"></span>' + rueda() + '</div>'
        + '<button type="button" class="rg-btn">Girar</button></div>';
    } else {
      caja.innerHTML = '<div class="rg-tarjeta rg-premio"><button type="button" class="rg-x" aria-label="Cerrar">×</button><span class="rg-rot">¡Ganaste!</span>'
        + '<h3>' + esc(R.titulo) + '</h3>'
        + '<img src="' + esc(R.foto) + '" alt="' + esc(R.alt) + '" width="540" height="690">'
        + '<p>' + esc(R.texto) + '</p>'
        + '<p class="rg-nota">Toca en cualquier parte para seguir.</p></div>';
      cierre = setTimeout(cerrar, 5000);
      burbujas(26); clearInterval(festejo); if (!CALMA) festejo = setInterval(function () { burbujas(7); }, 900);
    }
    caja.hidden = false;
    document.addEventListener('keydown', teclas);
  }
  function girar() {
    var r = caja && caja.querySelector('.rg-rueda');
    if (!r || r.dataset.gira) return;
    r.dataset.gira = '1';
    var bt = caja.querySelector('.rg-btn'); if (bt) { bt.disabled = true; bt.textContent = 'Girando…'; }
    r.style.transition = CALMA ? 'none' : 'transform 3.2s cubic-bezier(.17,.67,.21,1)';
    r.style.transform = 'rotate(' + ((CALMA ? 0 : 5) * 360) + 'deg)';
    setTimeout(function () { guarda(CLAVE, '1'); primera = true; abrir('premio'); }, CALMA ? 200 : 3400);
  }

  var bd = null, pedido = false;
  function insignia() {
    if (!lee(CLAVE) || pedido) return;
    if (!bd) {
      bd = document.createElement('button');
      bd.type = 'button'; bd.className = 'rg-insignia'; bd.setAttribute('aria-label', 'Ver tu regalo');
      bd.innerHTML = '<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>Tu regalo</span>';
      bd.addEventListener('click', function () { abrir('premio'); });
      document.body.appendChild(bd);
    }
    bd.hidden = false;
  }
  function avisoPedido() {
    var pd = document.getElementById('pedir'); if (!pd || !('MutationObserver' in window)) return;
    new MutationObserver(function () {
      var ok = pd.querySelector('.listo'); if (!ok || ok.querySelector('.rg-ok')) return;
      ok.insertAdjacentHTML('beforeend', '<div class="rg-ok"><img src="' + esc(R.foto) + '" alt="" width="72" height="72"><div><b>' + esc(R.okTitulo) + '</b><span>' + esc(R.okSub) + '</span></div></div>');
      pedido = true; if (bd) bd.hidden = true;
    }).observe(pd, { childList: true, subtree: true });
  }

  function arrancar() {
    avisoPedido();
    if (/[?&](sinruleta=1|pagar=)/.test(location.search)) return;
    if (/[?&]ruleta=1/.test(location.search)) { try { localStorage.removeItem(CLAVE); } catch (e) {} }
    if (lee(CLAVE)) { insignia(); return; }
    setTimeout(function () { abrir('ruleta'); }, 1400);
  }
  var n = 0;
  (function espera() {
    if (document.getElementById('pedir') && document.querySelector('#prod .heroP')) { arrancar(); return; }
    if (++n > 80) return;
    setTimeout(espera, 100);
  })();
})();
