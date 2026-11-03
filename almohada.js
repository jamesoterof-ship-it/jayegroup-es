/* ============================================================
   ALMOHADA CERVICAL MARIPOSA · ESPAÑA · página propia (03-11-2026, 2º diseño).
   James 03-11: "siempre hacen los mismos putos diseños… rediseña esa página otra vez" → el script manda también la
   COMPOSICIÓN, no solo los colores. Plano ui-ux-pro-max #92 (design-system/almohada-espana, James: "ok"):
   · Diales: variance 9 (atrevido / asimétrico) · motion 7 · density 3 (mucho aire).
   · Patrón Hero + Testimonials + CTA: héroe (CTA fijo abajo) → el problema → la solución → reseñas en carrusel → compra.
   · Estilo Voice-First Multimodal / ambiental: onda que "respira" (visualización de onda, pulso de escucha), transiciones suaves.
   · Movimiento: lista escalonada al entrar (300-450 ms, back.out(1.4): escala .92 → 1, 16 px hacia arriba, 60 ms entre una y otra).
   · Colores #64748B / #94A3B8 / botón #EA580C / fondo #F8FAFC / texto #334155 · letras Nunito (títulos) / DM Sans (texto).
   De la plantilla solo se usa la LÓGICA (paquetes, forma de pago, formulario, envío del pedido); su aspecto lo da almohada.css.
   🔴 Sin promesas médicas: comodidad, postura y descanso.
   Solo actúa con ?p=almohada. Si este archivo falla, la ficha se ve igual (plantilla).
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (pid !== 'almohada') return;

  var SIN_MOV = false;
  try { SIN_MOV = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function crear(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function euros(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  function ico(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  var I_FLECHA = ico('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>');
  var I_ANT = ico('<path d="M15 6l-6 6 6 6"/>'), I_SIG = ico('<path d="M9 6l6 6-6 6"/>');
  var I_PAUSA = ico('<path d="M8 5v14"/><path d="M16 5v14"/>'), I_PLAY = ico('<path d="M7 5l12 7-12 7z"/>');
  var I_CAMION = ico('<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>');
  var I_MANO = ico('<path d="M4 12h4l3 3h5a2 2 0 0 0 0-4h-3"/><path d="M8 12l3-4h6l3 3"/><path d="M2 12v6h3"/>');
  var I_LUNA = ico('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>');
  var I_ESTRELLA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"/></svg>';

  var P = (window.PRODUCTOS || []).find(function (x) { return x.id === 'almohada'; }) || {};
  var PACKS = P.packs || [];
  var PRE = (P.anticipado && P.anticipado.precios) || [];
  var P1 = PACKS[0] ? PACKS[0].precio : 28.99, P2 = PACKS[1] ? PACKS[1].precio : 46.99, PRE2 = PRE[1] || 41.99;
  var RS = (window.RESENAS || []).filter(function (r) { return r.producto === 'Almohada Cervical Mariposa'; });
  var MEDIA = RS.length ? (RS.reduce(function (a, r) { return a + r.estrellas; }, 0) / RS.length) : 5;
  var TOTAL = P.resenasTotal || RS.length;

  /* ir al pedido; con pack elige ese paquete en el formulario de la plantilla (su lógica, su precio) */
  function alPedido(cant) {
    if (cant) {
      var ps = document.querySelectorAll('#prod .pack');
      for (var i = 0; i < ps.length; i++) if (ps[i].textContent.indexOf(cant + ' almohada') >= 0) { ps[i].click(); break; }
    }
    var f = document.getElementById('pedir');
    if (f) f.scrollIntoView({ behavior: SIN_MOV ? 'auto' : 'smooth', block: 'start' });
  }
  function boton(txt, cant, clase) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'al2-btn' + (clase ? ' ' + clase : ''); b.innerHTML = '<span>' + txt + '</span>' + I_FLECHA;
    b.addEventListener('click', function () { alPedido(cant); });
    return b;
  }

  /* la onda que respira: 5 barras de "voz" + una línea que sube y baja como la respiración dormida */
  function onda() {
    return '<div class="al2-onda" aria-hidden="true">'
      + '<svg viewBox="0 0 320 60" preserveAspectRatio="none"><path class="al2-onda__l" d="M0 30 C 40 10, 80 50, 120 30 S 200 10, 240 30 S 300 50, 320 30"/>'
      + '<path class="al2-onda__l al2-onda__l--2" d="M0 30 C 40 45, 80 15, 120 30 S 200 45, 240 30 S 300 15, 320 30"/></svg></div>';
  }
  /* titular en cascada: cada letra cae con su retraso; las palabras no se parten */
  function cascada(txt, desde) {
    var k = desde || 0;
    return txt.split(' ').map(function (pal) {
      return '<span class="al2-cae__w">' + pal.split('').map(function (c) { return '<span class="al2-cae" style="--k:' + (k++) + '">' + c + '</span>'; }).join('') + '</span>';
    }).join(' ');
  }

  /* ---------- 1 · héroe asimétrico: titular a la izquierda, la almohada sola y grande corrida a la derecha ---------- */
  function heroe() {
    return '<section class="al2-heroe" aria-label="Almohada Cervical Mariposa">'
      + '<div class="al2-heroe__txt">'
      +   '<a class="al2-nota" href="#resenas"><span class="al2-est" aria-hidden="true">' + new Array(6).join(I_ESTRELLA) + '</span>'
      +     '<b>' + MEDIA.toFixed(1).replace('.', ',') + '</b> · ' + TOTAL + ' reseñas</a>'
      +   '<h1 class="al2-h1" aria-label="Despierta sin el cuello cargado.">'
      +     '<span aria-hidden="true">' + cascada('Despierta sin el', 0) + '<br><em>' + cascada('cuello cargado.', 20) + '</em></span></h1>'
      +   onda()
      + '</div>'
      + '<figure class="al2-heroe__foto"><span class="al2-pulso" aria-hidden="true"></span>'
      +   '<img src="img/almohada-sola.webp?v=1" width="900" height="900" fetchpriority="high" alt="La almohada cervical mariposa gris con los laterales blancos, sola">'
      +   '<figcaption class="al2-chip al2-chip--noche">' + I_LUNA + '<span>Viscoelástica · funda lavable</span></figcaption></figure>'
      + '<p class="al2-lead">Almohada cervical en forma de mariposa: el centro hundido sujeta la cabeza, el borde acompaña el cuello y las alas dejan sitio a los brazos.</p>'
      + '<div class="al2-heroe__compra">'
      +   '<p class="al2-oferta"><span class="al2-oferta__q">2 almohadas</span><b class="al2-oferta__p">' + euros(P2) + '</b>'
      +     '<s class="al2-oferta__a">' + euros(P1 * 2) + '</s></p>'
      +   '<p class="al2-oferta__pre">o <b>' + euros(PRE2) + '</b> pagando ahora · entrega prioritaria en 14 h</p>'
      + '</div>'
      + '<ul class="al2-datos">'
      +   '<li>' + I_CAMION + '<span>Envío gratis · 24-48 h</span></li>'
      +   '<li>' + I_MANO + '<span>Pagas al recibir</span></li>'
      + '</ul>'
      + '</section>';
  }

  /* ---------- 2 · el problema: tres frases grandes, escalonadas a izquierda y derecha ---------- */
  function seccionProblema() {
    var malas = [
      ['Te levantas con el cuello cargado.', 'La almohada de siempre es igual de alta por todas partes y el cuello pasa la noche doblado.'],
      ['Das vueltas buscando postura.', 'De lado, el brazo no tiene sitio y acaba debajo de la almohada.'],
      ['A las semanas ya está plana.', 'El relleno se aplasta y cada noche hay que doblarla para que sujete algo.'],
    ];
    return '<section class="al2-sec al2-problema" aria-labelledby="al2-prob-t">'
      + '<p class="al2-rot">El problema</p>'
      + '<h2 class="al2-h2" id="al2-prob-t">No es tu cuello.<br><em>Es tu almohada.</em></h2>'
      + '<ol class="al2-frases al2-escalon">' + malas.map(function (m, i) {
          return '<li class="al2-frase al2-frase--' + (i % 2 ? 'der' : 'izq') + '"><span class="al2-n">0' + (i + 1) + '</span><strong>' + m[0] + '</strong><p>' + m[1] + '</p></li>';
        }).join('') + '</ol>'
      + '</section>';
  }

  /* ---------- 3 · la solución: foto grande desbordada + las cuatro zonas en burbujas ---------- */
  function seccionSolucion() {
    var zonas = [
      ['Centro hundido', 'La cabeza queda recogida y no se va de lado.'],
      ['Borde para el cuello', 'El cuello queda en línea con la espalda.'],
      ['Alas para los brazos', 'De lado, el hombro y el brazo tienen su sitio.'],
      ['Funda lavable', 'Transpirable, con cremallera, a la lavadora.'],
    ];
    return '<section class="al2-sec al2-solucion" aria-labelledby="al2-sol-t">'
      + '<p class="al2-rot">La solución</p>'
      + '<h2 class="al2-h2" id="al2-sol-t">Una forma pensada<br><em>para tu cuello.</em></h2>'
      + '<figure class="al2-desborde"><img src="img/almohada-detalle.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="Una mano presiona el centro hundido de la almohada mariposa gris de espuma viscoelástica"></figure>'
      + '<ul class="al2-zonas al2-escalon">' + zonas.map(function (z) {
          return '<li><strong>' + z[0] + '</strong><span>' + z[1] + '</span></li>';
        }).join('') + '</ul>'
      + '<figure class="al2-desborde al2-desborde--izq"><img src="img/almohada-posturas.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="La almohada mariposa usada boca arriba, de lado y boca abajo"><figcaption>De lado, boca arriba o boca abajo.</figcaption></figure>'
      + '</section>';
  }

  /* ---------- 4 · reseñas en carrusel (anterior / siguiente / pausa; se para con el ratón, el foco y "reducir movimiento") ---------- */
  function seccionCarrusel() {
    var rs = RS.filter(function (r) { return r.foto; }).slice(0, 5);
    if (!rs.length) return null;
    var sec = crear('<section class="al2-sec al2-opin" aria-roledescription="carrusel" aria-labelledby="al2-op-t">'
      + '<p class="al2-rot">Opiniones del producto</p>'
      + '<h2 class="al2-h2" id="al2-op-t">Quienes ya<br><em>duermen con ella.</em></h2>'
      + '<div class="al2-car" tabindex="0">' + rs.map(function (r, i) {
          return '<figure class="al2-slide" role="group" aria-roledescription="opinión" aria-label="' + (i + 1) + ' de ' + rs.length + '"' + (i ? ' hidden' : '') + '>'
            + '<img src="' + esc(r.foto) + '" width="720" height="720" loading="lazy" alt="Foto de la almohada que subió ' + esc(r.nombre) + '">'
            + '<figcaption><span class="al2-est" aria-label="' + r.estrellas + ' de 5 estrellas">' + new Array(r.estrellas + 1).join(I_ESTRELLA) + '</span>'
            + '<q>' + esc(r.texto) + '</q><b>' + esc(r.nombre) + '</b><small>Compra verificada · ' + esc(r.pais) + '</small></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="al2-ctrl">'
      +   '<button type="button" class="al2-cb" data-a="ant" aria-label="Opinión anterior">' + I_ANT + '</button>'
      +   '<span class="al2-pos" aria-live="polite">1 de ' + rs.length + '</span>'
      +   '<button type="button" class="al2-cb" data-a="pausa" aria-label="Pausar">' + I_PAUSA + '</button>'
      +   '<button type="button" class="al2-cb" data-a="sig" aria-label="Opinión siguiente">' + I_SIG + '</button>'
      + '</div></section>');
    var slides = sec.querySelectorAll('.al2-slide'), pos = sec.querySelector('.al2-pos'), car = sec.querySelector('.al2-car');
    var bPausa = sec.querySelector('[data-a="pausa"]');
    var i = 0, reloj = null, pausado = SIN_MOV, encima = false;
    function ir(n) { slides[i].hidden = true; i = (n + slides.length) % slides.length; slides[i].hidden = false; pos.textContent = (i + 1) + ' de ' + slides.length; }
    function parar() { if (reloj) { clearInterval(reloj); reloj = null; } }
    function andar() { parar(); if (!pausado && !encima) reloj = setInterval(function () { ir(i + 1); }, 6000); }
    function pintarPausa() { bPausa.innerHTML = pausado ? I_PLAY : I_PAUSA; bPausa.setAttribute('aria-label', pausado ? 'Reanudar' : 'Pausar'); }
    sec.querySelector('[data-a="ant"]').addEventListener('click', function () { ir(i - 1); andar(); });
    sec.querySelector('[data-a="sig"]').addEventListener('click', function () { ir(i + 1); andar(); });
    bPausa.addEventListener('click', function () { pausado = !pausado; pintarPausa(); andar(); });
    car.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { ir(i - 1); andar(); } if (e.key === 'ArrowRight') { ir(i + 1); andar(); } });
    ['mouseenter', 'focusin'].forEach(function (t) { sec.addEventListener(t, function () { encima = true; parar(); }); });
    ['mouseleave', 'focusout'].forEach(function (t) { sec.addEventListener(t, function () { encima = false; andar(); }); });
    pintarPausa(); andar();
    return sec;
  }

  /* ---------- 5 · la promoción del pack de 2 (CTA después de las reseñas), con su cuenta atrás hasta medianoche ---------- */
  function seccionPromo() {
    var sec = crear('<section class="al2-sec al2-promo" aria-labelledby="al2-pr-t">'
      + '<p class="al2-rot al2-rot--naranja">Promoción · termina hoy</p>'
      + '<h2 class="al2-h2" id="al2-pr-t">Una para ti,<br><em>otra para tu pareja.</em></h2>'
      + '<div class="al2-promo__caja">'
      +   '<p class="al2-promo__q">2 almohadas</p>'
      +   '<p class="al2-promo__p"><b>' + euros(P2) + '</b><s>' + euros(P1 * 2) + '</s></p>'
      +   '<p class="al2-promo__u">' + euros(Math.round(P2 / 2 * 100) / 100) + ' cada una · ahorras ' + euros(Math.round((P1 * 2 - P2) * 100) / 100) + '</p>'
      +   '<p class="al2-promo__pre">o <b>' + euros(PRE2) + '</b> pagando ahora con tarjeta o PayPal, con entrega prioritaria en 14 h</p>'
      +   '<div class="al2-reloj" aria-label="Tiempo que queda de la promoción"><span><b data-r="h">00</b>horas</span><span><b data-r="m">00</b>min</span><span><b data-r="s">00</b>seg</span></div>'
      + '</div></section>');
    var hh = sec.querySelector('[data-r="h"]'), mm = sec.querySelector('[data-r="m"]'), ss = sec.querySelector('[data-r="s"]');
    function tic() {
      var a = new Date(), f = new Date(a); f.setHours(24, 0, 0, 0);
      var q = Math.max(0, Math.floor((f - a) / 1000));
      hh.textContent = String(Math.floor(q / 3600)).padStart(2, '0');
      mm.textContent = String(Math.floor(q % 3600 / 60)).padStart(2, '0');
      ss.textContent = String(q % 60).padStart(2, '0');
    }
    tic(); setInterval(tic, 1000);
    sec.querySelector('.al2-promo__caja').appendChild(boton('Quiero la promoción', 2));
    return sec;
  }

  function montar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var heroP = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2'), pedir = document.getElementById('pedir');
    if (!heroP || !arriba || !pedir) return false;
    if (document.body.classList.contains('p-almohada')) return true;
    document.body.classList.add('p-almohada');

    if (!document.getElementById('al-letras')) {
      var f = document.createElement('link');
      f.id = 'al-letras'; f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;0,900;1,800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap';
      document.head.appendChild(f);
    }

    var hijos = [].slice.call(prod.children);
    var antesDespues = prod.querySelector('section.bloque.ba-sec');
    var video = prod.querySelector('.vid-wrap');
    var resenas = document.getElementById('resenas');
    var garantia = prod.querySelector('.gar-sec');
    var anticipado = prod.querySelector('.pagoAntES');
    var preguntas = hijos.filter(function (e) { return /Preguntas frecuentes/.test((e.querySelector('h2') || {}).textContent || ''); })[0];
    var envios = hijos.filter(function (e) { return /Con quién enviamos/.test((e.querySelector('h2') || {}).textContent || ''); })[0];

    /* lo de la plantilla que repetía o tenía su propio aspecto: fuera (la lógica del pedido sigue en #pedir) */
    hijos.forEach(function (e) {
      if ([antesDespues, video, resenas, garantia, anticipado, preguntas, envios, pedir].indexOf(e) < 0) e.classList.add('al2-fuera');
    });

    var h = crear(heroe());
    prod.insertBefore(h, prod.firstChild);
    var tras = h;
    function poner(n) { if (!n) return; tras.insertAdjacentElement('afterend', n); tras = n; }
    var prob = crear(seccionProblema()); poner(prob); prob.appendChild(boton('Quiero dormir mejor', 2));
    poner(crear(seccionSolucion()));
    poner(antesDespues);
    if (video) {
      video.classList.add('al2-sec', 'al2-video');
      video.insertAdjacentHTML('afterbegin', '<p class="al2-rot">En vídeo</p><h2 class="al2-h2">Almohada normal<br><em>contra la mariposa.</em></h2>');
      var v = video.querySelector('video'); if (v) v.setAttribute('poster', 'img/almohada-sola.webp?v=1');
      poner(video);
    }
    var car = seccionCarrusel(); if (car) poner(car);
    poner(seccionPromo());
    poner(anticipado);
    poner(pedir);
    poner(resenas); poner(garantia); poner(preguntas); poner(envios);

    if (antesDespues) {
      antesDespues.classList.add('al2-sec');
      var r1 = antesDespues.querySelector('.eyebrow'); if (r1) { r1.className = 'al2-rot'; r1.textContent = 'Antes y después'; }
      var t1 = antesDespues.querySelector('h2'); if (t1) { t1.className = 'al2-h2'; t1.innerHTML = 'El mismo cuello,<br><em>otra almohada.</em>'; }
      var c1 = antesDespues.querySelector('.cta'); if (c1) c1.remove();
      var marcoBA = antesDespues.querySelector('.ba-img');
      if (marcoBA && !marcoBA.querySelector('.al2-ba')) marcoBA.insertAdjacentHTML('beforeend', '<span class="al2-ba al2-ba--antes">Antes</span><span class="al2-ba al2-ba--despues">Después</span>');
    }
    var pide = pedir.querySelector('h2'); if (pide) { pide.textContent = 'Pide la tuya'; pide.classList.add('al2-h2'); }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.innerHTML = '<span>Las 2 por ' + euros(P2) + '</span>';

    entradas();
    return true;
  }

  /* entrada escalonada (back.out(1.4) · 300-450 ms · escala .92 · 16 px · 60 ms entre una y otra); quieto con "reducir movimiento" */
  function entradas() {
    var grupos = document.querySelectorAll('.p-almohada .al2-escalon, .p-almohada .al2-sec');
    if (SIN_MOV || !('IntersectionObserver' in window)) { grupos.forEach(function (g) { g.classList.add('al2-visto'); }); return; }
    document.body.classList.add('al2-mueve');
    document.querySelectorAll('.p-almohada .al2-escalon').forEach(function (g) {
      [].forEach.call(g.children, function (c, k) { c.style.setProperty('--d', (k * 60) + 'ms'); });
    });
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('al2-visto'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    grupos.forEach(function (g) { obs.observe(g); });
    setTimeout(function () { grupos.forEach(function (g) { g.classList.add('al2-visto'); }); }, 6000);
  }

  function intentar(n) {
    if (montar()) return;
    if (n < 80) setTimeout(function () { intentar(n + 1); }, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { intentar(0); });
  else intentar(0);
})();
