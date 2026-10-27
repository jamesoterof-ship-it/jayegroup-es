/* ============================================================
   TEXTE ÎN LIMBA ROMÂNĂ · Jaye Group

   Este archivo es el UNICO que traduce la pagina. ficha.js es el mismo de
   España y Portugal: lee estas claves y, si alguna falta, queda el texto en
   español. Trato de cortesia "dumneavoastră" en todo.

   OJO (nota mia, no del cliente): ficha.js todavia NO conoce Rumania
   (moneda, movil +40, codigo postal de 6 cifras, județe). Las claves estan
   listas para cuando se le agregue.
   ============================================================ */
window.TEXTOS = {
  _pais: 'RO',
  locale: 'ro-RO',
  moneda: 'RON',
  sufijoMoneda: ' lei',
  marca: 'Jaye Group România',
  correo: 'apoio@jayegroup.com.es',   /* el mismo de Portugal hasta que haya uno rumano */

  /* ---- prefixe: România prima ---- */
  paises: [
    ['RO', '+40',  9, 'România'],
    ['MD', '+373', 8, 'Republica Moldova'],
    ['IT', '+39', 10, 'Italia'],
    ['ES', '+34',  9, 'Spania'],
    ['DE', '+49', 11, 'Germania'],
    ['HU', '+36',  9, 'Ungaria'],
    ['BG', '+359', 9, 'Bulgaria'],
    ['FR', '+33',  9, 'Franța'],
    ['GB', '+44', 10, 'Regatul Unit'],
    ['AT', '+43', 10, 'Austria'],
  ],

  /* ---- formular ---- */
  lNombre: 'Nume complet',
  phNombre: 'Ex: Maria Popescu',
  eNombre: 'Scrieți numele complet.',
  lMovil: 'Telefon mobil',
  phMovil: '712 345 678',
  eMovil: 'Verificați numărul de mobil: în România are 9 cifre după +40 și începe cu 7.',
  eMovilOtro: 'Verificați numărul de telefon.',
  lCorreo: 'E-mail (opțional)',
  phCorreo: 'Ex: maria@gmail.com',
  eCorreo: 'Scrieți un e-mail valid: acolo vă trimitem confirmarea comenzii.',
  lDir: 'Adresă',
  phDir: 'Strada, număr, bloc, scară, apartament',
  eDir: 'Scrieți strada și numărul.',
  eDirNum: 'Lipsește numărul adresei: fără el curierul nu poate livra.',
  lRef: 'Indicații pentru curier',
  opcional: '(opțional)',
  phRef: 'Interfon, etaj, intervalul în care sunteți acasă…',
  lCP: 'Cod poștal',
  phCP: '010011',
  eCP: 'Codul poștal are 6 cifre. Exemplu: 010011.',
  lCiudad: 'Localitate',
  phCiudad: 'Ex: Cluj-Napoca',
  eCiudad: 'Scrieți localitatea.',
  lProvincia: 'Județ',
  elige: 'Selectați…',
  eProvincia: 'Selectați județul.',
  sinCobertura: 'Ne pare rău: încă nu livrăm la acest cod poștal.',

  /* ---- buton și note ----
     El texto del boton tiene que decir que el pedido obliga a pagar (Directiva
     2011/83/UE, art. 8.2, transpuesta en Rumania por la OUG 34/2014). */
  btnPedir: 'Comandă cu obligație de plată · plata la livrare',
  enviando: 'Se trimite…',
  notaCod: 'Plătiți curierului când primiți coletul. Vă confirmăm comanda pe WhatsApp.',
  notaPre: 'După ce trimiteți comanda, vă ducem la pagina de plată.',
  /* ---- iesire pe WhatsApp pentru cine se încurcă la formular ---- */
  dudas: 'Vi se pare complicat? ',
  msgWa: 'Bună ziua, vreau să comand ',
  msgWa2: ' și formularul mi se pare complicat',
  ayudaWa: 'Scrieți-ne pe WhatsApp',
  yTeAyudamos: ' și ne ocupăm noi.',
  seTeComplica: 'Aveți dificultăți? Scrieți-ne la ',
  pedidoPagar: 'Ultimul pas: plătiți comanda',
  gracias: 'Mulțumim, ',
  pagaTxt: 'Plătiți acum cu cardul sau prin PayPal.',
  pagarBtn: 'Plătiți ',
  pagarBtn2: 'cu cardul sau prin PayPal',
  pagaCaptura: 'După plată, trimiteți-ne pe WhatsApp captura de ecran a plății și confirmăm totul.',
  mandarCaptura: 'Trimiteți captura pe WhatsApp',
  msgPagado: 'Bună ziua, am plătit comanda de ',
  msgPagado2: '. Vă trimit captura plății.',
  pedidoRecibido: 'Comandă primită',
  teEscribimos: 'Vă scriem pe WhatsApp la ',
  paraConfirmar: ' ca să confirmăm livrarea.',
  pagasRecibes: 'Plătiți când primiți coletul.',
  huellaSoloPre: 'Pentru că o comandă anterioară nu a putut fi livrată, aceasta se plătește în avans, cu cardul sau prin PayPal. Verificați totalul și apăsați din nou butonul.',
  avisoEntrega: 'Pentru că plătiți la livrare, curierul vă predă coletul personal: dacă în zilele de livrare nu sunteți acasă, anunțați-ne pe WhatsApp și stabilim altă zi sau să îl lase unei persoane de încredere. Așa ajunge din prima 🚚',
  falloBtnWa: 'Scrieți-ne pe WhatsApp',
  seTeComplicaWa: 'Aveți dificultăți? Scrieți-ne pe WhatsApp și ne ocupăm noi de comandă',
  asuntoPedido: 'Comanda de ',
  asuntoQuiero: 'Vreau să comand ',

  /* ---- plată ---- */
  pagoCod: 'Plata la livrare',
  pagoCodSub: 'Transport gratuit',
  pagaAhora: 'Plătiți acum',
  ahorras: 'Economisiți ',
  subtotal: 'Subtotal',
  descuento: 'Reducere',
  envio: 'Transport',
  gratis: 'Gratuit',
  totalCod: 'Total de plată la livrare',
  totalPre: 'Total de plată acum',

  /* ---- păreri despre produs ----
     La linea de la fuente es OBLIGATORIA y no se esconde: son opiniones de
     compradores DEL PRODUCTO, no de clientes de nuestra tienda. */
  revTit: 'Păreri despre produs',
  revFuente: 'Evaluări ale cumpărătorilor verificați ai acestui produs.',
  compraVerificada: 'Cumpărare verificată',
  resenas: 'evaluări',

  /* ---- texte din fișă ---- */
  desde: 'De la',
  desdePie: '· transport gratuit și plătiți când îl primiți acasă.',
  pedirAhora: 'Vreau să comand',
  saleHoy: 'Pleacă din depozitul nostru. Plătiți când îl primiți.',
  masVendido: 'Cel mai vândut',
  mejorPrecio: 'Cel mai bun preț',
  verMas: 'Vedeți mai multe evaluări',
  masExp: 'Mai multe păreri ale cumpărătorilor acestui produs',

  /* ---- antet și butonul mare ---- */
  ctaGrande: 'Îl vreau, plătesc la livrare',
  ctaSub: 'Transport gratuit · Nu plătiți nimic în avans',
  recienLlegado: 'Abia sosit în România · fiți printre primele care îl încearcă',
  pideTit: 'Comandați-l pe al dumneavoastră',
  faqTit: 'Întrebări frecvente',

  /* ---- curieri ----
     Soporte de Dropi PRO dijo el 20-10 que en Rumania la transportadora es GLS. */
  enviamosCon: 'Livrăm cu',
  carriers: ['GLS'],
  sellos: [
    ['GLS', 'Curier cu livrare la domiciliu'],
    ['Plata la livrare', 'Curierului, când aveți coletul în mână'],
    ['Transport gratuit', 'Fără costuri de livrare'],
    ['30 de zile', 'Garanție de satisfacție'],
  ],

  /* ---- ce vă garantăm ---- */
  resRotulo: 'Ce vă garantăm',
  resTit: 'Fără litere mici',
  resDatos: [
    ['GLS', 'curier în toată România'],
    ['0 lei', 'costuri de transport'],
    ['30', 'de zile garanție de satisfacție'],
    ['0 lei', 'în avans: plătiți la livrare'],
  ],

  /* ---- garanție ----
     En Rumania el derecho de desistimiento son 14 dias (OUG 34/2014) y la
     garantia legal de conformidad 2 años (OUG 140/2021). No hay Livro de
     Reclamações: las reclamaciones van a la ANPC. */
  selloArriba: 'GARANȚIE DE',
  selloAbajo: 'SATISFACȚIE',
  dias: 'ZILE',
  garTit: 'Cumpărați fără risc',
  garTxt: 'Încercați liniștit: aveți <b>30 de zile garanție de satisfacție</b>. Dacă nu vă convinge, ne scrieți și vă dăm banii înapoi.',
  garChips: ['30 de zile garanție', 'Transport gratuit', 'Plata la livrare'],
  garPie: 'Pentru garanție, scrieți-ne la ',
  garPie2: ' sau pe WhatsApp.',
  livroReclamacoes: false,

  /* ---- ieșire ---- */
  exitTit: 'Mai aveți puțin?',
  exitTxt: 'Comanda vine cu <b>transport gratuit</b>. Nu plătiți nimic acum: <b>plătiți curierului</b> când o primiți acasă.',
  exitBtn: 'Vreau să termin comanda',
  exitMail: 'sau scrieți-ne la ',

  /* ---- eroare de conexiune ---- */
  falloTit: 'Nu am putut înregistra comanda',
  falloTxt: 'Conexiunea a căzut chiar în momentul trimiterii și nu vrem să vă spunem că s-a înregistrat dacă nu este adevărat.<br>Datele dumneavoastră au rămas salvate: încercați din nou peste puțin timp sau scrieți-ne și ne ocupăm noi.',
  falloBtn: 'Scrieți la asistență',
  asuntoFallo: 'Comanda mea nu a fost confirmată',
  cuerpoFallo: 'Bună ziua, am făcut comanda de ',
  cuerpoFallo2: ' pe pagină și nu a fost confirmată. Numele meu este ',

  /* ---- 25-10: claves de ficha.js que faltaban (con la tienda de los 6 productos) ---- */
  conQuien: 'Cu cine livrăm',
  interesar: 'V-ar putea interesa și',
  desdeOtros: 'de la ',
  pagaAhoraAhorra: 'Plătiți acum și economisiți ',
  unPct: ' ',   /* vacio no vale: t() pone el 'un ' de España ("economisiți un 10 %") */
  yPrioritaria: ' cu cardul sau prin PayPal',   /* 25-10: en Rumania no se promete entrega prioritaria (no esta verificada) */
  pideWa: 'Aveți întrebări? Comandați pe WhatsApp',
  msgWaHero: 'Bună ziua, mă interesează ',
  flota: 'Comandă acum',
  escribenosWa: 'Scrieți-ne pe WhatsApp',
  ppPagadoTit: 'Plata a fost primită!',
  ppYaPagado: 'Această comandă este deja plătită. Vă scriem pe WhatsApp când pleacă spre dumneavoastră.',
  ppEnlaceMal: 'Acest link de plată nu este disponibil',
  ppEnlaceMal2: 'Scrieți-ne și vă ajutăm cu comanda.',
  ppEnlaceMal3: 'Verificați conexiunea sau scrieți-ne.',
  totalPagar: 'Total de plată: ',
  ppCargando: 'Se încarcă plata securizată…',
  ppComprobando: 'Se verifică plata…',
  ppPagadoTxt: 'Comanda dumneavoastră este plătită și pleacă cu livrare prioritară. Vă scriem pe WhatsApp când pleacă spre dumneavoastră.',
  ppNoConfirma: 'Nu am putut confirma plata. Dacă vi s-au luat banii, scrieți-ne pe WhatsApp și verificăm imediat.',
  ppCancelado: 'Plata nu a fost finalizată. Puteți încerca din nou oricând.',
  ppError: 'Plata nu a putut porni. Încercați din nou sau folosiți cealaltă opțiune de mai jos.',

  /* ---- cei doi pași ai formularului ---- */
  paso1: 'Câte doriți?',
  paso2: 'Cum doriți să plătiți?',
  btnPedirPre: 'Plătiți acum ',

  /* ============================================================
     DISEÑO DEL BÁLSAMO (balsamo.js) — el mismo de Portugal, en rumano.
     balsamo.js es compartido y solo pone '../' delante de las fotos cuando el
     pais es PT. Por eso aqui las rutas ya van con '../'.
     ============================================================ */
  baCifra1: 'grame care încap în geantă',
  baCifra2: 'ingrediente active',
  baCifra3: 'mâini murdare',

  baPasosRot: 'Cum se folosește',
  baPasosH2: 'Trei gesturi, <em>și gata.</em>',
  baPasos: [
    ['Rotiți baza', 'O răsucire și iese puțin balsam. Nu vă murdăriți mâinile și nu măsurați cantitatea: iese cât vă trebuie.'],
    ['Treceți-l pe piele', 'Treceți stickul pe pomeți, pe conturul ochilor, pe buze, pe gât sau pe decolteu. Se absoarbe repede și nu lasă senzație de grăsime.'],
    ['Oricând doriți', 'Dimineața, seara sau la mijlocul după-amiezii, pentru un retuș. Merge înainte de machiaj sau peste el, fără să îl strice.'],
  ],

  baTraeRot: 'Ce îl face diferit',
  baTraeH2: 'Nu este o cremă: <em>este un gest.</em>',

  baFotos: [
    ['../img/balsamo-uso.webp?v=1',
     'O femeie de aproximativ cincizeci de ani trecând balsamul VITALIS pe pomete',
     'Gestul', 'Două secunde și gata',
     'Se trece direct pe piele, fără mâini și fără să măsurați cantitatea. De aceea chiar se folosește în fiecare zi și nu rămâne uitat în sertar.'],
    ['../img/balsamo-mano.webp?v=1',
     'Stickul de balsam cu colagen VITALIS în mână, cu eticheta sa aurie',
     'Unde se aplică', 'Față, buze, gât și decolteu',
     'Un singur produs pentru toate zonele care se usucă. Nu mai aveți nevoie de câte un borcan pentru fiecare parte a feței.'],
    ['../img/balsamo-bolso.webp?v=1',
     'Stickul lângă o geantă, o pereche de ochelari de soare și un flacon de parfum pe o masă de marmură',
     'Vine cu dumneavoastră', 'Nouă grame și gata',
     'Este solid: nu se varsă în geantă și nu se usucă precum un borcan deschis. Îl luați cu dumneavoastră și vă retușați oriunde ați fi.'],
  ],
};

