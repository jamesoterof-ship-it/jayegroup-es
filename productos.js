/* ============================================================
   CATALOGO DE LA TIENDA · JAYE GROUP ESPAÑA

   Primer producto (24-09-2026): Balsamo de colageno VITALIS.
   Elegido con el Radar (id 2287 de Dropi PRO, 105 unidades el 22->23 y 81
   en la foto parcial del 24: el que mas sostiene el ritmo del catalogo) y
   validado en la Biblioteca de Meta España (~110 anuncios activos, 12
   anunciantes, Rcocio.com pautandolo desde el 18-10-2024).

   Molde: jaye-landings/shilajit/productos.js. Lo unico que cambia por
   producto son los colores y el contenido; la estructura NO se toca.

   OJO CON EL LENGUAJE: en la UE las alegaciones cosmeticas estan reguladas
   (Reglamento UE 655/2013). Solo se puede hablar de la APARIENCIA de la piel.
   Prohibido: "elimina arrugas", "rejuvenece", "5 anos mas joven", cualquier
   promesa medica. La competencia (Vivelaespana) lo hace mal y por eso Meta
   les tumba anuncios. Se escribe como SevariQ: "ayuda a suavizar la
   apariencia de".
   ============================================================ */
window.PRODUCTOS = [
  {
    id: 'balsamo', unidad: 'uno', promo: 2,

    /* Dropi PRO: id 2287 · SKU 75481-BALSAMO-VITALIS · coste 1,99 € sin IVA */
    dropiId: 2287,
    dropiSku: '75481-BALSAMO-VITALIS',

    nombre: 'Bálsamo de Colágeno VITALIS',
    sub: 'Stick hidratante multizona · 9 g',
    categoria: 'Belleza',
    etiqueta: 'Nuevo en España',
    etiquetaOro: true,

    /* 'foto' es la MINIATURA (tarjeta y packs): va la cuadrada del catálogo,
       que en un recuadro pequeño se lee mejor.
       'fotos' es la GALERÍA: primero el hero vertical 1024x1536 que hizo James
       —el bálsamo en primer plano y la modelo detrás, desenfocada— porque el
       producto tiene que mandar, y detrás la del catálogo. */
    foto: 'img/prod-balsamo.jpg?v=1',
    fotos: ['img/hero-balsamo.webp?v=1', 'img/prod-balsamo.jpg?v=1'],

    /* ---- HERO ----
       La foto vertical 1024x1536 que hizo James: el bálsamo en primer plano y
       la modelo detrás, desenfocada. El producto manda.
       En 'titulo' se permite <b> para el trozo en dorado; el resto se escapa.
       OJO CON EL TITULAR: nada de "elimina arrugas" ni "rejuvenece". Solo se
       puede hablar de APARIENCIA (Reglamento UE 655/2013), y además Meta
       rechaza las promesas médicas en cosmética. */
    hero: {
      img: 'img/hero-balsamo.webp?v=1',
      kicker: 'Nuevo en España',
      titulo: 'Dos segundos<br>y la piel<br><b>deja de tirar</b>',
      sub: 'Bálsamo de colágeno en stick. Se desliza y listo: rostro, contorno, labios, cuello y escote.',
      datos: [
        ['envio', 'Envío gratis'],
        ['reloj', 'En 24-48 h'],
        ['pago', 'Pagas al recibir'],
      ],
    },
    acento: '#B76E79',   /* oro rosa: cosmetica, y distinto del oro de la marca */

    /* ---- Escasez: SOLO datos reales del Radar. En España inventar urgencia
       es practica desleal (art. 5 y 7 Ley 3/1991). Estas cifras salen de
       radar_stock, pais='España', id 2287. ---- */
    escasez: { hoy: 81, mejorDia: 105, quedan: 3898,
      nota: 'Se despacha desde el almacén de Sevilla por orden de pedido. Pagas cuando lo tienes en la mano.' },

    desc: 'El Bálsamo VITALIS es un hidratante en formato stick con colágeno hidrolizado, ácido hialurónico y aceite de semilla de girasol. Se gira la base, se desliza sobre la piel y listo: no hay que untarse las manos ni calcular cantidad. Al hidratar, la piel se ve más suave y las líneas de expresión se marcan menos. Sirve en rostro, frente, contorno de ojos, labios, cuello y escote, y se puede usar antes del maquillaje o por encima, para retocar durante el día. Son 9 g que caben en cualquier bolso.',

    puntos: [
      'Colágeno hidrolizado y ácido hialurónico',
      'Ayuda a suavizar la apariencia de las líneas de expresión',
      'Aporta hidratación a la piel seca y tirante',
      'Se aplica directo, sin ensuciarte las manos',
      'Rostro, contorno, labios, cuello y escote',
    ],

    formulaRotulo: 'La fórmula',
    formulaTitulo: 'Tres activos y un formato que no ensucia.',
    formulaSub: 'Hidratación de verdad, en un gesto de dos segundos.',
    formula: [
      ['fibra', 'Colágeno hidrolizado', 'De bajo peso molecular, para que se reparta bien por la superficie de la piel.'],
      ['agua', 'Ácido hialurónico', 'Retiene el agua en la capa superficial: la piel deja de sentirse tirante.'],
      ['pluma', 'Aceite de semilla de girasol', 'Nutre y deja un acabado suave, sin sensación grasa ni brillos.'],
      ['ojo', 'Multizona', 'Rostro, frente, contorno de ojos, labios, cuello y escote. Un solo producto.'],
      ['llave', 'Stick giratorio', 'Giras la base y aplicas. Sin manos, sin derrames y sin gastar de más.'],
      ['casa', '9 g que caben en el bolso', 'Para retocar donde estés, antes o después del maquillaje.'],
    ],

    /* ---- Linea de tiempo: la seccion que mejor funciona en las paginas
       españolas que ya venden este producto. Sin porcentajes inventados. ---- */
    medida: {
      titulo: '¿Cuándo se nota?',
      filas: [['Día 1', 'la piel deja de tirar'], ['Día 7', 'se ve más hidratada'], ['Día 21', 'las líneas finas se marcan menos']],
      texto: 'Es un cosmético, no un tratamiento médico: trabaja sobre la apariencia de la piel. La hidratación se nota desde los primeros días. Para que las líneas finas se vean menos marcadas hay que usarlo a diario durante unas tres semanas, y el resultado depende de tu tipo de piel y de la constancia.',
      boton: 'Lo quiero, pago al recibir',
    },

    comparaTitulo: '¿Qué lo hace diferente?',
    compara: [
      'Se aplica directo sobre la piel: no hay que untarse las manos ni medir cantidad.',
      'Formato sólido: no se derrama en el bolso ni se reseca como una crema abierta.',
      'Un solo producto para rostro, labios, cuello y escote.',
      'Se puede usar antes del maquillaje o por encima, para retocar a media tarde.',
    ],

    /* ---- Preguntas del producto. Las de envio y pago van detras, iguales
       para todos los productos de la tienda. ---- */
    preguntas: [
      { q: '¿Dónde me lo puedo aplicar?', a: 'En rostro, frente, contorno de ojos, labios, cuello y escote. Evita el interior del ojo y las heridas abiertas.' },
      { q: '¿Se puede usar con maquillaje?', a: 'Sí. Antes, como base hidratante, o por encima para retocar durante el día. Al ser un stick no arrastra el maquillaje.' },
      { q: '¿Cuántas veces al día?', a: 'Las que necesites. Lo habitual es por la mañana y por la noche, y un retoque en las zonas que notes secas.' },
      { q: '¿Quita las arrugas?', a: 'No, y quien se lo diga le está engañando. Es un cosmético hidratante: cuando la piel está bien hidratada las líneas se marcan menos y se ven más suaves. No elimina arrugas ni sustituye ningún tratamiento médico.' },
      { q: '¿Cuánto me dura?', a: 'Trae 9 g. Lo que dure depende de cuántas zonas te apliques y con qué frecuencia.' },
      { q: '¿Sirve para piel sensible?', a: 'Es un cosmético de uso externo. Como con cualquier producto nuevo, conviene probarlo primero en una zona pequeña. Si tienes la piel reactiva o alguna afección dermatológica, consúltalo antes con tu dermatólogo.' },
    ],

    /* ---- Fotos de clientes: VACIO. No tenemos clientes en España todavia y
       en la UE no se pueden mostrar testimonios que no sean reales
       (Directiva UE 2019/2161). Se llena cuando haya pedidos entregados. ---- */
    fotosResenas: [],
    antesDespues: '',

    /* ---- PRECIOS aprobados por James el 24-09-2026 ----
       Contra entrega: 28,50 / 38,50 / 48,50
       Anticipado (-2 €): 26,50 / 36,50 / 46,50, con entrega prioritaria 14 h.
       'antes' va en 0 A PROPOSITO: producto nuevo. La Ley 7/1996 art. 20.1
       (Directiva Omnibus) exige que el precio tachado sea el mas bajo de los
       ULTIMOS 30 DIAS. Hasta el 24-10-2026 no se puede tachar nada. ---- */
    packs: [
      { cant: 1, precio: 28.50, antes: 0, texto: '1 unidad' },
      { cant: 2, precio: 38.50, antes: 0, texto: '2 unidades' },
      { cant: 3, precio: 48.50, antes: 0, texto: '3 unidades' },
    ],
    /* OJO: 'popular' es el INDICE del pack, no la cantidad. 1 = el segundo de
       la lista = el pack de 2 unidades, que es el que se empuja: el envio es
       fijo por pedido, asi que dos unidades parten el flete a la mitad. */
    popular: 1,

    /* ---- Pago anticipado: 2 € menos y envio prioritario de 14 h ----
       El descuento se justifica solo: el contra reembolso cuesta 1 € de COD
       y se pierde el 30 % de los pedidos. Se anuncia SIEMPRE como descuento
       por pagar ahora, NUNCA como recargo por pagar al recibir: el art. 60 ter
       TRLGDCU prohibe cobrar por un medio de pago mas de lo que cuesta. ---- */
    anticipado: {
      descuento: 2,
      envio: 'Entrega prioritaria en 14 h',
      titulo: 'Paga ahora',
      sub: 'Con entrega prioritaria en 14 h, sin coste. Se paga con tarjeta o PayPal.',
      precios: [26.50, 36.50, 46.50],
    },
  },
];

/* ============================================================
   OJO CON EL PRECIO TACHADO (el campo 'antes' de cada pack)
   Ley 7/1996 art. 20.1 (reformado por el RD-ley 1/2021, Directiva Omnibus):
   cuando se anuncia una rebaja, el precio tachado tiene que ser EL MAS BAJO
   que se haya aplicado en los ULTIMOS 30 DIAS. Inventar un precio anterior
   mas alto es practica desleal y lo sancionan las CCAA.
   Regla practica: producto nuevo => 'antes' en 0 hasta llevar 30 dias
   vendiendo al precio normal.
   ============================================================ */

/* Precios aprobados por James para España (24-09-2026).
   Si un precio no esta en esta lista, el producto NO se pinta en la tienda.
   Es el mismo candado de Chile. */
window.PRECIOS_APROBADOS = [28.50, 38.50, 48.50, 26.50, 36.50, 46.50];
