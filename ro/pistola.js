/* ============================================================
   PISTOLA DE ALTA PRESIÓN 48 V · ESPAÑA · página propia (09-10-2026, 3ª versión).
   🔴 James 09-10: prohibido que yo diseñe; el diseño sale del script ui-ux-pro-max.
   Corrida aprobada: BRUTALISMO · oscuro #1E293B/#334155 + rojo #DC2626 · Bebas Neue /
   Source Sans 3 · patrón Hero-Centric (héroe grande, franja de valor, prueba, cierre).
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
      [svg('<rect x="3" y="11" width="18" height="6" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>'), 'Mașina', 'Noroi, praf și jante. Fără drum la spălătorie.'],
      [svg('<path d="M3 20h18"/><path d="M5 20V9l7-5 7 5v11"/><path d="M9 20v-6h6v6"/>'), 'Terasa și curtea', 'Spălați dalele, gardul și treptele.'],
      [svg('<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9h5l3 9"/><path d="M10 8l-1-3h3"/>'), 'Motocicleta și bicicleta', 'Roți, spițe și aripi, într-o clipă.'],
      [svg('<path d="M4 10h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 10V6h12v4"/><path d="M9 18v3M15 18v3"/>'), 'Mobilierul de grădină', 'Scaune și masă curate pentru vară.'],
      [svg('<path d="M14 4l6 6-9 9H5v-6z"/><path d="M12 6l6 6"/>'), 'Uneltele', 'Scoateți noroiul de pe sapă, roabă sau cizme.'],
      [svg('<path d="M12 3v3"/><path d="M8 7c0 3 1 5 4 8 3-3 4-5 4-8"/><path d="M6 21c2-3 4-5 6-5s4 2 6 5"/>'), 'Udatul', 'Cu jet larg udați grădina și ghivecele.'],
    ];
    return '<section class="bloque pi-sec pi-usos">'
      + '<span class="pi-cap">Unde o folosiți</span>'
      + '<h2 class="pi-h2">Acolo unde e murdăria. <em>Fără priză.</em></h2>'
      + '<p class="pi-lead">O puneți pe furtunul de grădină și concentrează jetul de apă de la robinet. Fără curent, fără baterie, fără aparat greu.</p>'
      + '<ul class="pi-grid">' + u.map(function (x, i) {
          return '<li class="pi-entra" style="--i:' + i + '">' + x[0] + '<b>' + x[1] + '</b><span>' + x[2] + '</span></li>';
        }).join('') + '</ul>'
      + '</section>';
  }

  /* ---- 2 · el kit (fotos reales del almacén de Dropi PRO) ---- */
  function bloqueKit() {
    var pasos = [
      /* 25-10 Rumania: Dropi RO 56 (lanza para manguera, SKU WATERGUN-23003). Fotos hechas con IA desde la foto real del proveedor. */
      ['img/pistol-apa-produs.webp?v=1', 'Lancea metalică de aproximativ 44 cm cu mâner albastru și duză de alamă', 'Produsul', 'Lance metalică de 44 cm', 'Mâner albastru și duză de alamă. Ușoară: aproximativ 250 de grame.'],
      ['img/pistol-apa-terasa.webp?v=1', 'O femeie spală dalele murdare ale terasei cu lancea pusă pe furtun', 'Terasa', 'Dalele, ca noi', 'Jetul concentrat scoate mușchiul și murdăria dintre dale.'],
      ['img/pistol-apa-gradina.webp?v=1', 'Un bărbat udă grădina de legume cu lancea pusă pe furtun', 'Grădina', 'Și pentru udat', 'Cu jet larg udați roșiile și ghivecele fără să le loviți.'],
    ];
    return '<section class="bloque pi-sec pi-kit">'
      + '<span class="pi-cap">Produsul</span>'
      + '<h2 class="pi-h2">O lance care se pune <em>pe furtunul de acasă.</em></h2>'
      + '<p class="pi-lead">Fără motor și fără baterie: puterea vine de la apa din furtun.</p>'
      + '<div class="pi-pasos">' + pasos.map(function (p, i) {
          return '<figure class="pi-paso pi-entra" style="--i:' + i + '">'
            + '<div class="pi-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="1000" height="1242"></div>'
            + '<figcaption><i>' + p[2] + '</i><b>' + p[3] + '</b><span>' + p[4] + '</span></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="pi-aviso"><p>Este o lance pentru furtunul de grădină: presiunea vine de la apa de la robinet. NU are motor, baterie sau priză și NU este o mașină de spălat cu presiune electrică. Este pentru murdăria de zi cu zi: mașină, terasă, bicicletă, mobilier de grădină.</p></div>'
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
      l.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+3:wght@400;600;700&display=swap';
      document.head.appendChild(l);
    }

    /* HÉROE como el foco (James 09-10): la foto a pantalla completa con el titular ENCIMA; los datos, el precio y el botón
       pasan a un bloque propio DEBAJO de la foto, para que no tapen la pistola. */
    if (!hero.querySelector('.pi-heroPie')) {
      var pieH = document.createElement('div'); pieH.className = 'pi-heroPie';
      /* 09-10 James: "las letras no tapan el producto": el párrafo también baja; sobre la foto queda solo la nota y el titular */
      ['.heroP__sub', '.heroP__datos', '.heroP__ahorra', '.heroP__pie', '.heroP__wa'].forEach(function (s) { var e = hero.querySelector(s); if (e) pieH.appendChild(e); });
      hero.appendChild(pieH);
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
    var usos = nodo(bloqueUsos()); pon(usos); usos.appendChild(boton('Îl vreau, plătesc la livrare'));
    var kit = nodo(bloqueKit()); pon(kit); kit.appendChild(boton('Vreau să îl comand'));
    pon(video); pon(queTrae); pon(descripcion); pon(oferta); pon(quedan); pon(compara);

    if (antesDespues) {
      var e1 = antesDespues.querySelector('.eyebrow'); if (e1) e1.textContent = 'Înainte și după';
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'Aceeași mașină. <em>Câteva minute mai târziu.</em>';
      var c1 = antesDespues.querySelector('.cta'); if (c1) c1.remove();
    }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Îl vreau';
    if (queTrae) queTrae.appendChild(boton('Îl vreau, plătesc la livrare'));
    /* 25-10 Rumania: sin video ni imagen de promo (los de España eran de la pistola 48 V con precios en €) */
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Lance pentru furtun'; }
    return true;
  }

  /* bloques que entran en fundido corto (350 ms, 12 px: preset "Scroll Reveal sutil" del script) */
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
