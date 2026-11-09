/* ============================================================
   AMPLIFICADOR DE PANTALLA 12" · ESPAÑA · página propia (09-11-2026)
   Plano ui-ux-pro-max "amplificador-pantalla-es" guardado en design-system/amplificador-pantalla-es (James 09-11: "Dale y vemos"):
   · Diales: variance 9 (atrevido / asimétrico) · motion 10 (complejo) · density 3 (mucho aire).
   · Patrón Funnel de 3 pasos: héroe → paso 1 el problema → paso 2 la solución → paso 3 la compra, con mini botón en cada paso.
   · Estilo Dimensional Layering: capas que se montan unas sobre otras (z-index), sombras en 4 niveles, translateZ,
     vidrio esmerilado (backdrop-filter) y parallax.
   · Colores #7C3AED / #A78BFA / botón #EA580C (letra negra) / fondo #FAF5FF / texto #4C1D95 · letra IBM Plex Sans.
   · Movimiento (GSAP de lib/): entrada con zoom de la foto en expo.inOut 500-800 ms, titular letra por letra (SplitText),
     UNA escena fijada al bajar (el móvil chico crece hasta la lente de 12"), capas con parallax a distinta velocidad
     y tarjetas en cascada. Todo quieto con "reducir movimiento". (El Flip del plano es para cambiar de página: aquí no hay.)
   De la plantilla solo se usa la LÓGICA (paquetes, forma de pago, formulario, envío del pedido); el aspecto lo da amplificador.css.
   🔴 Sin promesas de salud ni de vista: ver más grande y más cómodo.
   Solo actúa con ?p=amplificador. Si este archivo falla, la ficha se ve igual (plantilla).
   ============================================================ */