/* ============================================================
   TRADUCĂTOR · spray de zgârieturi (24-10-2026). El mismo método que
   pt/traduz-pt.js: el DISEÑO es el de España (../aranazos.css +
   ../aranazos.js, sin tocar) y aqui solo se cambian los textos en español
   que esos archivos (y ficha.js) escriben en la pagina, y las rutas de fotos.
   Va dentro de este archivo porque el candado de diseño no deja crear
   archivos nuevos sin la skill; se carga antes de ficha.js, asi que espera
   al DOM y vigila lo que se agregue despues.
   ============================================================ */
(function () {
  'use strict';
  var T = {
    /* ---- aranazos.js ---- */
    'Así se usa': 'Cum se folosește',
    'Tres pasos,': 'Trei pași,',
    '60 segundos.': '60 de secunde.',
    '¡Deja de pagar al taller! Solo el spray y un paño.': 'Nu mai plătiți service-ul! Doar sprayul și o lavetă.',
    'Rocía': 'Pulverizați',
    'Frota': 'Ștergeți',
    'Brilla': 'Strălucește',
    'Directo sobre el arañazo, con la zona limpia y seca.': 'Direct pe zgârietură, cu zona curată și uscată.',
    'Con un paño de microfibra, en círculos: el arañazo desaparece.': 'Cu o lavetă din microfibră, în cercuri: zgârietura fină nu se mai vede.',
    'Tu coche brilla como nuevo y el agua resbala en gotas.': 'Mașina strălucește ca nouă, iar apa alunecă în picături.',
    'Una mujer rociando el spray sobre una rayita del parachoques de su coche blanco': 'O femeie pulverizând sprayul pe o zgârietură fină a barei mașinii albe',
    'Un joven frotando la puerta de su coche rojo con un paño de microfibra': 'Un tânăr ștergând ușa mașinii roșii cu o lavetă din microfibră',
    'Un señor con el bote en la mano sobre el capó azul mojado, con el agua en gotas': 'Un domn cu flaconul în mână pe capota albastră udă, cu apa în picături',
    'Arañazos': 'Zgârieturile',
    'que elimina.': 'pe care le ascunde.',
    'Los elimina': 'Le ascunde',
    'Necesitan taller': 'Au nevoie de service',
    'Arañazos del lavado y marcas en círculos': 'Zgârieturile fine de la spălare și urmele în cerc',
    'Las uñas junto a la manilla de la puerta': 'Urmele de unghii de lângă mânerul ușii',
    'Roces de ramas, bolsas o mochilas': 'Atingeri de crengi, sacoșe sau rucsacuri',
    'Pintura opaca que perdió el brillo': 'Vopseaua mată care și-a pierdut luciul',
    'Rayones que dejan ver la capa gris o el metal': 'Zgârieturi prin care se vede stratul gri sau metalul',
    'Abolladuras y golpes': 'Lovituri și îndoituri ale tablei',
    'Pintura saltada o desconchada': 'Vopsea sărită sau exfoliată',
    'La prueba de la uña': 'Testul unghiei',
    'Pasa la uña sobre el arañazo. Si no se engancha, este spray lo elimina en 60 segundos. Si se engancha hasta el metal, eso ya es de taller.': 'Treceți unghia peste zgârietură. Dacă nu se agață, este o zgârietură fină și sprayul o ascunde în 60 de secunde. Dacă se agață până la metal, asta ține de service.',
    'Resultados': 'Rezultate',
    'De rayada': 'De la zgâriată',
    'a brillante.': 'la strălucitoare.',
    'Antes y después': 'Înainte și după',
    'En vídeo, sin trucos': 'Pe video, fără trucuri',
    'Rocía, frota': 'Pulverizați, ștergeți',
    'y mira.': 'și priviți.',
    'Lo quiero': 'Îl vreau',
    'Lo quiero, pago al recibir': 'Îl vreau, plătesc la livrare',
    'Este': 'Acesta',
    'Opiniones de compradores': 'Păreri ale cumpărătorilor',
    'Más opiniones de compradores': 'Mai multe păreri ale cumpărătorilor',

    /* ---- 25-10 · sellador.js (las mismas frases que tradujo Portugal) ---- */
    'Dónde se usa': 'Unde se folosește',
    'Allí por donde': 'Acolo pe unde',
    'se cuela el agua.': 'se infiltrează apa.',
    'Grietas, juntas y fisuras de cemento, metal, PVC, madera y plástico. Por fuera y por dentro.': 'Fisuri, rosturi și crăpături în ciment, metal, PVC, lemn și plastic. Afară și înăuntru.',
    'Terrazas y azoteas': 'Terase și acoperișuri plate',
    'Grietas del suelo y la junta con el muro, por donde se cuela el agua al piso de abajo.': 'Fisurile din pardoseală și rostul cu zidul, pe unde apa se infiltrează la etajul de dedesubt.',
    'Tejados': 'Acoperișuri',
    'Juntas y fisuras entre tejas antes de que empiecen las goteras.': 'Rosturi și fisuri între țigle, înainte să apară infiltrațiile.',
    'Ventanas y muros': 'Ferestre și ziduri',
    'La junta del alféizar y las grietas del muro por donde entra la humedad.': 'Rostul glafului și fisurile din zid pe unde intră umezeala.',
    'Un hombre sellando con el spray una grieta del suelo de su terraza': 'Un bărbat care etanșează cu sprayul o fisură din pardoseala terasei',
    'Un hombre sellando con el spray las juntas de las tejas de un tejado': 'Un bărbat care etanșează cu sprayul rosturile dintre țiglele unui acoperiș',
    'Una mujer sellando con el spray la junta del alféizar de una ventana': 'O femeie care etanșează cu sprayul rostul glafului unei ferestre',
    'Cómo se aplica': 'Cum se aplică',
    'Cuatro pasos,': 'Patru pași,',
    'sin albañil.': 'fără meșter.',
    'Limpia y seca': 'Curățați și uscați',
    'Quita el polvo, la grasa y el agua de la grieta. Sobre mojado no agarra.': 'Îndepărtați praful, grăsimea și apa din fisură. Pe suprafață udă nu aderă.',
    'Agita 1-2 minutos': 'Agitați 1-2 minute',
    'Así se mezcla bien y sale una capa pareja.': 'Așa se amestecă bine și iese un strat uniform.',
    'Rocía a 20-25 cm': 'Pulverizați de la 20-25 cm',
    'En capas finas, siguiendo la grieta o la junta. Sin goteos.': 'În straturi subțiri, de-a lungul fisurii sau al rostului. Fără scurgeri.',
    '15-20 min entre capas': '15-20 min între straturi',
    'Dos o tres capas para una grieta normal. Listo en menos de una hora.': 'Două sau trei straturi pentru o fisură obișnuită. Gata în mai puțin de o oră.',
    'Antes de comprar': 'Înainte de a cumpăra',
    'Para qué sirve': 'La ce folosește',
    'y para qué no.': 'și la ce nu.',
    'Sí sirve para': 'Folosește la',
    'No sirve para': 'Nu folosește la',
    'Grietas y fisuras de tejados, terrazas y muros': 'Fisuri și crăpături în acoperișuri, terase și ziduri',
    'Juntas de alféizares, ventanas y puertas': 'Rosturi la glafuri, ferestre și uși',
    'Canalones y bajantes de lluvia': 'Jgheaburi și burlane',
    'Cemento, metal, PVC, madera y plástico': 'Ciment, metal, PVC, lemn și plastic',
    'Tuberías de agua o con presión (grifo, entrada de agua)': 'Țevi de apă sau cu presiune (robinet, intrarea apei)',
    'Tubos rotos o agujeros grandes': 'Țevi sparte sau găuri mari',
    'Superficies mojadas: hay que esperar a que sequen': 'Suprafețe ude: trebuie așteptat să se usuce',
    'Si tienes dudas con tu caso, escríbenos por WhatsApp antes de pedir y te decimos si te sirve.': 'Dacă aveți dubii pentru cazul dumneavoastră, scrieți-ne pe WhatsApp înainte de a comanda și vă spunem dacă vă ajută.',
    'De la grieta con humedad': 'De la fisura cu umezeală',
    'a la pared seca.': 'la peretele uscat.',
    'En vídeo': 'Pe video',
    'Así se': 'Așa se',
    'aplica.': 'aplică.',

    /* ---- 25-10 · pulsera.js ---- */
    'Las ganas': 'Pofta',
    'Llegan': 'Vine',
    'sin avisar.': 'fără să anunțe.',
    'Dejarlo es una decisión que tomas una vez. Las ganas, en cambio, vuelven muchas veces al día, en los mismos momentos de siempre.': 'Renunțarea este o decizie pe care o luați o singură dată. Pofta, în schimb, revine de multe ori pe zi, în aceleași momente dintotdeauna.',
    'Con el café': 'La cafea',
    'El primer sorbo de la mañana y la mano ya busca el paquete.': 'Prima sorbitură de dimineață și mâna deja caută pachetul.',
    'En el coche': 'În mașină',
    'Un atasco, un semáforo largo, y el mechero ya está ahí.': 'Un ambuteiaj, un semafor lung, și bricheta e deja acolo.',
    'En la pausa': 'În pauză',
    'Los demás bajan a fumar y tú te quedas con las ganas.': 'Ceilalți ies la o țigară și dumneavoastră rămâneți cu pofta.',
    'El gesto': 'Gestul',
    'Un gesto pequeño': 'Un gest mic',
    'que te frena.': 'care vă oprește.',
    'No es magia ni un tratamiento: es un recordatorio que no se queda en casa.': 'Nu este magie și nici un tratament: este un memento care nu rămâne acasă.',
    'Paso 1': 'Pasul 1', 'Paso 2': 'Pasul 2', 'Paso 3': 'Pasul 3',
    'Póntela': 'Puneți-o',
    'Elástica, se ajusta sola. La llevas todo el día y casi no la notas.': 'Elastică, se potrivește singură. O purtați toată ziua și aproape nu o simțiți.',
    'Cuando lleguen las ganas, tócala': 'Când vine pofta, atingeți-o',
    'Siente la piedra y el imán. Esa pausa de unos segundos es la que frena el impulso.': 'Simțiți piatra și magnetul. Acea pauză de câteva secunde este cea care oprește impulsul.',
    'Recuerda tu decisión': 'Amintiți-vă decizia',
    'Cada vez que la miras te acuerdas de por qué lo dejas. Y si lo dejáis juntos, mejor.': 'De fiecare dată când o priviți, vă amintiți de ce renunțați. Și dacă renunțați împreună, cu atât mai bine.',
    'La pulsera de piedra volcánica con su imán redondo plateado en la palma de una mano': 'Brățara din piatră vulcanică, cu magnetul rotund argintiu, în palma unei mâini',
    'Una mujer tranquila con una taza de té y la pulsera en la muñeca': 'O femeie liniștită, cu o ceașcă de ceai și brățara la încheietură',
    'La muñeca de un hombre y la de una mujer, cada una con la misma pulsera': 'Încheietura unui bărbat și a unei femei, fiecare cu aceeași brățară',
    'La pulsera acompaña tu decisión de dejar el tabaco; no sustituye la ayuda de tu médico o farmacéutico. Por el imán, no la uses si llevas marcapasos u otro dispositivo implantado.': 'Brățara vă însoțește decizia de a renunța la fumat; nu înlocuiește ajutorul medicului sau al farmacistului. Din cauza magnetului, nu o purtați dacă aveți stimulator cardiac sau alt dispozitiv implantat.',
    'La quiero, pago al recibir': 'O vreau, plătesc la livrare',
    'Pedir la mía': 'Vreau să o comand',
    'La quiero': 'O vreau',
    'El mismo café,': 'Aceeași cafea,',
    'otra decisión.': 'altă decizie.',
    'Así es': 'Așa este',
    'la pulsera.': 'brățara.',
    'Pulsera': 'Brățară',

    /* ---- 25-10 · pistola.js ---- */
    'El coche': 'Mașina',
    'Barro, polvo y llantas. Sin ir al túnel de lavado.': 'Noroi, praf și jante. Fără drum la spălătorie.',
    'La terraza y el patio': 'Terasa și curtea',
    'Baldeas el suelo, la fachada y las persianas.': 'Spălați pardoseala, fațada și jaluzelele.',
    'La moto y la bici': 'Motocicleta și bicicleta',
    'Cadena, radios y guardabarros, en un momento.': 'Lanț, spițe și aripi, într-o clipă.',
    'Los muebles de jardín': 'Mobilierul de grădină',
    'Sillas, mesa y toldo listos para el verano.': 'Scaune, masă și copertină gata pentru vară.',
    'Las herramientas': 'Uneltele',
    'Quitas el barro de la azada, la carretilla o las botas.': 'Scoateți noroiul de pe sapă, roabă sau cizme.',
    'El riego': 'Udatul',
    'Con la boquilla en abanico riega macetas y huerto.': 'Cu duza în evantai udați ghivecele și grădina.',
    'Dónde la usas': 'Unde îl folosiți',
    'Donde está la suciedad.': 'Acolo unde este murdăria.',
    'Sin enchufe.': 'Fără priză.',
    'Una hidrolimpiadora grande necesita toma de agua, enchufe y sitio. Esta va en la mano, coge el agua de un cubo y se guarda en su maletín.': 'O mașină de spălat cu presiune mare are nevoie de robinet, priză și loc. Acesta stă în mână, ia apa dintr-o găleată și se păstrează în valiza lui.',
    'El maletín negro abierto con la pistola, una batería, la manguera gris enrollada y la botella de espuma': 'Valiza neagră deschisă, cu pistolul, o baterie, furtunul gri strâns și sticla de spumă',
    'Así llega': 'Așa ajunge',
    'En su maletín': 'În valiza lui',
    'Todo protegido y ordenado. Lo abres y está listo.': 'Totul protejat și ordonat. Îl deschideți și este gata.',
    'La pistola de alta presión de pie junto a sus dos baterías de 48 V y el cargador': 'Pistolul de înaltă presiune în picioare, lângă cele două baterii de 48 V și încărcător',
    'Dos baterías': 'Două baterii',
    'Una puesta, otra cargando': 'Una montată, cealaltă la încărcat',
    'Terminas el coche entero sin esperar a que cargue.': 'Terminați toată mașina fără să așteptați încărcarea.',
    'Todo el contenido del maletín: pistola, dos baterías, cargador, manguera, lanza, boquillas, botella de espuma y adaptador': 'Tot conținutul valizei: pistol, două baterii, încărcător, furtun, lance, duze, sticlă de spumă și adaptor',
    'El kit completo': 'Trusa completă',
    'Lanza, boquillas y espuma': 'Lance, duze și spumă',
    'Chorro fino o abanico, y jabón con la botella de espuma.': 'Jet subțire sau evantai, și săpun cu sticla de spumă.',
    'El kit': 'Trusa',
    'Lo que hay': 'Ce găsiți',
    'dentro del maletín.': 'în valiză.',
    'Fotos del producto real, tal como sale del almacén.': 'Fotografii ale produsului real, așa cum pleacă din depozit.',
    'Es una hidrolimpiadora de mano para la suciedad del día a día: coche, terraza, bici, muebles de jardín. No sustituye a una máquina industrial. Las baterías se cargan en el enchufe de casa con el cargador incluido.': 'Este o mașină de spălat cu presiune de mână, pentru murdăria de zi cu zi: mașină, terasă, bicicletă, mobilier de grădină. Nu înlocuiește un aparat industrial. Bateriile se încarcă la priza de acasă, cu încărcătorul inclus.',
    'El mismo coche.': 'Aceeași mașină.',
    'Dos minutos después.': 'După două minute.',
    'Así limpia.': 'Așa curăță.',
    'Sin cables.': 'Fără fir.',
    'Pistola 48 V': 'Pistol 48 V',

    /* ---- 25-10 · gafas.js (las frases de la cinta y la lupa van en COSAS, más abajo) ---- */
    'Así se lee con las gafas': 'Așa se citește cu ochelarii',
    'Pasa el dedo por la letra:': 'Treceți degetul peste text:',
    'así se lee con las gafas puestas': 'așa se citește cu ochelarii puși',
    'zonas en el cristal: cerca abajo, lejos arriba': 'zone pe lentilă: aproape jos, departe sus',
    'marco: el cristal va al aire y casi no pesa': 'ramă: lentila stă liberă și aproape nu cântărește',
    'funda blanda con cada par': 'husă moale la fiecare pereche',
    'Cerca y lejos': 'Aproape și departe',
    'Unas gafas,': 'O pereche de ochelari,',
    'dos distancias.': 'două distanțe.',
    'No hay graduación que elegir. El cristal es multifocal: cada zona tiene su trabajo.': 'Nu aveți dioptrie de ales. Lentila este multifocală: fiecare zonă are rolul ei.',
    'Parte de arriba': 'Partea de sus',
    'Para mirar lejos': 'Pentru privit departe',
    'La tele, la calle, la persona que te saluda desde la otra mesa.': 'Televizorul, strada, persoana care vă salută de la altă masă.',
    'Parte de abajo': 'Partea de jos',
    'Para leer de cerca': 'Pentru citit de aproape',
    'El móvil, el periódico, el prospecto, el precio de la etiqueta.': 'Telefonul, ziarul, prospectul, prețul de pe etichetă.',
    'Como todas las multifocales, piden unos días para acostumbrarse a mirar por abajo para leer. Si tienes una graduación alta, consulta con tu óptico.': 'Ca toți ochelarii multifocali, au nevoie de câteva zile ca să vă obișnuiți să priviți prin partea de jos când citiți. Dacă aveți o dioptrie mare, întrebați optometristul.',
    'Un hombre con las gafas sin marco leyendo el prospecto de un medicamento en la cocina': 'Un bărbat cu ochelarii fără ramă citind prospectul unui medicament în bucătărie',
    'De cerca': 'De aproape',
    'La letra pequeña, sin alejarla': 'Scrisul mărunt, fără să îl depărtați',
    'Se acabó estirar el brazo y entrecerrar los ojos para leer el prospecto o la etiqueta.': 'Gata cu întinsul brațului și mijitul ochilor ca să citiți prospectul sau eticheta.',
    'Una mujer con las gafas sin marco trabajando con el ordenador portátil': 'O femeie cu ochelarii fără ramă lucrând la laptop',
    'Pantallas': 'Ecrane',
    'Móvil, tablet y ordenador': 'Telefon, tabletă și calculator',
    'El filtro de luz azul las hace más cómodas cuando pasas rato delante de una pantalla.': 'Filtrul de lumină albastră îi face mai comozi când stați mult în fața unui ecran.',
    'Un hombre con las gafas puestas lee el periódico en una terraza y saluda a lo lejos junto a su pareja': 'Un bărbat cu ochelarii puși citește ziarul pe o terasă și salută pe cineva de departe, alături de partenera lui',
    'Sin quitártelas': 'Fără să îi scoateți',
    'Lees y levantas la vista': 'Citiți și ridicați privirea',
    'El periódico en la terraza y, al mirar arriba, ves quién llega. Por eso el pack de 2: unas para cada uno.': 'Ziarul pe terasă și, când ridicați privirea, vedeți cine sosește. De aceea pachetul de 2: câte o pereche pentru fiecare.',
    'Para qué sirven': 'La ce folosesc',
    'Para todo lo que': 'Pentru tot ce',
    'se lee de cerca.': 'se citește de aproape.',
    'Las quiero, pago al recibir': 'Îi vreau, plătesc la livrare',
    'Pedir mis gafas': 'Vreau să îi comand',
    'Así son': 'Așa sunt',
    'de cerca.': 'de aproape.',
    'Sin montura, con la zona de lectura abajo y el filtro que frena la luz azul.': 'Fără ramă, cu zona de citit jos și filtrul care oprește lumina albastră.',
    'La misma carta,': 'Același meniu,',
    'otra vista.': 'altă vedere.',
    'Estas gafas': 'Acești ochelari',
    'Las quiero': 'Îi vreau',
    'Pide las tuyas': 'Comandați-i pe ai dumneavoastră',

    /* ---- de tienda.js (portada de la tienda /ro/) ---- */
    'Todos': 'Toate',
    'Compra verificada': 'Cumpărare verificată',
    'Foto de cliente': 'Fotografie de la client',
    'Listo. Te avisamos cuando haya novedades.': 'Gata. Vă anunțăm când avem noutăți.',

    /* ---- de ficha.js, que no pasan por las claves de arriba ---- */
    'Este producto no está disponible por ahora.': 'Acest produs nu este disponibil momentan.',
    'Ver la tienda': 'Vezi magazinul',
    'Producto no encontrado': 'Produsul nu a fost găsit',
    'Puede que ya no esté disponible.': 'Este posibil să nu mai fie disponibil.',
    'Volver al inicio': 'Înapoi la pagina principală',
    'Escribir una reseña': 'Scrieți o părere',
    'Quiero la promoción': 'Vreau promoția',
    'El producto': 'Produsul',
    'Qué es y para qué sirve': 'Ce este și la ce folosește',
    'Envíos y entregas': 'Transport și livrare',
    'Seguir mi pedido': 'Urmărește comanda',
    'Cambios y devoluciones': 'Schimburi și retururi',
    'Términos y condiciones': 'Termeni și condiții',
    'termina hoy': 'se termină azi',
    'Promoción': 'Promoție',
    'Otros': 'Altele',
    'Característica': 'Caracteristică',
    'Por qué lo quieres': 'De ce merită',
    'Pago 100% seguro contra entrega': 'Plată 100% sigură la livrare',
    'Pedir ahora': 'Comandă acum',
    'Leer más': 'Citește mai mult',
    'Leer menos': 'Citește mai puțin',
  };
  /* 25-10 · el genero del boton cambia con el producto (brățară = ea, ochelari = ei,
     pistol / spray / balsam = el), igual que Portugal con la pulseira. */
  var prod = '';
  try { prod = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (prod === 'pulsera') {
    T['Îl vreau, plătesc la livrare'] = 'O vreau, plătesc la livrare';
    T['Îl vreau'] = 'O vreau';
    T['Comandați-l pe al dumneavoastră'] = 'Comandați-o pe a dumneavoastră';
  }
  if (prod === 'gafas') {
    T['Îl vreau, plătesc la livrare'] = 'Îi vreau, plătesc la livrare';
    T['Îl vreau'] = 'Îi vreau';
    T['Comandați-l pe al dumneavoastră'] = 'Comandați-i pe ai dumneavoastră';
  }
  if (prod === 'pistola') {
    T['La quiero, pago al recibir'] = 'Îl vreau, plătesc la livrare';
    T['La quiero'] = 'Îl vreau';
    T['Pedir la mía'] = 'Vreau să îl comand';
  }
  /* la portada de la tienda (/ro/ sin ?p=): el boton de cada tarjeta sirve para todos */
  if (!prod) T['Lo quiero'] = 'Vreau';

  var PEDAZOS = [[/^([\d.]+) reseñas$/, '$1 păreri'], [/^(\d+) productos$/, '$1 produse'], [/^1 producto$/, '1 produs'],
    /* "2 flacoane · 9,99 lei cada buc." → "… / buc." */
    [/ cada (buc\.|pereche)/g, ' / $1'], [/ cada (uno|una)\b/g, ' / buc.']];

  /* gafas.js: la cinta y la lupa juntan estas frases en un solo texto ("… · … · …"),
     asi que se cambian por trozos, no por texto entero. */
  var COSAS = [
    ['El prospecto del medicamento', 'Prospectul medicamentului'], ['los mensajes del móvil', 'mesajele de pe telefon'],
    ['el periódico del domingo', 'ziarul de duminică'], ['la carta del restaurante', 'meniul restaurantului'],
    ['el precio en la etiqueta', 'prețul de pe etichetă'], ['la letra del crucigrama', 'literele din rebus'],
    ['la receta de la abuela', 'rețeta bunicii'], ['el ticket del súper', 'bonul de la supermarket'],
    ['la factura de la luz', 'factura de curent'], ['el libro de la mesilla', 'cartea de pe noptieră'],
    ['las instrucciones de la caja', 'instrucțiunile de pe cutie'], ['el grupo de la familia', 'grupul familiei'],
  ];

  /* aranazos.js escribe las fotos como 'img/…' (relativo a la raiz de España):
     desde /ro/ hay que subir un nivel. Todavia NO hay versiones en rumano de las
     fotos con texto: se usan las de España tal cual. */
  /* 25-10: las fotos con texto ya existen en rumano en ro/img/ (mismo nombre):
     esas se toman de aqui; el resto sigue saliendo de la carpeta de España. */
  var FOTOS_RO = ['hero-aranazos', 'aranazos-rocia', 'aranazos-frota', 'aranazos-brillo', 'aranazos-ba',
    'sellador-ba', 'sellador-terraza', 'sellador-ventana', 'sellador-tejado',
    'pulsera-palma', 'pulsera-muneca', 'pulsera-pareja', 'pulsera-ba', 'gafas-ba',
    /* 25-10 pistola de agua (Dropi 56) */
    'hero-pistol-apa', 'pistol-apa-produs', 'pistol-apa-terasa', 'pistol-apa-gradina', 'pistol-apa-ba', 'pistol-apa-tarjeta'];
  window.FOTO_RO = function (u) {
    var m = String(u || '').match(/(?:^|\/)img\/([a-z0-9-]+)\.webp/);
    return m && FOTOS_RO.indexOf(m[1]) !== -1 ? 'img/' + m[1] + '.webp?v=1' : null;
  };
  function foto(u) {
    if (!u || u.indexOf('img/') !== 0) return null;
    var r = window.FOTO_RO(u) || '../' + u;
    /* si ya es la foto de ro/img no se toca: volver a poner el mismo src disparaba
       el observador otra vez y la pagina se quedaba en un bucle sin fin (25-10) */
    return r === u ? null : r;
  }

  function texto(n) {
    var v = n.nodeValue, t = v.trim();
    if (!t) return;
    var nova = T[t];
    if (nova === undefined) {
      nova = t;
      PEDAZOS.forEach(function (x) { nova = nova.replace(x[0], x[1]); });
      if (prod === 'gafas') COSAS.forEach(function (x) { nova = nova.split(x[0]).join(x[1]); });
    }
    if (nova === t) return;
    var ini = v.match(/^\s*/)[0], fin = v.match(/\s*$/)[0];
    n.nodeValue = ini + nova + fin;
  }
  function elemento(e) {
    ['alt', 'aria-label', 'title'].forEach(function (a) {
      var v = e.getAttribute && e.getAttribute(a);
      if (v && T[v.trim()] !== undefined) e.setAttribute(a, T[v.trim()]);
    });
    /* 25-10 · la ruleta del sellador regala una cinta que pone el montador de ESPAÑA:
       en Rumania no hay regalo, asi que ni la ruleta, ni el circulito, ni el aviso
       "Tu cinta va con tu pedido" (index.html ademas abre el sellador con ?sinruleta=1). */
    if (e.classList && (e.classList.contains('se-r') || e.classList.contains('se-r-insignia') || e.classList.contains('se-r-ok'))) {
      e.parentNode && e.parentNode.removeChild(e); return;
    }
    if (e.tagName === 'IMG') {
      var src = e.getAttribute('src') || '';
      /* 🔴 los carteles de oferta (*-promo.webp: spray, sellador, pulsera, pistola,
         gafas) traen los PRECIOS DE ESPAÑA EN EUROS dentro de la imagen: en Rumania
         no se muestran (no hay precios aprobados en lei). */
      if (/-promo(-pt)?\.webp/.test(src)) { var fig = e.closest('figure') || e; fig.parentNode && fig.parentNode.removeChild(fig); return; }
      var s = foto(src); if (s) e.setAttribute('src', s);
    }
    if (e.tagName === 'VIDEO') { var po = foto(e.getAttribute('poster')); if (po) e.setAttribute('poster', po); }
  }
  function pasa(raiz) {
    if (!raiz) return;
    if (raiz.nodeType === 3) { texto(raiz); return; }
    if (raiz.nodeType !== 1) return;
    elemento(raiz);
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), n, lista = [];
    while ((n = w.nextNode())) lista.push(n);
    lista.forEach(function (x) { if (x.nodeType === 3) texto(x); else elemento(x); });
  }
  function arranca() {
    pasa(document.body);
    if (!('MutationObserver' in window)) return;
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === 'characterData') texto(m.target);
        else if (m.type === 'attributes') elemento(m.target);
        else [].forEach.call(m.addedNodes, pasa);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['src', 'poster', 'alt', 'aria-label'] });
  }
  if (document.body) arranca(); else document.addEventListener('DOMContentLoaded', arranca);
})();
