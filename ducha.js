/* ============================================================
   CABEZAL DE DUCHA · ESPAÑA · diseño PROPIO sobre la ficha (29-09-2026).
   Sistema: ui-ux-pro-max ORIGINAL → design-system/jaye-espana/pages/ducha.md
     · Patrón  Before-After Transformation + Feature-Rich Showcase
     · Estilo  Soft UI Evolution (tarjetas blancas, sombra suave, nada de oro)
     · Color   Water & Hydration (#0284C7 / #06B6D4 sobre #F0F9FF) + CTA naranja #EA580C
     · Letra   Rubik (titulares) + Nunito Sans (cuerpo)
   NO copia nada del bálsamo: ni su estructura, ni sus efectos, ni su letra.
   Solo actúa con ?p=ducha. Todo se ve aunque este archivo falle.
   ============================================================ */
(function () {
  'use strict';
  var s = '';
  try { s = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (s !== 'ducha') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function tiene(sec, txt) { var h = sec.querySelector('h2, .eyebrow'); return h && h.textContent.indexOf(txt) >= 0; }
  function ir() { var f = document.getElementById('pedir'); if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth' }); }

  var ICO = {
    rosca: '<path d="M8 3h8v5H8z"/><path d="M6 8h12v3H6z"/><path d="M9 11v10M15 11v10M9 14h6M9 17h6"/>',
    mano:  '<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4"/><path d="M10 10V4.5a1.5 1.5 0 0 1 3 0V10"/><path d="M13 10V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M16 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3.5 15a1.6 1.6 0 0 1 2.6-1.8L7 14.5"/>',
    grifo: '<path d="M4 9h9a4 4 0 0 1 4 4v1"/><path d="M8 9V6h3v3"/><path d="M6 6h7"/><path d="M17 17c0 1.2-.9 2-2 2s-2-.8-2-2c0-1.3 2-3.5 2-3.5s2 2.2 2 3.5z"/>',
  };
  function ico(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICO[k] + '</svg>'; }

  /* ---- la sección nueva: CÓMO SE INSTALA (3 pasos + la foto de cerca) ---- */
  function seccionInstala() {
    var pasos = [
      ['rosca', 'Desenrosca el viejo', 'Gira a mano el cabezal que tienes. La manguera se queda como está.'],
      ['mano',  'Enrosca el nuevo', 'Rosca universal de media pulgada, la de casi todas las duchas de España. Sin herramientas.'],
      ['grifo', 'Abre el grifo', 'Elige el modo con una mano y nota la presión desde la primera ducha.'],
    ];
    return '<section class="bloque du-sec du-instala">'
      + '<span class="du-rot">Instalación</span>'
      + '<h2 class="du-h2">Listo en <em>dos minutos</em>, sin fontanero.</h2>'
      + '<figure class="du-foto"><img src="img/ducha-3.webp?v=1" alt="El cabezal de ducha soltando un chorro de agua fuerte y uniforme" loading="lazy" width="900" height="900"></figure>'
      + '<ol class="du-pasos">' + pasos.map(function (p, i) {
          return '<li class="du-paso du-rev" style="--i:' + i + '">'
            + '<span class="du-num">' + (i + 1) + '</span>'
            + '<span class="du-pico">' + ico(p[0]) + '</span>'
            + '<div><b>' + p[1] + '</b><p>' + p[2] + '</p></div></li>';
        }).join('') + '</ol>'
      + '</section>';
  }

  function montar() {
    var cont = document.getElementById('prod');
    if (!cont) return false;
    var hero = cont.querySelector('.heroP'), arriba = cont.querySelector('.arriba2');
    if (!hero || !arriba) return false;
    if (document.body.classList.contains('p-ducha')) return true;
    document.body.classList.add('p-ducha');

    if (!document.getElementById('du-fuente')) {
      var l = document.createElement('link');
      l.id = 'du-fuente'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@500;600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap';
      document.head.appendChild(l);
    }

    /* las secciones tal como las deja ficha.js */
    var secs = [].slice.call(cont.children);
    var ba = cont.querySelector('section.bloque.ba-sec');
    var trae = cont.querySelector('.form-sec');
    var video = cont.querySelector('.vid-wrap');
    var desc = cont.querySelector('section.desc');
    var promo = cont.querySelector('.promo-sec');
    var esc = cont.querySelector('.esc-sec');
    var cmp = cont.querySelector('.cmp-sec');
    var ctaSuelto = secs[secs.indexOf(arriba) + 1];   // "Lo quiero, pago al recibir" pegado a la cabecera
    if (ctaSuelto && (ctaSuelto.className || '').trim() !== 'bloque') ctaSuelto = null;

    /* 1 · la galería sobra: el héroe YA enseña el producto. Sus fotos van
       repartidas abajo, cada una con su idea (regla de la skill: no repetir). */
    ['.gal', '.miniz'].forEach(function (q) { var e = arriba.querySelector(q); if (e) e.remove(); });

    /* 2 · ORDEN del patrón Before-After Transformation:
       héroe → ANTES/DESPUÉS → compra corta → qué trae → vídeo → instalación → el producto → oferta… */
    var tras = hero;
    function poner(sec) { if (sec) { tras.insertAdjacentElement('afterend', sec); tras = sec; } }
    poner(ba); poner(arriba); poner(ctaSuelto); poner(trae); poner(video);
    var inst = el(seccionInstala()); poner(inst);
    poner(desc); poner(promo); poner(esc); poner(cmp);

    /* 3 · retoques de contenido */
    if (ba) {
      var eb = ba.querySelector('.eyebrow'); if (eb) eb.textContent = 'El cambio';
      var h = ba.querySelector('h2'); if (h) h.innerHTML = 'De un hilo de agua <em>a un chorro de verdad.</em>';
      /* sin botón aquí (James: "no queda bien ahí"): quedaba pegado a la foto y
         justo debajo ya viene la compra con el suyo */
      var bb = ba.querySelector('.cta'); if (bb) bb.remove();
    }
    /* la barra fija de abajo decía "Pedir ahora — pago contra entrega" en dos
       líneas (76 px): mismo texto que los demás, en una */
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Lo quiero, pago al recibir';
    if (trae) {
      /* la foto con las medidas encabeza las cuatro tarjetas */
      var sub = trae.querySelector('.sub2') || trae.querySelector('h2');
      sub.insertAdjacentHTML('afterend', '<figure class="du-foto"><img src="img/ducha-1.webp?v=1" alt="El cabezal de ducha con sus medidas: 7,5 cm de cabeza y 25 cm de largo" loading="lazy" width="900" height="900"></figure>');
      /* iconos propios: una llave para "3 modos" no decía nada */
      var ICO_T = {
        'modos': '<path d="M5 4v16M12 4v16M19 4v16"/><circle cx="5" cy="9" r="2.2"/><circle cx="12" cy="15" r="2.2"/><circle cx="19" cy="8" r="2.2"/>',
        'masaje': '<path d="M4 9c2-2.5 4-2.5 6 0s4 2.5 6 0 3-2 4-2"/><path d="M4 15c2-2.5 4-2.5 6 0s4 2.5 6 0 3-2 4-2"/>',
        'filtro': '<path d="M4 5h16l-6 7.5V19l-4 1.5v-8z"/>',
      };
      [].forEach.call(trae.querySelectorAll('.ing'), function (it) {
        var tt = (it.querySelector('b') || {}).textContent || '', svg = it.querySelector('.cir svg');
        var k = /modos/i.test(tt) ? 'modos' : /masaje/i.test(tt) ? 'masaje' : /filtro/i.test(tt) ? 'filtro' : '';
        if (k && svg) svg.innerHTML = ICO_T[k];
      });
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cta du-cta'; b.textContent = 'Lo quiero, pago al recibir';
      b.addEventListener('click', ir);
      trae.appendChild(b);
    }
    if (video) {
      video.insertAdjacentHTML('afterbegin', '<div class="du-cab"><span class="du-rot">En acción</span><h2 class="du-h2">Así <em>sale el agua.</em></h2></div>');
      var v = video.querySelector('video, .vid-prod');
      if (v) v.setAttribute('poster', 'img/ducha-ficha-poster.webp?v=1');
    }
    if (desc) {
      var pd = desc.querySelector('p');
      if (pd) pd.insertAdjacentHTML('afterend', '<figure class="du-foto"><img src="img/ducha-2.webp?v=1" alt="Una mujer disfrutando del chorro del cabezal de ducha" loading="lazy" width="900" height="900"></figure>');
    }
    if (cmp) { var us = cmp.querySelector('th.us'); if (us) us.textContent = 'Este'; }

    return true;
  }

  /* LA GOTA (James, 29-09: "un efecto al leer: una gotita de agua").
     Cada título, al entrar en pantalla, recibe una gota que cae desde arriba y
     abre una onda al tocarlo. Una vez por título, 900 ms en total; con
     movimiento reducido no se pinta. Es adorno: aria-hidden. */
  function gotas() {
    if (QUIETO || !('IntersectionObserver' in window)) return;
    var tits = document.querySelectorAll('.p-ducha #prod h2');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) {
        if (!v.isIntersecting) return;
        obs.unobserve(v.target);
        var g = document.createElement('span');
        g.className = 'du-gota';
        g.setAttribute('aria-hidden', 'true');
        g.innerHTML = '<i></i><b></b><b></b>';
        v.target.appendChild(g);
        setTimeout(function () { g.remove(); }, 1500);
      });
    }, { rootMargin: '0px 0px -22% 0px' });
    tits.forEach(function (t) { t.classList.add('du-tit'); obs.observe(t); });
  }

  function revelar() {
    if (QUIETO || !('IntersectionObserver' in window)) return;
    /* .ing NO: esas ya las anima efectos-ficha.js y se pisarían */
    var els = document.querySelectorAll('.p-ducha .du-rev');
    document.body.classList.add('du-anima');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('du-in'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { obs.observe(e); });
    /* red de seguridad: nada se queda escondido */
    setTimeout(function () { els.forEach(function (e) { e.classList.add('du-in'); }); }, 4000);
  }

  var n = 0;
  (function esperar() {
    if (montar()) { revelar(); gotas(); return; }
    if (++n > 60) return;
    setTimeout(esperar, 100);
  })();
})();
