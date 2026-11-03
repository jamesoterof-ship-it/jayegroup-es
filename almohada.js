/* ============================================================
   ALMOHADA CERVICAL MARIPOSA · ESPAÑA · página propia (03-11-2026).
   James 02-11: "vamos primero con almohada" · "promociona la 2, ese combo" · 03-11 "la del hero debe ser la almohada sola".
   Plano del script ui-ux-pro-max (design-system/almohada-espana, 03-11; James: "tú tienes que correr el script y todo eso"):
   · Patrón Hero + Testimonials + CTA: héroe → el problema → la solución → reseñas en carrusel → pedido.
     CTA en el héroe (fijo abajo) y después de las reseñas. Carrusel con anterior / siguiente / pausa, se para al pasar
     el ratón, al enfocar y con "reducir movimiento", y anuncia la posición ("2 de 5").
   · Estilo Neubrutalism: bordes negros de 3 px, sombra sólida 4px 4px 0 #000, esquinas rectas, sin degradados.
   · Colores #18181B / #3F3F46 / botón #2563EB / fondo #FAFAFA · letras EB Garamond / Lato. Todo en almohada.css.
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
  function alPedido() { var f = document.getElementById('pedir'); if (f) f.scrollIntoView({ behavior: SIN_MOV ? 'auto' : 'smooth', block: 'start' }); }
  function ico(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  var I_FLECHA = ico('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>');
  var I_ANT = ico('<path d="M15 6l-6 6 6 6"/>'), I_SIG = ico('<path d="M9 6l6 6-6 6"/>');
  var I_PAUSA = ico('<path d="M8 5v14"/><path d="M16 5v14"/>'), I_PLAY = ico('<path d="M7 5l12 7-12 7z"/>');
  var I_ESTRELLA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"/></svg>';
  function boton(txt) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'al-btn'; b.innerHTML = '<span>' + txt + '</span>' + I_FLECHA;
    b.addEventListener('click', alPedido);
    return b;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- 2 · el problema ---------- */
  function seccionProblema() {
    var malas = [
      ['Te levantas con el cuello cargado', 'La almohada de siempre es igual de alta por todas partes y el cuello pasa la noche doblado.'],
      ['Das vueltas buscando postura', 'De lado, el brazo no tiene sitio y acaba debajo de la almohada.'],
      ['A las semanas ya está plana', 'El relleno se aplasta y cada noche hay que doblarla para que sujete algo.'],
    ];
    return '<section class="al-sec al-problema" aria-labelledby="al-prob-t">'
      + '<p class="al-rot">El problema</p>'
      + '<h2 class="al-h2" id="al-prob-t">No es tu cuello. <em>Es tu almohada.</em></h2>'
      + '<ol class="al-lista">' + malas.map(function (m, i) {
          return '<li class="al-caja"><b class="al-num">0' + (i + 1) + '</b><div><strong>' + m[0] + '</strong><p>' + m[1] + '</p></div></li>';
        }).join('') + '</ol>'
      + '</section>';
  }

  /* ---------- 3 · la solución ---------- */
  function seccionSolucion() {
    var zonas = [
      ['Centro hundido', 'La cabeza queda recogida y no se va de lado.'],
      ['Borde para el cuello', 'Acompaña la curva: el cuello queda en línea con la espalda.'],
      ['Alas para los brazos', 'De lado, el hombro y el brazo tienen su sitio.'],
      ['Funda lavable', 'Transpirable, con cremallera, a la lavadora.'],
    ];
    return '<section class="al-sec al-solucion" aria-labelledby="al-sol-t">'
      + '<p class="al-rot">La solución</p>'
      + '<h2 class="al-h2" id="al-sol-t">Una forma pensada <em>para tu cuello.</em></h2>'
      + '<figure class="al-marco"><img src="img/almohada-detalle.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="Una mano presiona el centro hundido de la almohada mariposa gris de espuma viscoelástica"></figure>'
      + '<ul class="al-zonas">' + zonas.map(function (z) {
          return '<li class="al-caja"><strong>' + z[0] + '</strong><span>' + z[1] + '</span></li>';
        }).join('') + '</ul>'
      + '<figure class="al-marco"><img src="img/almohada-posturas.webp?v=1" width="900" height="900" loading="lazy"'
      +   ' alt="La almohada mariposa usada boca arriba, de lado y boca abajo"><figcaption>De lado, boca arriba o boca abajo.</figcaption></figure>'
      + '</section>';
  }

  /* ---------- 4 · reseñas en carrusel (las que traen foto del comprador) ---------- */
  function seccionCarrusel() {
    var rs = (window.RESENAS || []).filter(function (r) { return r.producto === 'Almohada Cervical Mariposa' && r.foto; }).slice(0, 5);
    if (!rs.length) return null;
    var html = '<section class="al-sec al-opin" aria-roledescription="carrusel" aria-labelledby="al-op-t">'
      + '<p class="al-rot">Opiniones del producto</p>'
      + '<h2 class="al-h2" id="al-op-t">Lo que dicen <em>quienes ya duermen con ella.</em></h2>'
      + '<div class="al-car" tabindex="0">'
      + rs.map(function (r, i) {
          return '<figure class="al-slide al-caja" role="group" aria-roledescription="opinión" aria-label="' + (i + 1) + ' de ' + rs.length + '"' + (i ? ' hidden' : '') + '>'
            + '<img src="' + esc(r.foto) + '" width="720" height="720" loading="lazy" alt="Foto de la almohada que subió ' + esc(r.nombre) + '">'
            + '<figcaption><span class="al-est" aria-label="' + r.estrellas + ' de 5 estrellas">' + new Array(r.estrellas + 1).join(I_ESTRELLA) + '</span>'
            + '<q>' + esc(r.texto) + '</q><b>' + esc(r.nombre) + '</b><small>Compra verificada · ' + esc(r.pais) + '</small></figcaption></figure>';
        }).join('')
      + '</div>'
      + '<div class="al-ctrl">'
      +   '<button type="button" class="al-cb" data-a="ant" aria-label="Opinión anterior">' + I_ANT + '</button>'
      +   '<span class="al-pos" aria-live="polite">1 de ' + rs.length + '</span>'
      +   '<button type="button" class="al-cb" data-a="pausa" aria-label="Pausar">' + I_PAUSA + '</button>'
      +   '<button type="button" class="al-cb" data-a="sig" aria-label="Opinión siguiente">' + I_SIG + '</button>'
      + '</div>'
      + '</section>';
    var sec = crear(html);
    var slides = sec.querySelectorAll('.al-slide'), pos = sec.querySelector('.al-pos'), car = sec.querySelector('.al-car');
    var bPausa = sec.querySelector('[data-a="pausa"]');
    var i = 0, reloj = null, pausado = SIN_MOV, encima = false;
    function ir(n) {
      slides[i].hidden = true; i = (n + slides.length) % slides.length; slides[i].hidden = false;
      pos.textContent = (i + 1) + ' de ' + slides.length;
    }
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

  function montar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var hero = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2');
    if (!hero || !arriba) return false;
    if (document.body.classList.contains('p-almohada')) return true;
    document.body.classList.add('p-almohada');

    if (!document.getElementById('al-letras')) {
      var f = document.createElement('link');
      f.id = 'al-letras'; f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Lato:wght@400;700;900&display=swap';
      document.head.appendChild(f);
    }

    /* el titular en cascada va ENCIMA de la foto, en el azul vacío de arriba; la almohada queda sola y grande abajo */
    var marco = hero.querySelector('.heroP__marco'), h1 = hero.querySelector('.heroP__h1');
    if (marco && h1 && !marco.querySelector('.al-heroTit')) {
      var capa = document.createElement('div');
      capa.className = 'al-heroTit';
      var encima = hero.querySelector('.heroP__nota') || hero.querySelector('.heroP__kicker');
      if (encima) capa.appendChild(encima);
      capa.appendChild(h1);
      marco.appendChild(capa);
    }

    var hijos = [].slice.call(prod.children);
    var antesDespues = prod.querySelector('section.bloque.ba-sec');
    var ventajas = prod.querySelector('.form-sec');
    var descripcion = prod.querySelector('section.desc');
    var oferta = prod.querySelector('.promo-sec');
    var compara = prod.querySelector('.cmp-sec');
    var video = prod.querySelector('.vid-wrap');
    var resenas = prod.querySelector('.res-sec');
    var siguiente = hijos[hijos.indexOf(arriba) + 1];
    if (siguiente && (siguiente.className || '').trim() !== 'bloque') siguiente = null;

    /* orden del plano: héroe → problema → solución (+ antes/después y vídeo) → reseñas → pedido (promoción y formulario) */
    var tras = hero;
    function poner(n) { if (!n) return; tras.insertAdjacentElement('afterend', n); tras = n; }
    var prob = crear(seccionProblema()); poner(prob); prob.appendChild(boton('Quiero dormir mejor'));
    poner(crear(seccionSolucion()));
    poner(antesDespues);
    if (video) {
      video.classList.add('al-sec', 'al-video');
      video.insertAdjacentHTML('afterbegin', '<p class="al-rot">En vídeo</p><h2 class="al-h2">Almohada normal <em>contra la mariposa.</em></h2>');
      var v = video.querySelector('video');
      if (v) v.setAttribute('poster', 'img/almohada-sola.webp?v=1');
      poner(video);
    }
    var car = seccionCarrusel(); if (car) { poner(car); car.appendChild(boton('La quiero, pago al recibir')); }
    poner(resenas);
    poner(oferta);
    poner(arriba); poner(siguiente);
    poner(ventajas); poner(compara); poner(descripcion);

    if (antesDespues) {
      var r1 = antesDespues.querySelector('.eyebrow'); if (r1) r1.textContent = 'Antes y después';
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'El mismo cuello, <em>otra almohada.</em>';
      var c1 = antesDespues.querySelector('.cta'); if (c1) c1.remove();
      var marcoBA = antesDespues.querySelector('.ba-img');
      if (marcoBA && !marcoBA.querySelector('.al-ba')) marcoBA.insertAdjacentHTML('beforeend', '<span class="al-ba al-ba--antes">Antes</span><span class="al-ba al-ba--despues">Después</span>');
    }
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'La mariposa'; }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'La quiero';
    var pide = document.querySelector('#pedir h2');
    if (pide) pide.textContent = 'Pide la tuya';
    return true;
  }

  function intentar(n) {
    if (montar()) return;
    if (n < 80) setTimeout(function () { intentar(n + 1); }, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { intentar(0); });
  else intentar(0);
})();
