/* ============================================================
   SPRAY REPARADOR DE ARAÑAZOS · ESPAÑA · página propia (02-10-2026).
   ui-ux-pro-max (aprobado por James): Hero-Centric + Motion-Driven,
   pizarra #1E293B + rojo #DC2626, Syncopate / Space Mono.
   Movimiento propio de esta página (no es el del sellador ni el del cabezal):
     · héroe: la foto llega con zoom hacia atrás, una RAYITA se dibuja sobre la
       chapa y el BARRIDO DE BRILLO la borra al pasar (lo que hace el spray);
       parallax suave al bajar.
     · títulos con raya de velocidad; tarjetas que suben y se enderezan.
   Solo actúa con ?p=aranazos. Si este archivo falla, la ficha se ve igual.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (pid !== 'aranazos') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function crea(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function icono(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  function irAComprar() { var f = document.getElementById('pedir'); if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' }); }
  var FLECHA = '<span class="ar-flecha">' + icono('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>') + '</span>';
  var SI = '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 10"/>';
  var NO = '<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>';

  /* ---- ASÍ SE USA: las tres fotos aprobadas, cada una un paso ---- */
  function seccionUso() {
    var pasos = [
      ['img/aranazos-rocia.webp?v=1', 'Una mujer rociando el spray sobre una rayita del parachoques de su coche blanco', 'Rocía', 'Con la zona limpia y seca, a la sombra, directo sobre la rayita.'],
      ['img/aranazos-frota.webp?v=1', 'Un joven frotando la puerta de su coche rojo con un paño de microfibra', 'Frota', 'Con un paño de microfibra, en círculos, hasta que la rayita se disimule.'],
      ['img/aranazos-brillo.webp?v=1', 'Un señor con el bote en la mano sobre el capó azul mojado, con el agua en gotas', 'Brilla', 'Queda el brillo y una capa que hace que el agua resbale en gotas.'],
    ];
    return '<section class="bloque ar-sec ar-uso">'
      + '<span class="ar-rot">Así se usa</span>'
      + '<h2 class="ar-h2">Tres pasos, <em>cinco minutos.</em></h2>'
      + '<p class="ar-lead">Sin taller y sin máquina pulidora. Solo el spray y un paño.</p>'
      + '<div class="ar-pasos">' + pasos.map(function (p, i) {
          return '<figure class="ar-paso ar-sube" style="--i:' + i + '">'
            + '<span class="ar-paso-n">0' + (i + 1) + '</span>'
            + '<div class="ar-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="1000" height="1250"></div>'
            + '<figcaption><b>' + p[2] + '</b><span>' + p[3] + '</span></figcaption></figure>';
        }).join('') + '</div>'
      + '</section>';
  }

  /* ---- SÍ / NO, con la prueba de la uña (James 02-10: no prometer de más) ---- */
  function seccionSiNo() {
    var si = ['Rayitas del lavado y marcas finas en círculos', 'Las uñas junto a la manilla de la puerta', 'Roces de ramas, bolsas o mochilas', 'Pintura opaca que perdió el brillo'];
    var no = ['Rayones que dejan ver la capa gris o el metal', 'Abolladuras y golpes', 'Pintura saltada o desconchada'];
    function lista(arr, d) { return '<ul>' + arr.map(function (t) { return '<li>' + icono(d) + '<span>' + t + '</span></li>'; }).join('') + '</ul>'; }
    return '<section class="bloque ar-sec ar-sino">'
      + '<span class="ar-rot">Antes de comprar</span>'
      + '<h2 class="ar-h2">Qué rayas quita <em>y cuáles no.</em></h2>'
      + '<div class="ar-sino-grid">'
      +   '<div class="ar-caja ar-caja-si ar-sube"><b>Sí las disimula</b>' + lista(si, SI) + '</div>'
      +   '<div class="ar-caja ar-caja-no ar-sube" style="--i:1"><b>No las arregla</b>' + lista(no, NO) + '</div>'
      + '</div>'
      + '<div class="ar-una ar-sube" style="--i:2"><span class="ar-una-ico">' + icono('<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 11.5V4a1.5 1.5 0 0 1 3 0v7.5"/><path d="M14 11.5V6a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1-6 6h-.5a6 6 0 0 1-5-2.7L3.6 15a1.5 1.5 0 0 1 2.4-1.8L8 15"/>') + '</span>'
      +   '<div><b>La prueba de la uña</b><p>Pasa la uña sobre la raya. Si no se engancha, es superficial y este spray la disimula. Si se engancha, es profunda y necesita taller.</p></div></div>'
      + '</section>';
  }

  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var hero = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2');
    if (!hero || !arriba) return false;
    if (document.body.classList.contains('p-aranazos')) return true;
    document.body.classList.add('p-aranazos');

    if (!document.getElementById('ar-letras')) {
      var l = document.createElement('link');
      l.id = 'ar-letras'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Mono:wght@400;700&display=swap';
      document.head.appendChild(l);
    }

    var bloques = [].slice.call(prod.children);
    var antesDespues = prod.querySelector('section.bloque.ba-sec');
    var porQue = prod.querySelector('.form-sec');
    var video = prod.querySelector('.vid-wrap');
    var descripcion = prod.querySelector('section.desc');
    var oferta = prod.querySelector('.promo-sec');
    var quedan = prod.querySelector('.esc-sec');
    var compara = prod.querySelector('.cmp-sec');
    var tras2 = bloques[bloques.indexOf(arriba) + 1];
    if (tras2 && (tras2.className || '').trim() !== 'bloque') tras2 = null;

    /* la galería repetía las fotos de "Así se usa": fuera */
    ['.gal', '.miniz'].forEach(function (s) { var e = arriba.querySelector(s); if (e) e.remove(); });

    /* ORDEN Hero-Centric: héroe → antes/después → compra → así se usa → vídeo →
       por qué funciona → qué rayas quita → el producto → oferta → quedan → comparativa */
    var ancla = hero;
    function pon(nodo) { if (!nodo) return; ancla.insertAdjacentElement('afterend', nodo); ancla = nodo; }
    pon(antesDespues); pon(arriba); pon(tras2);
    pon(crea(seccionUso()));
    pon(video); pon(porQue);
    pon(crea(seccionSiNo()));
    pon(descripcion); pon(oferta); pon(quedan); pon(compara);

    if (antesDespues) {
      var ce = antesDespues.querySelector('.eyebrow'); if (ce) ce.textContent = 'Antes y después';
      var ct = antesDespues.querySelector('h2'); if (ct) ct.innerHTML = 'De rayada <em>a brillante.</em>';
      var cb = antesDespues.querySelector('.cta'); if (cb) cb.remove();
    }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Lo quiero';
    if (porQue) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cta ar-cta'; b.innerHTML = 'Lo quiero, pago al recibir ' + FLECHA;
      b.addEventListener('click', irAComprar);
      porQue.appendChild(b);
    }
    if (video) {
      video.insertAdjacentHTML('afterbegin', '<div class="ar-cab"><span class="ar-rot">En vídeo, sin trucos</span><h2 class="ar-h2">Rocía, frota <em>y mira.</em></h2></div>');
      var v = video.querySelector('video, .vid-prod');
      if (v) v.setAttribute('poster', 'img/aranazos-ficha-poster.webp?v=1');
    }
    if (oferta) {
      var ot = oferta.querySelector('h2') || oferta.firstElementChild;
      if (ot) ot.insertAdjacentHTML('afterend', '<figure class="ar-foto"><img src="img/aranazos-promo.webp?v=1" alt="Un mecánico en su taller con tres botes del spray, y el cartel con 1 bote a 20,99 €, 2 botes a 28,99 € y 3 botes a 41,99 €" loading="lazy" width="1000" height="1000"></figure>');
    }
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Este'; }
    /* las opiniones son de compradores de un spray nano DEL MISMO TIPO (James lo
       autorizó con el sellador el 02-10 y pidió no poner aclaración) */
    var rt = prod.querySelector('.rev-title');
    if (rt && rt.firstChild && rt.firstChild.nodeType === 3) rt.firstChild.textContent = 'Opiniones de compradores ';
    var rf = prod.querySelector('.rev-fuente'); if (rf) rf.remove();
    var ra = prod.querySelector('.rev-auto-label'); if (ra) ra.textContent = 'Más opiniones de compradores';
    return true;
  }

  /* ============================================================
     HÉROE: una rayita fina se dibuja sobre la chapa (en la mitad derecha, donde
     está la puerta) y el barrido de brillo la borra al pasar: lo que hace el spray.
     Se repite con calma mientras el héroe está en pantalla. Parallax suave al bajar.
     ============================================================ */
  function heroeVivo() {
    var marco = document.querySelector('.p-aranazos .heroP__marco');
    var img = marco && marco.querySelector('.heroP__img');
    if (!marco || !img || QUIETO) return;

    var brillo = document.createElement('div');
    brillo.className = 'ar-brillo'; brillo.setAttribute('aria-hidden', 'true');
    marco.insertBefore(brillo, marco.querySelector('.heroP__fundido'));

    var NS = 'http://www.w3.org/2000/svg';
    var raya = document.createElementNS(NS, 'svg');
    raya.setAttribute('class', 'ar-raya'); raya.setAttribute('viewBox', '0 0 100 100');
    raya.setAttribute('preserveAspectRatio', 'none'); raya.setAttribute('aria-hidden', 'true');
    var trazo = document.createElementNS(NS, 'path');
    trazo.setAttribute('d', 'M66 59.5 C 71 58.4, 76 60.2, 82 59 S 91 57.6, 97 58.2');
    trazo.setAttribute('vector-effect', 'non-scaling-stroke');
    raya.appendChild(trazo);
    marco.insertBefore(raya, brillo);

    var largo = 0;
    function dibujar() {
      if (!trazo.animate) return;
      try { largo = trazo.getTotalLength() * 6; } catch (e) { largo = 300; }
      trazo.style.strokeDasharray = largo; trazo.style.strokeDashoffset = largo;
      /* se dibuja (0,7 s), se queda, y se borra justo cuando pasa el brillo */
      trazo.animate([
        { strokeDashoffset: largo, opacity: 1 },
        { strokeDashoffset: 0, opacity: 1, offset: .14 },
        { strokeDashoffset: 0, opacity: 1, offset: .30 },
        { strokeDashoffset: 0, opacity: 0, offset: .42 },
        { strokeDashoffset: 0, opacity: 0 }
      ], { duration: 5500, iterations: Infinity, delay: 700, easing: 'ease-out' });
    }
    if (img.complete) dibujar(); else img.addEventListener('load', dibujar);

    /* parallax: la foto baja más lento que la página (solo transform, sin saltos) */
    var visto = true, pidio = false;
    function mover() {
      pidio = false;
      if (!visto) return;
      var y = Math.min(window.scrollY || 0, 700);
      img.style.transform = 'translate3d(0,' + (y * 0.22).toFixed(1) + 'px,0)';
    }
    window.addEventListener('scroll', function () { if (!pidio) { pidio = true; requestAnimationFrame(mover); } }, { passive: true });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visto = e[0].isIntersecting; }).observe(marco);
  }

  /* raya de velocidad bajo cada título, una vez, al leerlo */
  function titulosVeloces() {
    if (QUIETO || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('ar-entra'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -18% 0px' });
    document.querySelectorAll('.p-aranazos #prod h2').forEach(function (h) { h.classList.add('ar-tit'); obs.observe(h); });
  }

  /* tarjetas y fotos que suben y se enderezan en cascada */
  function entradas() {
    if (QUIETO || !('IntersectionObserver' in window)) return;
    var els = document.querySelectorAll('.p-aranazos .ar-sube');
    document.body.classList.add('ar-mueve');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('ar-ya'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach(function (e) { obs.observe(e); });
    /* por si algo no llega a verse (pantallas raras), a los 4 s todo visible */
    setTimeout(function () { els.forEach(function (e) { e.classList.add('ar-ya'); }); }, 4000);
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) { heroeVivo(); titulosVeloces(); entradas(); return; }
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();
