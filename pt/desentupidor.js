/* ============================================================
   DESENTUPIDOR EM PÓ · PORTUGAL · página própria (11-11-2026).
   James 11-11: "si puedes armar la misma página que tenemos en Chile, ármala igual, solamente cámbiale cosas de
   Portugal" + "Sí, autorizo" + "esa página la tienes que conectar con la tienda".
   → As secções e a ordem são as da DRAINPRO do Chile (jayegroupchile.github.io/drainpro): herói com o frasco e as
     bolhas, cifras, compra curta com a escada 2/4/10, 3 passos, antes/depois do cano, onde se usa, o que é (oxigénio
     ativo), vídeo, contra os líquidos, opiniões, garantia + perguntas e o pedido.
   → Ligada à loja: o pedido é o formulário da loja (#pedir: packs, pagamento antecipado, painel, Inês), e ficam as
     opiniões, o "com quem enviamos" e os outros produtos. O resto da ficha da loja fica escondido (não se apaga).
   Imagens novas com o frasco REAL do Dropi 1925 (sem o logótipo "Wild Tornado" das fotos do Chile).
   Só atua com ?p=desentupidor. Se este ficheiro falhar, vê-se a ficha normal da loja.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (pid !== 'desentupidor') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var P = null;
  (window.PRODUTOS || []).forEach(function (x) { if (x.id === 'desentupidor') P = x; });
  if (!P) return;
  function eur(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  var K = P.packs;   /* [2, 4, 10] */
  var TOP = typeof P.popular === 'number' ? P.popular : K.length - 1;

  /* escolher o pack no formulário da loja e descer até ele */
  function irPedido(i) {
    if (typeof i === 'number') {
      var b = document.querySelector('#packsForm .pack[data-i="' + i + '"]');
      if (b) b.click();
    }
    var f = document.getElementById('pedir');
    if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' });
  }

  function pal(txt, d0) {
    return txt.split(' ').map(function (w, k) {
      return '<span class="dp-pal" style="--d:' + (d0 + k * 0.09).toFixed(2) + 's">' + w + '</span>';
    }).join(' ');
  }

  function heroi() {
    return '<section class="dp-hero" id="inicio">'
      + '<div class="dp-hero-foto">'
      +   '<img src="img/desentupidor-heroi.webp?v=1" alt="Frasco do desentupidor em pó junto ao ralo de um lava-loiça com a água a borbulhar" width="1000" height="1500" fetchpriority="high">'
      +   '<div class="dp-burbujas" aria-hidden="true"></div>'
      +   '<div class="dp-sobre">'
      +     '<span class="dp-rot dp-casc" style="--d:.1s">Oxigénio ativo · sem canalizador · sem soda cáustica</span>'
      +     '<h1 class="dp-h1">'
      +       '<span class="dp-ln">' + pal('O cano entupido,', 0.25) + '</span>'
      +       '<span class="dp-ln"><em>' + pal('desentupido em 20 minutos.', 0.55) + '</em></span>'
      +     '</h1>'
      +     '<p class="dp-frase dp-casc" style="--d:1s">Deita o pó, junta água quente e a água volta a escoar. Lava-loiça, duche, lavatório e sanita.</p>'
      +   '</div>'
      + '</div>'
      + '<div class="dp-hero-pie">'
      +   '<div class="dp-hero-cta dp-casc" style="--d:1.15s">'
      +     '<button type="button" class="dp-btn" data-i="' + TOP + '">Quero desentupir <span>' + K[TOP].cant + ' frascos · ' + eur(K[TOP].precio) + '</span></button>'
      +     '<span class="dp-hero-nota">Portes grátis · paga na entrega</span>'
      +   '</div>'
      + '</div>'
      + '</section>';
  }

  function cifras() {
    return '<section class="dp-sec dp-agua dp-cifras" id="dp-cifras">'
      + '<div class="dp-med">'
      +   '<div><b data-hasta="20">20</b><span>minutos e a água escoa</span></div>'
      +   '<div><b data-hasta="0" data-depois=" €" data-rodillo="1">0 €</b><span>de canalizador</span></div>'
      +   '<div><b data-hasta="4">4</b><span>ralos: cozinha, duche, lavatório e sanita</span></div>'
      + '</div>'
      + '</section>';
  }

  function compra() {
    return '<section class="dp-sec dp-compra">'
      + '<div class="dp-wrap dp-compra-grid">'
      +   '<div class="dp-frasco-caja">'
      +     '<img src="img/desentupidor-frasco.webp?v=1" alt="Frasco do desentupidor em pó Sink &amp; Drain Cleaner" width="1000" height="1500">'
      +     '<span class="dp-sello">Pack de 2, 4 ou 10</span>'
      +   '</div>'
      +   '<div class="dp-compra-txt">'
      +     '<span class="dp-rot">Desentupidor em pó</span>'
      +     '<h2 class="dp-h2">Desentupidor</h2>'
      +     '<p class="dp-sub">Um frasco por cada ralo da casa. O pack de 10 é o que compensa: um para a cozinha, um para cada casa de banho e os outros guardados para a próxima vez.</p>'
      +     '<div class="dp-escalera">' + K.map(function (k, i) {
              return '<button type="button" class="dp-esc' + (i === TOP ? ' dp-esc--top' : '') + '" data-i="' + i + '">'
                + (i === TOP ? '<i>Mais pedido</i>' : '') + '<b>' + k.cant + ' frascos</b><span>' + eur(k.precio) + '</span></button>';
            }).join('') + '</div>'
      +     '<button type="button" class="dp-btn dp-btn--ancho" data-i="' + TOP + '">Pedir ' + K[TOP].cant + ' por ' + eur(K[TOP].precio) + '</button>'
      +     '<div class="dp-cuenta"><span>A oferta termina em</span>'
      +       '<div class="dp-cd"><b data-cd="h">00</b><i>h</i><b data-cd="m">00</b><i>m</i><b data-cd="s">00</b><i>s</i></div></div>'
      +   '</div>'
      + '</div>'
      + '</section>';
  }

  function passos() {
    return '<section class="dp-sec dp-agua dp-pasos-sec">'
      + '<div class="dp-wrap">'
      +   '<span class="dp-rot">Como se usa</span>'
      +   '<h2 class="dp-h2">Três passos, <em>sem ferramentas.</em></h2>'
      +   '<div class="dp-linea">'
      +     '<span class="dp-riel" aria-hidden="true"><i></i></span>'
      +     '<ol class="dp-pasos">'
      +       '<li class="dp-paso"><span class="dp-nodo" aria-hidden="true">1</span><h3>Deita o pó</h3><p>De 50 a 100 g diretamente no ralo seco: lava-loiça, duche, lavatório ou sanita.</p></li>'
      +       '<li class="dp-paso"><span class="dp-nodo" aria-hidden="true">2</span><h3>Junta água quente</h3><p>Uma chávena, a cerca de 60 °C (sem ferver). O oxigénio ativo começa a borbulhar e a soltar a gordura, o cabelo e os restos.</p></li>'
      +       '<li class="dp-paso"><span class="dp-nodo" aria-hidden="true">3</span><h3>Espera 20 minutos e enxagua</h3><p>A água volta a escoar e leva tudo o que estava a entupir. Num entupimento forte, repete a aplicação.</p></li>'
      +     '</ol>'
      +   '</div>'
      + '</div>'
      + '</section>';
  }

  function cambio() {
    return '<section class="dp-sec dp-ba">'
      + '<div class="dp-wrap">'
      +   '<span class="dp-rot">A diferença</span>'
      +   '<h2 class="dp-h2">O mesmo cano, <em>20 minutos depois.</em></h2>'
      +   '<p class="dp-sub">Assim fica por dentro um cano com gordura acumulada depois de uma só aplicação.</p>'
      +   '<div class="dp-foto dp-rev">'
      +     '<img src="img/desentupidor-cano.webp?v=1" alt="Antes e depois: cano entupido com gordura e cabelo, e o mesmo cano limpo com a água a escoar" width="1000" height="1500" loading="lazy">'
      +     '<span class="dp-scan" aria-hidden="true"></span><span class="dp-mira" aria-hidden="true"></span>'
      +   '</div>'
      + '</div>'
      + '</section>'
      + '<div class="dp-cta-franja"><button type="button" class="dp-btn dp-btn--ancho" data-i="' + TOP + '">Quero esta diferença</button></div>';
  }

  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  function usos() {
    var t = [
      [svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8M7 8h4"/>'), 'Lava-loiça', 'Gordura e restos de comida endurecidos'],
      [svg('<path d="M4 20V8a4 4 0 0 1 8 0v1"/><path d="M14 9h6M17 9v3M13 15l1 3M17 15v3M21 15l-1 3"/>'), 'Duche', 'Cabelo e sabão: a água fica a fazer piscina'],
      [svg('<path d="M6 4h12v6H6z"/><path d="M4 10h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z"/><path d="M9 19v2M15 19v2"/>'), 'Sanita', 'Papel e entupimentos sem desmontar nada'],
      [svg('<path d="M4 12h16l-2 6H6z"/><path d="M12 4v5M9 9h6"/>'), 'Lavatório', 'O mau cheiro que volta mesmo depois de limpar'],
    ];
    return '<section class="dp-sec dp-agua dp-usos">'
      + '<div class="dp-wrap">'
      +   '<span class="dp-rot">Onde se usa</span>'
      +   '<h2 class="dp-h2">Um só pó <em>para a casa toda.</em></h2>'
      +   '<p class="dp-pista">Passe o dedo pelos cartões</p>'
      +   '<div class="dp-grid">' + t.map(function (x, i) {
            return '<button type="button" class="dp-tar dp-rev" style="--i:' + i + '"><span class="dp-tar-ico">' + x[0] + '</span><b>' + x[1] + '</b><span>' + x[2] + '</span></button>';
          }).join('') + '</div>'
      + '</div>'
      + '</section>';
  }

  function formula() {
    return '<section class="dp-sec dp-formula">'
      + '<div class="dp-wrap">'
      +   '<span class="dp-rot">O que é</span>'
      +   '<h2 class="dp-h2">Não é soda cáustica: <em>é oxigénio ativo.</em></h2>'
      +   '<p class="dp-sub">Em contacto com a água quente liberta pressão e calor controlados que soltam a gordura, o cabelo e os resíduos presos. Não é corrosivo, por isso não estraga canos de PVC, metal nem cobre, e não deixa o cheiro a químico dos desentupidores líquidos.</p>'
      +   '<div class="dp-fichas">'
      +     '<figure class="dp-fi dp-rev"><div class="dp-fi-foto"><img src="img/desentupidor-cozinha.webp?v=1" alt="Antes e depois: lava-loiça sujo e com o ralo lento, e o mesmo lava-loiça limpo com a água a escoar" width="900" height="900" loading="lazy"><span class="dp-telon dp-t1"></span><span class="dp-telon dp-t2"></span></div>'
      +       '<figcaption><span class="dp-rot">Cozinha</span><b>De lento e com cheiro, a escoar de uma vez</b><p>A gordura endurece dentro do cano e um dia já não escoa nada. O oxigénio ativo solta-a sem arames e sem desmontar o sifão.</p></figcaption></figure>'
      +     '<figure class="dp-fi dp-rev"><div class="dp-fi-foto"><img src="img/desentupidor-duche.webp?v=1" alt="Antes e depois: ralo do duche entupido com cabelo, e uma mulher sorridente com o frasco junto ao lavatório limpo" width="900" height="900" loading="lazy"><span class="dp-telon dp-t1"></span><span class="dp-telon dp-t2"></span></div>'
      +       '<figcaption><span class="dp-rot">Casa de banho</span><b>O cabelo e o sabão vão-se sozinhos</b><p>O que se enrola na grelha do duche e nem com a mão sai, dissolve-se e vai-se com o enxaguamento.</p></figcaption></figure>'
      +   '</div>'
      + '</div>'
      + '</section>';
  }

  function video() {
    return '<section class="dp-sec dp-video-sec">'
      + '<div class="dp-wrap">'
      +   '<span class="dp-rot">Veja como funciona</span>'
      +   '<h2 class="dp-h2">Deita, espera <em>e a água escoa.</em></h2>'
      +   '<div class="dp-video-caja dp-rev">'
      +     '<video class="dp-video-prod" autoplay muted loop playsinline controls preload="metadata" poster="img/desentupidor-video-poster.webp?v=1">'
      +       '<source src="img/desentupidor-video.mp4?v=1" type="video/mp4">'
      +     '</video>'
      +   '</div>'
      + '</div>'
      + '</section>';
  }

  function compara() {
    var f = [
      ['Dissolve gordura, cabelo, papel e restos de comida', 'Sim', 'Mais ou menos'],
      ['Seguro para PVC, metal e cobre', 'Sim', 'Não: são corrosivos'],
      ['Tira o mau cheiro de raiz', 'Sim', 'Tapa-o um bocado'],
      ['Um frasco por ralo, guardado para a próxima', 'Sim', 'Acaba numa vez'],
    ];
    return '<section class="dp-sec dp-agua dp-cmp">'
      + '<div class="dp-wrap">'
      +   '<span class="dp-rot">O que o torna diferente</span>'
      +   '<h2 class="dp-h2">Contra os <em>desentupidores líquidos.</em></h2>'
      +   '<table class="dp-tabla"><thead><tr><th></th><th class="us">Em pó</th><th>Líquidos</th></tr></thead><tbody>'
      +     f.map(function (x) { return '<tr><td>' + x[0] + '</td><td class="us">' + x[1] + '</td><td>' + x[2] + '</td></tr>'; }).join('')
      +   '</tbody></table>'
      + '</div>'
      + '</section>';
  }

  function garantia() {
    return '<section class="dp-sec dp-agua dp-gar">'
      + '<div class="dp-wrap">'
      +   '<div class="dp-gar-caja">'
      +     '<span class="dp-rot">Garantia</span>'
      +     '<h2 class="dp-h2">Se não desentupir, <em>devolvemos o dinheiro.</em></h2>'
      +     '<p class="dp-sub">E como paga na entrega, não arrisca nada: só paga quando já o tem na mão.</p>'
      +   '</div>'
      +   '<div class="dp-faq">' + (P.preguntas || []).map(function (x, i) {
            return '<details' + (i === 0 ? ' open' : '') + '><summary>' + x.q + '</summary><div class="a">' + x.a + '</div></details>';
          }).join('') + '</div>'
      + '</div>'
      + '</section>';
  }

  function nodos(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return [].slice.call(t.content.children); }

  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var heroFicha = prod.querySelector('.heroP');
    if (!heroFicha || !document.getElementById('pedir')) return false;
    if (document.body.classList.contains('p-desentupidor')) return true;
    document.body.classList.add('p-desentupidor');

    if (!document.getElementById('dp-letras')) {
      var l = document.createElement('link');
      l.id = 'dp-letras'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;900&family=Inter:wght@400;600;800&display=swap';
      document.head.appendChild(l);
    }

    /* o que fica da loja: opiniões, pagamento antecipado, com quem enviamos, outros produtos e o pedido */
    function fica(n) {
      return n.id === 'resenas' || n.id === 'pedir' || n.classList.contains('pagoAntES')
        || !!n.querySelector('.sellos') || !!n.querySelector('.otros');
    }
    [].slice.call(prod.children).forEach(function (n) { if (!fica(n)) n.classList.add('dp-oculto'); });

    /* as secções da DRAINPRO, pela ordem do Chile, à frente de tudo */
    var antes = prod.firstElementChild;
    nodos(heroi() + cifras() + compra() + passos() + cambio() + usos() + formula() + video() + compara())
      .forEach(function (n) { prod.insertBefore(n, antes); });

    /* garantia + perguntas: depois das opiniões (como no Chile), ou antes do "com quem enviamos" se ainda não há opiniões */
    var gar = nodos(garantia())[0];
    var res = document.getElementById('resenas');
    if (res && res.parentNode === prod) res.insertAdjacentElement('afterend', gar);
    else {
      var ref = null;
      [].slice.call(prod.children).forEach(function (n) { if (!ref && !n.classList.contains('dp-oculto') && !/^dp-/.test(n.className) && n.id !== 'inicio' && n.className.indexOf('dp-') !== 0) ref = n; });
      prod.insertBefore(gar, ref || document.getElementById('pedir'));
    }

    prod.querySelectorAll('[data-i]').forEach(function (b) {
      if (!b.closest('#pedir') && /dp-/.test(b.className)) b.addEventListener('click', function () { irPedido(Number(b.getAttribute('data-i'))); });
    });
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Quero desentupir';
    return true;
  }

  /* ---------- efeitos (os mesmos da DRAINPRO, dp.js) ---------- */
  function efeitos() {
    var caja = document.querySelector('.p-desentupidor .dp-burbujas');
    if (caja) {
      var h = '';
      for (var i = 0; i < 22; i++) {
        h += '<i style="--x:' + (Math.random() * 100).toFixed(1) + '%;--t:' + (5 + Math.random() * 6).toFixed(2) + 's;--r:' + (Math.random() * 6).toFixed(2) + 's;--s:' + (0.5 + Math.random() * 1.6).toFixed(2) + '"></i>';
      }
      caja.innerHTML = h;
    }
    if (!QUIETO) {
      document.body.classList.add('dp-arranca');
      setTimeout(function () { void document.body.offsetWidth; document.body.classList.add('dp-listo'); }, 400);
    }

    /* cifras: contagem com golpe de luz */
    var fila = document.querySelector('.p-desentupidor .dp-med');
    if (fila && !QUIETO && 'IntersectionObserver' in window) {
      var fin = function (el) { el.classList.add('dp-fin'); };
      var subir = function (el, ate, dep) {
        var ini = Date.now(), dur = 1500;
        var t = setInterval(function () {
          var p = Math.min((Date.now() - ini) / dur, 1);
          el.textContent = Math.round(ate * (1 - Math.pow(1 - p, 3))) + (dep || '');
          if (p >= 1) { clearInterval(t); el.textContent = ate + (dep || ''); fin(el); }
        }, 30);
      };
      var rolo = function (el, dep) {
        var i = 0, total = 24, t = setInterval(function () {
          i++; el.textContent = (i >= total ? '0' : Math.floor(Math.random() * 9) + 1) + (dep || '');
          if (i >= total) { clearInterval(t); fin(el); }
        }, 70);
      };
      var obsM = new IntersectionObserver(function (vs) {
        vs.forEach(function (v) {
          if (!v.isIntersecting) return;
          obsM.unobserve(v.target);
          v.target.querySelectorAll('b[data-hasta]').forEach(function (b, k) {
            setTimeout(function () {
              var dep = b.getAttribute('data-depois') || '';
              if (b.getAttribute('data-rodillo')) rolo(b, dep); else subir(b, Number(b.getAttribute('data-hasta')), dep);
            }, k * 240);
          });
        });
      }, { threshold: 0.4 });
      obsM.observe(fila);
    }

    /* a linha dos passos enche-se ao descer */
    var linha = document.querySelector('.p-desentupidor .dp-linea');
    var riel = linha && linha.querySelector('.dp-riel i');
    if (linha && riel) {
      var passosEl = linha.querySelectorAll('.dp-paso');
      if (QUIETO) { riel.style.transform = 'scaleY(1)'; passosEl.forEach(function (p) { p.classList.add('dp-on'); }); }
      else {
        var pide = false;
        var pintar = function () {
          pide = false;
          var r = linha.getBoundingClientRect();
          var p = Math.max(0, Math.min(1, (window.innerHeight * 0.62 - r.top) / r.height));
          riel.style.transform = 'scaleY(' + p.toFixed(3) + ')';
          passosEl.forEach(function (li) { li.classList.toggle('dp-on', p * r.height >= li.offsetTop + 14); });
        };
        var pedir = function () { if (!pide) { pide = true; requestAnimationFrame(pintar); } };
        window.addEventListener('scroll', pedir, { passive: true });
        window.addEventListener('resize', pedir);
        pintar();
      }
    }

    /* lanterna nos cartões */
    document.querySelectorAll('.p-desentupidor .dp-tar').forEach(function (t) {
      function mover(e) {
        var p = e.touches ? e.touches[0] : e; var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (p.clientX - r.left).toFixed(0) + 'px');
        t.style.setProperty('--my', (p.clientY - r.top).toFixed(0) + 'px');
      }
      t.addEventListener('pointermove', mover, { passive: true });
      t.addEventListener('touchmove', mover, { passive: true });
      t.addEventListener('pointerdown', function (e) { mover(e); t.classList.add('dp-luz'); });
      t.addEventListener('pointerleave', function () { t.classList.remove('dp-luz'); });
      t.addEventListener('pointerup', function () { setTimeout(function () { t.classList.remove('dp-luz'); }, 650); });
    });

    /* contagem até à meia-noite (a oferta do dia) */
    var cd = document.querySelector('.p-desentupidor .dp-cd');
    if (cd) {
      var dois = function (n) { return (n < 10 ? '0' : '') + n; };
      var tic = function () {
        var a = new Date(), m = new Date(a); m.setHours(24, 0, 0, 0);
        var s = Math.max(0, Math.floor((m - a) / 1000));
        cd.querySelector('[data-cd="h"]').textContent = dois(Math.floor(s / 3600));
        cd.querySelector('[data-cd="m"]').textContent = dois(Math.floor(s % 3600 / 60));
        cd.querySelector('[data-cd="s"]').textContent = dois(s % 60);
      };
      tic(); setInterval(tic, 1000);
    }

    /* entradas ao aparecer (com rede de segurança) */
    if (!QUIETO && 'IntersectionObserver' in window) {
      var els = document.querySelectorAll('.p-desentupidor .dp-rev');
      document.body.classList.add('dp-anima');
      var obs = new IntersectionObserver(function (vs) {
        vs.forEach(function (v) { if (!v.isIntersecting) return; v.target.classList.add('dp-in'); obs.unobserve(v.target); });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
      els.forEach(function (e) {
        if (e.getBoundingClientRect().top < window.innerHeight * 0.9) { e.classList.add('dp-in'); return; }
        e.classList.add('dp-pre'); obs.observe(e);
      });
      var rede = setInterval(function () {
        var faltam = 0;
        document.querySelectorAll('.p-desentupidor .dp-pre:not(.dp-in)').forEach(function (e) {
          if (e.getBoundingClientRect().top < window.innerHeight) e.classList.add('dp-in'); else faltam++;
        });
        if (!faltam) clearInterval(rede);
      }, 400);
    }
  }

  var tentativas = 0;
  (function esperar() {
    if (armar()) { efeitos(); return; }
    if (++tentativas > 60) return;
    setTimeout(esperar, 100);
  })();
})();
