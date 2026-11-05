/* ============================================================
   BRANSOLETKA MAGNETYCZNA ANTYNIKOTYNOWA · POLSKA · strona własna (07-10-2026).
   ui-ux-pro-max (zatwierdzony przez Jamesa 07-10): historia w rozdziałach, stonowana biżuteria,
   czarny kamienny #1C1917 + złoty #A16207, Cormorant / Montserrat.
   Kolejność: haczyk (hero) → przed i po → zakup → rozdział 1 "ochota" →
   rozdział 2 "gest" (3 zdjęcia) → wideo → dlaczego pomaga → bransoletka → promocja →
   zostało → porównanie → opinie → formularz. Przycisk zakupu na końcu każdego rozdziału.
   Własny ruch: złoty pasek postępu, powolny błysk nad hero, tytuły ze
   złotą linią, która się otwiera, wejścia z efektem zanikania. Respektuje "ograniczenie ruchu".
   🔴 Teksty: bransoletka to PRZYPOMNIENIE, a nie leczenie (nic o leczeniu ani terminach).
   Działa tylko z ?p=pulsera. Jeśli ten plik zawiedzie, karta wygląda tak samo.
   ============================================================ */
(function () {
  'use strict';
  var pid = '';
  try { pid = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
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

  /* ---- ROZDZIAŁ 1 · ochota przychodzi bez zapowiedzi ---- */
  function capituloGanas() {
    var m = [
      [svg('<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>'), 'Przy kawie', 'Pierwszy łyk rano i ręka już sięga po paczkę.'],
      [svg('<rect x="3" y="11" width="18" height="6" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>'), 'W samochodzie', 'Korek, długie światło – i zapalniczka już tam jest.'],
      [svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'), 'W przerwie', 'Inni schodzą zapalić, a Ty zostajesz z ochotą.'],
    ];
    return '<section class="bloque pu-sec pu-ganas">'
      + '<span class="pu-num" aria-hidden="true">01</span>'
      + '<span class="pu-cap">Ochota</span>'
      + '<h2 class="pu-h2">Przychodzi <em>bez zapowiedzi.</em></h2>'
      + '<p class="pu-lead">Rzucenie to decyzja, którą podejmujesz raz. Ochota wraca wiele razy dziennie, w tych samych momentach co zawsze.</p>'
      + '<ul class="pu-momentos">' + m.map(function (x, i) {
          return '<li class="pu-entra" style="--i:' + i + '">' + x[0] + '<div><b>' + x[1] + '</b><span>' + x[2] + '</span></div></li>';
        }).join('') + '</ul>'
      + '</section>';
  }

  /* ---- ROZDZIAŁ 2 · gest, który Cię powstrzymuje (trzy zatwierdzone zdjęcia) ---- */
  function capituloGesto() {
    var pasos = [
      ['img/pulsera-palma.webp?v=2', 'Bransoletka z kamienia wulkanicznego z okrągłym srebrnym magnesem na dłoni', 'Krok 1', 'Załóż ją', 'Elastyczna, dopasowuje się sama. Nosisz ją cały dzień i prawie jej nie czujesz.'],
      ['img/pulsera-muneca.webp?v=2', 'Spokojna kobieta z filiżanką herbaty i bransoletką na nadgarstku', 'Krok 2', 'Gdy przyjdzie ochota, dotknij jej', 'Poczuj kamień i magnes. Ta kilkusekundowa pauza powstrzymuje impuls.'],
      ['img/pulsera-pareja.webp?v=2', 'Nadgarstek mężczyzny i nadgarstek kobiety, każde z tą samą bransoletką', 'Krok 3', 'Przypomnij sobie swoją decyzję', 'Za każdym razem, gdy na nią spojrzysz, przypominasz sobie, dlaczego rzucasz. A jeśli rzucacie razem – tym lepiej.'],
    ];
    return '<section class="bloque pu-sec pu-gesto">'
      + '<span class="pu-num" aria-hidden="true">02</span>'
      + '<span class="pu-cap">Gest</span>'
      + '<h2 class="pu-h2">Mały gest, <em>który Cię powstrzymuje.</em></h2>'
      + '<p class="pu-lead">To nie magia ani leczenie: to przypomnienie, które nie zostaje w domu.</p>'
      + '<div class="pu-pasos">' + pasos.map(function (p, i) {
          return '<figure class="pu-paso pu-entra" style="--i:' + i + '">'
            + '<div class="pu-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="1000" height="1242"></div>'
            + '<figcaption><i>' + p[2] + '</i><b>' + p[3] + '</b><span>' + p[4] + '</span></figcaption></figure>';
        }).join('') + '</div>'
      + '<div class="pu-aviso"><p>Bransoletka wspiera Twoją decyzję o rzuceniu palenia; nie zastępuje pomocy lekarza lub farmaceuty. Ze względu na magnes nie używaj jej, jeśli masz rozrusznik serca lub inny wszczepiony aparat.</p></div>'
      + '</section>';
  }

  /* ---- ROZDZIAŁ 3 · tak ją otrzymujesz (28-10 James: "sekcja taka jak w Hiszpanii, z prawdziwym zdjęciem, jak przychodzi produkt";
     w Rumunii przychodzi w etui, Dropi RO 4500; PRAWDZIWE zdjęcia z magazynu Dropi, te z Hiszpanii) ---- */
  function capituloRecibes() {
    var fotos = [
      ['/pl/img/pulsera-caja.webp?v=1', 'Czarne pudełko prezentowe z okienkiem, w którym przychodzi bransoletka', 'Otwierając paczkę', 'Pudełko prezentowe', 'Przychodzi w czarnym pudełku z okienkiem, gotowym do schowania lub podarowania.'],
      ['/pl/img/pulsera-estuche.webp?v=1', 'Bransoletka z kamienia wulkanicznego w środku czarnego przezroczystego etui', 'W środku', 'Spersonalizowane etui', 'Bransoletka zawieszona w czarnym przezroczystym etui: widać ją całą i się nie zniszczy.'],
    ];
    return '<section class="bloque pu-sec pu-recibe">'
      + '<span class="pu-num" aria-hidden="true">03</span>'
      + '<span class="pu-cap">Tak ją otrzymujesz</span>'
      + '<h2 class="pu-h2">W etui, <em>gotowa na prezent.</em></h2>'
      + '<p class="pu-lead">To prawdziwe zdjęcia produktu, który dostaniesz do domu.</p>'
      + '<div class="pu-pasos">' + fotos.map(function (p, i) {
          return '<figure class="pu-paso pu-entra" style="--i:' + i + '">'
            + '<div class="pu-paso-img"><img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy" width="800" height="1000"></div>'
            + '<figcaption><i>' + p[2] + '</i><b>' + p[3] + '</b><span>' + p[4] + '</span></figcaption></figure>';
        }).join('') + '</div>'
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

    /* galeria powielała zdjęcia z rozdziału 2: usunięta */
    ['.gal', '.miniz'].forEach(function (s) { var e = arriba.querySelector(s); if (e) e.remove(); });

    var ancla = hero;
    function pon(n) { if (!n) return; ancla.insertAdjacentElement('afterend', n); ancla = n; }
    pon(antesDespues); pon(arriba); pon(tras);
    var ganas = nodo(capituloGanas()); pon(ganas); ganas.appendChild(boton('Chcę, płacę przy odbiorze'));
    var gesto = nodo(capituloGesto()); pon(gesto); gesto.appendChild(boton('Zamówić moją'));
    var recibe = nodo(capituloRecibes()); pon(recibe); recibe.appendChild(boton('Chcę z etui'));
    pon(video); pon(porQue); pon(descripcion); pon(oferta); pon(quedan); pon(compara);

    if (antesDespues) {
      var e1 = antesDespues.querySelector('.eyebrow'); if (e1) e1.textContent = 'Przed i po';
      var t1 = antesDespues.querySelector('h2'); if (t1) t1.innerHTML = 'Ta sama kawa, <em>inna decyzja.</em>';
      var c1 = antesDespues.querySelector('.cta'); if (c1) c1.remove();
    }
    var flota = document.querySelector('.btn-flota');
    if (flota) flota.textContent = 'Chcę ją';
    if (porQue) porQue.appendChild(boton('Chcę, płacę przy odbiorze'));
    if (video) {
      video.insertAdjacentHTML('afterbegin', '<div class="pu-vcab"><span class="pu-cap">W wideo</span><h2 class="pu-h2">Taka jest <em>bransoletka.</em></h2></div>');
      var v = video.querySelector('video, .vid-prod');
      if (v) v.setAttribute('poster', '../img/pulsera-ficha-poster.webp?v=1');
    }
    if (oferta) {
      var ot = oferta.querySelector('h2') || oferta.firstElementChild;
      if (ot) ot.insertAdjacentHTML('afterend', '<figure class="pu-foto"><img src="/pl/img/pulsera-estuche.webp?v=1" alt="Bransoletka z kamienia wulkanicznego w etui prezentowym" loading="lazy" width="1024" height="1024"></figure>');
    }
    if (compara) { var us = compara.querySelector('th.us'); if (us) us.textContent = 'Bransoletka'; }
    return true;
  }

  /* pasek postępu czytania */
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

  /* powolny błysk, który przecina zdjęcie hero (jak światło na magnesie) */
  function destello() {
    var marco = document.querySelector('.p-pulsera .heroP__marco');
    if (!marco || QUIETO) return;
    var d = document.createElement('div');
    d.className = 'pu-destello'; d.setAttribute('aria-hidden', 'true');
    marco.insertBefore(d, marco.querySelector('.heroP__fundido'));
  }

  /* tytuły ze złotą linią i bloki, które pojawiają się z zanikaniem przy czytaniu */
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
    /* gdyby coś nie zostało zobaczone, po 4 s wszystko widoczne */
    setTimeout(function () { ent.forEach(function (e) { e.classList.add('pu-visto'); }); }, 4000);
  }

  var intentos = 0;
  (function esperar() {
    if (armar()) { avance(); destello(); alLeer(); return; }
    if (++intentos > 60) return;
    setTimeout(esperar, 100);
  })();
})();