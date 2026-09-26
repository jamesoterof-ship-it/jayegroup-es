/* ============================================================
   REVISOR DE PÁGINA · Jaye Group
   ============================================================
   James, 26-09: "tú no revisas... me presentas las cosas sin revisarlas".
   Tiene razón. Este archivo existe para que eso no vuelva a pasar: se pasa
   ENTERO sobre la página publicada ANTES de enseñarle nada, y si algo falla
   no se le enseña.

   POR QUÉ NO BASTA CON MIRAR LA CAPTURA
   Las tarjetas negras que él vio el 26-09 se me escaparon porque mi revisión
   leía `background-color`, y un degradado no vive ahí: vive en
   `background-image`, y `background-color` devuelve transparente. Este
   revisor mira LOS DOS, y además escarba los colores dentro del degradado.

   CÓMO SE USA
     Se pega en la consola del navegador con la página abierta, o se ejecuta
     con javascript_tool. Devuelve un objeto con el veredicto.

       revisar()            todo
       revisar({paleta:1})  solo un grupo

   QUÉ MIRA
     1. Oscuros   colores negros o casi negros en una página clara
     2. Contraste texto que no llega a 4,5:1 (3:1 si es grande)
     3. Fotos     rotas, sin alt, o sin medidas (saltan al cargar)
     4. Efectos   secciones que entran de golpe
     5. Textos    párrafos larguísimos sin plegar
     6. Toque     botones y enlaces por debajo de 44px
     7. Iconos    emojis usados como icono
     8. Consola   errores de JavaScript
   ============================================================ */
