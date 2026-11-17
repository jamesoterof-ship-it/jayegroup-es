/* ============================================================
   MASAJEADOR CERVICAL MARIPOSA · ESPAÑA · página propia (17-11-2026)
   Plano ui-ux-pro-max guardado en design-system/masajeador-cervical-es (pages/masajeador.md), aprobado por James 17-11
   ("eso es como la camisilla"): fondo #050510, tarjetas #101823 / #1D1D28, cian neón #00FFFF, violeta #7B61FF,
   letra Space Grotesk (titulares grandes en mayúsculas). Botón en cian en vez del fucsia del plano (James lo aprobó así).
   Orden de secciones como la camisilla de Colombia (James 17-11 "mira el estilo de la camisilla"): portada a pantalla completa,
   el problema con la pregunta en la imagen, cinta inclinada, tarjetas de vidrio, vídeo real, 3 pasos, antes/después,
   fotos en casa, opiniones con foto REAL de compradores, oferta con cuenta atrás, formulario. Botón fijo abajo.
   Variedad de fotos (James 17-11 "no la hagas todas oscuras"): oscuras solo héroe, promoción y packs; el resto con luz de día.
   De la plantilla solo se usa la LÓGICA (paquetes, forma de pago, formulario, envío del pedido).
   🔴 Sin promesas médicas: relajar, aliviar la tensión, masaje. Nunca curar ni tratar enfermedades.
   Solo actúa con ?p=masajeador. Si este archivo falla, la ficha se ve igual (plantilla).
   ============================================================ */
