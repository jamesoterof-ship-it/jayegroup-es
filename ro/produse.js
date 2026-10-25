/* ============================================================
   PRODUS · JAYE GROUP ROMÂNIA
   Spray reparador de arañazos · el MISMO producto y la MISMA ficha de España
   y Portugal (pt/produtos.js, 'aranazos'), solo traducida al rumano (24-10-2026).
   Dropi PRO Rumania id 83 · costo 10,19 RON (catalogo ro.dropipro.com, 20-10-2026).

   🔴 James 22-10: "otro pais = la misma pagina de España traducida". El DISEÑO
   es el de España (../aranazos.css + ../aranazos.js, sin tocar); textos-ro.js
   cambia textos y rutas de fotos.
   🔴 Solo zgârieturi superficiales (las del lacado). Si la uña se engancha hasta
   el metal o hay abolladura, eso es de taller: no se promete.

   Sin `escasez` (los numeros de "vendidos hoy" de Portugal no son de Rumania:
   no se copian) y sin `anticipado` (el pago adelantado en lei no esta decidido).
   ============================================================ */

/* 🔴 PRECIOS_RO_POR_APROBAR · James NO aprobo todavia ningun precio en lei.
   Mientras esten en null, la pagina NO muestra ninguna cifra ni deja pedir:
   ficha.js compara cada precio con PRECIOS_APROBADOS (vacio) y, si no esta,
   muestra "no disponible" en vez de la ficha; tienda.js tampoco pinta la
   tarjeta. Cuando James apruebe la escalera de un producto se ponen aqui sus
   precios (en el orden de sus packs) y tambien en PRECIOS_APROBADOS.
   25-10: la tienda tiene los MISMOS productos que España (James: "vamos a crear
   pagina con los mismos productos de España"), menos el cabezal de ducha: el
   575 de España no tiene equivalente exacto en el catalogo de Rumania. */
/* 25-10 James APROBO (chat): spray 79,99/129,99/169,99 · pulsera 74,99/104,99/129,99 ·
   gafas 69,99/89,99/109,99 · sellador 69,99/99,99/129,99 (1·2·3). Envio gratis.
   Balsamo (venta dudosa en Rumania) y pistola 48 V (Dropi la cobra 96,99 lei: pierde)
   siguen en null = no salen en la tienda. La pistola de agua (Dropi 56, 89,99/149,99)
   esta aprobada pero aun no tiene ficha. */
window.PRECIOS_RO_POR_APROBAR = {
  aranazos: [79.99, 129.99, 169.99],   /* 1 · 2 · 3 flacoane */
  balsamo:  [null, null, null],        /* 1 · 2 · 3 bucăți */
  sellador: [69.99, 99.99, 129.99],    /* 1 · 2 · 3 tuburi */
  pulsera:  [74.99, 104.99, 129.99],   /* 1 · 2 · 3 brățări */
  pistola:  [89.99, 149.99],           /* 1 · 2 pistoale de apă (Dropi 56, aprobado 25-10) */
  gafas:    [69.99, 89.99, 109.99],    /* 1 · 2 · 3 perechi */
};
var _PR = window.PRECIOS_RO_POR_APROBAR;