(function () {
  'use strict';
  var id = '';
  try { id = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (id !== 'amplificador') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var PROD = (window.PRODUCTOS || []).filter(function (x) { return x.id === 'amplificador'; })[0] || {};
  var PK = PROD.packs || [];
  var ANT = (PROD.anticipado && PROD.anticipado.precios) || [];
  var UNO = PK[0] ? PK[0].precio : 18.95, DOS = PK[1] ? PK[1].precio : 27.95, TRES = PK[2] ? PK[2].precio : 34.95;
  var DOS_YA = ANT[1] || 24.99;
  var OPS = (window.RESENAS || []).filter(function (r) { return r.producto === 'Amplificador de Pantalla 12"'; });
  var NOTA = OPS.length ? OPS.reduce(function (s, r) { return s + r.estrellas; }, 0) / OPS.length : 5;
  var CUANTAS = PROD.resenasTotal || OPS.length;

  function eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  function txt(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function svg(p, cls) { return '<svg class="' + (cls || 'amp-i') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + p + '</svg>'; }
  var S_IR = svg('<path d="M4 12h15"/><path d="M13 5l7 7-7 7"/>');
  var S_ESTR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.5 1.2 6.4L12 17.1l-5.7 3.1 1.2-6.4-4.7-4.5 6.4-.8z"/></svg>';
  var S_CAMION = svg('<path d="M2 6h12v10H2z"/><path d="M14 9h4.5l3.5 3.5V16h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>');
  var S_BILLETE = svg('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>');
  var S_REGALO = svg('<rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12"/><path d="M12 9c-1.8-3.6-6.2-3.6-5 0M12 9c1.8-3.6 6.2-3.6 5 0"/>');
  var S_SIN = svg('<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>');
  var S_ANT = svg('<path d="M15 5l-7 7 7 7"/>'), S_SIG = svg('<path d="M9 5l7 7-7 7"/>');
  var S_PAUSA = svg('<path d="M8 5v14M16 5v14"/>'), S_PLAY = svg('<path d="M7 4.5l12 7.5-12 7.5z"/>');

  /* al pulsar cualquier botón: elige el paquete en el formulario de la plantilla y baja al pedido */
  function aPedir(n) {
    if (n) {
      var packs = document.querySelectorAll('#prod .pack');
      for (var k = 0; k < packs.length; k++) {
        var t = packs[k].textContent || '';
        if (t.indexOf(n + (n === 1 ? ' amplificador' : ' amplificadores')) >= 0) { packs[k].click(); break; }
      }
    }
    var dest = document.getElementById('pedir');
    if (dest) dest.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' });
  }
  function boton(etq, n, extra) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'amp-btn' + (extra ? ' ' + extra : '');
    b.innerHTML = '<span>' + etq + '</span>' + S_IR;
    b.addEventListener('click', function () { aPedir(n); });
    return b;
  }
  function paso(num, total, nombre) {
    return '<p class="amp-paso"><span class="amp-paso__n">' + num + '<small>/' + total + '</small></span><span class="amp-paso__t">' + nombre + '</span></p>';
  }

  /* ---------- héroe: titular enorme, el amplificador en capas con tarjetas de vidrio flotando encima ---------- */
  function hHeroe() {
    return '<section class="amp-heroe" aria-label="Amplificador de Pantalla 12 pulgadas">'
      + '<div class="amp-heroe__fondo" aria-hidden="true"><span class="amp-blob amp-blob--a"></span><span class="amp-blob amp-blob--b"></span></div>'
      + '<a class="amp-valor" href="#resenas"><span class="amp-estr">' + new Array(6).join(S_ESTR) + '</span>'
      +   '<b>' + NOTA.toFixed(1).replace('.', ',') + '</b><span>' + CUANTAS + ' opiniones</span></a>'
      + '<h1 class="amp-h1" data-letras>Tu móvil,<br><span class="amp-h1__b">en grande.</span></h1>'
      + '<figure class="amp-heroe__foto" data-capa="1"><img src="img/amplificador-sola.webp?v=1" width="900" height="900" fetchpriority="high"'
      +   ' alt="El amplificador de pantalla negro abierto, con la lente de 12 pulgadas levantada y el soporte del móvil detrás">'
      +   '<figcaption class="amp-sello" data-capa="3"><b>12"</b><span>de lente</span></figcaption>'
      +   '<span class="amp-vidrio amp-vidrio--a" data-capa="2">' + S_CAMION + '<span>Llega en 24-48 h</span></span>'
      +   '<span class="amp-vidrio amp-vidrio--b" data-capa="4">' + S_BILLETE + '<span>Pagas al recibir</span></span></figure>'
      + '<p class="amp-intro">Pones el móvil detrás de la lente y ves el fútbol, las series y las videollamadas mucho más grandes. Sin pilas, sin cables, sin aplicaciones.</p>'
      + '<div class="amp-oferta">'
      +   '<p class="amp-oferta__tag">' + S_REGALO + '<span>2 amplificadores · para regalar</span></p>'
      +   '<p class="amp-oferta__pr"><b>' + eur(DOS) + '</b><s>' + eur(UNO * 2) + '</s></p>'
      +   '<p class="amp-oferta__ya">o <b>' + eur(DOS_YA) + '</b> pagando ahora · entrega prioritaria en 14 h</p>'
      + '</div>'
      + '<p class="amp-gratis">Envío gratis en 24-48 h a toda España</p>'
      + '</section>';
  }

  /* ---------- paso 1 · el problema ---------- */
  function hProblema() {
    var dolores = [
      ['Acercas el móvil a la cara', 'La pantalla es pequeña y acabas con el teléfono a un palmo de los ojos.'],
      ['Se te cansan los brazos', 'Ver un partido entero sujetando el móvil no hay quien lo aguante.'],
      ['Los subtítulos no se leen', 'Letras diminutas, caras diminutas, y la peli pierde la gracia.'],
    ];
    return '<section class="amp-sec amp-problema" aria-labelledby="amp-p1">'
      + paso('01', '03', 'El problema')
      + '<h2 class="amp-h2" id="amp-p1">La peli es buena.<br><span>La pantalla, no.</span></h2>'
      + '<ol class="amp-dolores amp-cascada">' + dolores.map(function (d, i) {
          return '<li class="amp-dolor' + (i === 1 ? ' amp-dolor--der' : '') + '"><strong>' + d[0] + '</strong><p>' + d[1] + '</p></li>';
        }).join('') + '</ol>'
      + '</section>';
  }

  /* ---------- la escena fijada: el móvil chico crece hasta la pantalla de 12" ---------- */
  function hEscena() {
    return '<section class="amp-escena" aria-labelledby="amp-esc-t">'
      + '<div class="amp-escena__marco">'
      +   '<h2 class="amp-escena__t" id="amp-esc-t"><span class="amp-escena__de">De esto…</span><span class="amp-escena__a">…a esto.</span></h2>'
      +   '<div class="amp-escena__tele" aria-hidden="true">'
      +     '<div class="amp-escena__lente"><img src="img/amplificador-abuelos.webp?v=1" width="900" height="900" alt="" loading="lazy"></div>'
      +     '<div class="amp-escena__movil"><img src="img/amplificador-abuelos.webp?v=1" width="900" height="900" alt="" loading="lazy"></div>'
      +   '</div>'
      +   '<p class="amp-escena__pie">Misma película, mismo móvil. Solo cambia el tamaño.</p>'
      + '</div></section>';
  }

  /* ---------- paso 2 · la solución: cómo se usa en 3 gestos ---------- */
  function hSolucion() {
    var gestos = [
      ['Abre la base', 'Se despliega como un libro y la lente sube sola.'],
      ['Pon el móvil detrás', 'En horizontal, en su soporte. Vale cualquier móvil, también con funda.'],
      ['Dale al play', 'La imagen se ve grande delante, con las manos libres.'],
    ];
    return '<section class="amp-sec amp-solucion" aria-labelledby="amp-p2">'
      + paso('02', '03', 'La solución')
      + '<h2 class="amp-h2" id="amp-p2">Tres gestos.<br><span>Cero cables.</span></h2>'
      + '<figure class="amp-foto amp-foto--der"><img src="img/amplificador-manos.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="Unas manos ponen el móvil en el soporte de atrás del amplificador abierto"></figure>'
      + '<ol class="amp-gestos amp-cascada">' + gestos.map(function (g, i) {
          return '<li><span class="amp-gestos__n">' + (i + 1) + '</span><div><strong>' + g[0] + '</strong><p>' + g[1] + '</p></div></li>';
        }).join('') + '</ol>'
      + '<ul class="amp-sin amp-cascada">'
      +   '<li>' + S_SIN + '<span>Sin pilas</span></li><li>' + S_SIN + '<span>Sin cables</span></li><li>' + S_SIN + '<span>Sin apps</span></li>'
      + '</ul>'
      + '</section>';
  }

  /* ---------- para quién: dos fotos grandes montadas una sobre otra ---------- */
  function hQuien() {
    return '<section class="amp-sec amp-quien" aria-labelledby="amp-qn">'
      + '<p class="amp-kicker">Para quién</p>'
      + '<h2 class="amp-h2" id="amp-qn">Para los abuelos.<br><span>Y para los peques.</span></h2>'
      + '<div class="amp-duo amp-cascada">'
      +   '<figure class="amp-duo__f"><img src="img/amplificador-abuelos.webp?v=1" width="900" height="900" loading="lazy"'
      +     ' alt="Una pareja mayor en el sofá ve una película grande en el amplificador, con el árbol de Navidad detrás">'
      +     '<figcaption>El partido y la novela, sin forzar la vista.</figcaption></figure>'
      +   '<figure class="amp-duo__f amp-duo__f--b"><img src="img/amplificador-ninos.webp?v=1" width="900" height="900" loading="lazy"'
      +     ' alt="Dos niños se ríen viendo dibujos animados en grande en el amplificador sobre la mesa">'
      +     '<figcaption>Los dibujos en grande y el móvil lejos de la cara.</figcaption></figure>'
      + '</div></section>';
  }

  /* ---------- opiniones con foto: carrusel accesible (anterior / pausa / siguiente) ---------- */
  function hOpiniones() {
    var lista = OPS.filter(function (r) { return r.foto; }).slice(0, 5);
    if (!lista.length) return null;
    var sec = nodo('<section class="amp-sec amp-opin" aria-roledescription="carrusel" aria-labelledby="amp-op">'
      + '<p class="amp-kicker">Opiniones del producto</p>'
      + '<h2 class="amp-h2" id="amp-op">Lo dicen<br><span>quienes ya lo usan.</span></h2>'
      + '<div class="amp-pista" tabindex="0">' + lista.map(function (r, k) {
          return '<figure class="amp-op" role="group" aria-roledescription="opinión" aria-label="' + (k + 1) + ' de ' + lista.length + '"' + (k ? ' hidden' : '') + '>'
            + '<img src="' + txt(r.foto) + '?v=1" width="720" height="720" loading="lazy" alt="Foto del amplificador que subió ' + txt(r.nombre) + '">'
            + '<figcaption><span class="amp-estr" aria-label="' + r.estrellas + ' de 5 estrellas">' + new Array(r.estrellas + 1).join(S_ESTR) + '</span>'
            + '<blockquote>' + txt(r.texto) + '</blockquote><cite>' + txt(r.nombre) + '</cite><small>Compra verificada</small></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="amp-mandos">'
      +   '<button type="button" class="amp-mando" data-m="atras" aria-label="Opinión anterior">' + S_ANT + '</button>'
      +   '<span class="amp-cuenta" aria-live="polite">1 / ' + lista.length + '</span>'
      +   '<button type="button" class="amp-mando" data-m="pausa" aria-label="Pausar">' + S_PAUSA + '</button>'
      +   '<button type="button" class="amp-mando" data-m="sigue" aria-label="Opinión siguiente">' + S_SIG + '</button>'
      + '</div></section>');
    var caras = sec.querySelectorAll('.amp-op'), cuenta = sec.querySelector('.amp-cuenta'), pista = sec.querySelector('.amp-pista');
    var bP = sec.querySelector('[data-m="pausa"]');
    var actual = 0, timer = 0, parado = QUIETO, dentro = false;
    function ver(n) { caras[actual].hidden = true; actual = (n + caras.length) % caras.length; caras[actual].hidden = false; cuenta.textContent = (actual + 1) + ' / ' + caras.length; }
    function frena() { clearInterval(timer); timer = 0; }
    function gira() { frena(); if (!parado && !dentro) timer = setInterval(function () { ver(actual + 1); }, 6500); }
    function icono() { bP.innerHTML = parado ? S_PLAY : S_PAUSA; bP.setAttribute('aria-label', parado ? 'Reanudar' : 'Pausar'); }
    sec.querySelector('[data-m="atras"]').addEventListener('click', function () { ver(actual - 1); gira(); });
    sec.querySelector('[data-m="sigue"]').addEventListener('click', function () { ver(actual + 1); gira(); });
    bP.addEventListener('click', function () { parado = !parado; icono(); gira(); });
    pista.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { ver(actual - 1); gira(); }
      else if (e.key === 'ArrowRight') { ver(actual + 1); gira(); }
    });
    sec.addEventListener('mouseenter', function () { dentro = true; frena(); });
    sec.addEventListener('mouseleave', function () { dentro = false; gira(); });
    sec.addEventListener('focusin', function () { dentro = true; frena(); });
    sec.addEventListener('focusout', function () { dentro = false; gira(); });
    icono(); gira();
    return sec;
  }

  /* ---------- paso 3 · la compra: el pack de 2 con su cuenta atrás hasta medianoche ---------- */
  function hPromo() {
    var sec = nodo('<section class="amp-sec amp-promo" aria-labelledby="amp-p3">'
      + paso('03', '03', 'Tu pedido')
      + '<h2 class="amp-h2" id="amp-p3">Uno para casa.<br><span>Otro para regalar.</span></h2>'
      + '<div class="amp-caja">'
      +   '<p class="amp-caja__q">' + S_REGALO + '<span>Promoción · 2 amplificadores</span></p>'
      +   '<p class="amp-caja__pr"><b>' + eur(DOS) + '</b><s>' + eur(UNO * 2) + '</s></p>'
      +   '<p class="amp-caja__u">' + eur(Math.round(DOS / 2 * 100) / 100) + ' cada uno · ahorras ' + eur(Math.round((UNO * 2 - DOS) * 100) / 100) + '</p>'
      +   '<p class="amp-caja__ya">o <b>' + eur(DOS_YA) + '</b> pagando ahora con tarjeta o PayPal, con entrega prioritaria en 14 h</p>'
      +   '<div class="amp-reloj" role="timer" aria-label="Tiempo que queda de la promoción"><span><b data-t="h">00</b>h</span><span><b data-t="m">00</b>min</span><span><b data-t="s">00</b>seg</span></div>'
      +   '<p class="amp-caja__tres">¿Más regalos? 3 por <b>' + eur(TRES) + '</b></p>'
      + '</div></section>');
    var h = sec.querySelector('[data-t="h"]'), m = sec.querySelector('[data-t="m"]'), s = sec.querySelector('[data-t="s"]');
    function dos(n) { return (n < 10 ? '0' : '') + n; }
    function tic() {
      var ahora = new Date(), fin = new Date(ahora); fin.setHours(24, 0, 0, 0);
      var q = Math.max(0, Math.floor((fin - ahora) / 1000));
      h.textContent = dos(Math.floor(q / 3600)); m.textContent = dos(Math.floor(q % 3600 / 60)); s.textContent = dos(q % 60);
    }
    tic(); setInterval(tic, 1000);
    sec.querySelector('.amp-caja').appendChild(boton('Quiero los 2', 2));
    return sec;
  }

  /* ---------- montaje sobre la plantilla ---------- */
  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var pedir = document.getElementById('pedir');
    if (!prod.querySelector('.heroP') || !pedir) return false;
    if (document.body.classList.contains('p-amplificador')) return true;
    document.body.classList.add('p-amplificador');

    if (!document.getElementById('amp-fuentes')) {
      var l = document.createElement('link');
      l.id = 'amp-fuentes'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(l);
    }

    var hijos = Array.prototype.slice.call(prod.children);
    var ba = prod.querySelector('section.bloque.ba-sec');
    var vid = prod.querySelector('.vid-wrap');
    var res = document.getElementById('resenas');
    var gar = prod.querySelector('.gar-sec');
    var pAnt = prod.querySelector('.pagoAntES');
    function porTitulo(re) { return hijos.filter(function (e) { return re.test(((e.querySelector('h2') || {}).textContent) || ''); })[0]; }
    var faq = porTitulo(/Preguntas frecuentes/), envio = porTitulo(/Con quién enviamos/);
    var queda = [ba, vid, res, gar, pAnt, faq, envio, pedir];
    hijos.forEach(function (e) { if (queda.indexOf(e) < 0) e.classList.add('amp-oculto'); });

    var cola = [];
    var heroe = nodo(hHeroe());
    var prob = nodo(hProblema()); prob.appendChild(boton('Lo quiero ver en grande', 2));
    var esc = nodo(hEscena());
    var sol = nodo(hSolucion()); sol.appendChild(boton('Pedir el mío', 1, 'amp-btn--claro'));
    cola.push(heroe, prob, esc, sol);
    if (ba) {
      ba.classList.add('amp-sec', 'amp-ba');
      var bk = ba.querySelector('.eyebrow'); if (bk) { bk.className = 'amp-kicker'; bk.textContent = 'Antes y después'; }
      var bt = ba.querySelector('h2'); if (bt) { bt.className = 'amp-h2'; bt.innerHTML = 'La misma señora,<br><span>otra pantalla.</span>'; }
      var bc = ba.querySelector('.cta'); if (bc) bc.remove();
      var bm = ba.querySelector('.ba-img');
      if (bm && !bm.querySelector('.amp-et')) bm.insertAdjacentHTML('beforeend', '<span class="amp-et amp-et--antes">Antes</span><span class="amp-et amp-et--despues">Después</span>');
      cola.push(ba);
    }
    cola.push(nodo(hQuien()));
    if (vid) {
      vid.classList.add('amp-sec', 'amp-video');
      vid.insertAdjacentHTML('afterbegin', '<p class="amp-kicker">En vídeo</p><h2 class="amp-h2">Así se abre<br><span>en dos segundos.</span></h2>');
      var v = vid.querySelector('video'); if (v) v.setAttribute('poster', 'img/amplificador-sola.webp?v=1');
      cola.push(vid);
    }
    var op = hOpiniones(); if (op) cola.push(op);
    cola.push(hPromo());
    [pAnt, res, gar, faq, envio, pedir].forEach(function (e) { if (e) cola.push(e); });

    var ancla = prod.firstChild;
    cola.forEach(function (n) { prod.insertBefore(n, ancla); });
    /* lo que quedó por detrás (oculto) sigue al final, sin estorbar */

    var ht = pedir.querySelector('h2'); if (ht) { ht.textContent = 'Pide el tuyo'; ht.classList.add('amp-h2'); }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.innerHTML = '<span>Los 2 por ' + eur(DOS) + '</span>';

    mover();
    return true;
  }

  /* ---------- movimiento ---------- */
  function cargar(src, listo) {
    var s = document.createElement('script'); s.src = src; s.onload = listo; s.onerror = listo; document.head.appendChild(s);
  }
  function mover() {
    var g = window.gsap;
    if (QUIETO || !g) { document.body.classList.add('amp-quieto'); return; }
    document.body.classList.add('amp-anima');
    var ST = window.ScrollTrigger;
    if (ST) g.registerPlugin(ST);

    /* entrada del héroe: zoom de la foto (expo.inOut) y las capas de vidrio que llegan desde atrás */
    g.from('.amp-heroe__foto img', { scale: 1.18, rotate: -6, opacity: 0, duration: .8, ease: 'expo.inOut' });
    g.from('.amp-sello, .amp-vidrio', { opacity: 0, z: -160, y: 30, duration: .7, delay: .45, stagger: .12, ease: 'expo.inOut' });
    if (ST) {
      var arriba = { trigger: '.amp-heroe', start: 'top top', end: 'bottom top', scrub: .5 };
      g.to('.amp-blob--a', { yPercent: -18, ease: 'none', scrollTrigger: arriba });
      g.to('.amp-blob--b', { yPercent: -32, ease: 'none', scrollTrigger: arriba });
      /* cada capa del héroe sube a su velocidad: cuanto más alta la capa, más rápido (profundidad) */
      g.utils.toArray('.amp-heroe [data-capa]').forEach(function (c) {
        var n = +c.getAttribute('data-capa') || 1;
        g.to(c, { yPercent: -6 * n, ease: 'none', scrollTrigger: arriba });
      });
    }
    /* con ratón: las capas se inclinan un poco hacia el puntero, cada una a su profundidad */
    var heroeEl = document.querySelector('.amp-heroe');
    if (heroeEl && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var capas = heroeEl.querySelectorAll('[data-capa]');
      heroeEl.addEventListener('pointermove', function (e) {
        var r = heroeEl.getBoundingClientRect(), dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
        for (var i = 0; i < capas.length; i++) {
          var n = +capas[i].getAttribute('data-capa') || 1;
          g.to(capas[i], { x: dx * 10 * n, rotateY: dx * 4, rotateX: -dy * 4, duration: .6, ease: 'power3.out', overwrite: 'auto' });
        }
      });
      heroeEl.addEventListener('pointerleave', function () { g.to(capas, { x: 0, rotateY: 0, rotateX: 0, duration: .8, ease: 'expo.inOut' }); });
    }

    /* titular letra por letra (SplitText de lib/, si no carga queda el texto normal) */
    cargar('lib/SplitText.min.js', function () {
      var h1 = document.querySelector('.amp-h1[data-letras]');
      if (!h1 || !window.SplitText) return;
      try {
        g.registerPlugin(window.SplitText);
        var sp = new window.SplitText(h1, { type: 'chars,words' });
        g.from(sp.chars, { opacity: 0, y: 24, rotateX: -50, duration: .6, stagger: .015, ease: 'expo.out',
          onComplete: function () { try { sp.revert(); } catch (e) {} } });
      } catch (e) {}
    });

    if (!ST) { document.body.classList.add('amp-quieto'); return; }

    /* títulos: entran en cascada al llegar a cada sección */
    g.utils.toArray('.p-amplificador .amp-sec').forEach(function (sec) {
      var tt = sec.querySelectorAll(':scope > .amp-paso, :scope > .amp-kicker, :scope > .amp-h2');
      if (tt.length) g.from(tt, { opacity: 0, y: 24, duration: .5, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: sec, start: 'top 82%' } });
    });
    g.utils.toArray('.p-amplificador .amp-cascada').forEach(function (lista) {
      /* las tarjetas llegan desde atrás (translateZ) y se apilan una sobre otra */
      g.from(lista.children, { opacity: 0, z: -220, y: 40, duration: .7, stagger: { each: .1, from: 'start' }, ease: 'expo.inOut',
        scrollTrigger: { trigger: lista, start: 'top 85%' } });
    });
    g.utils.toArray('.p-amplificador .amp-foto img, .p-amplificador .amp-ba .ba-img').forEach(function (im) {
      g.from(im, { scale: 1.12, opacity: 0, duration: .8, ease: 'expo.out', scrollTrigger: { trigger: im, start: 'top 85%' } });
    });

    /* la escena fijada (la única de la página): el móvil chico crece hasta llenar la lente de 12" */
    var esc = document.querySelector('.amp-escena');
    if (esc) {
      var tl = g.timeline({ scrollTrigger: { trigger: esc, start: 'top top', end: '+=140%', scrub: 1, pin: true, anticipatePin: 1 } });
      tl.fromTo('.amp-escena__movil', { scale: 1, xPercent: 0 }, { scale: 2.55, xPercent: -6, ease: 'none' }, 0)
        .fromTo('.amp-escena__lente', { opacity: 0, scale: .88 }, { opacity: 1, scale: 1, ease: 'none' }, .25)
        .to('.amp-escena__movil', { opacity: 0, ease: 'none' }, .7)
        .fromTo('.amp-escena__de', { opacity: 1 }, { opacity: .18, ease: 'none' }, .2)
        .fromTo('.amp-escena__a', { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'none' }, .45)
        .fromTo('.amp-escena__pie', { opacity: 0 }, { opacity: 1, ease: 'none' }, .75);
      window.addEventListener('load', function () { try { ST.refresh(); } catch (e) {} });
    }
  }

  function probar(n) {
    if (armar()) return;
    if (n < 80) setTimeout(function () { probar(n + 1); }, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { probar(0); });
  else probar(0);
})();
