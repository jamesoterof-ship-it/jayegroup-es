/* ============================================================
   CREMA SANGRE DE DRAGÓN · ESPAÑA · página propia (25-10-2026, rediseño 4).
   James eligió la referencia Charlotte Tilbury ("dale esa pero con la imagen del hero grande bonita") y el plano del script
   ui-ux-pro-max (design-system/crema-sangre-de-dragon: Funnel de 3 pasos, Vibrant & Block-based, rojo #DC2626 · dorado #D97706 ·
   rosa #EC4899, Playfair Display / Inter). Candado "todo el diseño lo hace el script" abierto con su autorización.
   · HÉROE como Charlotte Tilbury: escena roja y dorada a pantalla completa, titular en mayúsculas blancas abajo, enlace subrayado.
     Sin la cascada ni el fundido de la plantilla, y SIN la segunda presentación del producto (galería/nombre/descripción).
   · EMBUDO del plano: barra de pasos 1 → 2 → 3, "solo lo esencial en cada paso", botón chico en cada paso y el grande al final.
     Paso 1 el problema · Paso 2 la solución (con fotos) · Paso 3 el pedido (los dos packs).
   Alegaciones solo de APARIENCIA (Reglamento UE 655/2013). Solo actúa con ?p=crema.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (pid !== 'crema') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function ir(id) { var f = document.getElementById(id); if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' }); }
  var FLECHA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>';
  function miniCta(txt, destino) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cr-btn2'; b.innerHTML = txt + ' ' + FLECHA;
    b.addEventListener('click', function () { ir(destino || 'cr-p3'); });
    return b;
  }

  /* cada letra en su caja, con su retraso, para que caigan una tras otra; las palabras no se parten */
  function cascada(txt, desde) {
    var k = desde;
    return txt.split(' ').map(function (pal) {
      return '<span class="cr-cae__w" aria-hidden="true">' + pal.split('').map(function (c) {
        return '<span class="cr-cae" style="--k:' + (k++) + '">' + c + '</span>';
      }).join('') + '</span>';
    }).join(' ');
  }

  function heroe(nota) {
    return '<section class="cr-heroe" aria-label="Crema Sangre de Dragón">'
      /* 25-10 James: la foto de las cajas "no me gusta" y "las letras tapando el producto, no": vuelve la foto de la señora con
         la crema (la que le gustó) y el titular va DEBAJO de la foto, en la franja roja, sin tapar nada */
      + '<img class="cr-heroe__img" src="img/crema-hero3.webp?v=1" width="1000" height="1500" fetchpriority="high"'
      +   ' alt="Una mujer de unos 55 años sonríe con el tarro abierto de la crema EELHOE Dragon Blood junto a la mejilla y la caja roja delante">'
      /* James 25-10: las letras ENCIMA de la foto, en la zona clara de arriba, entrando en cascada; nada de franja ni fondo detrás */
      + '<div class="cr-heroe__txt">'
      +   (nota ? '<p class="cr-heroe__nota">' + nota + '</p>' : '')
      +   '<h1 class="cr-heroe__h1" aria-label="Despierta tu piel en un minuto al día.">' + cascada('Despierta tu piel', 0) + '<br>'
      +     '<em>' + cascada('en un minuto al día.', 17) + '</em></h1>'
      + '</div>'
      + '</section>';
  }

  function pasos() {
    return '<nav class="cr-pasos" aria-label="Tres pasos">'
      + '<a href="#cr-p1" data-p="1"><b>1</b>Lo que notas</a>'
      + '<a href="#cr-p2" data-p="2"><b>2</b>El ritual</a>'
      + '<a href="#cr-p3" data-p="3"><b>3</b>Tu pedido</a>'
      + '<i class="cr-pasos__barra" aria-hidden="true"><i></i></i>'
      + '</nav>';
  }

  function paso1() {
    return '<section class="cr-paso cr-paso--1" id="cr-p1" aria-labelledby="crP1t">'
      + '<span class="cr-paso__num">Paso 1 · Lo que notas</span>'
      + '<h2 class="cr-paso__h2" id="crP1t">La piel cambia. Tu cuidado también.</h2>'
      + '<p class="cr-paso__lead">El frío, la calefacción, las pantallas y los años: la piel se ve más seca, apagada y con más líneas.</p>'
      + '<ul class="cr-senales">'
      +   '<li><b>Tirante</b><span>Piel seca que pide crema a media mañana</span></li>'
      +   '<li><b>Apagada</b><span>Tono cansado, sin la luz de antes</span></li>'
      +   '<li><b>Líneas</b><span>Más marcadas en la frente y los ojos</span></li>'
      + '</ul>'
      + '</section>';
  }

  function paso2() {
    return '<section class="cr-paso cr-paso--2" id="cr-p2" aria-labelledby="crP2t">'
      + '<span class="cr-paso__num">Paso 2 · El ritual</span>'
      + '<h2 class="cr-paso__h2" id="crP2t">Un gel que tu piel bebe.</h2>'
      + '<figure class="cr-foto cr-foto--ancha"><img src="img/crema-textura.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="Un dedo toma el gel rosado con partículas doradas delante del tarro EELHOE Dragon Blood"></figure>'
      + '<p class="cr-paso__lead">Gel rosado con partículas doradas: hidrata, deja la piel suave y con un aspecto más luminoso, y ayuda a suavizar la apariencia de las líneas de expresión.</p>'
      + '<ol class="cr-ritual">'
      +   '<li><img src="img/crema-limpia.webp?v=1" width="900" height="900" loading="lazy" alt="Una mujer se seca la cara con una toalla junto a la caja y el tarro de la crema">'
      +     '<b>Limpia</b><span>El rostro y el cuello, y sécalos con suavidad.</span></li>'
      +   '<li><img src="img/crema-mano.webp?v=1" width="1000" height="1500" loading="lazy" alt="Una mano toma el gel del tarro abierto">'
      +     '<b>Aplica</b><span>Un poco de gel con la yema de los dedos.</span></li>'
      +   '<li><img src="img/crema-luz.webp?v=1" width="900" height="900" loading="lazy" alt="Una mujer sonríe y se toca la mejilla luminosa, con el tarro abierto al lado">'
      +     '<b>Masajea</b><span>Hacia arriba, hasta que se absorba. Sin brillo graso.</span></li>'
      + '</ol>'
      + '</section>';
  }

  function paso3(p) {
    var k = (p && p.packs) || [];
    var card = function (pk, i) {
      return '<button type="button" class="cr-pack" data-i="' + i + '">'
        + (i === 0 ? '<span class="cr-pack__cinta">Más vendido</span>' : '<span class="cr-pack__cinta cr-pack__cinta--oro">Mejor precio</span>')
        + '<b class="cr-pack__qt">' + pk.texto + '</b>'
        + '<span class="cr-pack__pr">' + String(pk.precio.toFixed(2)).replace('.', ',') + ' €</span>'
        + '<span class="cr-pack__uni">' + String((Math.round(pk.precio / pk.cant * 100) / 100).toFixed(2)).replace('.', ',') + ' € cada crema</span>'
        + '<span class="cr-pack__ir">Elegir ' + FLECHA + '</span>'
        + '</button>';
    };
    return '<section class="cr-paso cr-paso--3" id="cr-p3" aria-labelledby="crP3t">'
      + '<span class="cr-paso__num">Paso 3 · Tu pedido</span>'
      + '<h2 class="cr-paso__h2" id="crP3t">Elige tu pack. Pagas al recibir.</h2>'
      + '<figure class="cr-foto cr-foto--ancha"><img src="img/crema-caja.webp?v=1" width="1000" height="1500" loading="lazy"'
      +   ' alt="Dos cajas rojas y dos tarros abiertos de la crema EELHOE Dragon Blood sobre seda rosada"></figure>'
      + '<div class="cr-packs">' + k.map(card).join('') + '</div>'
      + '<p class="cr-paso__nota">Envío gratis en 24-48 h · Pagas en efectivo o con tarjeta al recibir</p>'
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

    var P = (window.PRODUCTOS || []).filter(function (x) { return x.id === 'crema'; })[0];
    var notaEl = hero.querySelector('.heroP__nota');
    var nota = notaEl ? '★★★★★ ' + notaEl.innerText.replace(/\s+/g, ' ').replace(/★/g, '').trim() : '';

    /* fuera la portada de la plantilla y la segunda presentación del producto (James: "presentas el producto dos veces") */
    var hijos = [].slice.call(prod.children);
    var tras = hijos[hijos.indexOf(arriba) + 1];
    [hero, arriba, tras, prod.querySelector('.form-sec'), prod.querySelector('section.desc')].forEach(function (e) {
      if (e && e !== prod.querySelector('.pagoAntES')) e.classList.add('cr-fuera');
    });

    var anclaInicio = nodo(heroe(nota));
    prod.insertBefore(anclaInicio, prod.firstChild);
    var barra = nodo(pasos()); anclaInicio.insertAdjacentElement('afterend', barra);
    var p1 = nodo(paso1()); barra.insertAdjacentElement('afterend', p1); p1.appendChild(miniCta('Quiero mi crema'));
    var p2 = nodo(paso2()); p1.insertAdjacentElement('afterend', p2); p2.appendChild(miniCta('Quiero mi crema'));
    var p3 = nodo(paso3(P)); p2.insertAdjacentElement('afterend', p3);
    var pagoAnt = prod.querySelector('.pagoAntES'); if (pagoAnt) p3.appendChild(pagoAnt);

    /* los packs del paso 3 eligen el mismo pack en el formulario y bajan a él */
    [].forEach.call(p3.querySelectorAll('.cr-pack'), function (b) {
      b.addEventListener('click', function () {
        var en = document.querySelector('#pedir .pack[data-i="' + b.getAttribute('data-i') + '"]');
        if (en) en.click();
        ir('pedir');
      });
    });

    /* antes y después y video justo después del paso 3, como prueba */
    var antesDespues = prod.querySelector('section.bloque.ba-sec'), video = prod.querySelector('.vid-wrap');
    var ancla = p3;
    if (antesDespues) { antesDespues.classList.add('cr-prueba'); ancla.insertAdjacentElement('afterend', antesDespues); ancla = antesDespues;
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'La misma piel, <em>otro aspecto.</em>'; }
    if (video) { video.classList.add('cr-prueba'); ancla.insertAdjacentElement('afterend', video);
      video.insertAdjacentHTML('afterbegin', '<h2 class="cr-prueba__h2">Así es la textura.</h2>'); }

    var flota = document.querySelector('.btn-flota'); if (flota) flota.textContent = 'La quiero';
    var pide = document.querySelector('#pedir h2'); if (pide) pide.textContent = 'Tu pedido';

    /* la barra de pasos se pega justo debajo de la cabecera fija de la tienda (.pegado), no detrás */
    var cab = document.querySelector('.pegado');
    var pegar = function () { barra.style.top = (cab ? cab.getBoundingClientRect().height : 0) + 'px'; };
    pegar(); window.addEventListener('resize', pegar); window.addEventListener('scroll', pegar, { passive: true });

    /* barra de pasos: marca el paso que se está leyendo */
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (vs) {
        vs.forEach(function (v) {
          if (!v.isIntersecting) return;
          var n = v.target.id.slice(-1);
          [].forEach.call(barra.querySelectorAll('a'), function (a) { a.classList.toggle('es-hoy', a.getAttribute('data-p') <= n); });
          barra.style.setProperty('--avance', (n / 3 * 100) + '%');
        });
      }, { rootMargin: '-40% 0px -50% 0px' });
      [p1, p2, p3].forEach(function (s) { obs.observe(s); });
    }
    return true;
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) return;
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();
