/* ============================================================
   PROYECTOR DE LUCES DE NAVIDAD EXTERIOR · ESPAÑA · página propia (17-11-2026) · Dropi PRO 2334
   James 17-11: "letras de Navidad, mira las fundas de Colombia, hazla igual" + "solo respeta secciones vídeo, reseñas y formulario".
   Orden de la funda de Colombia: portada verde pino (píldora de promoción que palpita, foto, titular, estrellas, texto, oferta con
   borde dorado y botones) · franja roja con 3 datos · vídeo "Así se ve" · "La casa más navideña de la calle" (fotos con pie) ·
   "Así se pone" (foto + pasos + cifras) · antes y después · reseñas, pago, garantía, preguntas, envío y formulario DE SIEMPRE.
   Sin nieve. Precios aprobados 17-11: 34,99 / 54,99 / 69,99 (anticipado 31,49 / 49,49 / 62,99).
   De la plantilla solo se usa la LÓGICA (paquetes, forma de pago, formulario, envío del pedido).
   Solo actúa con ?p=proyector-navidad. Si este archivo falla, la ficha se ve igual (plantilla).
   ============================================================ */
(function () {
  'use strict';
  var ID = 'proyector-navidad';
  var id = '';
  try { id = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (id !== ID) return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var PROD = (window.PRODUCTOS || []).filter(function (x) { return x.id === ID; })[0] || {};
  var PK = PROD.packs || [];
  var ANT = (PROD.anticipado && PROD.anticipado.precios) || [];
  var UNO = PK[0] ? PK[0].precio : 34.99, DOS = PK[1] ? PK[1].precio : 54.99;
  var DOS_YA = ANT[1] || 49.49;
  var OPS = (window.RESENAS || []).filter(function (r) { return r.producto === PROD.nombre; });
  var NOTA = OPS.length ? OPS.reduce(function (s, r) { return s + r.estrellas; }, 0) / OPS.length : 5;
  var CUANTAS = PROD.resenasTotal || OPS.length;
  var V = '?v=1';

  function eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function bajar(el) { if (el) el.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' }); }

  /* elige el paquete (y si hace falta, el pago por adelantado) en el formulario de la plantilla y baja al pedido */
  function aPedir(n, pre) {
    if (n) {
      var packs = document.querySelectorAll('#prod .pack');
      for (var k = 0; k < packs.length; k++) {
        if ((packs[k].textContent || '').indexOf(n + (n === 1 ? ' proyector' : ' proyectores')) >= 0) { packs[k].click(); break; }
      }
    }
    var op = document.querySelector('#pedir .pagoOp[data-pago="' + (pre ? 'pre' : 'cod') + '"]'); if (op) op.click();
    bajar(document.getElementById('pedir'));
  }
  function boton(etq, clase, accion) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'pn-btn' + (clase ? ' ' + clase : ''); b.textContent = etq;
    b.addEventListener('click', accion);
    return b;
  }

  /* ---------- 1 · portada verde pino ---------- */
  function hHeroe() {
    return '<section class="pn-heroe" aria-label="Proyector de luces de Navidad exterior">'
      + '<figure class="pn-heroe__foto"><span class="pn-cinta">Promoción · 2 x ' + eur(DOS) + '</span>'
      +   '<img src="img/proyector-heroe.webp' + V + '" width="900" height="1350" fetchpriority="high"'
      +   ' alt="El proyector negro con aros rojo y verde clavado en el césped lanza puntos de luz rojos y verdes sobre la fachada de una casa de noche">'
      +   puntos() + '<span class="pn-haz" aria-hidden="true"></span></figure>'
      + '<div class="pn-heroe__txt">'
      +   '<h1 class="pn-h1">Tu casa llena de <em>luces</em> en un minuto</h1>'
      /* la nota solo se muestra si la sección de reseñas existe (la plantilla de España exige 8 opiniones reales o no pinta ninguna) */
      +   (OPS.length >= 8 ? '<a class="pn-estrellas" href="#resenas"><i aria-hidden="true">★★★★★</i>' + NOTA.toFixed(1).replace('.', ',') + ' · ' + CUANTAS + ' reseñas</a>' : '')
      +   '<p class="pn-lead">Lo clavas en el jardín, lo enchufas y miles de puntos de luz rojos y verdes cubren tu fachada. Sin escaleras, sin cables por el tejado y resistente a la lluvia.</p>'
      /* James 17-11: en la portada va el precio de UNA unidad; la promoción de 2 va en su propia sección, y debajo el pago anticipado */
      +   '<div class="pn-oferta">'
      +     '<div><b>' + eur(UNO) + '</b></div>'
      +     '<div><span>1 proyector · pagas al recibir · envío gratis a toda España</span><span class="pn-ahorro">Promoción: 2 por ' + eur(DOS) + '</span></div>'
      +   '</div>'
      +   '<div class="pn-heroe__btns"></div>'
      + '</div>'
      + '</section>';
  }

  /* James 17-11 "al hero ponle efectos": puntitos de luz que titilan sobre la foto (rojo, dorado y blanco), en sitios al azar */
  function puntos() {
    var CL = ['pn-p-r', 'pn-p-o', 'pn-p-b'], h = '';
    for (var i = 0; i < 46; i++) {
      h += '<i class="' + CL[i % 3] + '" style="left:' + (Math.random() * 100).toFixed(1) + '%;top:' + (8 + Math.random() * 70).toFixed(1)
        + '%;animation-delay:' + (Math.random() * 3).toFixed(2) + 's;animation-duration:' + (1.6 + Math.random() * 2.2).toFixed(2) + 's"></i>';
    }
    return '<span class="pn-puntos" aria-hidden="true">' + h + '</span>';
  }

  /* ---------- franja roja con 3 datos ---------- */
  function hDatos() {
    return '<div class="pn-datos">'
      + '<div><b>1 min</b><span>Para instalarlo</span></div>'
      + '<div><b>Exterior</b><span>Resiste la lluvia</span></div>'
      + '<div><b>0</b><span>Escaleras ni cables</span></div>'
      + '</div>';
  }

  /* ---------- 3 · la casa más navideña de la calle ---------- */
  function hPaso1() {
    return '<section class="pn-sec" id="pn-paso1">'
      + '<h2 class="pn-h2">La casa más <em>navideña</em> de la calle</h2>'
      + '<div class="pn-benef">'
      +   '<figure><img src="img/proyector-balcon.webp' + V + '" width="900" height="1350" loading="lazy"'
      +     ' alt="Fachada de una casa con balcón cubierta de puntos de luz rojos y verdes, con el proyector en el jardín">'
      +     '<figcaption><b>Uno para la fachada y otro para el jardín</b>Por eso el más pedido es el de 2.</figcaption></figure>'
      +   '<figure><img src="img/proyector-lluvia.webp' + V + '" width="900" height="900" loading="lazy"'
      +     ' alt="El proyector clavado en el césped de noche lanzando luces rojas y verdes">'
      +     '<figcaption><b>Hecho para estar fuera</b>Resiste la lluvia: lo dejas en el jardín toda la Navidad.</figcaption></figure>'
      + '</div>'
      + '</section>';
  }

  /* ---------- 4 · así se pone ---------- */
  function hPaso2() {
    return '<section class="pn-sec" id="pn-paso2">'
      + '<h2 class="pn-h2">Así se <em>pone</em></h2>'
      + '<figure class="pn-foto"><img src="img/proyector-clavar.webp' + V + '" width="900" height="1350" loading="lazy"'
      +   ' alt="Una mano clava la estaca del proyector en el césped delante de una casa iluminada"></figure>'
      + '<ol class="pn-lista">'
      +   '<li>Clavas la estaca en el césped o en una maceta.</li>'
      +   '<li>Lo enchufas a la corriente con su adaptador.</li>'
      +   '<li>Lo apuntas a la fachada, a un árbol o a un muro: en un minuto está funcionando.</li>'
      + '</ol>'
      + '<h3 class="pn-h3">Sin complicaciones</h3>'
      + '<div class="pn-cifras">'
      +   '<div><b>Rojo y verde</b>miles de puntos de luz</div>'
      +   '<div><b>Enchufe</b>sin pilas ni baterías</div>'
      + '</div>'
      + '<p class="pn-txt">También sirve dentro de casa: apúntalo a una pared o al techo del salón.</p>'
      + '</section>';
  }

  /* ---------- promoción: imagen de oferta + escalera 1 / 2 / 3 (la de 2 destacada); al tocar, elige ese pack y baja al pedido ---------- */
  function hPromo() {
    var TRES = PK[2] ? PK[2].precio : 69.99;
    var ahorro2 = Math.round((UNO * 2 - DOS) * 100) / 100, ahorro3 = Math.round((UNO * 3 - TRES) * 100) / 100;
    var sec = nodo('<section class="pn-sec" id="pn-promo">'
      + '<h2 class="pn-h2">Promoción de <em>Navidad</em></h2>'
      + '<p class="pn-txt">Uno para la fachada y otro para el jardín, o uno para regalar. Pagas al recibir y el envío es gratis.</p>'
      + '<figure class="pn-foto"><img src="img/proyector-promo.webp' + V + '" width="900" height="900" loading="lazy"'
      +   ' alt="Oferta de Navidad: 2 proyectores por ' + eur(DOS) + ', pago contra reembolso y envío gratis"></figure>'
      + '<div class="pn-escalera">'
      +   '<button type="button" class="pn-esc" data-n="1"><b>1 proyector</b><strong>' + eur(UNO) + '</strong><small>Pagas al recibir</small></button>'
      +   '<button type="button" class="pn-esc pn-esc--top" data-n="2" data-cinta="Más pedido"><b>2 proyectores</b><strong>' + eur(DOS) + '</strong><small>Ahorras ' + eur(ahorro2) + '</small></button>'
      +   '<button type="button" class="pn-esc" data-n="3"><b>3 proyectores</b><strong>' + eur(TRES) + '</strong><small>Ahorras ' + eur(ahorro3) + '</small></button>'
      + '</div>'
      + '</section>');
    Array.prototype.forEach.call(sec.querySelectorAll('.pn-esc'), function (b) { b.addEventListener('click', function () { aPedir(+b.getAttribute('data-n')); }); });
    sec.appendChild(boton('Quiero 2 por ' + eur(DOS), 'pn-rebota', function () { aPedir(2); }));
    return sec;
  }

  /* ---------- montaje sobre la plantilla ---------- */
  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var pedir = document.getElementById('pedir');
    if (!prod.querySelector('.heroP') || !pedir) return false;
    if (document.body.classList.contains('p-' + ID)) return true;
    document.body.classList.add('p-' + ID);

    if (!document.getElementById('pn-fuentes')) {
      var l = document.createElement('link');
      l.id = 'pn-fuentes'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;500;600;700&display=swap';
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
    hijos.forEach(function (e) { if (queda.indexOf(e) < 0) e.classList.add('pn-oculto'); });

    var cola = [];
    var heroe = nodo(hHeroe());
    var hb = heroe.querySelector('.pn-heroe__btns');
    hb.appendChild(boton('Pedir el mío · ' + eur(UNO), 'pn-rebota', function () { aPedir(1); }));
    hb.appendChild(boton('Ver la promoción · 2 por ' + eur(DOS), 'pn-btn--pino', function () { bajar(document.getElementById('pn-promo')); }));
    hb.appendChild(boton('Ver cómo se ve', 'pn-btn--pino', function () { bajar(document.getElementById('pn-video')); }));
    cola.push(heroe);
    cola.push(nodo(hDatos()));
    if (vid) {
      vid.classList.add('pn-sec', 'pn-video'); vid.id = 'pn-video';
      Array.prototype.slice.call(vid.querySelectorAll('h2, .eyebrow')).forEach(function (h) { h.remove(); });
      vid.insertAdjacentHTML('afterbegin', '<h2 class="pn-h2">Así se <em>ve</em></h2>');
      var v = vid.querySelector('video'); if (v) v.setAttribute('poster', 'img/proyector-balcon.webp' + V);
      cola.push(vid);
    }
    cola.push(nodo(hPaso1()));
    var p2 = nodo(hPaso2()); p2.appendChild(boton('Lo quiero · 2 por ' + eur(DOS), '', function () { aPedir(2); })); cola.push(p2);
    if (ba) {
      ba.classList.add('pn-sec', 'pn-ba');
      var bk = ba.querySelector('.eyebrow'); if (bk) bk.remove();
      var bt = ba.querySelector('h2'); if (bt) { bt.className = 'pn-h2'; bt.innerHTML = 'Antes y <em>después</em>'; }
      var bc = ba.querySelector('.cta'); if (bc) bc.remove();
      cola.push(ba);
    }
    /* James 17-11: sección de PROMOCIÓN y justo debajo el PAGO ANTICIPADO (el bloque de siempre de la plantilla) */
    cola.push(hPromo());
    /* reseñas, pago, garantía, preguntas, envío y formulario: los de SIEMPRE, sin tocar (James 17-11) */
    [pAnt, res, gar, faq, envio, pedir].forEach(function (e) { if (e) cola.push(e); });

    var ancla = prod.firstChild;
    cola.forEach(function (n) { prod.insertBefore(n, ancla); });

    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Pedir 2 por ' + eur(DOS);

    mover();
    return true;
  }

  /* ---------- entradas al bajar (todo quieto con "reducir movimiento") ---------- */
  function mover() {
    if (QUIETO || !('IntersectionObserver' in window)) return;
    document.body.classList.add('pn-anima');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('pn-visto'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.p-' + ID + ' .pn-sec').forEach(function (el) { io.observe(el); });
  }

  function probar(n) {
    if (armar()) return;
    if (n < 80) setTimeout(function () { probar(n + 1); }, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { probar(0); });
  else probar(0);
})();
