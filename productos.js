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

    /* 'foto' es la MINIATURA (tarjeta y packs). 'fotos' es la GALERÍA.
       Las tres las hizo James el 25-09. Se quitó la del catálogo del proveedor:
       era un collage con los rótulos FOREHEAD / FACE / LIPS / BODY en INGLÉS
       encima, y esto se vende en España.
       El hero NO se repite aquí: se veía dos veces en la misma pantalla. */
    foto: 'img/balsamo-mano.webp?v=1',
    fotos: [
      'img/balsamo-uso.webp?v=1',    // aplicándoselo en el pómulo: se entiende el gesto de un vistazo
      'img/balsamo-mano.webp?v=1',   // sosteniéndolo: se lee la etiqueta y el tamaño real
      'img/balsamo-bolso.webp?v=1',  // junto al bolso: los 9 g que caben en cualquier parte
    ],

    /* ---- VÍDEO DE LA FICHA ----
       Sale del vídeo del propio vendedor del producto (720x1280, sin marca de
       agua de ningún creador). Se mapeó a 2 fotogramas por segundo para
       localizar los rótulos en inglés y se cortaron SOLO los tramos limpios:
       quedan 7,2 s con cinco planos, sin una sola letra y SIN AUDIO (James:
       "nada de texto ni audio"). Los textos estaban en 4,0-5,3 · 7,0-7,3 ·
       10,5-11,3 y esos segundos no entran. */
    /* 28-09: re-cortado. El video anterior dejaba un cuadro con el nombre de OTRA marca
       ("Wrinkle Bounce Multi Balm", seg. 3,3), el antes/despues de las munecas (4,2-4,6) y un
       texto en ingles (5,9). En la UE y en Meta el antes/despues en cosmetica esta prohibido. */
    video: 'img/balsamo-ficha.mp4?v=2',

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
      titulo: 'Dos segundos,<br>y la piel<br><b>deja de tirar.</b>',   /* con coma y punto, como el titular de la máscara: la cursiva sin puntuación queda coja */
      sub: 'Bálsamo de colágeno en stick. Se desliza y listo: rostro, contorno, labios, cuello y escote.',
      datos: [
        ['envio', 'Envío gratis'],
        ['reloj', 'En 24-48 h'],
        ['pago', 'Pagas al recibir'],
      ],
    },
    /* Rosa de acento. Era #B76E79 y daba 3,8:1 tanto en blanco sobre él (la
       cinta de la promo, el -32%, el contador) como al revés (el botón
       secundario). Pide 4,5. Este da 5,3:1 y sigue siendo el rosa del envase,
       solo un punto más cerrado. Regla: ux/contraste. */
    acento: '#A8505F',   /* oro rosa: cosmetica, y distinto del oro de la marca */

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
      { cant: 1, precio: 28.50, antes: 56.99, texto: '1 unidad' },
      { cant: 2, precio: 38.50, antes: 76.99, texto: '2 unidades' },
      { cant: 3, precio: 48.50, antes: 96.99, texto: '3 unidades' },
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

  /* ============================================================
     CABEZAL DE DUCHA · 29-09-2026
     Dropi PRO id 575 ("Alcachofa de ducha de alta presión"), coste 3,49 €.
     Radar: 7 de 7 días vendiendo; 5.189 en Sevilla y 13.600 más por llegar.
     Diseño PROPIO (ducha.css / ducha.js), salido de ui-ux-pro-max ORIGINAL:
     design-system/jaye-espana/pages/ducha.md. NO es el del bálsamo.
     Fotos: el héroe lo hizo James (29-09). Las otras son las de Chile, recortadas
     SIN "Envío a todo Chile", bandera ni precios en pesos. La de las ofertas en
     CLP no entra. Vídeo: el de Chile SIN la franja de subtítulos y SIN audio.
     Palabras de España: tubería (no cañería), fontanero (no gásfiter), cal (no sarro).
     ============================================================ */
  {
    id: 'ducha', unidad: 'uno', promo: 2,
    dropiId: 575,

    nombre: 'Cabezal de Ducha Masajeadora Spa',
    sub: 'Alta presión con filtro · rosca universal',
    categoria: 'Hogar',
    etiqueta: 'Nuevo en España',
    etiquetaOro: true,

    /* 29-09: fotos de James (tienda y pelo). Las de Chile se van quedando fuera a medida que llegan las nuevas. */
    /* la infografía va SOLO en 'Qué trae' (ducha.js). James 29-09: "solo cambia esta, las demás déjalas igual" */
    foto: 'img/ducha-tienda.webp?v=1',
    fotos: ['img/ducha-tienda.webp?v=1', 'img/ducha-pelo.webp?v=1', 'img/ducha-3.webp?v=1'],
    video: 'img/ducha-ficha.mp4?v=1',

    hero: {
      img: 'img/hero-ducha.webp?v=1',
      kicker: 'Nuevo en España',
      titulo: 'Tu ducha,<br>con la fuerza<br><b>que le faltaba.</b>',
      sub: 'Cabezal de alta presión con filtro y masaje. Se enrosca a mano en dos minutos, sin fontanero.',
      datos: [
        ['envio', 'Envío gratis'],
        ['reloj', 'En 24-48 h'],
        ['pago', 'Pagas al recibir'],
      ],
    },
    /* Azul del sistema de la ducha, un punto más cerrado (#0369A1) para que el
       blanco encima (cinta de la promo, contador) dé 5,9:1 y no 4,1:1. */
    acento: '#0369A1',

    /* Escasez: datos REALES de radar_stock (España, id 575): 5.882 → 5.552 → 5.227. */
    escasez: { hoy: 325, mejorDia: 330, quedan: 5189,
      nota: 'Se despacha desde el almacén de Sevilla por orden de pedido. Pagas cuando lo tienes en la mano.' },

    desc: 'El Cabezal de Ducha Masajeadora Spa concentra el agua en microboquillas, así que sale con más fuerza aunque la tubería sea la misma. Tiene tres modos, lluvia, masaje y mixto, y un filtro dentro que retiene el cloro y los sedimentos del agua. Si con el tiempo la cal va cerrando los agujeros, se limpia en un momento y la presión vuelve. Se enrosca a mano en la manguera que ya tienes, con la rosca universal de media pulgada: sin herramientas y sin llamar al fontanero.',

    puntos: [
      'Más presión con la misma tubería',
      'Tres modos: lluvia, masaje y mixto',
      'Filtro dentro: retiene cloro y sedimentos',
      'Se enrosca a mano, sin fontanero',
    ],

    formulaRotulo: 'Qué trae',
    formulaTitulo: 'Lo que tu ducha de siempre no tiene.',
    formulaSub: 'Cuatro cosas, en un cabezal que se cambia en dos minutos.',
    formula: [
      ['agua', 'Alta presión', 'Las microboquillas concentran el chorro: más fuerza con el mismo grifo.'],
      ['pluma', 'Masaje relajante', 'Puntas de silicona que masajean el cuero cabelludo, el cuello y la espalda.'],
      ['llave', '3 modos de agua', 'Lluvia, masaje y mixto. Se cambia con una sola mano.'],
      ['escudo', 'Filtro incorporado', 'Capas de bolitas minerales que retienen el cloro y los sedimentos del agua.'],
    ],

    comparaTitulo: '¿Por qué este y no otro?',
    compara: [
      'Más fuerza sin cambiar la tubería ni llamar al fontanero.',
      'Tres modos de verdad: lluvia, masaje y mixto.',
      'Cuando la cal lo tapa, se limpia en un momento: la presión vuelve.',
    ],

    preguntas: [
      { q: '¿Sirve para mi ducha?', a: 'Sí. La rosca es la universal de media pulgada, la que traen casi todas las duchas de mano en España. Se enrosca a mano, sin herramientas ni fontanero.' },
      { q: '¿De verdad sube la presión?', a: 'Sí, y te decimos cómo: las microboquillas achican la salida, así que el agua sale con más fuerza aunque llegue igual por la tubería. Lo que no hace es arreglar un problema de presión de toda la casa.' },
      { q: '¿Qué son los 3 modos?', a: 'Lluvia para el día a día, masaje para el cuello y la espalda, y mixto, que junta los dos. Se cambian con una mano.' },
      { q: '¿El filtro se cambia?', a: 'El filtro va dentro del mango y retiene el cloro y los sedimentos. Cuando lo notes cargado, se enjuaga con agua.' },
      /* 29-09 · ángulo de la CAL, contado sin mentir (ver ducha.js, sección "¿Tu agua tiene cal?") */
      { q: '¿Quita la cal del agua?', a: 'No, y quien te diga que un cabezal quita la cal te engaña: eso solo lo hace un descalcificador. Lo que pasa en las zonas con agua dura es que la cal va tapando los agujeros del cabezal y la ducha pierde fuerza. Con uno nuevo recuperas la presión, y si con los meses se vuelve a tapar, frotas la cara del cabezal o lo dejas un rato en vinagre y queda como el primer día. El filtro retiene el cloro y los sedimentos.' },
      { q: '¿Viene la manguera?', a: 'No. Viene el cabezal, que es lo que se cambia. Se conecta a la manguera que ya tienes en casa.' },
    ],

    /* Sin fotos de clientes: en España no hay compradores todavía y en la UE no
       se pueden enseñar testimonios que no sean reales (Directiva 2019/2161).
       Las de Chile NO se ponen aquí. */
    fotosResenas: [],
    antesDespues: 'img/ducha-ba.webp?v=1',
    antesDespuesSub: 'La misma ducha y la misma tubería: el hilo de agua de antes, y el chorro con el cabezal puesto.',

    /* PRECIOS aprobados por James el 29-09-2026 (1 € por debajo de la más barata:
       VELYN 24,99 / 39,99 / 49,99). 'antes' en 0: producto nuevo (Ley 7/1996 art. 20.1). */
    packs: [
      { cant: 1, precio: 23.99, antes: 47.99, texto: '1 unidad' },
      { cant: 2, precio: 32.99, antes: 65.99, texto: '2 unidades' },
      { cant: 3, precio: 41.99, antes: 83.99, texto: '3 unidades' },
    ],
    popular: 1,

    anticipado: {
      descuento: 2,
      envio: 'Entrega prioritaria en 14 h',
      titulo: 'Paga ahora',
      sub: 'Con entrega prioritaria en 14 h, sin coste. Se paga con tarjeta o PayPal.',
      precios: [21.99, 30.99, 39.99],
    },
  },

  /* ============================================================
     SELLADOR IMPERMEABLE EN SPRAY · 02-10-2026
     Dropi PRO id 2607 ("Spray impermeabilizante blanco 400ml"), coste 3,69 €.
     Marca SPSIL (Aspe, Alicante). Usos SOLO los de su ficha oficial (spsil.es):
     grietas, juntas y fisuras en cemento, metal, PVC, madera y plástico,
     interior y exterior. 🔴 NO tuberías de agua ni con presión (James 02-10:
     "no le mintamos a la gente, eso trae devolución y mala fama").
     Diseño PROPIO (sellador.css / sellador.js), opción B de ui-ux-pro-max:
     pizarra #334155 + verde #059669, Outfit / Work Sans. Imágenes Nano Banana
     aprobadas por James 02-10; vídeo = el oficial de SPSIL, solo los cortes
     con el sellador BLANCO (sin botes de otras marcas).
     ============================================================ */
  {
    id: 'sellador', unidad: 'uno', promo: 4,
    dropiId: 2607,

    nombre: 'Spray Sellador Impermeable',
    sub: 'Sella grietas, juntas y fisuras · 400 ml · blanco',
    categoria: 'Hogar',
    etiqueta: 'Nuevo en España',
    etiquetaOro: true,

    foto: 'img/sellador-tienda.webp?v=1',
    fotos: ['img/sellador-tienda.webp?v=1', 'img/sellador-terraza.webp?v=1', 'img/sellador-ventana.webp?v=1'],
    video: 'img/sellador-ficha.mp4?v=1',

    hero: {
      img: 'img/hero-sellador.webp?v=1',
      kicker: 'Nuevo en España',
      titulo: 'Grietas selladas,<br><b>casa sin goteras.</b>',
      sub: 'Spray sellador impermeable de 400 ml. Lo rocías sobre la grieta o la junta y forma una capa blanca que no deja pasar el agua.',
      datos: [
        ['envio', 'Envío gratis'],
        ['reloj', 'En 24-48 h'],
        ['pago', 'Pagas al recibir'],
      ],
    },
    acento: '#047857',

    /* Stock REAL leído en el panel de Dropi PRO el 01-10-2026 (2.999).
       Ventas diarias de Dropdata 18-09 → 01-10: entre 38 y 157. */
    escasez: { hoy: 157, mejorDia: 157, quedan: 2999,
      nota: 'Se despacha desde el almacén de Sevilla por orden de pedido. Pagas cuando lo tienes en la mano.' },

    desc: 'El Spray Sellador Impermeable forma una capa blanca, flexible y resistente al agua sobre grietas, juntas y fisuras. Se aplica en exterior e interior sobre cemento, metal, PVC, madera y plástico: tejados, terrazas, muros, alféizares, canalones y bajantes. Se pulveriza a 20-25 cm, en capas finas, sin goteos, y seca rápido: en menos de una hora puedes dar varias capas.',

    puntos: [
      'Sella grietas, juntas y fisuras',
      'Capa blanca que no deja pasar el agua',
      'Cemento, metal, PVC, madera y plástico',
      'Interior y exterior · secado rápido',
    ],

    formulaRotulo: 'Por qué funciona',
    formulaTitulo: 'Una capa que el agua no atraviesa.',
    formulaSub: 'Lo que hace el sellador en cuanto lo rocías.',
    formula: [
      ['agua', 'Impermeable', 'Forma una barrera blanca sobre la grieta: la lluvia resbala y no entra.'],
      ['escudo', 'Flexible y duradero', 'Se adhiere bien y aguanta la intemperie sin cuartearse.'],
      ['rayo', 'Secado rápido', 'Entre capa y capa, 15-20 minutos. Listo en menos de una hora.'],
      ['casa', 'Sin herramientas', 'Agitas, rocías a 20-25 cm y listo. Sin brocha, sin goteos.'],
    ],

    comparaTitulo: '¿Por qué un sellador en spray?',
    compara: [
      'Llega a juntas y rincones donde la brocha no entra.',
      'Capas finas y parejas, sin goteos ni manchas.',
      'Lo haces tú, sin obras ni albañil.',
    ],

    preguntas: [
      { q: '¿Dónde se puede usar?', a: 'En grietas, juntas y fisuras de tejados, terrazas, muros, alféizares de ventanas, canalones y bajantes de lluvia. Sobre cemento, metal, PVC, madera y plástico, por dentro y por fuera.' },
      { q: '¿Para qué NO sirve?', a: 'No es para tuberías de agua ni con presión (la del grifo o la entrada de agua), ni para tubos rotos o agujeros grandes: eso es trabajo de fontanero. Tampoco se aplica sobre una superficie mojada.' },
      { q: '¿Cómo se aplica?', a: 'Limpia y seca la zona, agita el bote 1-2 minutos y rocía a 20-25 cm en capas finas. Deja secar 15-20 minutos entre capa y capa. Para una grieta normal bastan 2 o 3 capas.' },
      { q: '¿De qué color queda?', a: 'Blanco. Queda una capa blanca, lisa y algo gomosa sobre la grieta.' },
      { q: '¿Cuánto rinde un bote?', a: 'Un bote de 400 ml da para varias grietas o juntas de tamaño normal. Para una terraza o un tejado con muchas fisuras, mejor el pack de 2 o de 4.' },
    ],

    fotosResenas: [],
    antesDespues: 'img/sellador-ba.webp?v=1',
    antesDespuesSub: 'La misma pared: la grieta por donde entraba el agua y la mancha de humedad, y después sellada y seca.',

    /* PRECIOS aprobados por James el 01-10-2026 (1 € por debajo de FlexSpray:
       30 / 40 / 60). 'antes' en 0: producto nuevo (Ley 7/1996 art. 20.1). */
    packs: [
      { cant: 1, precio: 28.99, antes: 57.99, texto: '1 bote' },
      { cant: 2, precio: 38.99, antes: 77.99, texto: '2 botes' },
      { cant: 4, precio: 58.99, antes: 117.99, texto: '4 botes' },
    ],
    popular: 1,

    /* Pago anticipado aprobado por James el 02-10-2026: 2 € menos y entrega
       prioritaria, igual que el cabezal. */
    anticipado: {
      descuento: 2,
      envio: 'Entrega prioritaria en 14 h',
      titulo: 'Paga ahora',
      sub: 'Con entrega prioritaria en 14 h, sin coste. Se paga con tarjeta o PayPal.',
      precios: [26.99, 36.99, 56.99],
    },
  },

  /* ============================================================
     SPRAY REPARADOR DE ARAÑAZOS (CAR NANO) · 02-10-2026
     Dropi PRO id 1378 ("CAR NANO repairing spray 120 ml"), coste 1,99 € (2,41 con IVA).
     🔴 Solo rayitas SUPERFICIALES de la capa transparente: no arregla rayones que
     llegan a la imprimación o al metal, ni golpes (James 02-10: no prometer de más).
     Diseño PROPIO (aranazos.css / aranazos.js), ui-ux-pro-max "Motion-Driven":
     pizarra #1E293B + rojo #DC2626, Syncopate / Space Mono. Imágenes Nano Banana
     aprobadas por James 02-10 (persona con el bote EN LA MANO); vídeo = metraje real
     de clientes, sin la caja ni el bote de la otra marca y sin subtítulos.
     ============================================================ */
  {
    id: 'aranazos', unidad: 'uno', promo: 3,   /* la promoción es el pack de 3 (no hay pack de 4) */
    dropiId: 1378,

    nombre: 'Spray Reparador de Arañazos',
    sub: 'Disimula rayitas superficiales y da brillo · 120 ml',
    categoria: 'Coche',
    etiqueta: 'Nuevo en España',
    etiquetaOro: true,

    foto: 'img/aranazos-rocia.webp?v=1',
    fotos: ['img/aranazos-rocia.webp?v=1', 'img/aranazos-frota.webp?v=1', 'img/aranazos-brillo.webp?v=1'],
    video: 'img/aranazos-ficha.mp4?v=1',

    hero: {
      img: 'img/hero-aranazos.webp?v=1',
      kicker: 'Nuevo en España',
      titulo: 'Rayitas fuera,<br><b>brillo de vuelta.</b>',
      sub: 'Spray nano de 120 ml para las rayitas superficiales de la pintura. Rocías, frotas con un paño y la rayita se disimula, con brillo y una capa que repele el agua.',
      datos: [
        ['envio', 'Envío gratis'],
        ['reloj', 'En 24-48 h'],
        ['pago', 'Pagas al recibir'],
      ],
    },
    acento: '#DC2626',

    /* Stock REAL leído en el panel de Dropi PRO el 01-10-2026 (5.846).
       Dropdata 18-09 → 01-10: 4.880 unidades en 14 días (~330 al día). */
    escasez: { hoy: 330, mejorDia: 330, quedan: 5846,
      nota: 'Se despacha desde el almacén de Sevilla por orden de pedido. Pagas cuando lo tienes en la mano.' },

    desc: 'El Spray Reparador de Arañazos es un spray nano para la pintura del coche. Rellena y disimula las rayitas superficiales de la capa transparente (las del lavado, las uñas junto a la manilla, el roce de una rama o de una bolsa), devuelve el brillo a la pintura opaca y deja una capa que repele el agua y el polvo. Se rocía sobre la zona limpia y seca y se extiende con un paño de microfibra en círculos. No arregla rayones profundos que dejan ver la imprimación o el metal, ni golpes.',

    puntos: [
      'Disimula rayitas superficiales',
      'Devuelve el brillo a la pintura',
      'Capa que repele agua y polvo',
      'Rocías y frotas · sin taller',
    ],

    formulaRotulo: 'Por qué funciona',
    formulaTitulo: 'Una capa nano sobre la pintura.',
    formulaSub: 'Lo que hace el spray en cuanto lo extiendes.',
    formula: [
      ['escudo', 'Rellena la rayita', 'Las partículas nano se meten en la rayita fina y la disimulan a la vista.'],
      ['rayo', 'Brillo al momento', 'La pintura opaca recupera el reflejo, como recién encerada.'],
      ['agua', 'Repele el agua', 'La lluvia hace gotas y resbala; el polvo se pega menos.'],
      ['casa', 'En tu garaje', 'Rocías, frotas con un paño y listo. Sin máquina pulidora.'],
    ],

    comparaTitulo: '¿Por qué un spray y no el taller?',
    compara: [
      'Para una rayita superficial, el taller cobra pulido y mano de obra.',
      'Lo haces tú en 5 minutos, a la sombra y con un paño.',
      'Un bote rinde para varias aplicaciones.',
    ],

    preguntas: [
      { q: '¿Qué arañazos quita?', a: 'Las rayitas superficiales de la capa transparente: marcas del lavado, de las uñas junto a la manilla, roces de ramas o bolsas y la pintura opaca por el sol. Las disimula y devuelve el brillo.' },
      { q: '¿Para qué NO sirve?', a: 'No arregla rayones profundos que dejan ver la imprimación (la capa gris o blanca) o el metal, ni abolladuras o golpes. Truco: si al pasar la uña se engancha en el rayón, es profundo y necesita taller.' },
      { q: '¿Cómo se aplica?', a: 'Lava y seca la zona, a la sombra y con la chapa fría. Agita el bote, rocía sobre la rayita y extiende con un paño de microfibra en círculos. Repasa con la cara seca del paño. Si hace falta, repite.' },
      { q: '¿Sirve para cualquier color?', a: 'Sí. No es pintura: es una capa transparente, así que vale para coches blancos, negros, rojos, grises o de cualquier color.' },
      { q: '¿Viene con paño?', a: 'No. Se vende el bote de 120 ml. Sirve cualquier paño de microfibra limpio que tengas en casa.' },
      { q: '¿Cuánto rinde un bote?', a: 'Un bote de 120 ml da para varias zonas con rayitas, o para repasar varias veces el mismo coche. Para dos coches o para tenerlo a mano, mejor el pack de 2 o de 3.' },
    ],

    fotosResenas: [],
    antesDespues: 'img/aranazos-ba.webp?v=1',
    antesDespuesSub: 'La misma puerta al sol: con las rayitas finas del lavado, y después con el spray y un paño.',

    /* PRECIOS aprobados por James el 01-10-2026 (~1 € por debajo del más barato con
       envío: Revine 18,99 + 3,49 envío / 34,98 / 43,47). 'antes' en 0: producto nuevo. */
    packs: [
      { cant: 1, precio: 20.99, antes: 41.99, texto: '1 bote' },
      { cant: 2, precio: 28.99, antes: 57.99, texto: '2 botes' },
      { cant: 3, precio: 41.99, antes: 83.99, texto: '3 botes' },
    ],
    popular: 1,

    /* Pago anticipado aprobado por James el 02-10-2026: 10 % menos ("vamos con el
       10%": pagar antes ahorra el % de devolución) y entrega prioritaria. */
    anticipado: {
      pct: 10,
      descuento: 2.10,
      envio: 'Entrega prioritaria en 14 h',
      titulo: 'Paga ahora',
      sub: 'Con entrega prioritaria en 14 h, sin coste. Se paga con tarjeta o PayPal.',
      precios: [18.99, 25.99, 37.79],
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
window.PRECIOS_APROBADOS = [28.50, 38.50, 48.50, 26.50, 36.50, 46.50,
  /* cabezal de ducha, aprobados 29-09-2026 */
  23.99, 32.99, 41.99, 21.99, 30.99, 39.99,
  /* sellador impermeable, aprobados 01-10-2026 */
  28.99, 38.99, 58.99,
  /* sellador, pago anticipado, aprobados 02-10-2026 */
  26.99, 36.99, 56.99,
  /* spray de arañazos, aprobados 01-10-2026 (41,99 ya está, la del cabezal) */
  20.99, 28.99,
  /* spray de arañazos, pago anticipado (−10 %), aprobados 02-10-2026 */
  18.99, 25.99, 37.79];
