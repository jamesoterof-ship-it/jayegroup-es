/* ============================================================
   TEXTE ÎN LIMBA POLONEZĂ · Jaye Group

   Este archivo es el UNICO que traduce la pagina. ficha.js es el mismo de
   España y Portugal: lee estas claves y, si alguna falta, queda el texto en
   español. Trato de cortesia "dumneavoastră" en todo.

   OJO (nota mia, no del cliente): ficha.js todavia NO conoce Rumania
   (moneda, movil +40, codigo postal de 6 cifras, județe). Las claves estan
   listas para cuando se le agregue.
   ============================================================ */
window.TEXTOS = {
  _pais: 'PL',
  locale: 'pl-PL',
  moneda: 'PLN',
  sufijoMoneda: ' zł',
  marca: 'Jaye Group Polska',
  correo: 'apoio@jayegroup.com.es',   /* el mismo de Portugal hasta que haya uno rumano */

  /* ---- prefixe: România prima ---- */
  paises: [
    ['PL', '+48',  9, 'Polska'],
    ['MD', '+373', 8, 'Mołdawia'],
    ['IT', '+39', 10, 'Włochy'],
    ['ES', '+34',  9, 'Hiszpania'],
    ['DE', '+49', 11, 'Niemcy'],
    ['HU', '+36',  9, 'Węgry'],
    ['BG', '+359', 9, 'Bułgaria'],
    ['FR', '+33',  9, 'Francja'],
    ['GB', '+44', 10, 'Wielka Brytania'],
    ['AT', '+43', 10, 'Austria'],
  ],

  /* ---- formular ---- */
  lNombre: 'Imię i nazwisko',
  phNombre: 'Np.: Anna Kowalska',
  eNombre: 'Wpisz pełne imię i nazwisko.',
  lMovil: 'Telefon komórkowy',
  phMovil: '512 345 678',
  eMovil: 'Sprawdź numer komórkowy: w Polsce ma 9 cyfr po +48.',
  eMovilOtro: 'Sprawdź numer telefonu.',
  lCorreo: 'E-mail (opcjonalnie)',
  phCorreo: 'Np.: anna@gmail.com',
  eCorreo: 'Wpisz prawidłowy e-mail: tam wyślemy Ci potwierdzenie zamówienia.',
  lDir: 'Adres',
  phDir: 'Ulica, numer, mieszkanie',
  eDir: 'Wpisz ulicę i numer.',
  eDirNum: 'Brakuje numeru adresu: bez niego kurier nie będzie mógł dostarczyć paczki.',
  lRef: 'Wskazówki dla kuriera',
  opcional: '(opcjonalnie)',
  phRef: 'Domofon, piętro, godziny, w których jesteś w domu…',
  lCP: 'Kod pocztowy',
  phCP: '00-001',
  eCP: 'Kod pocztowy składa się z 5 cyfr. Przykład: 00-001.',
  lCiudad: 'Miejscowość',
  phCiudad: 'Np.: Kraków',
  eCiudad: 'Wpisz miejscowość.',
  lProvincia: 'Województwo',
  elige: 'Wybierz…',
  eProvincia: 'Wybierz województwo.',
  sinCobertura: 'Przepraszamy: jeszcze nie dostarczamy pod ten kod pocztowy.',

  /* ---- buton și note ----
     El texto del boton tiene que decir que el pedido obliga a pagar (Directiva
     2011/83/UE, art. 8.2, transpuesta en Rumania por la OUG 34/2014). */
  btnPedir: 'Zamawiam z obowiązkiem zapłaty · płatność przy odbiorze',
  enviando: 'Wysyłanie…',
  notaCod: 'Płacisz kurierowi, kiedy otrzymasz paczkę. Potwierdzamy zamówienie na WhatsAppie.',
  notaPre: 'Po wysłaniu zamówienia przeniesiemy Cię na stronę płatności.',
  /* ---- iesire pe WhatsApp pentru cine se încurcă la formular ---- */
  dudas: 'Wydaje Ci się skomplikowane? ',
  msgWa: 'Dzień dobry, chcę zamówić ',
  msgWa2: ' a formularz wydaje mi się skomplikowany',
  ayudaWa: 'Napisz do nas na WhatsAppie',
  yTeAyudamos: ', a my się tym zajmiemy.',
  seTeComplica: 'Masz trudności? Napisz do nas na ',
  pedidoPagar: 'Ostatni krok: zapłać za zamówienie',
  gracias: 'Dziękujemy, ',
  pagaTxt: 'Zapłać teraz kartą lub przez PayPal.',
  pagarBtn: 'Zapłać ',
  pagarBtn2: 'kartą lub przez PayPal',
  pagaCaptura: 'Po płatności wyślij nam na WhatsAppie zrzut ekranu płatności, a my potwierdzimy wszystko.',
  mandarCaptura: 'Wyślij zrzut ekranu na WhatsAppie',
  msgPagado: 'Dzień dobry, zapłaciłem/zapłaciłam za zamówienie ',
  msgPagado2: '. Wysyłam zrzut ekranu płatności.',
  pedidoRecibido: 'Zamówienie otrzymane',
  teEscribimos: 'Napiszemy do Ciebie na WhatsAppie na numer ',
  paraConfirmar: ', żeby potwierdzić dostawę.',
  pagasRecibes: 'Płacisz, kiedy odbierzesz paczkę.',
  huellaSoloPre: 'Ponieważ wcześniejsze zamówienie nie mogło zostać dostarczone, to zamówienie płacisz z góry – kartą lub przez PayPal. Sprawdź sumę i naciśnij przycisk ponownie.',
  avisoEntrega: 'Ponieważ płacisz przy odbiorze, kurier przekazuje Ci paczkę osobiście: jeśli w dniach dostawy nie będziesz w domu, daj nam znać na WhatsAppie, a ustalimy inny dzień lub przekażemy paczkę zaufanej osobie. Tak dotrze za pierwszym razem 🚚',
  falloBtnWa: 'Napisz do nas na WhatsAppie',
  seTeComplicaWa: 'Masz trudności? Napisz do nas na WhatsAppie, a my zajmiemy się zamówieniem',
  asuntoPedido: 'Zamówienie ',
  asuntoQuiero: 'Chcę zamówić ',

  /* ---- plată ---- */
  pagoCod: 'Płatność przy odbiorze',
  pagoCodSub: 'Darmowa dostawa',
  pagaAhora: 'Zapłać teraz',
ahorras: 'Oszczędzasz ',
  subtotal: 'Suma częściowa',
  descuento: 'Rabat',
  envio: 'Dostawa',
  gratis: 'Gratis',
  totalCod: 'Łącznie do zapłaty przy odbiorze',
  totalPre: 'Łącznie do zapłaty teraz',

  /* ---- păreri despre produs ----
     La linea de la fuente es OBLIGATORIA y no se esconde: son opiniones de
     compradores DEL PRODUCTO, no de clientes de nuestra tienda. */
  revTit: 'Opinie o produkcie',
  revFuente: 'Oceny zweryfikowanych nabywców tego produktu.',
  compraVerificada: 'Zweryfikowany zakup',
  resenas: 'ocen',

  /* ---- texte din fișă ---- */
  desde: 'Od',
  desdePie: '· darmowa dostawa i płacisz, kiedy otrzymasz do domu.',
  pedirAhora: 'Chcę zamówić',
  saleHoy: 'Wysyłane z naszego magazynu. Płacisz, kiedy otrzymasz.',
  masVendido: 'Najczęściej kupowane',
  mejorPrecio: 'Najlepsza cena',
  verMas: 'Zobacz więcej ocen',
  masExp: 'Więcej opinii nabywców tego produktu',

  /* ---- antet și butonul mare ---- */
  ctaGrande: 'Chcę to mieć, płacę przy odbiorze',
  ctaSub: 'Darmowa dostawa · Nie płacisz nic z góry',
  recienLlegado: 'Właśnie dotarło do Polski · bądź wśród pierwszych, którzy to wypróbują',
  pideTit: 'Zamów swój',
  faqTit: 'Najczęściej zadawane pytania',

  /* ---- curieri ----
     04-11 POLONIA: Dropi PRO Polonia despacha con InPost (guía de Dropi PRO, PDF del 03-11). */
  enviamosCon: 'Dostarczamy z',
  carriers: ['InPost'],
  sellos: [
    ['InPost', 'Kurier z dostawą do domu'],
    ['Płatność przy odbiorze', 'Kurierowi, kiedy masz paczkę w ręku'],
    ['Darmowa dostawa', 'Bez kosztów przesyłki'],
    ['30 dni', 'Gwarancja satysfakcji'],
  ],

  /* ---- ce vă garantăm ---- */
  resRotulo: 'Co Ci gwarantujemy',
  resTit: 'Bez drobnego druku',
  resDatos: [
    ['InPost', 'kurier w całej Polsce'],
    ['0 zł', 'koszty dostawy'],
    ['30', 'dni gwarancji satysfakcji'],
    ['0 zł', 'z góry: płacisz przy odbiorze'],
  ],

  /* ---- garanție ----
     En Rumania el derecho de desistimiento son 14 dias (OUG 34/2014) y la
     garantia legal de conformidad 2 años (OUG 140/2021). No hay Livro de
     Reclamações: las reclamaciones van a la ANPC. */
  selloArriba: 'GWARANCJA',
  selloAbajo: 'SATYSFAKCJI',
  dias: 'DNI',
  garTit: 'Kupuj bez ryzyka',
  garTxt: 'Wypróbuj spokojnie: masz <b>30 dni gwarancji satysfakcji</b>. Jeśli Cię nie przekona, napisz do nas, a zwrócimy Ci pieniądze.',
  garChips: ['30 dni gwarancji', 'Darmowa dostawa', 'Płatność przy odbiorze'],
  garPie: 'W sprawie gwarancji napisz do nas na ',
  garPie2: ' lub na WhatsAppie.',
  livroReclamacoes: false,

  /* ---- ieșire ---- */
  exitTit: 'Masz jeszcze chwilę?',
  exitTxt: 'Zamówienie ma <b>darmową dostawę</b>. Nie płacisz teraz nic: <b>płacisz kurierowi</b>, kiedy je odbierzesz w domu.',
  exitBtn: 'Chcę dokończyć zamówienie',
  exitMail: 'albo napisz do nas na ',

  /* ---- eroare de conexiune ---- */
  falloTit: 'Nie udało się zarejestrować zamówienia',
  falloTxt: 'Połączenie zostało przerwane właśnie w momencie wysyłania i nie chcemy mówić Ci, że zamówienie zostało zarejestrowane, jeśli to nieprawda.<br>Twoje dane zostały zapisane: spróbuj ponownie za chwilę albo napisz do nas, a my się tym zajmiemy.',
  falloBtn: 'Napisz do pomocy',
  asuntoFallo: 'Moje zamówienie nie zostało potwierdzone',
  cuerpoFallo: 'Dzień dobry, złożyłem/złożyłam zamówienie ',
  cuerpoFallo2: ' na stronie i nie zostało potwierdzone. Mam na imię ',

  /* ---- 25-10: claves de ficha.js que faltaban (con la tienda de los 6 productos) ---- */
  conQuien: 'Z kim dostarczamy',
  interesar: 'Może Cię też zainteresować',
  desdeOtros: 'od ',
  pagaAhoraAhorra: 'Zapłać teraz i zaoszczędź ',
  unPct: ' ',   /* vacio no vale: t() pone el 'un ' de España ("economisiți un 10 %") */
  yPrioritaria: ' kartą lub przez PayPal',   /* 25-10: en Rumania no se promete entrega prioritaria (no esta verificada) */
  pideWa: 'Masz pytania? Zamów przez WhatsAppa',
  msgWaHero: 'Dzień dobry, interesuję się ',
  flota: 'Zamów teraz',
  escribenosWa: 'Napisz do nas na WhatsAppie',
  ppPagadoTit: 'Płatność została otrzymana!',
  ppYaPagado: 'To zamówienie jest już opłacone. Napiszemy do Ciebie na WhatsAppie, kiedy wyśle się do Ciebie.',
  ppEnlaceMal: 'Ten link do płatności jest niedostępny',
  ppEnlaceMal2: 'Napisz do nas, a pomożemy Ci z zamówieniem.',
  ppEnlaceMal3: 'Sprawdź połączenie lub napisz do nas.',
  totalPagar: 'Łącznie do zapłaty: ',
  ppCargando: 'Ładowanie bezpiecznej płatności…',
ppComprobando: 'Weryfikacja płatności…',
  ppPagadoTxt: 'Twoje zamówienie jest opłacone i wysyłane z priorytetową dostawą. Napiszemy do Ciebie na WhatsAppie, kiedy wyśle się do Ciebie.',
  ppNoConfirma: 'Nie udało się potwierdzić płatności. Jeśli pieniądze zostały pobrane, napisz do nas na WhatsAppie, a natychmiast sprawdzimy.',
  ppCancelado: 'Płatność nie została sfinalizowana. Możesz spróbować ponownie w dowolnym momencie.',
  ppError: 'Nie udało się rozpocząć płatności. Spróbuj ponownie lub użyj drugiej opcji poniżej.',

  /* ---- cei doi pași ai formularului ---- */
  paso1: 'Ile chcesz?',
  paso2: 'Jak chcesz zapłacić?',
  btnPedirPre: 'Zapłać teraz ',

  /* ============================================================
     DISEÑO DEL BÁLSAMO (balsamo.js) — el mismo de Portugal, en rumano.
     balsamo.js es compartido y solo pone '../' delante de las fotos cuando el
     pais es PT. Por eso aqui las rutas ya van con '../'.
     ============================================================ */
  baCifra1: 'gramów, które zmieszczą się w torebce',
  baCifra2: 'składniki aktywne',
  baCifra3: 'brudne ręce',
  baPasosRot: 'Jak się stosuje',
  baPasosH2: 'Trzy gesty, <em>i gotowe.</em>',
  baPasos: [
    ['Obróć podstawę', 'Jedno przekręcenie i wychodzi trochę balsamu. Nie brudzisz rąk i nie mierzysz ilości: wychodzi tyle, ile potrzebujesz.'],
    ['Przejedź po skórze', 'Przejedź sztyftkiem po policzkach, konturze oczu, ustach, szyi lub dekolcie. Wchłania się szybko i nie pozostawia tłustej warstwy.'],
    ['Kiedy chcesz', 'Rano, wieczorem lub w środku popołudnia, na poprawkę. Działa przed makijażem lub na nim, bez niszczenia go.'],
  ],

  baTraeRot: 'Co go wyróżnia',
  baTraeH2: 'To nie jest krem: <em>to jest gest.</em>',

  baFotos: [
    ['../img/balsamo-uso.webp?v=1',
     'Kobieta około pięćdziesiątki przekładająca balsam VITALIS na policzki',
     'Gest', 'Dwie sekundy i gotowe',
     'Nakłada się bezpośrednio na skórę, bez rąk i bez mierzenia ilości. Dlatego naprawdę używa się go codziennie i nie zostaje zapomniany w szufladzie.'],
    ['../img/balsamo-mano.webp?v=1',
     'Sztyftek balsamu z kolagenem VITALIS w dłoni, ze swoją złotą etykietą',
     'Gdzie się nakłada', 'Twarz, usta, szyja i dekolt',
     'Jeden produkt na wszystkie miejsca, które się wysuszają. Nie potrzebujesz już osobnego słoika na każdą część twarzy.'],
    ['../img/balsamo-bolso.webp?v=1',
     'Sztyftek obok torebki, pary okularów przeciwsłonecznych i buteleczki perfum na marmurowym stoliku',
     'Idzie z Tobą', 'Dziewięć gramów i gotowe',
     'Jest stały: nie wylewa się w torebce i nie wysycha jak otwarty słoik. Bierzesz go ze sobą i poprawiasz gdziekolwiek jesteś.'],
  ],
};