(function (global) {
  'use strict';

  /* ---- color ---------------------------------------------------------- */

  /* Los navegadores devuelven el color de tres maneras:
       rgb(183, 110, 121)            de toda la vida, 0-255
       rgba(183, 110, 121, .5)       con alfa
       color(srgb 0.717 0.431 0.47)  el formato nuevo, 0-1
     Leer el tercero como si fuera 0-255 da una luminancia de 0 y hace pensar
     que un rosa es negro. La primera versión de este revisor cayó justo ahí y
     marcó dos falsos oscuros: se comprueba el formato, no se asume. */
  function aRGB(c, conAlfa) {
    if (!c) return null;
    var s = String(c).trim();
    if (s === 'transparent' || s === 'none') return null;

    var m = s.match(/-?\d*\.?\d+(?:e-?\d+)?/gi);
    if (!m || m.length < 3) return null;

    var esSrgb = /^color\(/i.test(s);
    var v = m.slice(0, 3).map(parseFloat);
    var alfa = m.length > 3 ? parseFloat(m[3]) : 1;
    if (alfa === 0) return null;                    // transparente

    if (esSrgb) v = v.map(function (x) { return Math.round(x * 255); });
    if (v.some(function (x) { return isNaN(x); })) return null;
    v = v.map(function (x) { return Math.max(0, Math.min(255, x)); });
    return conAlfa ? { rgb: v, a: alfa } : v;
  }

  /* Mezcla un color semitransparente con lo que tiene debajo. Sin esto, un
     fondo "rosa al 10% sobre blanco" -que el ojo ve casi blanco- se mide como
     rosa opaco, y el texto oscuro encima parece tener mal contraste cuando lo
     tiene de sobra. Me paso el 26-09 con el pack elegido: cantaba 3,46 y en
     pantalla se lee perfectamente. */
  function mezclar(encima, debajo, a) {
    return encima.map(function (v, i) { return Math.round(v * a + debajo[i] * (1 - a)); });
  }

  function lum(rgb) {
    var a = rgb.map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }

  function razon(f, b) {
    if (!f || !b) return null;
    var a = lum(f), c = lum(b);
    return +(((Math.max(a, c) + 0.05) / (Math.min(a, c) + 0.05)).toFixed(2));
  }

  /* El fondo de verdad: si el elemento es transparente, el que se ve es el de
     su padre. Sin esto, todo mide contra transparente y no detecta nada. */
  function fondoReal(el) {
    /* Se suben las capas guardando las semitransparentes, y al llegar a una
       opaca se mezclan de abajo arriba. Asi sale el color que ve el ojo. */
    var capas = [], p = el;
    while (p && p !== document.documentElement) {
      var c = aRGB(getComputedStyle(p).backgroundColor, true);
      if (c) {
        if (c.a >= 0.999) { capas.push(c); break; }
        capas.push(c);
      }
      p = p.parentElement;
    }
    var base = (capas.length && capas[capas.length - 1].a >= 0.999)
      ? capas.pop().rgb : [255, 255, 255];
    for (var i = capas.length - 1; i >= 0; i--) base = mezclar(capas[i].rgb, base, capas[i].a);
    return base;
  }

  /* AQUÍ ESTABA EL AGUJERO: un degradado va en background-image, y
     background-color devuelve transparente. Se sacan los colores de dentro. */
  function coloresDelFondo(el) {
    var s = getComputedStyle(el), fuera = [];
    var c = aRGB(s.backgroundColor);
    if (c) fuera.push(c);
    var img = s.backgroundImage || '';
    if (img && img !== 'none') {
      var trozos = img.match(/(?:rgba?|color)\([^)]+\)/g) || [];
      trozos.forEach(function (t) { var r = aRGB(t); if (r) fuera.push(r); });
    }
    return fuera;
  }

  /* ---- 1 · oscuros ----------------------------------------------------- */

  function oscuros(cfg) {
    var LIMITE = cfg.limiteOscuro != null ? cfg.limiteOscuro : 0.22;
    var salvo = cfg.oscurosPermitidos || ['marq', 'pie', 'ck-', 'cookie', 'wa-', 'vid'];
    var fallos = [];

    document.querySelectorAll('*').forEach(function (e) {
      if (e.offsetHeight < 24 || e.offsetWidth < 24) return;
      var cl = (e.className || '').toString();
      if (salvo.some(function (s) { return cl.indexOf(s) > -1; })) return;
      if (e.closest && salvo.some(function (s) { return e.closest('[class*="' + s + '"]'); })) return;

      coloresDelFondo(e).forEach(function (rgb) {
        if (lum(rgb) > LIMITE) return;
        /* Un color oscuro NO es lo mismo que negro. Lo que aquí se persigue es
           el negro y los grises muy oscuros; un rosa vino o un verde bosque
           son colores de marca y pueden ir de fondo.
           Sin esto, al cerrar el rosa de acento a #A8505F el revisor canto
           ocho "negros" que eran ese rosa. Se mide la saturacion: si el color
           tiene color de verdad, no es lo que buscamos. */
        var mx = Math.max.apply(null, rgb), mn = Math.min.apply(null, rgb);
        var satura = mx === 0 ? 0 : (mx - mn) / mx;
        if (satura > 0.35) return;
        fallos.push({
          donde: '.' + (cl || e.tagName).slice(0, 26),
          alto: e.offsetHeight,
          color: 'rgb(' + rgb.join(',') + ')',
          luz: +lum(rgb).toFixed(3),
          en: getComputedStyle(e).backgroundImage !== 'none' ? 'degradado' : 'fondo',
        });
      });
    });
    return unico(fallos, 'donde');
  }

  /* ---- 2 · contraste --------------------------------------------------- */

  function contraste() {
    var fallos = [];
    document.querySelectorAll('*').forEach(function (e) {
      if (e.children.length) return;
      var t = (e.textContent || '').trim();
      if (t.length < 3) return;
      var s = getComputedStyle(e);
      if (s.visibility === 'hidden' || s.display === 'none' || +s.opacity < 0.5) return;
      if (!e.offsetHeight) return;

      var tam = parseFloat(s.fontSize), peso = +s.fontWeight || 400;
      var grande = tam >= 24 || (tam >= 18.66 && peso >= 700);
      var r = razon(aRGB(s.color), fondoReal(e));
      if (r == null) return;
      var pide = grande ? 3 : 4.5;
      if (r >= pide) return;

      fallos.push({ texto: t.slice(0, 34), razon: r, pide: pide, tam: Math.round(tam) + 'px',
                    color: s.color, donde: '.' + (e.className || e.tagName).toString().slice(0, 20) });
    });
    return fallos.sort(function (a, b) { return a.razon - b.razon; }).slice(0, 12);
  }

  /* ---- 3 · fotos ------------------------------------------------------- */

  function fotos() {
    var rotas = [], sinAlt = [], sinMedida = [];
    [].forEach.call(document.images, function (i) {
      var n = (i.currentSrc || i.src).split('/').pop();
      if (i.complete && i.naturalWidth === 0) rotas.push(n);
      /* alt="" PUESTO A PROPOSITO es lo correcto para una imagen decorativa:
         le dice al lector de pantalla que la salte. Lo que esta mal es que
         falte el atributo. La primera version no distinguia y marcaba como
         fallo las miniaturas de los packs y las banderas, que estan bien. */
      if (!i.hasAttribute('alt')) sinAlt.push(n);
      var s = getComputedStyle(i);
      if (!i.getAttribute('width') && !i.getAttribute('height') && s.aspectRatio === 'auto') sinMedida.push(n);
    });
    return { rotas: rotas, sinAlt: sinAlt, sinMedida: sinMedida };
  }

  /* ---- 3b · lo que se quedó apagado ------------------------------------ */

  /* Solo tiene sentido DESPUES de recorrer(): un bloque que sigue por debajo
     de 0,9 cuando ya paso por pantalla y las transiciones acabaron es un
     bloque que el visitante no llega a ver. */
  function apagados() {
    /* CON LA PESTAÑA OCULTA ESTA MEDIDA NO VALE.
       El navegador congela los IntersectionObserver y las transiciones de una
       pestaña que no se ve: todo queda en su estado de partida y parece
       apagado. El 26-09 di por rotos diez bloques que estaban bien, y el pane
       de la app estaba escondido detrás de otra ventana.
       Antes de creerse un apagado, la pestaña tiene que estar delante. */
    if (document.visibilityState !== 'visible') {
      return ['(sin medir: la pestaña está oculta y el navegador congela las '
            + 'transiciones. Ponla delante y repite.)'];
    }
    var fuera = [];
    document.querySelectorAll('#prod *, .pie *').forEach(function (e) {
      if (e.offsetHeight < 30) return;
      var o = parseFloat(getComputedStyle(e).opacity);
      if (o >= 0.9) return;
      fuera.push('.' + (e.className || e.tagName).toString().slice(0, 26) + ' = ' + o);
    });
    return [...new Set(fuera)].slice(0, 10);
  }

  /* ---- 4 · efectos ----------------------------------------------------- */

  function efectos(cfg) {
    var raiz = document.querySelector(cfg.contenedor || '#prod') || document.body;
    var marca = cfg.marcaEfecto || '.ba-rev, .ba-fi, .ba-tar, .ba-paso, .ma-rev';
    var salvo = cfg.sinEfectoOk || ['heroP', 'ba-cifras', 'arriba2', 'ma-hero'];
    var sin = [];
    [].forEach.call(raiz.children, function (s) {
      if (s.offsetHeight < 60) return;
      var cl = (s.className || '').toString();
      if (salvo.some(function (x) { return cl.indexOf(x) > -1; })) return;
      if (s.matches(marca) || s.querySelector(marca)) return;
      sin.push('.' + cl.slice(0, 24) + ' (' + s.offsetHeight + 'px)');
    });
    return sin;
  }

  /* ---- 5 · textos largos ----------------------------------------------- */

  function textos(cfg) {
    var TOPE = cfg.topeTexto || 320;
    var largos = [];
    document.querySelectorAll('p, li, blockquote').forEach(function (e) {
      if (!e.offsetHeight) return;
      var t = (e.textContent || '').trim();
      if (t.length <= TOPE) return;
      var s = getComputedStyle(e);
      if (s.webkitLineClamp && s.webkitLineClamp !== 'none') return;   // ya plegado
      largos.push({ largo: t.length, texto: t.slice(0, 40) + '...' });
    });
    return largos.sort(function (a, b) { return b.largo - a.largo; }).slice(0, 8);
  }

  /* ---- 6 · área de toque ----------------------------------------------- */

  function toque() {
    var chicos = [];
    document.querySelectorAll('button, a, [role="button"], input[type="submit"]').forEach(function (e) {
      if (!e.offsetHeight) return;
      var r = e.getBoundingClientRect();
      if (r.height >= 44 && r.width >= 44) return;
      if (r.height < 8 || r.width < 8) return;      // decorativos
      chicos.push(Math.round(r.width) + 'x' + Math.round(r.height) + '  ' +
                  ((e.textContent || '').trim().slice(0, 22) || '.' + (e.className || '').toString().slice(0, 18)));
    });
    return [...new Set(chicos)].slice(0, 10);
  }

  /* ---- 7 · emojis como icono ------------------------------------------- */

  function emojis() {
    var EMO = /[\u{1F300}-\u{1FAFF}\u{2190}-\u{21FF}\u{2600}-\u{27BF}\u{FE0F}]/u;
    var fuera = [];
    document.querySelectorAll('#prod *, .pie *').forEach(function (e) {
      if (e.children.length) return;
      var t = (e.textContent || '').trim();
      if (!t || t.length > 3 || !EMO.test(t)) return;   // suelto = usado como icono
      if (/^[★☆·•\s\d]+$/.test(t)) return;          // estrellas y viñetas de valoracion: son texto, no icono
      fuera.push(t + '  en .' + (e.className || e.tagName).toString().slice(0, 20));
    });
    return [...new Set(fuera)].slice(0, 10);
  }

  /* ---- utilidades ------------------------------------------------------ */

  function unico(lista, clave) {
    var visto = {}, fuera = [];
    lista.forEach(function (x) { if (!visto[x[clave]]) { visto[x[clave]] = 1; fuera.push(x); } });
    return fuera;
  }

  /* ---- el revisor ------------------------------------------------------ */

  /* Baja por toda la pagina como un visitante y ESPERA a que terminen las
     transiciones antes de medir.
     Sin esto, el revisor mide en mitad de los fundidos y canta como apagados
     bloques que en realidad acaban en opacidad 1. Me paso el 26-09: di por
     rota media pagina que estaba bien. Un revisor que da falsas alarmas hace
     perder mas tiempo del que ahorra. */
  function recorrer() {
    var alto = document.body.scrollHeight;
    var y = 0;
    return new Promise(function (listo) {
      (function paso() {
        if (y < alto) { window.scrollTo(0, y); y += 450; return setTimeout(paso, 110); }
        window.scrollTo(0, 0);
        /* La entrada mas lenta de la pagina son 900ms (el telon de las fotos);
           1.600 deja margen de sobra. */
        setTimeout(listo, 1600);
      })();
    });
  }
  global.recorrer = recorrer;

  function revisar(cfg) {
    cfg = cfg || {};
    var todo = !cfg.paleta && !cfg.solo;
    var r = {};

    if (todo || cfg.paleta) { r.oscuros = oscuros(cfg); r.contraste = contraste(); }
    if (todo) {
      r.fotos = fotos();
      r.sinEfecto = efectos(cfg);
      r.textosLargos = textos(cfg);
      r.toqueChico = toque();
      r.emojisComoIcono = emojis();
      r.erroresConsola = (global.__erroresJS || []).slice(0, 5);
      r.apagados = apagados();
    }

    /* El veredicto: lo que de verdad impide enseñar la página. */
    var graves = [];
    if (r.oscuros && r.oscuros.length) graves.push(r.oscuros.length + ' oscuros en página clara');
    if (r.contraste && r.contraste.length) graves.push(r.contraste.length + ' textos por debajo del mínimo');
    if (r.fotos && r.fotos.rotas.length) graves.push(r.fotos.rotas.length + ' fotos rotas');
    if (r.erroresConsola && r.erroresConsola.length) graves.push(r.erroresConsola.length + ' errores de JS');
    var avisos = [];
    var apagadosDeVerdad = (r.apagados || []).filter(function (x) { return x.indexOf('sin medir') < 0; });
    if (apagadosDeVerdad.length) graves.push(apagadosDeVerdad.length + ' bloques que se quedan apagados');
    if (document.visibilityState !== 'visible') avisos.push('pestaña oculta: las opacidades no se han medido');

    if (r.sinEfecto && r.sinEfecto.length) avisos.push(r.sinEfecto.length + ' secciones sin efecto');
    if (r.textosLargos && r.textosLargos.length) avisos.push(r.textosLargos.length + ' textos largos sin plegar');
    if (r.toqueChico && r.toqueChico.length) avisos.push(r.toqueChico.length + ' zonas de toque pequeñas');
    if (r.emojisComoIcono && r.emojisComoIcono.length) avisos.push(r.emojisComoIcono.length + ' emojis de icono');
    if (r.fotos && r.fotos.sinAlt.length) avisos.push(r.fotos.sinAlt.length + ' fotos sin alt');

    r.VEREDICTO = graves.length ? 'NO SE ENSEÑA · ' + graves.join(' · ')
                : avisos.length ? 'PASA CON AVISOS · ' + avisos.join(' · ')
                : 'PASA';
    return r;
  }

  /* Recoger los errores de JS desde que carga la página. */
  global.__erroresJS = global.__erroresJS || [];
  global.addEventListener('error', function (e) {
    global.__erroresJS.push((e.message || '') + ' @ ' + (e.filename || '').split('/').pop() + ':' + e.lineno);
  });

  global.revisar = revisar;
})(window);
