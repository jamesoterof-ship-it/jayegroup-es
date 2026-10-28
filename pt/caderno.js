/* ============================================================
   CADERNO MÁGICO DE CALIGRAFIA · PORTUGAL · página própria (28-10-2026).
   ui-ux-pro-max (plano aprovado por James 28-10, "Sí, ese diseño"):
   design-system/caderno-caligrafia-infantil · Claymorphism (brinquedo macio, bordas grossas,
   sombra dupla, cantos 16-24 px), azul #2563EB + amarelo #F59E0B + rosa #EC4899 (ação),
   fundo #EFF6FF, Baloo 2 / Comic Neue.
   HERÓI (James 28-10, "Sí, ármalo", depois de ver os de Chile): a cena a ecrã inteiro, de ponta a
   ponta e sem cartões, com o título gigante em cima da foto e a palavra-chave em azul; o efeito do
   próprio produto (letras em tinta azul que se escrevem sozinhas e depois desaparecem, como a tinta
   mágica) e três dados curtos por baixo. A cabeceira da ficha (nome, estrelas, preço) fica logo depois.
   Ordem: herói → compra → capítulo 1 "como funciona" (3 passos com foto) → capítulo 2 "o que vem na
   caixa" (foto REAL do kit) → como ajuda → descrição → promoção → quedam → comparativa → opiniões →
   formulário. Botão de compra no fim de cada capítulo.
   🔴 Textos: nada de resultados escolares nem prazos ("aprende em X dias").
   Só atua com ?p=caderno. Se este ficheiro falhar, a ficha vê-se igual.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (pid !== 'caderno') return;

  var QUIETO = false;
  try { QUIETO = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function nodo(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  function aComprar() { var f = document.getElementById('pedir'); if (f) f.scrollIntoView({ behavior: QUIETO ? 'auto' : 'smooth', block: 'start' }); }
  var IR = svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>');
  function boton(txt) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cta cm-cta'; b.innerHTML = '<span>' + txt + '</span>' + IR;
    b.addEventListener('click', aComprar);
    return b;
  }

  /* LETRAS EM CASCATA (James 28-10: os textos não vão dentro das imagens, aparecem letra a letra).
     partes = [['texto', azul?], null (= quebra de linha), …]. Cada palavra numa caixa para não partir,
     e o índice --k corre por todo o título para a cascata não recomeçar em cada linha. */
  function letras(partes, cls) {
    var k = 0;
    return partes.map(function (p) {
      if (!p) return '<span class="hCas__salto"></span>';
      return p[0].split(' ').map(function (palabra) {
        return '<span class="hCas__w' + (p[1] ? ' es-oro' : '') + '" translate="no">'
          + palabra.split('').map(function (ch) {
              return '<span class="' + cls + '" style="--k:' + (k++) + '">' + ch.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>';
            }).join('') + '</span>';
      }).join(' ');
    }).join(' ');
  }

  /* ---- HERÓI · a cena inteira, o título por cima e a tinta que se escreve e desaparece ---- */
  function heroi() {
    return '<section class="cm-heroi">'
      + '<img class="cm-heroi__img" src="img/caderno-heroi.webp?v=1" alt="A mão de uma criança com o apoio de dedos rosa a escrever as letras a, b, c em tinta azul no caderno de caligrafia com sulcos; ao lado, o caderno Mágico de Caligrafia Alfabeto e duas recargas" width="1000" height="1500" fetchpriority="high" decoding="async">'
      + '<div class="cm-heroi__txt">'
      +   '<span class="cm-heroi__kicker">' + svg('<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>') + 'Promoção de Natal · 3+ anos</span>'
      +   '<h1 class="cm-heroi__h1 hCas" aria-label="Escreve, apaga sozinho e volta a começar.">'
      +     letras([['Escreve,'], null, ['apaga sozinho', true], null, ['e volta a começar.']], 'hCas__l') + '</h1>'
      /* a tinta mágica: "a b c" escreve-se em azul e, uns segundos depois, desaparece */
      +   '<div class="cm-tinta" aria-hidden="true"><svg viewBox="0 0 220 64"><text x="4" y="48">a b c</text></svg><span>… e a tinta desaparece</span></div>'
      + '</div>'
      + '</section>'
      + '<div class="cm-heroi__datos">'
      +   '<div><b>4</b><span>cadernos</span></div>'
      +   '<div><b>15-20</b><span>min e a tinta some</span></div>'
      +   '<div><b>19,95 €</b><span>por kit</span></div>'
      /* 28-10 James: o pagamento antecipado promove-se já no herói, como nos outros produtos */
      +   '<a class="cm-heroi__ahorra" href="#pedir">' + svg('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>')
      +     '<span><b>Pague agora e poupe 10 %</b> e receba com entrega prioritária</span></a>'
      + '</div>';
  }

  /* ---- CAPÍTULO 1 · como funciona (as três fotos aprovadas) ---- */
  function capituloFunciona() {
    var pasos = [
      /* a mão no sulco já está no herói: aqui entra a da menina a escrever com a mãe */
      ['img/caderno-hero.webp?v=1', 'Uma menina a escrever no caderno de caligrafia com a mãe ao lado, sorridente', '1', 'Segue o sulco', 'A caneta entra no sulco da letra e a mão aprende o caminho certo, sem sair da linha.'],
      ['img/caderno-passo2.webp?v=1', 'O caderno de números com as primeiras linhas já escritas a azul ao lado do caderno de alfabeto e da caneta', '2', 'A tinta desaparece', 'Em 15-20 minutos a tinta some sozinha e a página volta a ficar em branco.'],
      ['img/caderno-passo3.webp?v=1', 'Um menino mostra orgulhoso o caderno à avó, que lhe bate palmas, com a árvore de Natal ao fundo', '3', 'Volta a praticar', 'O mesmo caderno serve uma e outra vez: cada dia um bocadinho, sem gastar folhas.'],
    ];
    return '<section class="bloque cm-sec cm-funciona">'
      + '<span class="cm-cap">' + svg('<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>') + 'Como funciona</span>'
      + '<h2 class="cm-h2">Escreve, desaparece, <em>volta a começar.</em></h2>'
      + '<p class="cm-lead">As letras e os números estão gravados no papel. A criança só tem de seguir o caminho.</p>'
      + '<ol class="cm-pasos">' + pasos.map(function (p, i) {
          return '<li class="cm-paso cm-entra" style="--i:' + i + '">'
            + '<div class="cm-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="1000" height="1500"></div>'
            + '<div class="cm-paso-txt"><i aria-hidden="true">' + p[2] + '</i><b>' + p[3] + '</b><span>' + p[4] + '</span></div></li>';
        }).join('') + '</ol>'
      + '</section>';
  }

  /* ---- CAPÍTULO 2 · o que vem na caixa (foto REAL do kit, edição em português) ---- */
  function capituloCaixa() {
    var itens = [
      ['#2563EB', 'Alfabeto', 'as letras do abecedário'],
      ['#F59E0B', 'Números', 'os primeiros números'],
      ['#EC4899', 'Matemática', 'primeiras contas'],
      ['#DC2626', 'Desenho', 'traços e figuras'],
    ];
    return '<section class="bloque cm-sec cm-caixa">'
      + '<span class="cm-cap">' + svg('<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>') + 'O que vem na caixa</span>'
      + '<h2 class="cm-h2">4 cadernos, <em>1 caneta mágica.</em></h2>'
      + '<p class="cm-lead">Esta é a foto real do kit que chega a casa, em português.</p>'
      + '<figure class="cm-real cm-entra"><img src="img/caderno-real.webp?v=1" alt="O kit embalado: caderno mágico de caligrafia Alfabeto em português, com a caneta, as recargas e o apoio de dedos rosa" loading="lazy" width="800" height="1000"></figure>'
      + '<ul class="cm-itens">' + itens.map(function (x, i) {
          return '<li class="cm-entra" style="--i:' + i + ';--cor:' + x[0] + '">' + svg('<path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z"/><path d="M8 7h6M8 11h6"/>')
            + '<div><b>' + x[1] + '</b><span>' + x[2] + '</span></div></li>';
        }).join('')
      + '<li class="cm-entra cm-item-caneta" style="--i:4">' + svg('<path d="M14 4l6 6-11 11H3v-6z"/><path d="M12 6l6 6"/>')
      + '<div><b>Caneta + recargas + apoio de dedos</b><span>a tinta desaparece em 15-20 min</span></div></li>'
      + '</ul>'
      + '</section>';
  }

  function armar() {
    var prod = document.getElementById('prod');
    if (!prod) return false;
    var heroFicha = prod.querySelector('.heroP'), arriba = prod.querySelector('.arriba2');
    if (!heroFicha || !arriba) return false;
    if (document.body.classList.contains('p-caderno')) return true;
    document.body.classList.add('p-caderno');

    if (!document.getElementById('cm-letras')) {
      var l = document.createElement('link');
      l.id = 'cm-letras'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Comic+Neue:wght@300;400;700&display=swap';
      document.head.appendChild(l);
    }

    /* o herói da ficha sai e entra o desta página (o h1 passa a ser o do herói novo) */
    heroFicha.insertAdjacentHTML('beforebegin', heroi());
    var datos = prod.querySelector('.cm-heroi__datos');
    heroFicha.remove();

    var hijos = [].slice.call(prod.children);
    var porQue = prod.querySelector('.form-sec');
    var descripcion = prod.querySelector('section.desc');
    var oferta = prod.querySelector('.promo-sec');
    var quedan = prod.querySelector('.esc-sec');
    var compara = prod.querySelector('.cmp-sec');
    var tras = hijos[hijos.indexOf(arriba) + 1];
    if (tras && (tras.className || '').trim() !== 'bloque') tras = null;

    /* a galeria repetia as fotos dos capítulos: fora */
    ['.gal', '.miniz'].forEach(function (s) { var e = arriba.querySelector(s); if (e) e.remove(); });

    var ancla = datos;
    function pon(n) { if (!n) return; ancla.insertAdjacentElement('afterend', n); ancla = n; }
    pon(arriba); pon(tras);
    var funciona = nodo(capituloFunciona()); pon(funciona); funciona.appendChild(boton('Quero o meu, pago na entrega'));
    var caixa = nodo(capituloCaixa()); pon(caixa); caixa.appendChild(boton('Quero o kit completo'));
    pon(porQue); pon(descripcion); pon(oferta); pon(quedan); pon(compara);

    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Quero o meu';
    if (porQue) porQue.appendChild(boton('Quero o meu, pago na entrega'));
    if (oferta) {
      var ot = oferta.querySelector('h2') || oferta.firstElementChild;
      /* 28-10 James: nada de letras dentro da imagem; o título vai na página e cai em cascata */
      if (ot) ot.insertAdjacentHTML('afterend', '<div class="cm-promo">'
        + '<p class="cm-promo__tit cm-casc cm-entra" aria-label="4 cadernos mágicos + caneta">' + letras([['4 cadernos'], ['mágicos', true], null, ['+ caneta']], 'cm-l') + '</p>'
        + '<p class="cm-promo__sub cm-casc cm-entra" aria-label="Escreve, a tinta desaparece e volta a começar">' + letras([['Escreve, a tinta desaparece e volta a começar']], 'cm-l') + '</p>'
        + '<figure class="cm-foto"><img src="img/caderno-kit.webp?v=1" alt="Os quatro cadernos mágicos de caligrafia em leque, com a caneta de apoio rosa e duas recargas" loading="lazy" width="1000" height="1500"></figure>'
        + '</div>');
    }
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Caderno mágico'; }
    return true;
  }

  /* a tinta mágica do herói: escreve "a b c", espera, desaparece e volta a escrever */
  function tinta() {
    var t = document.querySelector('.cm-tinta');
    if (!t) return;
    if (QUIETO) { t.classList.add('cm-tinta--quieta'); return; }
    function ciclo() {
      t.classList.remove('cm-tinta--some', 'cm-tinta--escreve');
      void t.offsetWidth;
      t.classList.add('cm-tinta--escreve');
      setTimeout(function () { t.classList.add('cm-tinta--some'); }, 3600);
    }
    ciclo();
    setInterval(ciclo, 6400);
  }

  /* barra de avanço da leitura, amarela como um lápis */
  function avance() {
    if (QUIETO) return;
    var b = document.createElement('div');
    b.className = 'cm-avance'; b.setAttribute('aria-hidden', 'true');
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

  /* blocos que sobem macios ao chegar a eles */
  function alLeer() {
    var ent = document.querySelectorAll('.p-caderno .cm-entra');
    if (QUIETO || !('IntersectionObserver' in window)) { ent.forEach(function (e) { e.classList.add('cm-visto'); }); return; }
    document.body.classList.add('cm-mueve');
    var obs = new IntersectionObserver(function (vs) {
      vs.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add('cm-visto'); obs.unobserve(v.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    ent.forEach(function (e) { obs.observe(e); });
    /* se algo não chegar a ver-se, aos 4 s fica tudo visível */
    setTimeout(function () { ent.forEach(function (e) { e.classList.add('cm-visto'); }); }, 4000);
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) { tinta(); avance(); alLeer(); return; }
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();