/* ============================================================
   TŁUMACZ · spray na zadrapania (24-10-2026). Ta sama metoda co
   pt/traduz-pt.js: PROJEKT jest z Hiszpanii (../aranazos.css +
   ../aranazos.js, bez zmian) i tutaj zmieniamy tylko teksty w języku hiszpańskim,
   które te pliki (i ficha.js) wyświetlają na stronie, oraz ścieżki zdjęć.
   Jest w tym pliku, ponieważ blokada projektu nie pozwala tworzyć
   nowych plików bez uprawnień; ładuje się przed ficha.js, więc czeka
   na DOM i monitoruje to, co zostanie dodane później.
   ============================================================ */
(function () {
  'use strict';
  var T = {
    /* ---- aranazos.js ---- */
    'Así se usa': 'Jak się używa',
    'Tres pasos,': 'Trzy kroki,',
    '60 segundos.': '60 sekund.',
    '¡Deja de pagar al taller! Solo el spray y un paño.': 'Przestań płacić warsztatowi! Tylko spray i ściereczka.',
    'Rocía': 'Spryskaj',
    'Frota': 'Przetrzyj',
    'Brilla': 'Lśni',
    'Directo sobre el arañazo, con la zona limpia y seca.': 'Bezpośrednio na zadrapanie, z czystą i suchą powierzchnią.',
    'Con un paño de microfibra, en círculos: el arañazo desaparece.': 'Ściereczką z mikrofibry, okrężnymi ruchami: zadrapanie znika.',
    'Tu coche brilla como nuevo y el agua resbala en gotas.': 'Twój samochód lśni jak nowy, a woda spływa w kroplach.',
    'Una mujer rociando el spray sobre una rayita del parachoques de su coche blanco': 'Kobieta spryskująca sprayem drobne zadrapanie na zderzaku swojego białego samochodu',
    'Un joven frotando la puerta de su coche rojo con un paño de microfibra': 'Młody mężczyzna przecierający drzwi swojego czerwonego samochodu ściereczką z mikrofibry',
    'Un señor con el bote en la mano sobre el capó azul mojado, con el agua en gotas': 'Mężczyzna z butelką w dłoni przy mokrej niebieskiej masce, z wodą w kroplach',
    'Arañazos': 'Zadrapania',
    'que elimina.': 'które usuwa.',
    'Los elimina': 'Usuwa je',
    'Necesitan taller': 'Wymagają warsztatu',
    'Arañazos del lavado y marcas en círculos': 'Zadrapania po myciu i ślady okrężne',
    'Las uñas junto a la manilla de la puerta': 'Ślady paznokci przy klamce drzwi',
    'Roces de ramas, bolsas o mochilas': 'Otarcia od gałęzi, toreb lub plecaków',
    'Pintura opaca que perdió el brillo': 'Matowy lakier, który stracił połysk',
    'Rayones que dejan ver la capa gris o el metal': 'Zadrapania odsłaniające szarą warstwę lub metal',
    'Abolladuras y golpes': 'Wgniecenia i uderzenia',
    'Pintura saltada o desconchada': 'Odpryśnięty lub złuszczony lakier',
    'La prueba de la uña': 'Test paznokcia',
    'Pasa la uña sobre el arañazo. Si no se engancha, este spray lo elimina en 60 segundos. Si se engancha hasta el metal, eso ya es de taller.': 'Przejedź paznokciem po zadrapaniu. Jeśli się nie zaczepia, ten spray usuwa je w 60 sekund. Jeśli zaczepia się do metalu, to wymaga warsztatu.',
    'Resultados': 'Efekty',
    'De rayada': 'Z porysowanego',
    'a brillante.': 'na lśniący.',
    'Antes y después': 'Przed i po',
    'En vídeo, sin trucos': 'Na wideo, bez sztuczek',
    'Rocía, frota': 'Spryskaj, przetrzyj',
    'y mira.': 'i patrz.',
    'Lo quiero': 'Chcę to',
    'Lo quiero, pago al recibir': 'Chcę to, płacę przy odbiorze',
    'Este': 'To',
    'Opiniones de compradores': 'Opinie kupujących',
    'Más opiniones de compradores': 'Więcej opinii kupujących',

    /* ---- 25-10 · sellador.js (te same zdania, które przetłumaczył Portugalia) ---- */
    'Dónde se usa': 'Gdzie się używa',
    'Allí por donde': 'Tam, gdzie',
    'se cuela el agua.': 'woda się przedostaje.',
    'Grietas, juntas y fisuras de cemento, metal, PVC, madera y plástico. Por fuera y por dentro.': 'Pęknięcia, szczeliny i rysy w cemencie, metalu, PVC, drewnie i plastiku. Na zewnątrz i wewnątrz.',
    'Terrazas y azoteas': 'Tarasy i dachy płaskie',
    'Grietas del suelo y la junta con el muro, por donde se cuela el agua al piso de abajo.': 'Pęknięcia podłogi i szczeliny przy ścianie, przez które woda przedostaje się na piętro poniżej.',
    'Tejados': 'Dachy',
    'Juntas y fisuras entre tejas antes de que empiecen las goteras.': 'Szczeliny i rysy między dachówkami, zanim zaczną się przecieki.',
    'Ventanas y muros': 'Okna i ściany',
    'La junta del alféizar y las grietas del muro por donde entra la humedad.': 'Szczelina parapetu i pęknięcia w ścianie, przez które dostaje się wilgoć.',
    'Un hombre sellando con el spray una grieta del suelo de su terraza': 'Mężczyzna uszczelniający sprayem pęknięcie w podłodze tarasu',
    'Un hombre sellando con el spray las juntas de las tejas de un tejado': 'Mężczyzna uszczelniający sprayem szczeliny między dachówkami na dachu',
    'Una mujer sellando con el spray la junta del alféizar de una ventana': 'Kobieta uszczelniająca sprayem szczelinę parapetu okiennego',
    'Cómo se aplica': 'Jak się nakłada',
    'Cuatro pasos,': 'Cztery kroki,',
    'sin albañil.': 'bez murarza.',
    'Limpia y seca': 'Wyczyść i wysusz',
    'Quita el polvo, la grasa y el agua de la grieta. Sobre mojado no agarra.': 'Usuń kurz, tłuszcz i wodę z pęknięcia. Na mokro nie przylgnie.',
    'Agita 1-2 minutos': 'Wstrząśnij 1-2 minuty',
    'Así se mezcla bien y sale una capa pareja.': 'Tak dobrze się wymiesza i wyjdzie równa warstwa.',
    'Rocía a 20-25 cm': 'Spryskaj z 20-25 cm',
    'En capas finas, siguiendo la grieta o la junta. Sin goteos.': 'Cienkimi warstwami, wzdłuż pęknięcia lub szczeliny. Bez ściekania.',
    '15-20 min entre capas': '15-20 min między warstwami',
    'Dos o tres capas para una grieta normal. Listo en menos de una hora.': 'Dwie lub trzy warstwy na zwykłe pęknięcie. Gotowe w niecałą godzinę.',
    'Antes de comprar': 'Przed zakupem',
    'Para qué sirve': 'Do czego służy',
    'y para qué no.': 'a do czego nie.',
    'Sí sirve para': 'Służy do',
    'No sirve para': 'Nie służy do',
    'Grietas y fisuras de tejados, terrazas y muros': 'Pęknięcia i rysy dachów, tarasów i ścian',
    'Juntas de alféizares, ventanas y puertas': 'Szczeliny przy parapetach, oknach i drzwiach',
    'Canalones y bajantes de lluvia': 'Rynny i rury spustowe',
    'Cemento, metal, PVC, madera y plástico': 'Cement, metal, PVC, drewno i plastik',
    'Tuberías de agua o con presión (grifo, entrada de agua)': 'Rury wodne lub pod ciśnieniem (kran, dopływ wody)',
    'Tubos rotos o agujeros grandes': 'Pęknięte rury lub duże dziury',
    'Superficies mojadas: hay que esperar a que sequen': 'Mokre powierzchnie: trzeba poczekać, aż wyschną',
    'Si tienes dudas con tu caso, escríbenos por WhatsApp antes de pedir y te decimos si te sirve.': 'Jeśli masz wątpliwości dotyczące Twojego przypadku, napisz do nas na WhatsApp przed zamówieniem, a powiemy Ci, czy to się przyda.',
    'De la grieta con humedad': 'Od pęknięcia z wilgocią',
    'a la pared seca.': 'do suchej ściany.',
    'En vídeo': 'Na wideo',
    'Así se': 'Tak się',
    'aplica.': 'nakłada.',

    /* ---- 25-10 · pulsera.js ---- */
    'Las ganas': 'Ochota',
    'Llegan': 'Przychodzi',
    'sin avisar.': 'bez zapowiedzi.',
    'Dejarlo es una decisión que tomas una vez. Las ganas, en cambio, vuelven muchas veces al día, en los mismos momentos de siempre.': 'Rzucenie to decyzja, którą podejmujesz raz. Ochota natomiast wraca wiele razy dziennie, w tych samych momentach co zawsze.',
    'Con el café': 'Przy kawie',
    'El primer sorbo de la mañana y la mano ya busca el paquete.': 'Pierwszy łyk rano i ręka już sięga po paczkę.',
    'En el coche': 'W samochodzie',
    'Un atasco, un semáforo largo, y el mechero ya está ahí.': 'Korek, długie światło, a zapalniczka już tam jest.',
    'En la pausa': 'W przerwie',
    'Los demás bajan a fumar y tú te quedas con las ganas.': 'Inni idą zapalić, a Ty zostajesz z ochotą.',
    'El gesto': 'Gest',
    'Un gesto pequeño': 'Mały gest',
    'que te frena.': 'który Cię powstrzymuje.',
    'No es magia ni un tratamiento: es un recordatorio que no se queda en casa.': 'To nie magia ani leczenie: to przypomnienie, które nie zostaje w domu.',
    'Paso 1': 'Krok 1', 'Paso 2': 'Krok 2', 'Paso 3': 'Krok 3',
    'Póntela': 'Załóż ją',
    'Elástica, se ajusta sola. La llevas todo el día y casi no la notas.': 'Elastyczna, dopasowuje się sama. Nosisz ją cały dzień i prawie jej nie czujesz.',
    'Cuando lleguen las ganas, tócala': 'Gdy przyjdzie ochota, dotknij jej',
    'Siente la piedra y el imán. Esa pausa de unos segundos es la que frena el impulso.': 'Poczuj kamień i magnes. Ta pauza kilku sekund to właśnie to, co powstrzymuje impuls.',
    'Recuerda tu decisión': 'Pamiętaj o swojej decyzji',
    'Cada vez que la miras te acuerdas de por qué lo dejas. Y si lo dejáis juntos, mejor.': 'Za każdym razem, gdy na nią patrzysz, przypominasz sobie, dlaczego rzucasz. A jeśli rzucacie razem, tym lepiej.',
    'La pulsera de piedra volcánica con su imán redondo plateado en la palma de una mano': 'Bransoletka z kamienia wulkanicznego ze srebrnym okrągłym magnesem na dłoni',
    'Una mujer tranquila con una taza de té y la pulsera en la muñeca': 'Spokojna kobieta z filiżanką herbaty i bransoletką na nadgarstku',
    'La muñeca de un hombre y la de una mujer, cada una con la misma pulsera': 'Nadgarstek mężczyzny i kobiety, każde z tą samą bransoletką',
    'La pulsera acompaña tu decisión de dejar el tabaco; no sustituye la ayuda de tu médico o farmacéutico. Por el imán, no la uses si llevas marcapasos u otro dispositivo implantado.': 'Bransoletka towarzyszy Twojej decyzji rzucenia palenia; nie zastępuje pomocy lekarza lub farmaceuty. Ze względu na magnes nie używaj jej, jeśli masz rozrusznik serca lub inne wszczepione urządzenie.',
    'La quiero, pago al recibir': 'Chcę ją, płacę przy odbiorze',
    'Pedir la mía': 'Zamawiam moją',
    'La quiero': 'Chcę ją',
    'El mismo café,': 'Ta sama kawa,',
    'otra decisión.': 'inna decyzja.',
    'Así es': 'Taka jest',
    'la pulsera.': 'bransoletka.',
    'Pulsera': 'Bransoletka',
    /* 28-10 · rozdział 03 "Tak ją otrzymujesz" (etui, Dropi RO 4500) */
    'Así la recibes': 'Tak ją otrzymujesz',
    'En su estuche,': 'W swoim etui,',
    'lista para regalar.': 'gotowa na prezent.',
    'Estas son fotos reales del producto que te llega a casa.': 'To są prawdziwe zdjęcia produktu, który otrzymujesz do domu.',
    'Al abrir el paquete': 'Otwierając paczkę',
    'Su caja de regalo': 'Jej pudełko na prezent',
    'Llega en una caja negra con ventana, lista para guardar o para regalar.': 'Przychodzi w czarnym pudełku z okienkiem, gotowa do przechowania lub wręczenia w prezencie.',
    'Dentro': 'W środku',
    'Su estuche personalizado': 'Jej spersonalizowane etui',
    'La pulsera viene suspendida en un estuche negro transparente: se ve entera y no se estropea.': 'Bransoletka jest zawieszona w przezroczystym czarnym etui: widać ją całą i się nie uszkodzi.',
    'La caja negra de regalo con ventana en la que llega la pulsera': 'Czarne pudełko na prezent z okienkiem, w którym przychodzi bransoletka',
    'La pulsera de piedra volcánica dentro de su estuche negro transparente': 'Bransoletka z kamienia wulkanicznego w swoim przezroczystym czarnym etui',
    'La quiero con su estuche': 'Chcę ją z etui',

    /* ---- 25-10 · pistola.js ---- */
    'El coche': 'Samochód',
    'Barro, polvo y llantas. Sin ir al túnel de lavado.': 'Błoto, kurz i felgi. Bez jazdy na myjnię.',
    'La terraza y el patio': 'Taras i podwórko',
    'Baldeas el suelo, la fachada y las persianas.': 'Myjesz podłogę, elewację i żaluzje.',
    'La moto y la bici': 'Motor i rower',
    'Cadena, radios y guardabarros, en un momento.': 'Łańcuch, szprychy i błotniki, w mgnieniu oka.',
    'Los muebles de jardín': 'Meble ogrodowe',
    'Sillas, mesa y toldo listos para el verano.': 'Krzesła, stół i markiza gotowe na lato.',
    'Las herramientas': 'Narzędzia',
    'Quitas el barro de la azada, la carretilla o las botas.': 'Usuwasz błoto z motyki, taczki lub butów.',
    'El riego': 'Podlewanie',
    'Con la boquilla en abanico riega macetas y huerto.': 'Dyszą wachlarzową podlewasz doniczki i ogródek.',
    'Dónde la usas': 'Gdzie go używasz',
    'Donde está la suciedad.': 'Tam, gdzie jest brud.',
    'Sin enchufe.': 'Bez gniazdka.',
    'Una hidrolimpiadora grande necesita toma de agua, enchufe y sitio. Esta va en la mano, coge el agua de un cubo y se guarda en su maletín.': 'Duża myjka wysokociśnieniowa potrzebuje dopływu wody, gniazdka i miejsca. Ta mieści się w ręku, pobiera wodę z wiadra i chowa się do swojej walizki.',
    'El maletín negro abierto con la pistola, una batería, la manguera gris enrollada y la botella de espuma': 'Otwarta czarna walizka z pistoletem, jedną baterią, zrolowanym szarym wężem i butelką z pianą',
    'Así llega': 'Tak przychodzi',
    'En su maletín': 'W swojej walizce',
    'Todo protegido y ordenado. Lo abres y está listo.': 'Wszystko zabezpieczone i uporządkowane. Otwierasz i jest gotowe.',
    'La pistola de alta presión de pie junto a sus dos baterías de 48 V y el cargador': 'Pistolet wysokociśnieniowy stojący obok dwóch baterii 48 V i ładowarki',
    'Dos baterías': 'Dwie baterie',
    'Una puesta, otra cargando': 'Jedna włożona, druga się ładuje',
    'Terminas el coche entero sin esperar a que cargue.': 'Kończysz cały samochód bez czekania na ładowanie.',
    'Todo el contenido del maletín: pistola, dos baterías, cargador, manguera, lanza, boquillas, botella de espuma y adaptador': 'Cała zawartość walizki: pistolet, dwie baterie, ładowarka, wąż, lanca, dysze, butelka z pianą i adapter',
    'El kit completo': 'Kompletny zestaw',
    'Lanza, boquillas y espuma': 'Lanca, dysze i piana',
    'Chorro fino o abanico, y jabón con la botella de espuma.': 'Cienki strumień lub wachlarz, i mydło z butelką piany.',
    'El kit': 'Zestaw',
    'Lo que hay': 'Co jest',
    'dentro del maletín.': 'w walizce.',
    'Fotos del producto real, tal como sale del almacén.': 'Zdjęcia prawdziwego produktu, dokładnie takie, jakie wychodzi z magazynu.',
    'Es una hidrolimpiadora de mano para la suciedad del día a día: coche, terraza, bici, muebles de jardín. No sustituye a una máquina industrial. Las baterías se cargan en el enchufe de casa con el cargador incluido.': 'To ręczna myjka wysokociśnieniowa do codziennego brudu: samochód, taras, rower, meble ogrodowe. Nie zastępuje maszyny przemysłowej. Baterie ładują się w domowym gniazdku dołączoną ładowarką.',
    'El mismo coche.': 'Ten sam samochód.',
    'Dos minutos después.': 'Dwie minuty później.',
    'Así limpia.': 'Tak czyści.',
    'Sin cables.': 'Bez kabli.',
    'Pistola 48 V': 'Pistolet 48 V',

    /* ---- 25-10 · gafas.js (zdania o taśmie i lupie w COSAS, poniżej) ---- */
    'Así se lee con las gafas': 'Tak się czyta z okularami',
    'Pasa el dedo por la letra:': 'Przesuń palec po tekście:',
    'así se lee con las gafas puestas': 'tak się czyta z założonymi okularami',
    'zonas en el cristal: cerca abajo, lejos arriba': 'strefy na soczewce: blisko na dole, daleko na górze',
    'marco: el cristal va al aire y casi no pesa': 'oprawa: soczewka jest otwarta i prawie nic nie waży',
    'funda blanda con cada par': 'miękkie etui przy każdej parze',
    'Cerca y lejos': 'Blisko i daleko',
    'Unas gafas,': 'Jedne okulary,',
    'dos distancias.': 'dwa odległości.',
    'No hay graduación que elegir. El cristal es multifocal: cada zona tiene su trabajo.': 'Nie ma mocy do wyboru. Szkło jest multifokalowe: każda strefa ma swoją funkcję.',
    'Parte de arriba': 'Górna część',
    'Para mirar lejos': 'Do patrzenia w dal',
    'La tele, la calle, la persona que te saluda desde la otra mesa.': 'Telewizor, ulica, osoba, która macha do Ciebie z innego stolika.',
    'Parte de abajo': 'Dolna część',
    'Para leer de cerca': 'Do czytania z bliska',
    'El móvil, el periódico, el prospecto, el precio de la etiqueta.': 'Telefon, gazeta, ulotka, cena na metce.',
    'Como todas las multifocales, piden unos días para acostumbrarse a mirar por abajo para leer. Si tienes una graduación alta, consulta con tu óptico.': 'Jak wszystkie okulary multifokalowe, potrzeba kilku dni, żeby przyzwyczaić się do patrzenia przez dolną część przy czytaniu. Jeśli masz dużą wadę wzroku, skonsultuj się z optykiem.',
    'Un hombre con las gafas sin marco leyendo el prospecto de un medicamento en la cocina': 'Mężczyzna w okularach bez oprawki czytający ulotkę leku w kuchni',
    'De cerca': 'Z bliska',
    'La letra pequeña, sin alejarla': 'Drobny druk, bez oddalania',
    'Se acabó estirar el brazo y entrecerrar los ojos para leer el prospecto o la etiqueta.': 'Koniec z wyciąganiem ręki i mrużeniem oczu, żeby przeczytać ulotkę czy metkę.',
    'Una mujer con las gafas sin marco trabajando con el ordenador portátil': 'Kobieta w okularach bez oprawki pracująca na laptopie',
    'Pantallas': 'Ekrany',
    'Móvil, tablet y ordenador': 'Telefon, tablet i komputer',
    'El filtro de luz azul las hace más cómodas cuando pasas rato delante de una pantalla.': 'Filtr niebieskiego światła sprawia, że są wygodniejsze, gdy spędzasz czas przed ekranem.',
    'Un hombre con las gafas puestas lee el periódico en una terraza y saluda a lo lejos junto a su pareja': 'Mężczyzna w okularach czyta gazetę na tarasie i macha na powitanie w dal, obok swojej partnerki',
    'Sin quitártelas': 'Bez zdejmowania',
    'Lees y levantas la vista': 'Czytasz i podnosisz wzrok',
    'El periódico en la terraza y, al mirar arriba, ves quién llega. Por eso el pack de 2: unas para cada uno.': 'Gazeta na tarasie, a gdy podnosisz wzrok, widzisz, kto przychodzi. Dlatego zestaw 2 sztuk: jedne dla każdego.',
    'Para qué sirven': 'Do czego służą',
    'Para todo lo que': 'Do wszystkiego, co',
    'se lee de cerca.': 'czyta się z bliska.',
    'Las quiero, pago al recibir': 'Chcę je, płacę przy odbiorze',
    'Pedir mis gafas': 'Chcę je zamówić',
    'Así son': 'Takie są',
    'de cerca.': 'z bliska.',
    'Sin montura, con la zona de lectura abajo y el filtro que frena la luz azul.': 'Bez oprawki, ze strefą czytania na dole i filtrem, który powstrzymuje niebieskie światło.',
    'La misma carta,': 'To samo menu,',
    'otra vista.': 'inny widok.',
    'Estas gafas': 'Te okulary',
    'Las quiero': 'Chcę je',
    'Pide las tuyas': 'Zamów swoje',

    /* ---- de tienda.js (portada de la tienda /ro/) ---- */
    'Todos': 'Wszystkie',
    'Compra verificada': 'Zweryfikowany zakup',
    'Foto de cliente': 'Zdjęcie od klienta',
    'Listo. Te avisamos cuando haya novedades.': 'Gotowe. Powiadomimy Cię, gdy będą nowości.',

    /* ---- de ficha.js, que no pasan por las claves de arriba ---- */
    'Este producto no está disponible por ahora.': 'Ten produkt nie jest teraz dostępny.',
    'Ver la tienda': 'Zobacz sklep',
    'Producto no encontrado': 'Produkt nie znaleziony',
    'Puede que ya no esté disponible.': 'Może już nie być dostępny.',
    'Volver al inicio': 'Powrót na stronę główną',
    'Escribir una reseña': 'Napisz opinię',
    'Quiero la promoción': 'Chcę promocję',
    'El producto': 'Produkt',
    'Qué es y para qué sirve': 'Co to jest i do czego służy',
    'Envíos y entregas': 'Transport i dostawa',
    'Seguir mi pedido': 'Śledź zamówienie',
    'Cambios y devoluciones': 'Wymiana i zwroty',
    'Términos y condiciones': 'Regulamin',
    'termina hoy': 'kończy się dzisiaj',
    'Promoción': 'Promocja',
    'Otros': 'Inne',
    'Característica': 'Cecha',
    'Por qué lo quieres': 'Dlaczego warto',
'Pago 100% seguro contra entrega': 'Płatność 100% bezpieczna za pobraniem',
    'Pedir ahora': 'Zamów teraz',
    'Leer más': 'Czytaj więcej',
    'Leer menos': 'Czytaj mniej',
  };
  /* 25-10 · el genero del boton cambia con el producto (brățară = ea, ochelari = ei,
     pistol / spray / balsam = el), igual que Portugal con la pulseira. */
  var prod = '';
  try { prod = (window.__P || new URLSearchParams(location.search).get('p')) || ''; } catch (e) {}
  if (prod === 'pulsera') {
    T['Chcę go, płacę przy odbiorze'] = 'Chcę ją, płacę przy odbiorze';
    T['Chcę go'] = 'Chcę ją';
    T['Zamów swój'] = 'Zamów swoją';
  }
  if (prod === 'gafas') {
    T['Chcę go, płacę przy odbiorze'] = 'Chcę je, płacę przy odbiorze';
    T['Chcę go'] = 'Chcę je';
    T['Zamów swój'] = 'Zamów swoje';
  }
  if (prod === 'pistola') {
    T['La quiero, pago al recibir'] = 'Chcę go, płacę przy odbiorze';
    T['La quiero'] = 'Chcę go';
    T['Pedir la mía'] = 'Chcę go zamówić';
  }
  /* la portada de la tienda (/ro/ sin ?p=): el boton de cada tarjeta sirve para todos */
  if (!prod) T['Lo quiero'] = 'Chcę';

  var PEDAZOS = [[/^([\d.]+) reseñas$/, '$1 opinii'], [/^(\d+) productos$/, '$1 produktów'], [/^1 producto$/, '1 produkt'],
    /* "2 flacoane · 9,99 lei cada buc." → "… / buc." */
    [/ cada (szt\.|para)/g, ' / $1'], [/ cada (uno|una)\b/g, ' / szt.']];

  /* gafas.js: la cinta y la lupa juntan estas frases en un solo texto ("… · … · …"),
     asi que se cambian por trozos, no por texto entero. */
  var COSAS = [
    ['El prospecto del medicamento', 'Ulotka leku'], ['los mensajes del móvil', 'wiadomości na telefonie'],
    ['el periódico del domingo', 'niedzielna gazeta'], ['la carta del restaurante', 'menu restauracji'],
    ['el precio en la etiqueta', 'cena na metce'], ['la letra del crucigrama', 'litery w krzyżówce'],
    ['la receta de la abuela', 'przepis babci'], ['el ticket del súper', 'paragon z supermarketu'],
    ['la factura de la luz', 'rachunek za prąd'], ['el libro de la mesilla', 'książka na stoliku nocnym'],
    ['las instrucciones de la caja', 'instrukcje na pudełku'], ['el grupo de la familia', 'grupę rodziny'],
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
    /* 04-11 POLONIA: v=2 = las fotos de la pulsera rehechas con el texto en polaco */
    return m && FOTOS_RO.indexOf(m[1]) !== -1 ? 'img/' + m[1] + '.webp?v=2' : null;
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