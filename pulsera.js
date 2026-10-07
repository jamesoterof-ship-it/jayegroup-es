/* ============================================================
   PULSERA MAGNÉTICA ANTITABACO · ESPAÑA · página propia (07-10-2026).
   ui-ux-pro-max (aprobado por James 07-10): historia por capítulos, joyería sobria,
   negro piedra #1C1917 + dorado #A16207, Cormorant / Montserrat.
   Orden: gancho (héroe) → antes y después → compra → capítulo 1 "las ganas" →
   capítulo 2 "el gesto" (3 fotos) → vídeo → por qué ayuda → la pulsera → promoción →
   quedan → comparativa → opiniones → formulario. Botón de compra al final de cada capítulo.
   Movimiento propio: barra de avance dorada, destello lento sobre el héroe, títulos con
   línea dorada que se abre, entradas en fundido. Respeta "reducir movimiento".
   🔴 Textos: la pulsera es un RECORDATORIO, no un tratamiento (nada de curas ni plazos).
   Solo actúa con ?p=pulsera. Si este archivo falla, la ficha se ve igual.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (pid !== 'pulsera') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  function aComprar() { var f = document.getElementById('pedir'); if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' }); }
  var IR = svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>');
  function boton(txt) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cta pu-cta'; b.innerHTML = txt + ' ' + IR;
    b.addEventListener('click', aComprar);
    return b;
  }

  /* ---- CAPÍTULO 1 · las ganas llegan sin avisar ---- */
  function capituloGanas() {
    var m = [
      [svg('<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>'), 'Con el café', 'El primer sorbo de la mañana y la mano ya busca el paquete.'],
      [svg('<rect x="3" y="11" width="18" height="6" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>'), 'En el coche', 'Un atasco, un semáforo largo, y el mechero ya está ahí.'],
      [svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'), 'En la pausa', 'Los demás bajan a fumar y tú te quedas con las ganas.'],
    ];
    return '<section class="bloque pu-sec pu-ganas">'
      + '<span class="pu-num" aria-hidden="true">01</span>'
      + '<span class="pu-cap">Las ganas</span>'
      + '<h2 class="pu-h2">Llegan <em>sin avisar.</em></h2>'
      + '<p class="pu-lead">Dejarlo es una decisión que tomas una vez. Las ganas, en cambio, vuelven muchas veces al día, en los mismos momentos de siempre.</p>'
      + '<ul class="pu-momentos">' + m.map(function (x, i) {
          return '<li class="pu-entra" style="--i:' + i + '">' + x[0] + '<div><b>' + x[1] + '</b><span>' + x[2] + '</span></div></li>';
        }).join('') + '</ul>'
      + '</section>';
  }

  /* ---- CAPÍTULO 2 · el gesto que te frena (tres fotos aprobadas) ---- */
  function capituloGesto() {
    var pasos = [
      ['img/pulsera-palma.webp?v=1', 'La pulsera de piedra volcánica con su imán redondo plateado en la palma de una mano', 'Paso 1', 'Póntela', 'Elástica, se ajusta sola. La llevas todo el día y casi no la notas.'],
      ['img/pulsera-muneca.webp?v=1', 'Una mujer tranquila con una taza de té y la pulsera en la muñeca', 'Paso 2', 'Cuando lleguen las ganas, tócala', 'Siente la piedra y el imán. Esa pausa de unos segundos es la que frena el impulso.'],
      ['img/pulsera-pareja.webp?v=1', 'La muñeca de un hombre y la de una mujer, cada una con la misma pulsera', 'Paso 3', 'Recuerda tu decisión', 'Cada vez que la miras te acuerdas de por qué lo dejas. Y si lo dejáis juntos, mejor.'],
    ];
    return '<section class="bloque pu-sec pu-gesto">'
      + '<span class="pu-num" aria-hidden="true">02</span>'
      + '<span class="pu-cap">El gesto</span>'
      + '<h2 class="pu-h2">Un gesto pequeño <em>que te frena.</em></h2>'
      + '<p class="pu-lead">No es magia ni un tratamiento: es un recordatorio que no se queda en casa.</p>'
      + '<div class="pu-pasos">' + pasos.map(function (p, i) {
          return '<figure class="pu-paso pu-entra" style="--i:' + i + '">'
            + '<div class="pu-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="1000" height="1242"></div>'
            + '<figcaption><i>' + p[2] + '</i><b>' + p[3] + '</b><span>' + p[4] + '</span></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="pu-aviso"><p>La pulsera acompaña tu decisión de dejar el tabaco; no sustituye la ayuda de tu médico o farmacéutico. Por el imán, no la uses si llevas marcapasos u otro dispositivo implantado.</p></div>'
      + '</section>';
  }

  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var hero = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2');
    if (!hero || !arriba) return false;
    if (document.body.classList.contains('p-pulsera')) return true;
    document.body.classList.add('p-pulsera');

    if (!document.getElementById('pu-letras')) {
      var l = document.createElement('link');
      l.id = 'pu-letras'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,600&family=Montserrat:wght@400;500;600;700&display=swap';
      document.head.appendChild(l);
    }

    var hijos = [].slice.call(prod.children);
    var antesDespues = prod.querySelector('section.bloque.ba-sec');
    var porQue = prod.querySelector('.form-sec');
    var video = prod.querySelector('.vid-wrap');
    var descripcion = prod.querySelector('section.desc');
    var oferta = prod.querySelector('.promo-sec');
    var quedan = prod.querySelector('.esc-sec');
    var compara = prod.querySelector('.cmp-sec');
    var tras = hijos[hijos.indexOf(arriba) + 1];
    if (tras && (tras.className || '').trim() !== 'bloque') tras = null;

    /* la galería repetía las fotos del capítulo 2: fuera */
    ['.gal', '.miniz'].forEach(function (s) { var e = arriba.querySelector(s); if (e) e.remove(); });

    var ancla = hero;
    function pon(n) { if (!n) return; ancla.insertAdjacentElement('afterend', n); ancla = n; }
    pon(antesDespues); pon(arriba); pon(tras);
    var ganas = nodo(capituloGanas()); pon(ganas); ganas.appendChild(boton('La quiero, pago al recibir'));
    var gesto = nodo(capituloGesto()); pon(gesto); gesto.appendChild(boton('Pedir la mía'));
    pon(video); pon(porQue); pon(descripcion); pon(oferta); pon(quedan); pon(compara);

    if (antesDespues) {
      var e1 = antesDespues.querySelector('.eyebrow'); if (e1) e1.textContent = 'Antes y después';
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'El mismo café, <em>otra decisión.</em>';
      var c1 = antesDespues.querySelector('.cta'); if (c1) c1.remove();
    }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'La quiero';
    if (porQue) porQue.appendChild(boton('La quiero, pago al recibir'));
    if (video) {
      video.insertAdjacentHTML('afterbegin', '<div class="pu-vcab"><span class="pu-cap">En vídeo</span><h2 class="pu-h2">Así es <em>la pulsera.</em></h2></div>');
      var v = video.querySelector('video, .vid-prod');
      if (v) v.setAttribute('poster', 'img/pulsera-ficha-poster.webp?v=1');
    }
    if (oferta) {
      var ot = oferta.querySelector('h2') || oferta.firstElementChild;
      if (ot) ot.insertAdjacentHTML('afterend', '<figure class="pu-foto"><img src="img/pulsera-promo.webp?v=1" alt="Dos pulseras de piedra volcánica con el cartel de la promoción: 1 pulsera 25,95 €, 2 pulseras 37,95 € y 3 pulseras 47,95 €" loading="lazy" width="1000" height="1500"></figure>');
    }
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Pulsera'; }
    return true;
  }

  /* barra de avance de la lectura */
  function avance() {
    if (QUIETO) return;
    var b = document.createElement('div');
    b.className = 'pu-avance'; b.setAttribute('aria-hidden', 'true');
    document.body.appendChild(b);
    var pide = false;
    function pinta() {
      pide = false;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      b.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, (window.scrollY || 0) / h) : 0).toFixed(3) + ')';
    }
    window.addEventListener('scroll', function () { if (!pide) { pide = true; requestAnimationFrame(pinta); } }, { passive: true });
    pinta();
  }

  /* destello lento que cruza la foto del héroe (como la luz sobre el imán) */
  function destello() {
    var marco = document.querySelector('.p-pulsera .heroP__marco');
    if (!marco || QUIETO) return;
    var d = document.createElement('div');
    d.className = 'pu-destello'; d.setAttribute('aria-hidden', 'true');
    marco.insertBefore(d, marco.querySelector('.heroP__fundido'));
  }

  /* títulos con línea dorada y bloques que aparecen en fundido al leerlos */
  function alLeer() {
    var tit = document.querySelectorAll('.p-pulsera #prod h2');
    var ent = document.querySelectorAll('.p-pulsera .pu-entra');
    tit.forEach(function (h) { h.classList.add('pu-tit'); });
    if (QUIETO || !('IntersectionObserver' in window)) {
      tit.forEach(function (h) { h.classList.add('pu-visto'); }); ent.forEach(function (e) { e.classList.add('pu-visto'); });
      return;
    }
    document.body.classList.add('pu-mueve');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('pu-visto'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    tit.forEach(function (h) { obs.observe(h); });
    ent.forEach(function (e) { obs.observe(e); });
    /* por si algo no llega a verse, a los 4 s todo visible */
    setTimeout(function () { ent.forEach(function (e) { e.classList.add('pu-visto'); }); }, 4000);
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) { avance(); destello(); alLeer(); return; }
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();
