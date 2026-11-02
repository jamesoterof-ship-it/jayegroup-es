/* ============================================================
   CREME SANGUE DE DRAGÃO · PORTUGAL (02-11-2026): copia de crema.js de España, solo con los textos en portugués
   (regla de James 22-10: la página de España traducida). Diseño de España (25-10-2026, rediseño 4):
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
  try { pid = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
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
    return '<section class="cr-heroe" aria-label="Creme Sangue de Dragão">'
      /* 25-10 James: la foto de las cajas "no me gusta" y "las letras tapando el producto, no": vuelve la foto de la señora con
         la crema (la que le gustó) y el titular va DEBAJO de la foto, en la franja roja, sin tapar nada */
      + '<img class="cr-heroe__img" src="img/crema-hero3.webp?v=1" width="1000" height="1500" fetchpriority="high"'
      +   ' alt="Uma mulher de cerca de 55 anos sorri com o boião aberto do creme EELHOE Dragon Blood junto à face e a caixa vermelha à frente">'
      /* James 25-10: las letras ENCIMA de la foto, en la zona clara de arriba, entrando en cascada; nada de franja ni fondo detrás */
      + '<div class="cr-heroe__txt">'
      +   (nota ? '<p class="cr-heroe__nota">' + nota + '</p>' : '')
      +   '<h1 class="cr-heroe__h1" aria-label="Desperte a sua pele num minuto por dia.">' + cascada('Desperte a sua pele', 0) + '<br>'
      +     '<em>' + cascada('num minuto por dia.', 19) + '</em></h1>'
      + '</div>'
      + '</section>';
  }

  function pasos() {
    return '<nav class="cr-pasos" aria-label="Três passos">'
      + '<a href="#cr-p1" data-p="1"><b>1</b>O que nota</a>'
      + '<a href="#cr-p2" data-p="2"><b>2</b>O ritual</a>'
      + '<a href="#cr-p3" data-p="3"><b>3</b>Encomenda</a>'
      + '<i class="cr-pasos__barra" aria-hidden="true"><i></i></i>'
      + '</nav>';
  }

  /* James 25-10: nada de bloque rojo ni cajas blancas → opción 3: tres fotos redondas, una por señal, con el nombre en dorado */
  function paso1() {
    var s = function (n, img, alt, tit, txt) {
      return '<li><img src="img/crema-senal-' + img + '.webp?v=1" width="500" height="500" loading="lazy" alt="' + alt + '">'
        + '<b>' + tit + '</b><span>' + txt + '</span></li>';
    };
    return '<section class="cr-paso cr-paso--1" id="cr-p1" aria-labelledby="crP1t">'
      + '<span class="cr-paso__num">Passo 1 · O que nota</span>'
      + '<h2 class="cr-paso__h2" id="crP1t">A pele muda. <em>O seu cuidado também.</em></h2>'
      + '<p class="cr-paso__lead">O frio, o aquecimento, os ecrãs e os anos: a pele fica mais seca, baça e com mais linhas.</p>'
      + '<ul class="cr-senales">'
      +   s(1, 1, 'Dedos sobre a face com a pele seca e repuxada', 'Repuxada', 'Pele seca que pede creme a meio da manhã')
      +   s(2, 2, 'Rosto com a pele baça e cansada', 'Baça', 'Tom cansado, sem a luz de antes')
      +   s(3, 3, 'Linhas finas no canto do olho', 'Linhas', 'Mais marcadas na testa e à volta dos olhos')
      + '</ul>'
      + '</section>';
  }

  function paso2() {
    return '<section class="cr-paso cr-paso--2" id="cr-p2" aria-labelledby="crP2t">'
      + '<span class="cr-paso__num">Passo 2 · O ritual</span>'
      + '<h2 class="cr-paso__h2" id="crP2t">Um gel que a sua pele bebe.</h2>'
      + '<figure class="cr-foto cr-foto--ancha"><img src="img/crema-textura.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="Um dedo tira o gel rosado com partículas douradas à frente do boião EELHOE Dragon Blood"></figure>'
      + '<p class="cr-paso__lead">Gel rosado com partículas douradas: hidrata, deixa a pele suave e com um aspeto mais luminoso, e ajuda a suavizar a aparência das linhas de expressão.</p>'
      + '<ol class="cr-ritual">'
      +   '<li><img src="img/crema-limpia.webp?v=1" width="900" height="900" loading="lazy" alt="Uma mulher seca a cara com uma toalha junto à caixa e ao boião do creme">'
      +     '<b>Limpe</b><span>O rosto e o pescoço, e seque com suavidade.</span></li>'
      +   '<li><img src="img/crema-mano.webp?v=1" width="1000" height="1500" loading="lazy" alt="Uma mão tira o gel do boião aberto">'
      +     '<b>Aplique</b><span>Um pouco de gel com a ponta dos dedos.</span></li>'
      +   '<li><img src="img/crema-luz.webp?v=1" width="900" height="900" loading="lazy" alt="Uma mulher sorri e toca na face luminosa, com o boião aberto ao lado">'
      +     '<b>Massaje</b><span>De baixo para cima, até absorver. Sem brilho oleoso.</span></li>'
      + '</ol>'
      + '</section>';
  }

  function paso3(p) {
    var k = (p && p.packs) || [];
    var card = function (pk, i) {
      return '<button type="button" class="cr-pack" data-i="' + i + '">'
        + (i === 0 ? '<span class="cr-pack__cinta">Mais vendido</span>' : '<span class="cr-pack__cinta cr-pack__cinta--oro">Melhor preço</span>')
        + '<b class="cr-pack__qt">' + pk.texto + '</b>'
        + '<span class="cr-pack__pr">' + String(pk.precio.toFixed(2)).replace('.', ',') + ' €</span>'
        + '<span class="cr-pack__uni">' + String((Math.round(pk.precio / pk.cant * 100) / 100).toFixed(2)).replace('.', ',') + ' € cada creme</span>'
        + '<span class="cr-pack__ir">Escolher ' + FLECHA + '</span>'
        + '</button>';
    };
    /* PROMOCIÓN (James 25-10: "la sección de promoción como aparece en las otras… y ponen la imagen"): es la MISMA sección de la
       plantilla (.promo-sec de ficha.js, con promoRef: el tachado es 2 packs de 2 a 28,95 € = 57,90 €). armar() la mete aquí,
       después del título, y debajo va la imagen con los precios, como en las demás fichas. */
    return '<section class="cr-paso cr-paso--3" id="cr-p3" aria-labelledby="crP3t">'
      + '<span class="cr-paso__num">Passo 3 · A sua encomenda</span>'
      + '<h2 class="cr-paso__h2" id="crP3t">Escolha o seu pack. Paga ao receber.</h2>'
      /* 02-11 Portugal: la imagen con los precios de Portugal (crema-promo-pt) se hace con la IA de imágenes con el OK de James;
         mientras no exista, el bloque se quita solo y quedan los precios en texto */
      + '<figure class="cr-foto cr-foto--promo"><img src="img/crema-promo-pt.webp?v=1" width="1000" height="1500" loading="lazy"'
      +   ' onerror="this.parentNode.remove()"'
      +   ' alt="Quatro caixas vermelhas e quatro boiões do creme EELHOE Dragon Blood com os preços: 2 cremes 34,95 € e 4 cremes 54,95 €, portes grátis e pagamento na entrega"></figure>'
      + '<div class="cr-packs">' + k.map(card).join('') + '</div>'
      + '<p class="cr-paso__nota">Portes grátis em 24-48 h · Paga em dinheiro ou com cartão ao receber</p>'
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
    /* James 25-10: "las estrellas de calificación siempre de color dorado" */
    var nota = notaEl ? '<span class="cr-est" aria-hidden="true">★★★★★</span> ' + notaEl.innerText.replace(/\s+/g, ' ').replace(/★/g, '').trim() : '';

    /* fuera la portada de la plantilla y la segunda presentación del producto (James: "presentas el producto dos veces") */
    var hijos = [].slice.call(prod.children);
    var tras = hijos[hijos.indexOf(arriba) + 1];
    [hero, arriba, tras, prod.querySelector('.form-sec'), prod.querySelector('section.desc')].forEach(function (e) {
      if (e && e !== prod.querySelector('.pagoAntES')) e.classList.add('cr-fuera');
    });

    var anclaInicio = nodo(heroe(nota));
    prod.insertBefore(anclaInicio, prod.firstChild);
    var barra = nodo(pasos()); anclaInicio.insertAdjacentElement('afterend', barra);
    var p1 = nodo(paso1()); barra.insertAdjacentElement('afterend', p1); p1.appendChild(miniCta('Quero o meu creme'));
    var p2 = nodo(paso2()); p1.insertAdjacentElement('afterend', p2); p2.appendChild(miniCta('Quero o meu creme'));
    var p3 = nodo(paso3(P)); p2.insertAdjacentElement('afterend', p3);
    var pagoAnt = prod.querySelector('.pagoAntES'); if (pagoAnt) p3.appendChild(pagoAnt);

    /* la sección de promoción de la plantilla va en el paso 3, después del título y antes de la imagen con los precios */
    var promoSec = prod.querySelector('.promo-sec');
    if (promoSec) p3.querySelector('.cr-paso__h2').insertAdjacentElement('afterend', promoSec);
    /* James 25-10: la imagen con los precios va PEGADA a la promoción (no más abajo); después, pagar con tarjeta y los packs */
    /* va DENTRO de la sección de promoción, debajo de su tarjeta (como en gafas): pago-anticipado.js se coloca solo después de
       .promo-sec, así que fuera de ella la imagen quedaba separada por el recuadro de "Paga con tarjeta" */
    var fotoPromo = p3.querySelector('.cr-foto--promo');
    if (fotoPromo && promoSec) promoSec.appendChild(fotoPromo);

    /* los packs del paso 3 eligen ese pack en el formulario y bajan a él */
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
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'A mesma pele, <em>outro aspeto.</em>'; }
    if (video) { video.classList.add('cr-prueba'); ancla.insertAdjacentElement('afterend', video);
      video.insertAdjacentHTML('afterbegin', '<h2 class="cr-prueba__h2">Assim é a textura.</h2>'); }

    var flota = document.querySelector('.btn-flota'); if (flota) flota.textContent = 'Quero o meu';
    var pide = document.querySelector('#pedir h2'); if (pide) pide.textContent = 'A sua encomenda';

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
