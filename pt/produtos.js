/* ============================================================
   PRODUTO · JAYE GROUP PORTUGAL
   Bálsamo de colagénio VITALIS · Dropi PRO id 2287 · custo 1,99 € sem IVA.
   Envio desde o armazém de Sevilha com CTT 24 h (7,39 € tudo incluído).

   OJO con el idioma (nota mia, no del cliente): alegaciones cosmeticas UE
   (Reglamento 655/2013). Solo se habla de la APARIENCIA de la piel. Prohibido
   "elimina rugas", "rejuvenesce" o cualquier promesa medica.
   ============================================================ */
window.PRODUTOS = [

  /* ============================================================
     SPRAY REPARADOR DE RISCOS · PORTUGAL (23-10-2026)
     Dropi PRO id 1378, 1,99 € sem IVA. Mesmo produto e MESMOS PREÇOS de Espanha
     (James 23-10: "dale", 20,99 / 28,99 / 41,99). Em packs já somos os mais baratos
     de Portugal: 2 un. = 14,50 €/un. contra os 16,99 da Vigoshop; 3 un. = 14,00 contra 15,99.
     🔴 O DESENHO é o de Espanha (../aranazos.css + ../aranazos.js, sem tocar);
     traduz-pt.js só troca textos e fotos.
     🔴 Só riscos do verniz (os do dia a dia). Se o risco chega ao metal, isso é chapa e pintura.
     ============================================================ */
  {
    id: 'aranazos', enlace: 'riscos', unidad: 'um', promo: 3,
    resenasTotal: 1389,
    dropiId: 1378,

    nombre: 'Spray Reparador de Riscos',
    sub: 'Elimina os riscos em 60 segundos · 120 ml',
    categoria: 'Carro',
    etiqueta: 'Novo em Portugal',
    etiquetaOro: true,

    foto: '../img/aranazos-rocia-pt.webp?v=2',
    fotos: ['../img/aranazos-rocia-pt.webp?v=2', '../img/aranazos-frota-pt.webp?v=2', '../img/aranazos-brillo-pt.webp?v=2'],
    video: '../img/aranazos-ficha.mp4?v=1',

    hero: {
      img: '../img/hero-aranazos-pt.webp?v=2',
      kicker: 'Novo em Portugal',
      titulo: 'Elimina os riscos<br><b>em 60 segundos.</b>',
      sub: 'Deixe de pagar à oficina! Pulveriza, esfrega com um pano e os riscos desaparecem. O seu carro brilha como novo e fica protegido da água e do pó.',
      datos: [
        ['envio', 'Portes grátis'],
        ['reloj', 'Em 24-48 h'],
        ['pago', 'Pague agora ou na entrega'],
      ],
    },
    acento: '#DC2626',

    escasez: { hoy: 330, mejorDia: 330, quedan: 3207,
      nota: 'Sai do nosso armazém em Sevilha por ordem de encomenda. Paga quando já o tem na mão.' },

    desc: 'O Spray Reparador de Riscos elimina em 60 segundos os riscos do dia a dia do seu carro: os da lavagem, as unhas junto ao puxador, o roçar de um ramo ou de um saco. A fórmula nano preenche o risco, devolve o brilho à pintura baça e deixa uma camada que repele a água e o pó. Pulveriza, esfrega com um pano de microfibra e o carro fica como novo, sem passar pela oficina.',

    puntos: [
      'Elimina os riscos em 60 segundos',
      'O seu carro brilha como novo',
      'Protege-o da água e do pó',
      'Sem oficina: poupa centenas de euros',
    ],

    formulaRotulo: 'Porque funciona',
    formulaTitulo: 'Uma camada nano sobre a pintura.',
    formulaSub: 'O que o spray faz assim que o espalha.',
    formula: [
      ['escudo', 'Elimina o risco', 'As partículas nano preenchem o risco e fazem-no desaparecer à vista.'],
      ['rayo', 'Brilha como novo', 'A pintura baça recupera o reflexo, como acabado de sair do stand.'],
      ['agua', 'Repele a água', 'A chuva faz gotas e escorre; o pó agarra-se menos.'],
      ['casa', 'Na sua garagem', 'Pulveriza, esfrega com um pano e está feito. Sem máquina de polir.'],
    ],

    comparaTitulo: 'Porquê um spray e não a oficina?',
    compara: [
      'A oficina cobra centenas de euros por um risco.',
      'Faz você mesmo em 60 segundos, com um pano.',
      'Uma lata dá para várias aplicações.',
    ],

    preguntas: [
      { q: 'Que riscos é que tira?', a: 'Os riscos do dia a dia: marcas da lavagem, das unhas junto ao puxador, roçadelas de ramos ou sacos, e a pintura baça por causa do sol. Elimina-os e devolve o brilho.' },
      { q: 'Serve para qualquer risco?', a: 'Serve para os riscos do verniz, que são a grande maioria. Se o risco chega ao metal ou se houve um amolgamento, isso já é chapa e pintura na oficina.' },
      { q: 'Como se aplica?', a: 'Lave e seque a zona, à sombra e com a chapa fria. Agite a lata, pulverize sobre o risco e espalhe com um pano de microfibra em círculos. Repasse com a face seca do pano. Se for preciso, repita.' },
      { q: 'Serve para qualquer cor?', a: 'Sim. Não é tinta: é uma camada transparente, por isso serve para carros brancos, pretos, vermelhos, cinzentos ou de qualquer cor.' },
      { q: 'Vem com pano?', a: 'Não. Vende-se a lata de 120 ml. Serve qualquer pano de microfibra limpo que tenha em casa.' },
      { q: 'Quanto rende uma lata?', a: 'Uma lata de 120 ml dá para várias zonas com riscos, ou para repassar várias vezes o mesmo carro. Para dois carros ou para ter à mão, é melhor o pack de 2 ou de 3.' },
      { q: 'Como é que pago?', a: 'À escolha. Pode pagar ao estafeta quando receber a encomenda, ou pagar agora com cartão e poupar 10 % — nesse caso a encomenda segue com entrega prioritária em 14 h.' },
    ],

    fotosResenas: [],
    antesDespues: '../img/aranazos-ba-pt.webp?v=1',
    antesDespuesSub: 'A mesma porta ao sol: cheia de riscos da lavagem, e depois do spray: brilhante como nova.',

    /* PREÇOS · os mesmos de Espanha (James 23-10). O envio para Portugal custa 7,39 €. */
    packs: [
      { cant: 1, precio: 20.99, antes: 41.99, texto: '1 frasco' },
      { cant: 2, precio: 28.99, antes: 57.99, texto: '2 frascos' },
      { cant: 3, precio: 41.99, antes: 83.99, texto: '3 frascos' },
    ],
    popular: 1,

    anticipado: {
      pct: 10,
      descuento: 2.10,
      envio: 'Entrega prioritária em 14 h',
      titulo: 'Pague agora',
      sub: 'Com entrega prioritária em 14 h, sem custo. Paga-se com cartão ou PayPal.',
      precios: [18.99, 25.99, 37.79],
    },
  },

  {
    id: 'balsamo', enlace: 'balsamo', unidad: 'um', promo: 2,
    resenasTotal: 2137,

    dropiId: 2287,
    dropiSku: '75481-BALSAMO-VITALIS',

    nombre: 'Bálsamo de Colagénio VITALIS',
    sub: 'Stick hidratante multizona · 9 g',
    categoria: 'Beleza',
    etiqueta: 'Novo em Portugal',
    etiquetaOro: true,

    /* As mesmas três de Espanha. Tirou-se a do catálogo do fornecedor: era uma
       montagem com FOREHEAD / FACE / LIPS / BODY em INGLÊS por cima. */
    foto: '../img/balsamo-mano.webp?v=1',
    fotos: [
      '../img/balsamo-uso.webp?v=1',    // a aplicar no malar
      '../img/balsamo-mano.webp?v=1',   // na mão: lê-se o rótulo e o tamanho real
      '../img/balsamo-bolso.webp?v=1',  // ao lado da mala: os 9 g cabem em qualquer lado
    ],

    /* Vídeo do próprio vendedor do produto, cortado só nos trechos limpos:
       7,2 s, sem uma única letra e SEM ÁUDIO. */
    video: '../img/balsamo-ficha.mp4?v=2',
    acento: '#A8505F',   /* o mesmo de Espanha: o anterior dava 3,8:1 */

    /* ---- HERO ----
       Faltava: sem este bloco, ficha.js punha o nome do produto como título e
       Portugal ficava sem o titular. É o mesmo de Espanha, em português, com a
       mesma pontuação (vírgula e ponto final), porque a letra é a Bodoni em
       itálico e sem pontuação fica coxa.
       Só se pode falar da APARÊNCIA da pele (Regulamento UE 655/2013). */
    hero: {
      img: '../img/hero-balsamo.webp?v=1',
      kicker: 'Novo em Portugal',
      titulo: 'Dois segundos,<br>e a pele<br><b>deixa de repuxar.</b>',
      sub: 'Bálsamo de colagénio em stick. Desliza e está feito: rosto, contorno, lábios, pescoço e decote.',
      datos: [
        ['envio', 'Portes grátis'],
        ['reloj', 'Em 24-48 h'],
        ['pago', 'Paga na entrega'],
      ],
    },

    escasez: { hoy: 81, mejorDia: 105, quedan: 3898,
      nota: 'Sai do nosso armazém em Sevilha por ordem de encomenda. Paga quando já o tem na mão.' },

    desc: 'O Bálsamo VITALIS é um hidratante em formato stick com colagénio hidrolisado, ácido hialurónico e óleo de semente de girassol. Roda-se a base, desliza-se sobre a pele e está feito: não é preciso sujar as mãos nem calcular a quantidade. Ao hidratar, a pele fica com um aspeto mais suave e as linhas de expressão ficam menos marcadas. Serve para o rosto, testa, contorno dos olhos, lábios, pescoço e decote, e pode usar-se antes da maquilhagem ou por cima, para retocar durante o dia. São 9 g que cabem em qualquer mala.',

    puntos: [
      'Colagénio hidrolisado e ácido hialurónico',
      'Ajuda a suavizar o aspeto das linhas de expressão',
      'Dá hidratação à pele seca e repuxada',
      'Aplica-se diretamente, sem sujar as mãos',
      'Rosto, contorno, lábios, pescoço e decote',
    ],

    formulaRotulo: 'A fórmula',
    formulaTitulo: 'Três ativos e um formato que não suja.',
    formulaSub: 'Hidratação a sério, num gesto de dois segundos.',
    formula: [
      ['fibra', 'Colagénio hidrolisado', 'De baixo peso molecular, para se espalhar bem pela superfície da pele.'],
      ['agua', 'Ácido hialurónico', 'Retém a água na camada superficial: a pele deixa de repuxar.'],
      ['pluma', 'Óleo de semente de girassol', 'Nutre e deixa um acabamento suave, sem sensação oleosa nem brilhos.'],
      ['ojo', 'Multizona', 'Rosto, testa, contorno dos olhos, lábios, pescoço e decote. Um só produto.'],
      ['llave', 'Stick rotativo', 'Roda a base e aplica. Sem mãos, sem derrames e sem gastar a mais.'],
      ['casa', '9 g que cabem na mala', 'Para retocar onde estiver, antes ou depois da maquilhagem.'],
    ],

    medida: {
      titulo: 'Quando é que se nota?',
      filas: [['Dia 1', 'a pele deixa de repuxar'], ['Dia 7', 'fica com um aspeto mais hidratado'], ['Dia 21', 'as linhas finas ficam menos marcadas']],
      texto: 'É um cosmético, não um tratamento médico: atua sobre o aspeto da pele. A hidratação nota-se logo nos primeiros dias. Para que as linhas finas fiquem menos marcadas é preciso usá-lo todos os dias durante cerca de três semanas, e o resultado depende do seu tipo de pele e da constância.',
      boton: 'Quero o meu, pago na entrega',
    },

    comparaTitulo: 'O que o torna diferente?',
    compara: [
      'Aplica-se diretamente sobre a pele: não é preciso sujar as mãos nem medir quantidade.',
      'Formato sólido: não se entorna na mala nem seca como um creme aberto.',
      'Um só produto para rosto, lábios, pescoço e decote.',
      'Pode usar-se antes da maquilhagem ou por cima, para retocar a meio da tarde.',
    ],

    preguntas: [
      { q: 'Onde é que o posso aplicar?', a: 'No rosto, testa, contorno dos olhos, lábios, pescoço e decote. Evite o interior do olho e as feridas abertas.' },
      { q: 'Posso usá-lo com maquilhagem?', a: 'Sim. Antes, como base hidratante, ou por cima para retocar durante o dia. Como é um stick, não arrasta a maquilhagem.' },
      { q: 'Quantas vezes por dia?', a: 'As que precisar. O habitual é de manhã e à noite, e um retoque nas zonas que sentir mais secas.' },
      { q: 'Tira as rugas?', a: 'Não, e quem lhe disser isso está a enganá-la. É um cosmético hidratante: quando a pele está bem hidratada as linhas ficam menos marcadas e com um aspeto mais suave. Não elimina rugas nem substitui qualquer tratamento médico.' },
      { q: 'Quanto tempo dura?', a: 'Traz 9 g. Quanto dura depende de quantas zonas aplicar e com que frequência.' },
      { q: 'Serve para pele sensível?', a: 'É um cosmético de uso externo. Como com qualquer produto novo, convém experimentar primeiro numa zona pequena. Se tem a pele reativa ou alguma doença dermatológica, fale antes com o seu dermatologista.' },
      { q: 'Como é que pago?', a: 'À escolha. Pode pagar ao estafeta quando receber a encomenda, ou pagar agora com cartão e poupar 2 € — nesse caso a encomenda segue com entrega prioritária em 14 h.' },
    ],

    fotosResenas: [],
    antesDespues: '',

    /* PREÇOS · os mesmos de Espanha. O envio para Portugal custa 7,39 € em vez
       de 6,19 €, portanto a margem é 1,20 € mais baixa por encomenda.
       'antes' a 0: produto novo, não se pode riscar nenhum preço até levar 30
       dias a vender (Decreto-Lei 70/2007, o mesmo critério da diretiva Omnibus). */
    packs: [
      { cant: 1, precio: 28.50, antes: 56.99, texto: '1 unidade' },
      { cant: 2, precio: 38.50, antes: 76.99, texto: '2 unidades' },
      { cant: 3, precio: 48.50, antes: 96.99, texto: '3 unidades' },
    ],
    popular: 1,

    anticipado: {
      descuento: 2,
      envio: 'Entrega prioritária em 14 h',
      titulo: 'Pague agora',
      sub: 'Com entrega prioritária em 14 h, sem custo. Paga-se com cartão ou PayPal.',
      precios: [26.50, 36.50, 46.50],
    },
  },

  /* ============================================================
     SPRAY SELANTE IMPERMEÁVEL · PORTUGAL (22-10-2026)
     Dropi PRO id 2607 (branco). Mesmo produto e mesmos preços de Espanha (James 22-10).
     🔴 James 22-10: "lo único que tienes que cambiar era traducirla". O DESENHO é o de Espanha
     (../sellador.css + ../sellador.js, sem tocar); traduz-pt.js só troca textos e fotos.
     Fotos com textos em português (OpenAI).
     🔴 Não é para canos de água nem com pressão (como em Espanha: não prometer de mais).
     ============================================================ */
  {
    id: 'sellador', enlace: 'selante', unidad: 'uma', promo: 4,
    resenasTotal: 1124,
    dropiId: 2607,

    nombre: 'Spray Selante Impermeável',
    sub: 'Sela fissuras, juntas e frestas · 400 ml · branco',
    categoria: 'Casa',
    etiqueta: 'Novo em Portugal',
    etiquetaOro: true,

    foto: '../img/sellador-tienda.webp?v=1',
    fotos: ['../img/sellador-tienda.webp?v=1', '../img/sellador-terraza-pt.webp?v=1', '../img/sellador-ventana-pt.webp?v=1'],
    video: '../img/sellador-ficha.mp4?v=1',

    hero: {
      img: '../img/hero-sellador.webp?v=1',
      kicker: 'Novo em Portugal',
      titulo: 'Fissuras seladas,<br><b>casa sem goteiras.</b>',
      sub: 'Spray selante impermeável de 400 ml. Pulveriza sobre a fissura ou a junta e forma uma camada branca que não deixa passar a água.',
      datos: [
        ['envio', 'Portes grátis'],
        ['reloj', 'Em 24-48 h'],
        ['pago', 'Paga na entrega'],
      ],
    },
    acento: '#047857',   /* o mesmo de Espanha */

    desc: 'O Spray Selante Impermeável forma uma camada branca, flexível e resistente à água sobre fissuras, juntas e frestas. Aplica-se no exterior e no interior sobre cimento, metal, PVC, madeira e plástico: telhados, terraços, muros, parapeitos, caleiras e tubos de queda. Pulveriza-se a 20-25 cm, em camadas finas, sem escorrer, e seca depressa: em menos de uma hora pode dar várias camadas.',

    puntos: [
      'Sela fissuras, juntas e frestas',
      'Camada branca que não deixa passar a água',
      'Cimento, metal, PVC, madeira e plástico',
      'Interior e exterior · secagem rápida',
    ],

    formulaRotulo: 'Porque funciona',
    formulaTitulo: 'Uma camada que a água não atravessa.',
    formulaSub: 'O que o selante faz assim que o pulveriza.',
    formula: [
      ['agua', 'Impermeável', 'Forma uma barreira branca sobre a fissura: a chuva escorre e não entra.'],
      ['escudo', 'Flexível e resistente', 'Agarra bem e aguenta o tempo sem estalar.'],
      ['rayo', 'Secagem rápida', 'Entre camadas, 15-20 minutos. Pronto em menos de uma hora.'],
      ['casa', 'Sem ferramentas', 'Agita, pulveriza a 20-25 cm e está feito. Sem pincel nem pingos.'],
    ],

    comparaTitulo: 'Porquê um selante em spray?',
    compara: [
      'Chega a juntas e cantos onde o pincel não entra.',
      'Camadas finas e uniformes, sem escorrer nem manchar.',
      'Faz-se sozinho, sem obras nem pedreiro.',
    ],

    preguntas: [
      { q: 'Onde é que se pode usar?', a: 'Em fissuras, juntas e frestas de telhados, terraços, muros, parapeitos de janelas, caleiras e tubos de queda. Sobre cimento, metal, PVC, madeira e plástico, por dentro e por fora.' },
      { q: 'Para que é que NÃO serve?', a: 'Não é para canos de água nem com pressão (o da torneira ou a entrada de água), nem para tubos partidos ou buracos grandes: isso é trabalho de canalizador. Também não se aplica sobre uma superfície molhada.' },
      { q: 'Como se aplica?', a: 'Limpe e seque a zona, agite a lata 1-2 minutos e pulverize a 20-25 cm em camadas finas. Deixe secar 15-20 minutos entre camadas. Para uma fissura normal chegam 2 ou 3 camadas.' },
      { q: 'De que cor fica?', a: 'Branco. Fica uma camada branca, lisa e um pouco borrachosa sobre a fissura.' },
      { q: 'Quanto rende uma lata?', a: 'Uma lata de 400 ml dá para várias fissuras ou juntas de tamanho normal. Para um terraço ou um telhado com muitas fissuras, é melhor o pack de 2 ou de 4.' },
      { q: 'Como é que pago?', a: 'À escolha. Pode pagar ao estafeta quando receber a encomenda, ou pagar agora com cartão e poupar 10 % — nesse caso a encomenda segue com entrega prioritária em 14 h.' },
    ],

    fotosResenas: [],
    antesDespues: '../img/sellador-ba-pt.webp?v=1',
    antesDespuesSub: 'A mesma parede: a fissura por onde entrava a água e a mancha de humidade, e depois selada e seca.',

    /* PREÇOS · os mesmos de Espanha (James 22-10: "los mesmos precios de España").
       O envio para Portugal custa 7,39 € em vez de 6,59 €. */
    packs: [
      { cant: 1, precio: 28.99, antes: 57.99, texto: '1 lata' },
      { cant: 2, precio: 38.99, antes: 77.99, texto: '2 latas' },
      { cant: 4, precio: 58.99, antes: 117.99, texto: '4 latas' },
    ],
    popular: 1,

    anticipado: {
      pct: 10,
      descuento: 3,
      envio: 'Entrega prioritária em 14 h',
      titulo: 'Pague agora',
      sub: 'Com entrega prioritária em 14 h, sem custo. Paga-se com cartão ou PayPal.',
      precios: [25.99, 34.99, 52.99],
    },
  },

  /* ============================================================
     PULSEIRA MAGNÉTICA ANTITABACO · PORTUGAL (22-10-2026)
     Dropi PRO id 2781. Mesmos preços de Espanha (James 22-10).
     🔴 O DESENHO é o de Espanha (../pulsera.css + ../pulsera.js, sem tocar); traduz-pt.js só
     troca textos e fotos. Por isso o id é 'pulsera' (o pulsera.js de Espanha só atua com ?p=pulsera).
     🔴 NÃO é um tratamento: é um lembrete que acompanha a decisão de deixar o tabaco.
     Nada de "cura", "elimina o vício" nem "em X dias".
     ============================================================ */
  {
    id: 'pulsera', enlace: 'pulseira', unidad: 'uma', promo: 2,
    dropiId: 2781,

    nombre: 'Pulseira Magnética Antitabaco',
    sub: 'Pedra vulcânica natural com íman · para ele e para ela',
    categoria: 'Bem-estar',
    etiqueta: 'Lançamento em Portugal',
    etiquetaOro: true,

    foto: '../img/pulseira-palma-pt.webp?v=1',
    fotos: ['../img/pulseira-palma-pt.webp?v=1', '../img/pulseira-muneca-pt.webp?v=1', '../img/pulseira-pareja-pt.webp?v=1'],
    video: '../img/pulsera-ficha.mp4?v=1',

    hero: {
      img: '../img/hero-pulsera.webp?v=3',
      kicker: 'Lançamento em Portugal',
      titulo: 'Outra vez com o cigarro<br><b>na mão?</b>',
      sub: 'A pulseira magnética de pedra vulcânica que leva no pulso e lhe lembra a sua decisão sempre que a vontade chega. Discreta, confortável, para ele e para ela.',
      datos: [
        ['envio', 'Portes grátis'],
        ['reloj', 'Em 24-48 h'],
        ['pago', 'Paga na entrega'],
      ],
    },
    acento: '#A16207',   /* o mesmo de Espanha */

    desc: 'A Pulseira Magnética Antitabaco é feita com contas de pedra vulcânica natural, preta e porosa, e um pequeno íman redondo prateado. É elástica, ajusta-se sozinha ao pulso e combina com tudo. A ideia é simples: usa-a o dia todo e, quando a vontade de fumar chega, toca-lhe, sente o íman e lembra-se de porque decidiu deixar. Um gesto pequeno que o ajuda a travar o impulso.',

    puntos: [
      'Pedra vulcânica natural e um íman discreto',
      'Lembra-lhe a sua decisão quando a vontade chega',
      'Elástica: ajusta-se a qualquer pulso',
      'Para ele e para ela · o pack de 2 é para oferecer',
    ],

    formulaRotulo: 'Porque ajuda',
    formulaTitulo: 'Um lembrete que não fica em casa.',
    formulaSub: 'O que a pulseira faz quando a usa.',
    formula: [
      ['escudo', 'Trava o impulso', 'A vontade chega de repente. Tocar na pulseira é a pausa de que precisa para não acender o cigarro.'],
      ['rayo', 'Sempre consigo', 'No trabalho, no carro ou com o café: vai no pulso o dia todo.'],
      ['agua', 'Pedra vulcânica', 'Contas naturais, leves e porosas, com um íman redondo prateado.'],
      ['casa', 'Discreta', 'Parece mais uma pulseira. Ninguém tem de saber porque a usa.'],
    ],

    comparaTitulo: 'Porquê uma pulseira?',
    compara: [
      'Não leva adesivos, pastilhas nem nada para tomar.',
      'Está no seu pulso: acompanha-o em cada momento difícil.',
      'Um presente com intenção para quem quer deixar de fumar.',
    ],

    preguntas: [
      { q: 'Vai tirar-me a vontade de fumar?', a: 'Não é um medicamento nem um tratamento. É um lembrete que leva no pulso: quando a vontade chega, toca-lhe e ajuda-o a parar um momento e a lembrar-se da sua decisão. Se quer apoio médico para deixar o tabaco, fale com o seu médico ou farmacêutico.' },
      { q: 'De que é feita?', a: 'De contas de pedra vulcânica natural, preta, mate e porosa, montadas num fio elástico, com um pendente redondo prateado que leva um íman.' },
      { q: 'O tamanho serve-me?', a: 'É elástica e ajusta-se à maioria dos pulsos de adulto, de homem e de mulher.' },
      { q: 'Pode molhar-se?', a: 'É melhor tirá-la para tomar banho, nadar ou lavar a loiça: assim o fio e o íman duram mais.' },
      { q: 'Quem não a deve usar?', a: 'Por causa do íman, não a use se tiver pacemaker ou outro dispositivo médico implantado, nem durante a gravidez sem perguntar antes ao seu médico.' },
      { q: 'Porquê o pack de 2?', a: 'É o mais escolhido: uma para si e outra para oferecer a alguém que também quer deixar de fumar, ou para ter de reserva.' },
      { q: 'Como é que pago?', a: 'À escolha. Pode pagar ao estafeta quando receber a encomenda, ou pagar agora com cartão e poupar 10 % — nesse caso a encomenda segue com entrega prioritária em 14 h.' },
    ],

    fotosResenas: [],
    antesDespues: '../img/pulseira-ba-pt.webp?v=1',
    antesDespuesSub: 'O mesmo café de todos os dias: antes com o maço na mão, depois com a pulseira no pulso.',

    /* PREÇOS · os mesmos de Espanha (James 22-10). 'antes' a 0: produto novo. */
    packs: [
      { cant: 1, precio: 25.95, antes: 0, texto: '1 pulseira' },
      { cant: 2, precio: 37.95, antes: 0, texto: '2 pulseiras' },
      { cant: 3, precio: 47.95, antes: 0, texto: '3 pulseiras' },
    ],
    popular: 1,

    anticipado: {
      pct: 10,
      descuento: 2.60,
      envio: 'Entrega prioritária em 14 h',
      titulo: 'Pague agora',
      sub: 'Com entrega prioritária em 14 h, sem custo. Paga-se com cartão ou PayPal.',
      precios: [23.35, 34.15, 43.15],
    },
  },
];

/* ficha.js procura window.PRODUCTOS. Em Portugal o catálogo chama-se PRODUTOS,
   por isso aponta-se aqui: é o mesmo objeto, não uma cópia. */
window.PRODUCTOS = window.PRODUTOS;
/* A loja de Portugal vive em /pt/: o logótipo e os "outros produtos" ficam dentro dela (/pt/selante/),
   nunca mandam para a loja de Espanha. */
window.BASE_TIENDA = '/pt/';
/* 23-10-2026: Portugal já tem o seu próprio WhatsApp (+351 918 470 538), dado por James.
   ficha.js usa (window.WA_NUM || '34672423735'), por isso Espanha fica como estava. */
window.WA_NUM = '351918470538';

window.PRECIOS_APROBADOS = [28.50, 38.50, 48.50, 26.50, 36.50, 46.50,
  /* 22-10 James: selante e pulseira com os mesmos preços de Espanha (com e sem pagamento antecipado) */
  28.99, 38.99, 58.99, 25.99, 34.99, 52.99,
  25.95, 37.95, 47.95, 23.35, 34.15, 43.15,
  /* 23-10 James "dale": spray reparador de riscos com os mesmos preços de Espanha */
  20.99, 28.99, 41.99, 18.99, 25.99, 37.79];