(function () {
  'use strict';
  var id = '';
  try { id = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (id !== 'masajeador') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var PROD = (window.PRODUCTOS || []).filter(function (x) { return x.id === 'masajeador'; })[0] || {};
  var PK = PROD.packs || [];
  var ANT = (PROD.anticipado && PROD.anticipado.precios) || [];
  var UNO = PK[0] ? PK[0].precio : 27.99, DOS = PK[1] ? PK[1].precio : 39.99, TRES = PK[2] ? PK[2].precio : 49.99;
  var DOS_YA = ANT[1] || 35.99;
  var OPS = (window.RESENAS || []).filter(function (r) { return r.producto === 'Masajeador Cervical Mariposa'; });
  var NOTA = OPS.length ? OPS.reduce(function (s, r) { return s + r.estrellas; }, 0) / OPS.length : 5;
  var CUANTAS = PROD.resenasTotal || OPS.length;
  var V = '?v=1';

  function eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  function txt(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function svg(p) { return '<svg class="mz-i" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + p + '</svg>'; }
  var S_ESTR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.5 1.2 6.4L12 17.1l-5.7 3.1 1.2-6.4-4.7-4.5 6.4-.8z"/></svg>';
  var S_IR = svg('<path d="M4 12h15"/><path d="M13 5l7 7-7 7"/>');
  var S_ONDAS = svg('<path d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M3 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0" opacity=".5"/>');
  var S_MODOS = svg('<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>');
  var S_RAYO = svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>');
  var S_PLUMA = svg('<path d="M20 4C10 4 5 9 4 20"/><path d="M8 16c4 0 8-3 9-9"/>');
  var S_CUERPO = svg('<circle cx="12" cy="5" r="2.5"/><path d="M12 8v7M7 11h10M9 22l3-7 3 7"/>');
  var S_REGALO = svg('<rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12"/><path d="M12 9c-1.8-3.6-6.2-3.6-5 0M12 9c1.8-3.6 6.2-3.6 5 0"/>');
  var S_CAMION = svg('<path d="M2 6h12v10H2z"/><path d="M14 9h4.5l3.5 3.5V16h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>');
  var S_BILLETE = svg('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>');
  var S_ANT = svg('<path d="M15 5l-7 7 7 7"/>'), S_SIG = svg('<path d="M9 5l7 7-7 7"/>');
  var S_PAUSA = svg('<path d="M8 5v14M16 5v14"/>'), S_PLAY = svg('<path d="M7 4.5l12 7.5-12 7.5z"/>');

  /* al pulsar cualquier botón: elige el paquete en el formulario de la plantilla y baja al pedido */
  function aPedir(n) {
    if (n) {
      var packs = document.querySelectorAll('#prod .pack');
      for (var k = 0; k < packs.length; k++) {
        var t = packs[k].textContent || '';
        if (t.indexOf(n + (n === 1 ? ' masajeador' : ' masajeadores')) >= 0) { packs[k].click(); break; }
      }
    }
    var dest = document.getElementById('pedir');
    if (dest) dest.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' });
  }
  function boton(etq, n, extra) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'mz-btn' + (extra ? ' ' + extra : '');
    b.innerHTML = '<span>' + etq + '</span>' + S_IR;
    b.addEventListener('click', function () { aPedir(n); });
    return b;
  }
  function titulo(rot, a, b, idt) {
    return (rot ? '<p class="mz-rot">' + rot + '</p>' : '') + '<h2 class="mz-h2"' + (idt ? ' id="' + idt + '"' : '') + '>' + a + (b ? ' <em>' + b + '</em>' : '') + '</h2>';
  }

  /* ---------- 1 · portada a pantalla completa: el aparato grande y el titular encima ---------- */
  /* orden de la camisilla CO: cartel de promoción arriba · foto · titular DEBAJO de la foto · estrellas · texto ·
     caja de precio (1 unidad + promoción 2 por, tachado y ahorro) · botón · "ver cómo funciona" · franja de 3 cifras */
  function hHeroe() {
    var ahorro = Math.round((UNO * 2 - DOS) * 100) / 100;
    return '<section class="mz-heroe" aria-label="Masajeador cervical mariposa">'
      + '<p class="mz-pildora">Promoción · 2 x ' + eur(DOS) + '</p>'
      + '<figure class="mz-heroe__foto"><img src="img/masajeador-heroe.webp' + V + '" width="900" height="1350" fetchpriority="high"'
      +   ' alt="El masajeador cervical mariposa negro con anillos azules encendidos, flotando sobre un fondo oscuro con ondas de luz azul">'
      +   '<span class="mz-ondas" aria-hidden="true"><i></i><i></i><i></i></span></figure>'
      + '<div class="mz-heroe__txt">'
      +   '<h1 class="mz-h1" data-letras>Alivio para<br>tu <em>cuello</em></h1>'
      +   '<a class="mz-valor" href="#resenas"><span class="mz-estr">' + new Array(6).join(S_ESTR) + '</span>'
      +     '<b>' + NOTA.toFixed(1).replace('.', ',') + '</b><span>· ' + CUANTAS + ' opiniones</span></a>'
      +   '<p class="mz-intro">Te lo pegas en la nuca, eliges uno de sus 8 modos y en 15 minutos el cuello cargado se relaja. Sin cables y recargable.</p>'
      +   '<div class="mz-oferta mz-vidrio">'
      +     '<p class="mz-oferta__uno"><b>' + eur(UNO) + '</b><span>1 masajeador · pagas al recibir · envío gratis</span></p>'
      +     '<div class="mz-oferta__promo"><p class="mz-oferta__rot">Promoción</p><p class="mz-oferta__dos">2 por ' + eur(DOS) + '</p>'
      +       '<p class="mz-oferta__ahorro"><s>' + eur(UNO * 2) + '</s><span>Ahorras ' + eur(ahorro) + '</span></p></div>'
      +   '</div>'
      +   '<div class="mz-heroe__btns"></div>'
      + '</div>'
      + '<ul class="mz-datos mz-vidrio">'
      +   '<li><b>8</b><span>Modos</span></li>'
      +   '<li><b>15\'</b><span>Por sesión</span></li>'
      +   '<li><b>0 €</b><span>Costo de envío</span></li>'
      + '</ul>'
      + '</section>';
  }

  /* ---------- 2 · el problema: la pregunta en la imagen ---------- */
  function hProblema() {
    return '<section class="mz-sec mz-problema" aria-labelledby="mz-pr">'
      + titulo('¿Te pasa?', 'El cuello', 'no perdona', 'mz-pr')
      + '<p class="mz-txt">Horas con el móvil, el ordenador o conduciendo, y al final del día <b>la nuca y los hombros están de piedra</b>.</p>'
      + '<figure class="mz-marco"><img src="img/masajeador-problema.webp' + V + '" width="900" height="1350" loading="lazy"'
      +   ' alt="Un hombre en la oficina se toca la nuca con gesto cansado, debajo de la pregunta ¿Te duele el cuello al final del día?"></figure>'
      + '</section>';
  }

  /* ---------- cinta inclinada que corre ---------- */
  function hCinta() {
    var f = ['8 modos', 'Recargable USB', 'Sin cables', 'Pagas al recibir', 'Regalo de Navidad', '15 minutos'];
    var una = f.map(function (x) { return '<span>' + x + '</span><i aria-hidden="true">·</i>'; }).join('');
    return '<div class="mz-cinta" aria-hidden="true"><div class="mz-cinta__pista">' + una + una + una + '</div></div>';
  }

  /* ---------- 3 · la solución: tarjetas de vidrio ---------- */
  function hSolucion() {
    var t = [
      [S_ONDAS, 'Pulsos suaves', 'Masajean y relajan el músculo cargado de la nuca y los hombros.'],
      [S_MODOS, '8 modos', 'Del más suave al más intenso, con varios niveles para cada uno.'],
      [S_RAYO, 'Recargable', 'Se carga con el cable USB, en cualquier cargador de móvil.'],
      [S_PLUMA, 'Sin cables', 'Se pega en la piel y te mueves libre por casa.'],
      [S_CUERPO, 'Todo el cuerpo', 'Cuello, hombros, espalda, brazos y piernas.'],
      [S_REGALO, 'Para regalar', 'Para quien trabaja sentado o llega a casa reventado.'],
    ];
    return '<section class="mz-sec mz-solucion" aria-labelledby="mz-so">'
      + titulo('La solución', 'Pulsos que', 'relajan', 'mz-so')
      + '<p class="mz-txt">Un masajeador del tamaño de la palma de la mano que trabaja mientras tú descansas.</p>'
      + '<ul class="mz-tarjetas mz-cascada">' + t.map(function (x) {
          return '<li class="mz-vidrio">' + x[0] + '<strong>' + x[1] + '</strong><p>' + x[2] + '</p></li>';
        }).join('') + '</ul>'
      + '</section>';
  }

  /* ---------- 4 · cómo se usa: los 3 pasos ---------- */
  function hPasos() {
    return '<section class="mz-sec mz-pasos" aria-labelledby="mz-pa">'
      + titulo('Cómo se usa', 'Pégalo', 'y listo', 'mz-pa')
      + '<figure class="mz-marco"><img src="img/masajeador-pasos.webp' + V + '" width="900" height="900" loading="lazy"'
      +   ' alt="Tres pasos: pegar el masajeador en la nuca, elegir el modo con el botón M y relajarse en el sofá"></figure>'
      + '</section>';
  }

  /* ---------- foto grande con título y texto (como "Te queda mejor la ropa" de la camisilla) ---------- */
  function hFoto(img, alt, rot, a, b, texto) {
    return '<section class="mz-sec mz-dos">'
      + '<figure class="mz-marco"><img src="img/' + img + '.webp' + V + '" width="900" height="1350" loading="lazy" alt="' + alt + '"></figure>'
      + '<div class="mz-dos__txt">' + titulo(rot, a, b) + '<p class="mz-txt">' + texto + '</p></div>'
      + '</section>';
  }

  /* ---------- 5 · en su día a día: carrusel de fotos variadas (luz de día y de casa) ---------- */
  function hVida() {
    var f = [
      ['masajeador-sofa', 1350, 'Un hombre relajado en el sofá con el masajeador pegado en la nuca', 'En el sofá, después del trabajo.'],
      ['masajeador-cuello', 1350, 'Una mujer cansada en la cocina se toca la nuca al final del día', 'Para ese cuello cargado de cada noche.'],
      ['masajeador-regalo', 1350, 'El masajeador sobre una caja de regalo junto al árbol de Navidad', 'Un regalo que se usa todos los días.'],
      ['masajeador-ligero', 900, 'Una mano sostiene el masajeador entre los dedos para mostrar lo ligero que es', 'Ligero: cabe en la palma de la mano.'],
      ['masajeador-recargable', 900, 'El masajeador cargándose con un cable USB en la mesita de noche', 'Se carga como el móvil.'],
      ['masajeador-modos', 900, 'El botón central del masajeador con la pantalla y el anillo azul encendidos', '8 modos y varios niveles.'],
    ];
    var sec = nodo('<section class="mz-sec mz-vida" aria-roledescription="carrusel" aria-labelledby="mz-vi">'
      + titulo('En tu día a día', 'Donde', 'lo necesites', 'mz-vi')
      + '<div class="mz-carril" tabindex="0">' + f.map(function (x, k) {
          return '<figure class="mz-diapo" role="group" aria-roledescription="foto" aria-label="' + (k + 1) + ' de ' + f.length + '">'
            + '<img src="img/' + x[0] + '.webp' + V + '" width="900" height="' + x[1] + '" loading="lazy" alt="' + x[2] + '">'
            + '<figcaption>' + x[3] + '</figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="mz-mandos"><button type="button" class="mz-mando" data-m="atras" aria-label="Foto anterior">' + S_ANT + '</button>'
      + '<button type="button" class="mz-mando" data-m="sigue" aria-label="Foto siguiente">' + S_SIG + '</button></div>'
      + '</section>');
    var carril = sec.querySelector('.mz-carril');
    function mueve(d) { carril.scrollBy({ left: d * carril.clientWidth * 0.8, behavior: QUIETO ? 'auto' : 'smooth' }); }
    sec.querySelector('[data-m="atras"]').addEventListener('click', function () { mueve(-1); });
    sec.querySelector('[data-m="sigue"]').addEventListener('click', function () { mueve(1); });
    return sec;
  }

  /* ---------- 6 · opiniones con FOTO REAL de compradores ---------- */
  function hOpiniones() {
    var lista = OPS.filter(function (r) { return r.foto; }).slice(0, 5);
    if (!lista.length) return null;
    var sec = nodo('<section class="mz-sec mz-opin" aria-roledescription="carrusel" aria-labelledby="mz-op">'
      + titulo('Opiniones del producto', 'Fotos de', 'quien ya lo usa', 'mz-op')
      + '<div class="mz-pista" tabindex="0">' + lista.map(function (r, k) {
          return '<figure class="mz-op mz-vidrio" role="group" aria-roledescription="opinión" aria-label="' + (k + 1) + ' de ' + lista.length + '"' + (k ? ' hidden' : '') + '>'
            + '<img src="' + txt(r.foto) + V + '" width="720" height="720" loading="lazy" alt="Foto real del masajeador que subió ' + txt(r.nombre) + '">'
            + '<figcaption><span class="mz-estr" aria-label="' + r.estrellas + ' de 5 estrellas">' + new Array(r.estrellas + 1).join(S_ESTR) + '</span>'
            + '<blockquote>' + txt(r.texto) + '</blockquote><cite>' + txt(r.nombre) + '</cite><small>Compra verificada</small></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="mz-mandos">'
      +   '<button type="button" class="mz-mando" data-m="atras" aria-label="Opinión anterior">' + S_ANT + '</button>'
      +   '<span class="mz-cuenta" aria-live="polite">1 / ' + lista.length + '</span>'
      +   '<button type="button" class="mz-mando" data-m="pausa" aria-label="Pausar">' + S_PAUSA + '</button>'
      +   '<button type="button" class="mz-mando" data-m="sigue" aria-label="Opinión siguiente">' + S_SIG + '</button>'
      + '</div></section>');
    var caras = sec.querySelectorAll('.mz-op'), cuenta = sec.querySelector('.mz-cuenta'), pista = sec.querySelector('.mz-pista');
    var bP = sec.querySelector('[data-m="pausa"]');
    var actual = 0, timer = 0, parado = QUIETO, dentro = false;
    function ver(n) { caras[actual].hidden = true; actual = (n + caras.length) % caras.length; caras[actual].hidden = false; cuenta.textContent = (actual + 1) + ' / ' + caras.length; }
    function frena() { clearInterval(timer); timer = 0; }
    function gira() { frena(); if (!parado && !dentro) timer = setInterval(function () { ver(actual + 1); }, 6500); }
    function icono() { bP.innerHTML = parado ? S_PLAY : S_PAUSA; bP.setAttribute('aria-label', parado ? 'Reanudar' : 'Pausar'); }
    sec.querySelector('[data-m="atras"]').addEventListener('click', function () { ver(actual - 1); gira(); });
    sec.querySelector('[data-m="sigue"]').addEventListener('click', function () { ver(actual + 1); gira(); });
    bP.addEventListener('click', function () { parado = !parado; icono(); gira(); });
    pista.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { ver(actual - 1); gira(); } else if (e.key === 'ArrowRight') { ver(actual + 1); gira(); } });
    sec.addEventListener('mouseenter', function () { dentro = true; frena(); });
    sec.addEventListener('mouseleave', function () { dentro = false; gira(); });
    sec.addEventListener('focusin', function () { dentro = true; frena(); });
    sec.addEventListener('focusout', function () { dentro = false; gira(); });
    icono(); gira();
    return sec;
  }

  /* ---------- 7 · la oferta: imagen de oferta, caja con cuenta atrás hasta medianoche y packs ---------- */
  function hPromo() {
    var sec = nodo('<section class="mz-sec mz-promo" aria-labelledby="mz-pm">'
      + titulo('Oferta de Navidad', 'Uno para ti.', 'Otro para regalar.', 'mz-pm')
      + '<figure class="mz-marco mz-marco--brillo"><img src="img/masajeador-promo.webp' + V + '" width="900" height="900" loading="lazy"'
      +   ' alt="Oferta de Navidad: 2 masajeadores por ' + eur(DOS) + ', pago contra reembolso y envío gratis"></figure>'
      + '<div class="mz-caja mz-vidrio">'
      +   '<p class="mz-caja__pr"><b>' + eur(DOS) + '</b><s>' + eur(UNO * 2) + '</s></p>'
      +   '<p class="mz-caja__u">2 masajeadores · ' + eur(Math.round(DOS / 2 * 100) / 100) + ' cada uno · ahorras ' + eur(Math.round((UNO * 2 - DOS) * 100) / 100) + '</p>'
      +   '<p class="mz-caja__ya">o <b>' + eur(DOS_YA) + '</b> pagando ahora con tarjeta o PayPal, con entrega prioritaria en 14 h</p>'
      +   '<div class="mz-reloj" role="timer" aria-label="Tiempo que queda de la promoción"><span><b data-t="h">00</b>h</span><span><b data-t="m">00</b>min</span><span><b data-t="s">00</b>seg</span></div>'
      + '</div>'
      + '<figure class="mz-marco"><img src="img/masajeador-packs.webp' + V + '" width="900" height="900" loading="lazy"'
      +   ' alt="Packs: 1 masajeador ' + eur(UNO) + ', 2 masajeadores ' + eur(DOS) + ' (el más pedido) y 3 masajeadores ' + eur(TRES) + '"></figure>'
      + '</section>');
    var h = sec.querySelector('[data-t="h"]'), m = sec.querySelector('[data-t="m"]'), s = sec.querySelector('[data-t="s"]');
    function dos(n) { return (n < 10 ? '0' : '') + n; }
    function tic() {
      var ahora = new Date(), fin = new Date(ahora); fin.setHours(24, 0, 0, 0);
      var q = Math.max(0, Math.floor((fin - ahora) / 1000));
      h.textContent = dos(Math.floor(q / 3600)); m.textContent = dos(Math.floor(q % 3600 / 60)); s.textContent = dos(q % 60);
    }
    tic(); setInterval(tic, 1000);
    sec.querySelector('.mz-caja').appendChild(boton('Quiero los 2', 2));
    return sec;
  }

  /* ---------- montaje sobre la plantilla ---------- */
  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var pedir = document.getElementById('pedir');
    if (!prod.querySelector('.heroP') || !pedir) return false;
    if (document.body.classList.contains('p-masajeador')) return true;
    document.body.classList.add('p-masajeador');

    if (!document.getElementById('mz-fuentes')) {
      var l = document.createElement('link');
      l.id = 'mz-fuentes'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
      document.head.appendChild(l);
    }

    var hijos = Array.prototype.slice.call(prod.children);
    var ba = prod.querySelector('section.bloque.ba-sec');
    var vid = prod.querySelector('.vid-wrap');
    var res = document.getElementById('resenas');
    var gar = prod.querySelector('.gar-sec');
    var pAnt = prod.querySelector('.pagoAntES');
    function porTitulo(re) { return hijos.filter(function (e) { return re.test(((e.querySelector('h2') || {}).textContent) || ''); })[0]; }
    var faq = porTitulo(/Preguntas frecuentes/), envio = porTitulo(/Con quién enviamos/);
    var queda = [ba, vid, res, gar, pAnt, faq, envio, pedir];
    hijos.forEach(function (e) { if (queda.indexOf(e) < 0) e.classList.add('mz-oculto'); });

    var cola = [];
    var heroe = nodo(hHeroe());
    var hb = heroe.querySelector('.mz-heroe__btns');
    hb.appendChild(boton('Pedir 2 por ' + eur(DOS), 2));
    var ver = document.createElement('button'); ver.type = 'button'; ver.className = 'mz-btn mz-btn--sombra'; ver.innerHTML = '<span>Ver cómo funciona</span>';
    ver.addEventListener('click', function () { var d = document.getElementById('mz-pa'); if (d) d.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'center' }); });
    hb.appendChild(ver);
    cola.push(heroe);
    cola.push(nodo(hProblema()));
    cola.push(nodo(hCinta()));
    var sol = nodo(hSolucion()); sol.appendChild(boton('Pedir el mío', 1)); cola.push(sol);
    if (vid) {
      vid.classList.add('mz-sec', 'mz-video');
      vid.insertAdjacentHTML('afterbegin', '<p class="mz-rot">En vídeo</p><h2 class="mz-h2">Míralo <em>en acción</em></h2>');
      var v = vid.querySelector('video'); if (v) v.setAttribute('poster', 'img/masajeador-modos.webp' + V);
      cola.push(vid);
    }
    cola.push(nodo(hPasos()));
    if (ba) {
      ba.classList.add('mz-sec', 'mz-ba');
      var bk = ba.querySelector('.eyebrow'); if (bk) { bk.className = 'mz-rot'; bk.textContent = 'Antes y después'; }
      var bt = ba.querySelector('h2'); if (bt) { bt.className = 'mz-h2'; bt.innerHTML = 'Del cuello de piedra <em>al sofá</em>'; }
      var bc = ba.querySelector('.cta'); if (bc) bc.remove();
      cola.push(ba);
    }
    /* como "Te queda mejor la ropa" y "3 colores" de la camisilla: una foto grande con su título y su texto */
    cola.push(nodo(hFoto('masajeador-sofa', 'Un hombre relajado en el sofá con el masajeador pegado en la nuca', 'Cada noche', 'Tu momento', 'de relax',
      'Llegas a casa, te lo pegas en la nuca y te tumbas en el sofá. Quince minutos y el cuello se suelta.')));
    cola.push(nodo(hFoto('masajeador-regalo', 'El masajeador sobre una caja de regalo junto al árbol de Navidad', 'Esta Navidad', 'El regalo', 'que se usa',
      'Para tus padres, tu pareja o quien pasa el día sentado. El pack de 2 es el más pedido: uno para ti y otro para regalar.')));
    /* reseñas, pago, garantía, preguntas, envío y formulario: los de SIEMPRE, sin tocar (James 17-11) */
    [pAnt, res, gar, faq, envio, pedir].forEach(function (e) { if (e) cola.push(e); });

    var ancla = prod.firstChild;
    cola.forEach(function (n) { prod.insertBefore(n, ancla); });

    var ht = pedir.querySelector('h2'); if (ht) { ht.textContent = 'Pide el tuyo'; ht.classList.add('mz-h2'); }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.innerHTML = '<span>Pedir 2 por ' + eur(DOS) + '</span>';

    mover();
    return true;
  }

  /* ---------- movimiento: titular letra por letra y entradas en cascada (todo quieto con "reducir movimiento") ---------- */
  function mover() {
    if (QUIETO) { document.body.classList.add('mz-quieto'); return; }
    var h1 = document.querySelector('.mz-h1[data-letras]');
    if (h1) {
      var etq = h1.textContent, n = 0;
      (function parte(el) {
        Array.prototype.slice.call(el.childNodes).forEach(function (c) {
          if (c.nodeType === 3) {
            var f = document.createDocumentFragment();
            c.textContent.split('').forEach(function (ch) {
              var s = document.createElement('span'); s.className = 'mz-letra'; s.setAttribute('aria-hidden', 'true');
              s.textContent = ch; s.style.animationDelay = (n++ * 0.035) + 's'; f.appendChild(s);
            });
            el.replaceChild(f, c);
          } else if (c.nodeType === 1 && c.tagName !== 'BR') parte(c);
        });
      })(h1);
      h1.setAttribute('aria-label', etq);
    }
    if (!('IntersectionObserver' in window)) return;
    document.body.classList.add('mz-anima');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('mz-visto'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('.p-masajeador .mz-sec, .p-masajeador .mz-cascada > *').forEach(function (el) { io.observe(el); });
  }

  function probar(n) {
    if (armar()) return;
    if (n < 80) setTimeout(function () { probar(n + 1); }, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { probar(0); });
  else probar(0);
})();