window.PRODUSE = [
  {
    /* enlace: ficha.js arma '/ro/' + enlace + '/' y tienda.js enlace + '/'. No hay
       carpetas por producto en /ro/ (el candado no deja crear archivos nuevos sin la
       skill), asi que el enlace es la propia ficha: /ro/?p=aranazos&/ (el '&/' sobra
       y no molesta). Igual en los demas productos. */
    id: 'aranazos', enlace: '?p=aranazos&', unidad: 'buc.', promo: 3,
    resenasTotal: 1389,

    dropiId: 83,
    dropiSku: '',   /* el SKU de Rumania se mira en el panel antes de montar */

    nombre: 'Spray reparator de zgârieturi',
    sub: 'Pentru zgârieturile fine ale lacului · 120 ml',
    categoria: 'Mașină',
    etiqueta: 'Nou în România',
    etiquetaOro: true,

    /* Las mismas fotos de España. 🔴 Las de los tres pasos y la del héroe
       traen texto en ESPAÑOL dentro de la imagen: hay que rehacerlas en rumano
       (Portugal las rehizo como *-pt.webp). */
    foto: 'img/aranazos-rocia.webp?v=1',   /* 25-10: fotos con texto en rumano (ro/img) */
    fotos: ['img/aranazos-rocia.webp?v=1', 'img/aranazos-frota.webp?v=1', 'img/aranazos-brillo.webp?v=1'],
    video: '../img/aranazos-ficha.mp4?v=1',

    hero: {
      img: 'img/hero-aranazos.webp?v=1',
      kicker: 'Nou în România',
      titulo: 'Zgârieturile fine<br><b>dispar în 60 de secunde.</b>',
      sub: 'Nu mai plătiți service-ul pentru fiecare zgârietură fină! Pulverizați, ștergeți cu o lavetă și zgârieturile superficiale nu se mai văd. Mașina strălucește ca nouă și rămâne protejată de apă și praf.',
      datos: [
        ['envio', 'Transport gratuit'],
        ['reloj', 'Livrare rapidă'],
        ['pago', 'Plata la livrare'],
      ],
    },
    acento: '#DC2626',

    desc: 'Sprayul reparator ascunde în 60 de secunde zgârieturile fine de zi cu zi ale mașinii dumneavoastră: cele de la spălare, urmele de unghii de lângă mâner, atingerea unei crengi sau a unei sacoșe. Formula nano umple zgârietura superficială, redă luciul vopselei mate și lasă un strat care respinge apa și praful. Pulverizați, ștergeți cu o lavetă din microfibră și mașina arată ca nouă, fără drum la service.',

    puntos: [
      'Zgârieturile fine dispar în 60 de secunde',
      'Mașina strălucește ca nouă',
      'O protejează de apă și praf',
      'Fără service: economisiți bani',
    ],

    formulaRotulo: 'De ce funcționează',
    formulaTitulo: 'Un strat nano peste vopsea.',
    formulaSub: 'Ce face sprayul imediat ce îl întindeți.',
    formula: [
      ['escudo', 'Ascunde zgârietura', 'Particulele nano umplu zgârietura fină și o fac să nu se mai vadă.'],
      ['rayo', 'Strălucește ca nouă', 'Vopseaua mată își recapătă reflexia, ca proaspăt ieșită din reprezentanță.'],
      ['agua', 'Respinge apa', 'Ploaia face picături și se scurge; praful se prinde mai greu.'],
      ['casa', 'În garajul dumneavoastră', 'Pulverizați, ștergeți cu o lavetă și gata. Fără mașină de lustruit.'],
    ],

    comparaTitulo: 'De ce un spray și nu service-ul?',
    compara: [
      'Service-ul cere sute de lei pentru o zgârietură fină.',
      'O faceți singur în 60 de secunde, cu o lavetă.',
      'Un flacon ajunge pentru mai multe aplicări.',
    ],

    preguntas: [
      { q: 'Ce zgârieturi ascunde?', a: 'Zgârieturile fine de zi cu zi: urmele de la spălare, de unghii lângă mâner, atingerile de crengi sau sacoșe și vopseaua mată din cauza soarelui. Le face să nu se mai vadă și redă luciul.' },
      { q: 'Merge pentru orice zgârietură?', a: 'Merge pentru zgârieturile superficiale ale lacului, care sunt marea majoritate. Dacă zgârietura ajunge până la metal sau mașina are o lovitură, asta se rezolvă la tinichigerie și vopsitorie.' },
      { q: 'Cum se aplică?', a: 'Spălați și uscați zona, la umbră și cu tabla rece. Agitați flaconul, pulverizați pe zgârietură și întindeți cu o lavetă din microfibră, în cercuri. Treceți apoi cu partea uscată a lavetei. Dacă e nevoie, repetați.' },
      { q: 'Merge pentru orice culoare?', a: 'Da. Nu este vopsea: este un strat transparent, așa că merge pentru mașini albe, negre, roșii, gri sau de orice culoare.' },
      { q: 'Vine cu lavetă?', a: 'Nu. Se vinde flaconul de 120 ml. Merge orice lavetă din microfibră curată pe care o aveți acasă.' },
      { q: 'Cât ține un flacon?', a: 'Un flacon de 120 ml ajunge pentru mai multe zone cu zgârieturi sau pentru a trece de mai multe ori peste aceeași mașină. Pentru două mașini sau ca să îl aveți la îndemână, e mai bun pachetul de 2 sau de 3.' },
      { q: 'Cum plătesc?', a: 'Plătiți curierului, în numerar, când primiți coletul. Nu plătiți nimic în avans.' },
    ],

    fotosResenas: [],
    /* 🔴 trae "ANTES / DESPUÉS" en español dentro de la imagen */
    antesDespues: 'img/aranazos-ba.webp?v=1',
    antesDespuesSub: 'Aceeași ușă în soare: plină de zgârieturi fine de la spălare, și după spray: strălucitoare ca nouă.',

    /* PRECIOS: ninguno hasta que James apruebe la escalera en lei (ver arriba). */
    packs: [
      { cant: 1, precio: _PR.aranazos[0], antes: 0, texto: '1 flacon' },
      { cant: 2, precio: _PR.aranazos[1], antes: 0, texto: '2 flacoane' },
      { cant: 3, precio: _PR.aranazos[2], antes: 0, texto: '3 flacoane' },
    ],
    popular: 1,
  },

  /* ============================================================
     BALSAM CU COLAGEN VITALIS · el de España (productos.js 'balsamo'), traducido.
     Dropi PRO Rumania id 388 (catalogo ro.dropipro.com). Diseño: ../balsamo.css +
     ../balsamo.js de España, sin tocar (sus textos van en textos-ro.js, claves ba*).
     🔴 Cosmetico: solo se habla del ASPECTO de la piel (Reglamento UE 655/2013,
     igual que España). Nada de "elimina ridurile" ni "întinerește".
     Sin regalo (la crema de contorno la pone el montador de España) y sin escasez.
     ============================================================ */
  {
    id: 'balsamo', enlace: '?p=balsamo&', unidad: 'buc.', promo: 2,
    resenasTotal: 2137,

    dropiId: 388,
    dropiSku: '',

    nombre: 'Balsam cu colagen VITALIS',
    sub: 'Stick hidratant multizonă · 9 g',
    categoria: 'Frumusețe',
    etiqueta: 'Nou în România',
    etiquetaOro: true,

    foto: '../img/balsamo-mano.webp?v=1',
    fotos: ['../img/balsamo-uso.webp?v=1', '../img/balsamo-mano.webp?v=1', '../img/balsamo-bolso.webp?v=1'],
    video: '../img/balsamo-ficha.mp4?v=2',

    hero: {
      img: '../img/hero-balsamo.webp?v=1',
      kicker: 'Nou în România',
      titulo: 'Două secunde,<br>și pielea<br><b>nu mai trage.</b>',
      sub: 'Balsam cu colagen în stick. Îl treceți pe piele și gata: față, contur, buze, gât și decolteu.',
      datos: [
        ['envio', 'Transport gratuit'],
        ['reloj', 'Livrare rapidă'],
        ['pago', 'Plata la livrare'],
      ],
    },
    acento: '#A8505F',

    desc: 'Balsamul VITALIS este un hidratant în stick, cu colagen hidrolizat, acid hialuronic și ulei din semințe de floarea-soarelui. Rotiți baza, îl treceți pe piele și gata: nu vă ungeți mâinile și nu calculați cantitatea. Hidratată, pielea arată mai fină, iar liniile de expresie se văd mai puțin. Se folosește pe față, frunte, conturul ochilor, buze, gât și decolteu, înainte de machiaj sau peste el, pentru retușuri în timpul zilei. Sunt 9 g care încap în orice geantă.',

    puntos: [
      'Colagen hidrolizat și acid hialuronic',
      'Ajută la estomparea aspectului liniilor de expresie',
      'Hidratează pielea uscată care trage',
      'Se aplică direct, fără să vă murdăriți mâinile',
      'Față, contur, buze, gât și decolteu',
    ],

    formulaRotulo: 'Formula',
    formulaTitulo: 'Trei ingrediente active și un format care nu murdărește.',
    formulaSub: 'Hidratare adevărată, într-un gest de două secunde.',
    formula: [
      ['fibra', 'Colagen hidrolizat', 'Cu greutate moleculară mică, ca să se distribuie bine pe suprafața pielii.'],
      ['agua', 'Acid hialuronic', 'Reține apa în stratul superficial: pielea nu mai trage.'],
      ['pluma', 'Ulei din semințe de floarea-soarelui', 'Hrănește și lasă un finisaj catifelat, fără senzație de grăsime și fără luciu.'],
      ['ojo', 'Multizonă', 'Față, frunte, conturul ochilor, buze, gât și decolteu. Un singur produs.'],
      ['llave', 'Stick rotativ', 'Rotiți baza și aplicați. Fără mâini, fără scurgeri și fără risipă.'],
      ['casa', '9 g care încap în geantă', 'Pentru retușuri oriunde ați fi, înainte sau după machiaj.'],
    ],

    medida: {
      titulo: 'Când se vede?',
      filas: [['Ziua 1', 'pielea nu mai trage'], ['Ziua 7', 'arată mai hidratată'], ['Ziua 21', 'liniile fine se văd mai puțin']],
      texto: 'Este un cosmetic, nu un tratament medical: acționează asupra aspectului pielii. Hidratarea se simte din primele zile. Ca liniile fine să se vadă mai puțin, trebuie folosit zilnic timp de aproximativ trei săptămâni, iar rezultatul depinde de tipul de piele și de consecvență.',
      boton: 'Îl vreau, plătesc la livrare',
    },

    comparaTitulo: 'Ce îl face diferit?',
    compara: [
      'Se aplică direct pe piele: nu vă ungeți mâinile și nu măsurați cantitatea.',
      'Format solid: nu se varsă în geantă și nu se usucă precum o cremă deschisă.',
      'Un singur produs pentru față, buze, gât și decolteu.',
      'Se poate folosi înainte de machiaj sau peste el, pentru un retuș după-amiaza.',
    ],

    preguntas: [
      { q: 'Unde îl pot aplica?', a: 'Pe față, frunte, conturul ochilor, buze, gât și decolteu. Evitați interiorul ochiului și rănile deschise.' },
      { q: 'Se poate folosi cu machiaj?', a: 'Da. Înainte, ca bază hidratantă, sau peste machiaj, pentru retușuri în timpul zilei. Fiind stick, nu strică machiajul.' },
      { q: 'De câte ori pe zi?', a: 'De câte ori aveți nevoie. De obicei dimineața și seara, plus un retuș pe zonele pe care le simțiți uscate.' },
      { q: 'Elimină ridurile?', a: 'Nu, și cine vă spune asta vă minte. Este un cosmetic hidratant: când pielea este bine hidratată, liniile se văd mai puțin și arată mai fine. Nu elimină ridurile și nu înlocuiește niciun tratament medical.' },
      { q: 'Cât îmi ajunge?', a: 'Are 9 g. Cât vă ajunge depinde de câte zone aplicați și cât de des.' },
      { q: 'Merge pentru piele sensibilă?', a: 'Este un cosmetic de uz extern. Ca la orice produs nou, este bine să îl încercați mai întâi pe o zonă mică. Dacă aveți pielea reactivă sau o afecțiune dermatologică, întrebați înainte medicul dermatolog.' },
    ],

    fotosResenas: [],
    antesDespues: '',

    packs: [
      { cant: 1, precio: _PR.balsamo[0], antes: 0, texto: '1 bucată' },
      { cant: 2, precio: _PR.balsamo[1], antes: 0, texto: '2 bucăți' },
      { cant: 3, precio: _PR.balsamo[2], antes: 0, texto: '3 bucăți' },
    ],
    popular: 1,
  },

  /* ============================================================
     SPRAY DE ETANȘARE IMPERMEABIL · el de España ('sellador'), traducido.
     Dropi PRO Rumania id 84 ("Spray sellador impermeabilizante transparente" en el
     catalogo RO; en España el 2607 es el BLANCO). 🔴 Como el de Rumania dice
     TRANSPARENTE, aqui NO se dice el color (en España si: "alb"); y las fotos de
     España muestran el blanco: revisar en el panel color y ml antes de vender.
     🔴 NO para tuberias de agua ni con presion (James 02-10). Sin la ruleta de la
     cinta de regalo: ese regalo lo agrega el montador de España, no el de Rumania
     (textos-ro.js la quita de la pagina).
     ============================================================ */
  {
    id: 'sellador', enlace: '?p=sellador&', unidad: 'buc.', promo: 3,   /* 25-10: escalera RO 1·2·3 (James) */
    resenasTotal: 1124,

    dropiId: 84,
    dropiSku: '',

    /* el nombre NO lleva la palabra "spray": tienda.js cuenta las opiniones por la
       primera palabra (en los dos sentidos) y se mezclaban con las del spray de
       zgârieturi (68 en las dos tarjetas) */
    nombre: 'Etanșant impermeabil în aerosol',
    sub: 'Etanșează fisuri, rosturi și crăpături · 400 ml',
    categoria: 'Casă',
    etiqueta: 'Nou în România',
    etiquetaOro: true,

    /* 🔴 terraza, ventana y la de la promo traen texto en ESPAÑOL dentro (Portugal las rehizo como *-pt.webp) */
    foto: '../img/sellador-tienda.webp?v=1',
    fotos: ['../img/sellador-tienda.webp?v=1', 'img/sellador-terraza.webp?v=1', 'img/sellador-ventana.webp?v=1'],
    video: '../img/sellador-ficha.mp4?v=1',

    hero: {
      img: '../img/hero-sellador.webp?v=1',
      kicker: 'Nou în România',
      titulo: 'Fisuri etanșate,<br><b>casă fără infiltrații.</b>',
      sub: 'Spray de etanșare impermeabil de 400 ml. Îl pulverizați pe fisură sau pe rost și formează un strat care nu lasă apa să treacă.',
      datos: [
        ['envio', 'Transport gratuit'],
        ['reloj', 'Livrare rapidă'],
        ['pago', 'Plata la livrare'],
      ],
    },
    acento: '#047857',

    desc: 'Sprayul de etanșare impermeabil formează un strat flexibil și rezistent la apă peste fisuri, rosturi și crăpături. Se aplică afară și în interior, pe ciment, metal, PVC, lemn și plastic: acoperișuri, terase, ziduri, glafuri, jgheaburi și burlane. Se pulverizează de la 20-25 cm, în straturi subțiri, fără să curgă, și se usucă repede: în mai puțin de o oră puteți da mai multe straturi.',

    puntos: [
      'Etanșează fisuri, rosturi și crăpături',
      'Un strat care nu lasă apa să treacă',
      'Ciment, metal, PVC, lemn și plastic',
      'Interior și exterior · uscare rapidă',
    ],

    formulaRotulo: 'De ce funcționează',
    formulaTitulo: 'Un strat prin care apa nu trece.',
    formulaSub: 'Ce face sprayul imediat ce îl pulverizați.',
    formula: [
      ['agua', 'Impermeabil', 'Formează o barieră peste fisură: ploaia alunecă și nu intră.'],
      ['escudo', 'Flexibil și rezistent', 'Aderă bine și rezistă la intemperii fără să crape.'],
      ['rayo', 'Uscare rapidă', 'Între straturi, 15-20 de minute. Gata în mai puțin de o oră.'],
      ['casa', 'Fără scule', 'Agitați, pulverizați de la 20-25 cm și gata. Fără pensulă, fără scurgeri.'],
    ],

    comparaTitulo: 'De ce un spray de etanșare?',
    compara: [
      'Ajunge în rosturi și colțuri unde pensula nu intră.',
      'Straturi subțiri și uniforme, fără scurgeri și fără pete.',
      'O faceți singur, fără lucrări și fără meșter.',
    ],

    preguntas: [
      { q: 'Unde se poate folosi?', a: 'Pe fisuri, rosturi și crăpături de acoperișuri, terase, ziduri, glafuri de ferestre, jgheaburi și burlane. Pe ciment, metal, PVC, lemn și plastic, în interior și în exterior.' },
      { q: 'Pentru ce NU este?', a: 'Nu este pentru țevi de apă sau cu presiune (cea de la robinet sau intrarea apei în casă), nici pentru țevi sparte sau găuri mari: asta e treabă de instalator. Nu se aplică nici pe o suprafață udă.' },
      { q: 'Cum se aplică?', a: 'Curățați și uscați zona, agitați tubul 1-2 minute și pulverizați de la 20-25 cm, în straturi subțiri. Lăsați 15-20 de minute la uscat între straturi. Pentru o fisură obișnuită ajung 2 sau 3 straturi.' },
      { q: 'Cât ține un tub?', a: 'Un tub de 400 ml ajunge pentru mai multe fisuri sau rosturi de mărime obișnuită. Pentru o terasă sau un acoperiș cu multe fisuri este mai bun pachetul de 2 sau de 4.' },
    ],

    fotosResenas: [],
    antesDespues: 'img/sellador-ba.webp?v=1',
    antesDespuesSub: 'Același perete: fisura pe unde intra apa și pata de umezeală, și după aceea etanșată și uscată.',

    packs: [
      { cant: 1, precio: _PR.sellador[0], antes: 0, texto: '1 tub' },
      { cant: 2, precio: _PR.sellador[1], antes: 0, texto: '2 tuburi' },
      { cant: 3, precio: _PR.sellador[2], antes: 0, texto: '3 tuburi' },
    ],
    popular: 1,
  },

  /* ============================================================
     BRĂȚARĂ MAGNETICĂ ANTIFUMAT · la de España ('pulsera'), traducida.
     Dropi PRO Rumania id 4535 (con caja regalo existe el 4500; se usa el 4535).
     🔴 NO es un tratamiento: es un recordatorio. Nada de "vindecă" ni "în X zile".
     ============================================================ */
  {
    id: 'pulsera', enlace: '?p=pulsera&', unidad: 'buc.', promo: 2,

    dropiId: 4535,
    dropiSku: '',

    nombre: 'Brățară magnetică antifumat',
    sub: 'Piatră vulcanică naturală cu magnet · pentru el și pentru ea',
    categoria: 'Bunăstare',
    etiqueta: 'Lansare în România',
    etiquetaOro: true,

    /* 🔴 las tres fotos y la de la promo traen texto en ESPAÑOL dentro (Portugal las rehizo como pulseira-*-pt.webp) */
    foto: 'img/pulsera-palma.webp?v=1',
    fotos: ['img/pulsera-palma.webp?v=1', 'img/pulsera-muneca.webp?v=1', 'img/pulsera-pareja.webp?v=1'],
    video: '../img/pulsera-ficha.mp4?v=1',

    hero: {
      img: '../img/hero-pulsera.webp?v=3',
      kicker: 'Lansare în România',
      titulo: 'Iar cu țigara<br><b>în mână?</b>',
      sub: 'Brățara magnetică din piatră vulcanică pe care o purtați la încheietură și care vă amintește de decizia luată de fiecare dată când vine pofta. Discretă, comodă, pentru el și pentru ea.',
      datos: [
        ['envio', 'Transport gratuit'],
        ['reloj', 'Livrare rapidă'],
        ['pago', 'Plata la livrare'],
      ],
    },
    acento: '#A16207',

    desc: 'Brățara magnetică antifumat este făcută din mărgele de piatră vulcanică naturală, neagră și poroasă, și un mic magnet rotund argintiu. Este elastică, se potrivește singură pe încheietură și se asortează cu orice. Ideea este simplă: o purtați toată ziua și, când vine pofta de a fuma, o atingeți, simțiți magnetul și vă amintiți de ce ați hotărât să renunțați. Un gest mic care vă ajută să opriți impulsul.',

    puntos: [
      'Piatră vulcanică naturală și un magnet discret',
      'Vă amintește de decizia luată când vine pofta',
      'Elastică: se potrivește pe orice încheietură',
      'Pentru el și pentru ea · pachetul de 2 e pentru cadou',
    ],

    formulaRotulo: 'De ce ajută',
    formulaTitulo: 'Un memento care nu rămâne acasă.',
    formulaSub: 'Ce face brățara când o purtați.',
    formula: [
      ['escudo', 'Oprește impulsul', 'Pofta vine dintr-odată. Atingerea brățării este pauza de care aveți nevoie ca să nu aprindeți țigara.'],
      ['rayo', 'Mereu cu dumneavoastră', 'La serviciu, în mașină sau la cafea: stă la încheietură toată ziua.'],
      ['agua', 'Piatră vulcanică', 'Mărgele naturale, ușoare și poroase, cu un magnet rotund argintiu.'],
      ['casa', 'Discretă', 'Arată ca orice altă brățară. Nimeni nu trebuie să știe de ce o purtați.'],
    ],

    comparaTitulo: 'De ce o brățară?',
    compara: [
      'Fără plasturi, gumă de mestecat sau ceva de luat.',
      'O purtați la mână: este cu dumneavoastră în fiecare moment greu.',
      'Un cadou cu intenție pentru cineva care vrea să renunțe.',
    ],

    preguntas: [
      { q: 'Îmi va lua pofta de fumat?', a: 'Nu este un medicament și nici un tratament. Este un memento pe care îl purtați la încheietură: când vine pofta, o atingeți și vă ajută să vă opriți o clipă și să vă amintiți de decizia luată. Dacă doriți sprijin medical ca să renunțați la fumat, întrebați medicul sau farmacistul.' },
      { q: 'Din ce este făcută?', a: 'Din mărgele de piatră vulcanică naturală, neagră, mată și poroasă, pe un fir elastic, cu un pandantiv rotund argintiu care are un magnet.' },
      { q: 'Mi se potrivește mărimea?', a: 'Este elastică și se potrivește pe majoritatea încheieturilor de adult, de bărbat și de femeie.' },
      { q: 'Se poate uda?', a: 'Este mai bine să o scoateți la duș, la înot sau când spălați vasele: așa firul și magnetul țin mai mult.' },
      { q: 'Cine nu ar trebui să o poarte?', a: 'Din cauza magnetului, nu o purtați dacă aveți stimulator cardiac sau alt dispozitiv medical implantat și nici în timpul sarcinii fără să întrebați înainte medicul.' },
      { q: 'De ce pachetul de 2?', a: 'Este cel mai ales: una pentru dumneavoastră și alta de dăruit cuiva care vrea și el să renunțe, sau ca rezervă.' },
    ],

    fotosResenas: [],
    antesDespues: 'img/pulsera-ba.webp?v=1',
    antesDespuesSub: 'Aceeași cafea de fiecare zi: înainte cu pachetul de țigări în mână, după cu brățara la încheietură.',

    packs: [
      { cant: 1, precio: _PR.pulsera[0], antes: 0, texto: '1 brățară' },
      { cant: 2, precio: _PR.pulsera[1], antes: 0, texto: '2 brățări' },
      { cant: 3, precio: _PR.pulsera[2], antes: 0, texto: '3 brățări' },
    ],
    popular: 1,
  },

  /* ============================================================
     PISTOL DE APĂ CU PRESIUNE PENTRU FURTUN · Dropi PRO Rumania id 56
     ("Pistola de Agua Presion", SKU WATERGUN-23003, 0,25 kg, 4 x 6 x 44 cm).
     25-10 James: Rumania sale con el SPRAY y esta PISTOLA DE AGUA. Usa el diseño de
     la ficha 'pistola' de España (pistola.css + copia propia ro/pistola.js con los
     textos cambiados); la de España es OTRO producto (48 V con batería).
     🔴 Es una lanza para la manguera: SIN motor, batería ni enchufe. Nada de bares,
     litros ni caudal: el proveedor no los da. Fotos: IA desde la foto del proveedor.
     ============================================================ */
  {
    id: 'pistola', enlace: '?p=pistola&', unidad: 'buc.', promo: 2,

    dropiId: 56,
    dropiSku: 'WATERGUN-23003',

    nombre: 'Pistol de apă cu presiune pentru furtun',
    sub: 'Lance metalică de 44 cm · se pune pe furtunul de grădină',
    categoria: 'Casă',
    etiqueta: 'Lansare în România',
    etiquetaOro: false,

    /* 25-10 James: la foto en blanco "no se ve bien" como principal → foto de uso */
    foto: 'img/pistol-apa-tarjeta.webp?v=1',
    fotos: ['img/pistol-apa-tarjeta.webp?v=1', 'img/pistol-apa-terasa.webp?v=1', 'img/pistol-apa-gradina.webp?v=1', 'img/pistol-apa-produs.webp?v=1'],
    video: null,

    hero: {
      img: 'img/hero-pistol-apa.webp?v=1',
      kicker: 'Lansare în România',
      titulo: 'Mașina plină de noroi?<br><b>Puneți-o pe furtun și gata.</b>',
      sub: 'O lance metalică pe care o puneți pe furtunul de grădină: concentrează jetul de apă ca să curățați mașina, curtea sau terasa. Fără curent și fără baterie.',
      datos: [
        ['envio', 'Transport gratuit'],
        ['reloj', 'Livrare rapidă'],
        ['pago', 'Plata la livrare'],
      ],
    },
    acento: '#DC2626',

    desc: 'Pistolul de apă cu presiune este o lance metalică de aproximativ 44 cm, cu mâner albastru și duză de alamă, care se montează la furtunul de grădină. Concentrează jetul de apă de la robinet ca să curățați mai ușor mașina, roțile, curtea, terasa, gardul sau mobilierul de grădină, și se folosește și la udat. Nu are motor, baterie sau priză: presiunea vine de la apa din furtun. Cântărește aproximativ 250 de grame.',

    puntos: [
      'Se pune pe furtunul de grădină de acasă',
      'Lance metalică de 44 cm, mâner albastru, duză de alamă',
      'Fără curent, fără baterie: merge cu apa de la robinet',
      'Mașină, curte, terasă, gard și udat',
    ],

    formulaRotulo: 'Cum funcționează',
    formulaTitulo: 'Simplu: furtun, lance și apă.',
    formulaSub: 'O puneți și este gata de lucru.',
    formula: [
      ['agua', 'Pe furtun', 'Se montează la capătul furtunului de grădină.'],
      ['rayo', 'Jet concentrat', 'Apa de la robinet iese printr-o duză îngustă și lovește murdăria cu mai multă forță.'],
      ['escudo', 'Metal și alamă', 'Lancea este din metal, iar duza din alamă.'],
      ['casa', 'Ușoară', 'Aproximativ 250 de grame: se folosește ușor, cu o mână sau cu două.'],
    ],

    comparaTitulo: 'De ce aceasta și nu o mașină de spălat cu presiune?',
    compara: [
      'Nu are nevoie de priză: merge doar cu apa din furtun.',
      'Nu are motor sau baterie care să se strice sau să trebuiască încărcată.',
      'Este mică și ușoară: se ține într-un sertar sau în garaj.',
    ],

    preguntas: [
      { q: 'Are nevoie de curent sau baterie?', a: 'Nu. Este o lance care se pune pe furtunul de grădină. Presiunea vine de la apa de la robinet. Nu este o mașină de spălat cu presiune electrică.' },
      { q: 'Cât de lungă este?', a: 'Aproximativ 44 cm. Cântărește în jur de 250 de grame.' },
      { q: 'La ce folosește?', a: 'La spălatul mașinii, al roților, al curții, al terasei, al gardului sau al mobilierului de grădină, și la udat. Este pentru murdăria de zi cu zi.' },
      { q: 'Se potrivește la furtunul meu?', a: 'Se montează la capătul furtunului de grădină. Dacă aveți un furtun special și nu sunteți sigur, scrieți-ne pe WhatsApp înainte de comandă și vă spunem.' },
      { q: 'Are garanție?', a: 'Da: 30 de zile garanție. Dacă ajunge deteriorat sau cu vreun defect, ne scrieți pe WhatsApp în primele 3 zile de la primire, cu o fotografie, și vi-l schimbăm.' },
    ],

    fotosResenas: [],
    antesDespues: 'img/pistol-apa-ba.webp?v=1',
    antesDespuesSub: 'Aceeași roată: înainte cu noroiul de la țară, după câteva minute de jet.',

    packs: [
      { cant: 1, precio: _PR.pistola[0], antes: 0, texto: '1 pistol' },
      { cant: 2, precio: _PR.pistola[1], antes: 0, texto: '2 pistoale' },
    ],
    popular: 0,
  },

  /* ============================================================
     OCHELARI MULTIFOCALI CU FILTRU ALBASTRU · las de España ('gafas'), traducidas.
     Dropi PRO Rumania id 4502 ("Gafas antirayos azules multifocales autograduable
     mas funda tela": el mismo modelo sin marco con funda blanda que España).
     🔴 Nada de "corectează vederea" ni plazos: son ochelari de citit multifocali.
     ============================================================ */
  {
    id: 'gafas', enlace: '?p=gafas&', unidad: 'pereche', promo: 2,

    dropiId: 4502,
    dropiSku: '',

    nombre: 'Ochelari multifocali cu filtru albastru',
    sub: 'Fără ramă · aproape și departe · cu husă',
    categoria: 'Sănătate și îngrijire',
    etiqueta: 'Lansare în România',
    etiquetaOro: false,

    foto: '../img/gafas-letra.webp?v=1',
    fotos: ['../img/gafas-letra.webp?v=1', '../img/gafas-pantalla.webp?v=1', '../img/gafas-terraza.webp?v=1'],
    video: '../img/gafas-ficha-h.mp4?v=1',

    hero: {
      img: '../img/hero-gafas.webp?v=1',
      kicker: 'Lansare în România',
      titulo: 'Citiți din nou de aproape,<br><b>fără să depărtați hârtia.</b>',
      sub: 'Ochelari multifocali fără ramă: priviți prin partea de jos ca să citiți și prin partea de sus ca să vedeți departe, fără să îi scoateți. Cu filtru de lumină albastră pentru telefon și calculator.',
      datos: [
        ['envio', 'Transport gratuit'],
        ['reloj', 'Livrare rapidă'],
        ['pago', 'Plata la livrare'],
      ],
    },
    acento: '#3B82F6',

    desc: 'Ochelarii multifocali cu filtru albastru sunt ochelari de citit fără ramă: lentila stă liberă, prinsă doar de punte și de brațe, și de aceea aproape nu cântăresc nimic. Lentila este multifocală: partea de jos este pentru cititul de aproape, iar cea de sus pentru a privi mai departe, așa că nu trebuie să îi scoateți și să îi puneți de fiecare dată când ridicați privirea. Au filtru de lumină albastră, mai comod în fața telefonului, a tabletei sau a calculatorului. Fiecare pereche vine cu husa ei moale.',

    puntos: [
      'Multifocali: aproape prin partea de jos, departe prin cea de sus',
      'Filtru de lumină albastră pentru telefon și calculator',
      'Fără ramă: ușori, aproape nu se simt',
      'Fiecare pereche cu husa ei · pachetul de 2 este cel mai cerut',
    ],

    formulaRotulo: 'Ce au',
    formulaTitulo: 'Gândiți să fie purtați toată ziua.',
    formulaSub: 'Ușori, comozi și fără să îi scoateți la fiecare pas.',
    formula: [
      ['libro', 'Citit de aproape', 'Ziarul, telefonul, rețeta sau prețul de pe etichetă, privind prin partea de jos.'],
      ['ojo', 'Privit departe', 'Ridicați privirea prin partea de sus și vedeți în continuare televizorul sau strada.'],
      ['rayo', 'Filtru de lumină albastră', 'Mai comozi în fața telefonului, a tabletei și a calculatorului.'],
      ['pluma', 'Fără ramă', 'Lentila stă liberă: cântăresc foarte puțin și se potrivesc cu orice.'],
    ],

    comparaTitulo: 'De ce aceștia și nu oricare?',
    compara: [
      'Multifocali: nu trebuie scoși ca să priviți departe.',
      'Fără ramă: mult mai ușori decât unii cu ramă groasă.',
      'Filtru de lumină albastră pentru ecrane.',
      'Fiecare pereche cu husa ei, ca să îi purtați în geantă.',
    ],

    preguntas: [
      { q: 'Trebuie să aleg dioptria?', a: 'Nu. Este un singur model multifocal pentru citit: priviți prin partea de jos ca să citiți de aproape și prin cea de sus ca să vedeți mai departe. Dacă aveți o dioptrie mare sau o problemă de vedere, întrebați medicul oftalmolog sau optometristul.' },
      { q: 'Merg pentru telefon și calculator?', a: 'Da. Au filtru de lumină albastră, mai comod când stați mult în fața ecranelor.' },
      { q: 'Ce vine în cutie?', a: 'Ochelarii și o husă moale în care să îi păstrați. În pachetul de 2 sau de 3, fiecare pereche are husa ei.' },
      { q: 'Te obișnuiești greu cu ei?', a: 'Ca la toți ochelarii multifocali, în primele zile trebuie să vă obișnuiți să priviți prin partea de jos pentru citit și prin cea de sus pentru ce e departe. După aceea îi folosiți fără să vă gândiți.' },
      { q: 'De ce pachetul de 2?', a: 'Este cel mai ales: o pereche pentru acasă și alta pentru geantă sau mașină, sau o pereche pentru dumneavoastră și alta pentru partener.' },
      { q: 'Și dacă nu mă conving?', a: 'Aveți 30 de zile garanție. Dacă ajung deteriorați sau cu vreun defect, ne scrieți pe WhatsApp în primele 3 zile de la primire, cu o fotografie, și vi-i schimbăm.' },
    ],

    fotosResenas: [],
    antesDespues: 'img/gafas-ba.webp?v=1',
    antesDespuesSub: 'Același meniu de restaurant: înainte neclar, după cu ochelarii puși.',

    packs: [
      { cant: 1, precio: _PR.gafas[0], antes: 0, texto: '1 pereche' },
      { cant: 2, precio: _PR.gafas[1], antes: 0, texto: '2 perechi' },
      { cant: 3, precio: _PR.gafas[2], antes: 0, texto: '3 perechi' },
    ],
    popular: 1,
  },
];

/* ficha.js busca window.PRODUCTOS: aqui apunta al mismo objeto, no a una copia. */
window.PRODUCTOS = window.PRODUSE;

/* el logo y "Vezi magazinul" vuelven a /ro/, no a la tienda de España */
window.BASE_TIENDA = '/ro/';

/* 🔴 WhatsApp de Rumania: +34 661 72 98 24 (James, 24-10; es +34 aunque sea para
   Rumania). NUNCA el +34 672 42 37 35: ese es Carmen España. ficha.js usa WA_NUM
   para todos sus botones y enlaces de WhatsApp. */
window.WA_RO = '34661729824';
if (window.WA_RO) window.WA_NUM = window.WA_RO;

/* 25-10: solo los precios que James aprobo (los de PRECIOS_RO_POR_APROBAR que no son null). */
window.PRECIOS_APROBADOS = Object.keys(_PR).reduce(function (a, k) {
  return a.concat(_PR[k].filter(function (p) { return p != null; }));
}, []);
