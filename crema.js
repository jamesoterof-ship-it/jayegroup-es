/* ============================================================
   CREMA SANGRE DE DRAGÓN · ESPAÑA · página propia (25-10-2026).
   Diseño ui-ux-pro-max corrida #42 (Dark Mode OLED, oscuro + foco dorado, Playfair Display / Inter): la #38 rosa no le
   gustó a James ("te dije el hero imponente, así no"). Patrón: hero → el problema → la solución → la acción, botón en cada paso.
   Aquí: el titular encima de la foto del héroe, los bloques "el problema" y "el ritual", y el orden de las secciones.
   Estilos en crema.css. Alegaciones solo de APARIENCIA (Reglamento UE 655/2013).
   Solo actúa con ?p=crema. Si este archivo falla, la ficha se ve igual.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (pid !== 'crema') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  var FLECHA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>';
  function aComprar() {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cta cr-cta'; b.innerHTML = 'La quiero, pago al recibir ' + FLECHA;
    b.addEventListener('click', function () {
      var f = document.getElementById('pedir');
      if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' });
    });
    return b;
  }

  /* el problema: lo que la clienta ve en el espejo (sin prometer milagros) */
  function bloqueProblema() {
    return '<section class="cr-sec cr-sec--rojo cr-entra" aria-label="Lo que notas en tu piel">'
      + '<span class="cr-rot">Lo que notas</span>'
      + '<h2 class="cr-h2">La piel cambia. <em>Tu cuidado también.</em></h2>'
      + '<p class="cr-lead">Con los años, el frío, la calefacción o las pantallas, la piel se ve más seca, apagada y con más líneas. No hace falta una rutina de diez pasos: hace falta una crema que de verdad te apetezca ponerte cada día.</p>'
      + '<div class="cr-senales">'
      +   '<div class="cr-senal"><b>Tirante</b><span>Piel seca que pide crema a media mañana</span></div>'
      +   '<div class="cr-senal"><b>Apagada</b><span>Tono cansado, sin la luz de antes</span></div>'
      +   '<div class="cr-senal"><b>Líneas</b><span>Más marcadas en la frente y los ojos</span></div>'
      + '</div>'
      + '</section>';
  }

  /* la solución: el ritual de cada día con la crema */
  function bloqueRitual() {
    return '<section class="cr-sec cr-entra" aria-label="El ritual de la Sangre de Dragón">'
      + '<span class="cr-rot">El ritual</span>'
      + '<h2 class="cr-h2">Un minuto, <em>mañana y noche.</em></h2>'
      + '<p class="cr-lead">Un gel rosado con partículas doradas que se funde en la piel: hidrata, la deja suave y con un aspecto más luminoso, y ayuda a suavizar la apariencia de las líneas de expresión.</p>'
      + '<ol class="cr-ritual">'
      +   '<li><b>Limpia</b><span>El rostro y el cuello, y sécalos con suavidad.</span></li>'
      +   '<li><b>Aplica</b><span>Un poco de gel con la yema de los dedos.</span></li>'
      +   '<li><b>Masajea</b><span>Hacia arriba, hasta que se absorba. No deja la piel grasa.</span></li>'
      + '</ol>'
      + '</section>';
  }

  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var hero = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2');
    if (!hero || !arriba) return false;
    if (document.body.classList.contains('p-crema')) return true;
    document.body.classList.add('p-crema');

    if (!document.getElementById('cr-letras')) {
      var l = document.createElement('link');
      l.id = 'cr-letras'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
      document.head.appendChild(l);
    }

    /* héroe imponente: el titular (con la cascada de la plantilla) va encima de la foto, en la zona rosa vacía de arriba */
    var marco = hero.querySelector('.heroP__marco'), h1 = hero.querySelector('.heroP__h1');
    if (marco && h1 && !marco.querySelector('.cr-heroTit')) {
      var tit = document.createElement('div');
      tit.className = 'cr-heroTit';
      var encima = hero.querySelector('.heroP__nota') || hero.querySelector('.heroP__kicker');
      if (encima) tit.appendChild(encima);
      tit.appendChild(h1);
      marco.appendChild(tit);
    }

    var hijos = [].slice.call(prod.children);
    var antesDespues = prod.querySelector('section.bloque.ba-sec');
    var ventajas = prod.querySelector('.form-sec');
    var descripcion = prod.querySelector('section.desc');
    var oferta = prod.querySelector('.promo-sec');
    var compara = prod.querySelector('.cmp-sec');
    var video = prod.querySelector('.vid-wrap');
    var tras = hijos[hijos.indexOf(arriba) + 1];
    if (tras && (tras.className || '').trim() !== 'bloque') tras = null;

    /* orden del patrón de la skill: portada → compra → el problema → la solución → pruebas → reseñas (ya al final) */
    var ancla = arriba;
    function pon(n) { if (!n) return; ancla.insertAdjacentElement('afterend', n); ancla = n; }
    pon(tras);
    var problema = nodo(bloqueProblema()); pon(problema);
    var ritual = nodo(bloqueRitual()); pon(ritual); ritual.appendChild(aComprar());
    pon(antesDespues);
    if (video) {
      video.insertAdjacentHTML('afterbegin', '<span class="cr-rot">En vídeo</span><h2 class="cr-h2">Así es <em>la textura.</em></h2>'
        + '<p class="cr-lead">El tarro de cristal, el gel rosado y cómo se absorbe en la piel.</p>');
      video.classList.add('cr-sec');
      pon(video);
    }
    pon(oferta); pon(ventajas); pon(compara); pon(descripcion);

    if (antesDespues) {
      var e1 = antesDespues.querySelector('.eyebrow'); if (e1) e1.textContent = 'Antes y después';
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'La misma piel, <em>otro aspecto.</em>';
    }
    if (ventajas) ventajas.appendChild(aComprar());
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Esta crema'; }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'La quiero';
    var pide = document.querySelector('#pedir h2');
    if (pide) pide.textContent = 'Pide la tuya';
    return true;
  }

  /* entrada suave de los bloques nuevos al leerlos */
  function alLeer() {
    var ent = document.querySelectorAll('.p-crema .cr-entra');
    if (QUIETO || !('IntersectionObserver' in window)) { ent.forEach(function (e) { e.classList.add('cr-visto'); }); return; }
    document.body.classList.add('cr-mueve');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('cr-visto'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    ent.forEach(function (e) { obs.observe(e); });
    setTimeout(function () { ent.forEach(function (e) { e.classList.add('cr-visto'); }); }, 4000);
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) { alLeer(); return; }
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();
