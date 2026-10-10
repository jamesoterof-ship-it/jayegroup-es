/* ============================================================
   PISTOLA DE ALTA PRESIÓN 48 V · ESPAÑA · página propia (09-10-2026).
   ui-ux-pro-max (aprobado por James 09-10): minimalismo suizo, pizarra industrial
   #334155 + verde #059669, Outfit / Work Sans. Patrón héroe + características + compra.
   Orden: gancho (héroe) → antes y después → compra → 1 "dónde la usas" (cuadrícula) →
   2 "el kit" (3 fotos reales del almacén) → vídeo → qué trae el maletín → descripción →
   promoción → quedan → comparativa → opiniones → formulario. Botón de compra al final
   de cada bloque propio. Movimiento corto (250 ms). Respeta "reducir movimiento".
   🔴 Textos: nada de bares, litros ni minutos de batería (el proveedor no los da).
   Solo actúa con ?p=pistola. Si este archivo falla, la ficha se ve igual.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (pid !== 'pistola') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  function aComprar() { var f = document.getElementById('pedir'); if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' }); }
  var IR = svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>');
  function boton(txt) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cta pi-cta'; b.innerHTML = txt + ' ' + IR;
    b.addEventListener('click', aComprar);
    return b;
  }

  /* ---- 1 · dónde la usas ---- */
  function bloqueUsos() {
    var u = [
      [svg('<rect x="3" y="11" width="18" height="6" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>'), 'El coche', 'Barro, polvo y llantas. Sin ir al túnel de lavado.'],
      [svg('<path d="M3 20h18"/><path d="M5 20V9l7-5 7 5v11"/><path d="M9 20v-6h6v6"/>'), 'La terraza y el patio', 'Baldeas el suelo, la fachada y las persianas.'],
      [svg('<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9h5l3 9"/><path d="M10 8l-1-3h3"/>'), 'La moto y la bici', 'Cadena, radios y guardabarros, en un momento.'],
      [svg('<path d="M4 10h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 10V6h12v4"/><path d="M9 18v3M15 18v3"/>'), 'Los muebles de jardín', 'Sillas, mesa y toldo listos para el verano.'],
      [svg('<path d="M14 4l6 6-9 9H5v-6z"/><path d="M12 6l6 6"/>'), 'Las herramientas', 'Quitas el barro de la azada, la carretilla o las botas.'],
      [svg('<path d="M12 3v3"/><path d="M8 7c0 3 1 5 4 8 3-3 4-5 4-8"/><path d="M6 21c2-3 4-5 6-5s4 2 6 5"/>'), 'El riego', 'Con la boquilla en abanico riega macetas y huerto.'],
    ];
    return '<section class="bloque pi-sec pi-usos">'
      + '<span class="pi-num" aria-hidden="true">01</span>'
      + '<span class="pi-cap">Dónde la usas</span>'
      + '<h2 class="pi-h2">Donde está la suciedad, <em>sin enchufe.</em></h2>'
      + '<p class="pi-lead">Una hidrolimpiadora grande necesita toma de agua, enchufe y sitio. Esta va en la mano, coge el agua de un cubo y se guarda en su maletín.</p>'
      + '<ul class="pi-grid">' + u.map(function (x, i) {
          return '<li class="pi-entra" style="--i:' + i + '">' + x[0] + '<b>' + x[1] + '</b><span>' + x[2] + '</span></li>';
        }).join('') + '</ul>'
      + '</section>';
  }

  /* ---- 2 · el kit (fotos reales del almacén de Dropi PRO) ---- */
  function bloqueKit() {
    var pasos = [
      ['img/pistola-maletin.webp?v=1', 'El maletín negro abierto con la pistola, una batería, la manguera gris enrollada y la botella de espuma', 'Así llega', 'En su maletín', 'Todo protegido y ordenado. Lo abres y está listo.'],
      ['img/pistola-kit.webp?v=1', 'La pistola de alta presión de pie junto a sus dos baterías de 48 V y el cargador', 'Dos baterías', 'Una puesta, otra cargando', 'Terminas el coche entero sin esperar a que cargue.'],
      ['img/pistola-contenido.webp?v=1', 'Todo el contenido del maletín: pistola, dos baterías, cargador, manguera, lanza, boquillas, botella de espuma y adaptador', 'El kit completo', 'Lanza, boquillas y espuma', 'Chorro fino o abanico, y jabón con la botella de espuma.'],
    ];
    return '<section class="bloque pi-sec pi-kit">'
      + '<span class="pi-num" aria-hidden="true">02</span>'
      + '<span class="pi-cap">El kit</span>'
      + '<h2 class="pi-h2">Lo que hay <em>dentro del maletín.</em></h2>'
      + '<p class="pi-lead">Fotos del producto real, tal como sale del almacén.</p>'
      + '<div class="pi-pasos">' + pasos.map(function (p, i) {
          return '<figure class="pi-paso pi-entra" style="--i:' + i + '">'
            + '<div class="pi-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="1000" height="1242"></div>'
            + '<figcaption><i>' + p[2] + '</i><b>' + p[3] + '</b><span>' + p[4] + '</span></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="pi-aviso"><p>Es una hidrolimpiadora de mano para la suciedad del día a día: coche, terraza, bici, muebles de jardín. No sustituye a una máquina industrial. Las baterías se cargan en el enchufe de casa con el cargador incluido.</p></div>'
      + '</section>';
  }

  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var hero = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2');
    if (!hero || !arriba) return false;
    if (document.body.classList.contains('p-pistola')) return true;
    document.body.classList.add('p-pistola');

    if (!document.getElementById('pi-letras')) {
      var l = document.createElement('link');
      l.id = 'pi-letras'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap';
      document.head.appendChild(l);
    }

    var hijos = [].slice.call(prod.children);
    var antesDespues = prod.querySelector('section.bloque.ba-sec');
    var queTrae = prod.querySelector('.form-sec');
    var video = prod.querySelector('.vid-wrap');
    var descripcion = prod.querySelector('section.desc');
    var oferta = prod.querySelector('.promo-sec');
    var quedan = prod.querySelector('.esc-sec');
    var compara = prod.querySelector('.cmp-sec');
    var tras = hijos[hijos.indexOf(arriba) + 1];
    if (tras && (tras.className || '').trim() !== 'bloque') tras = null;

    /* la galería repetiría las fotos del bloque 2: fuera */
    ['.gal', '.miniz'].forEach(function (s) { var e = arriba.querySelector(s); if (e) e.remove(); });

    var ancla = hero;
    function pon(n) { if (!n) return; ancla.insertAdjacentElement('afterend', n); ancla = n; }
    pon(antesDespues); pon(arriba); pon(tras);
    var usos = nodo(bloqueUsos()); pon(usos); usos.appendChild(boton('La quiero, pago al recibir'));
    var kit = nodo(bloqueKit()); pon(kit); kit.appendChild(boton('Pedir la mía'));
    pon(video); pon(queTrae); pon(descripcion); pon(oferta); pon(quedan); pon(compara);

    if (antesDespues) {
      var e1 = antesDespues.querySelector('.eyebrow'); if (e1) e1.textContent = 'Antes y después';
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'El mismo coche, <em>dos minutos después.</em>';
      var c1 = antesDespues.querySelector('.cta'); if (c1) c1.remove();
    }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'La quiero';
    if (queTrae) queTrae.appendChild(boton('La quiero, pago al recibir'));
    if (video) {
      video.insertAdjacentHTML('afterbegin', '<div class="pi-vcab"><span class="pi-cap">En vídeo</span><h2 class="pi-h2">Así <em>limpia.</em></h2></div>');
      var v = video.querySelector('video, .vid-prod');
      if (v) v.setAttribute('poster', 'img/pistola-ficha-poster.webp?v=1');
    }
    if (oferta) {
      var ot = oferta.querySelector('h2') || oferta.firstElementChild;
      if (ot) ot.insertAdjacentHTML('afterend', '<figure class="pi-foto"><img src="img/pistola-promo.webp?v=1" alt="El kit completo de la pistola de alta presión con el cartel de la promoción: 1 pistola 47,95 € y 2 pistolas 84,95 €" loading="lazy" width="1000" height="1500"></figure>');
    }
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Pistola 48 V'; }
    return true;
  }

  /* títulos con regla de pizarra y bloques que entran en fundido corto */
  function alLeer() {
    var tit = document.querySelectorAll('.p-pistola #prod h2');
    var ent = document.querySelectorAll('.p-pistola .pi-entra');
    tit.forEach(function (h) { h.classList.add('pi-tit'); });
    if (QUIETO || !('IntersectionObserver' in window)) {
      ent.forEach(function (e) { e.classList.add('pi-visto'); });
      return;
    }
    document.body.classList.add('pi-mueve');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('pi-visto'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    ent.forEach(function (e) { obs.observe(e); });
    /* por si algo no llega a verse, a los 3 s todo visible */
    setTimeout(function () { ent.forEach(function (e) { e.classList.add('pi-visto'); }); }, 3000);
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) { alLeer(); return; }
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();
