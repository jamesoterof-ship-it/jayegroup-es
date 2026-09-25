/* ============================================================
   PRODUTO · JAYE GROUP PORTUGAL
   Bálsamo de colagénio VITALIS · Dropi PRO id 2287 · custo 1,99 € sem IVA.
   Envio desde o armazém de Sevilha com CTT 24 h (7,39 € tudo incluído).

   OJO con el idioma (nota mia, no del cliente): alegaciones cosmeticas UE
   (Reglamento 655/2013). Solo se habla de la APARIENCIA de la piel. Prohibido
   "elimina rugas", "rejuvenesce" o cualquier promesa medica.
   ============================================================ */
window.PRODUTOS = [
  {
    id: 'balsamo', unidad: 'um', promo: 2,

    dropiId: 2287,
    dropiSku: '75481-BALSAMO-VITALIS',

    nombre: 'Bálsamo de Colagénio VITALIS',
    sub: 'Stick hidratante multizona · 9 g',
    categoria: 'Beleza',
    etiqueta: 'Novo em Portugal',
    etiquetaOro: true,

    foto: '../img/prod-balsamo.jpg?v=1',
    fotos: ['../img/prod-balsamo.jpg?v=1'],
    acento: '#B76E79',

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
      { cant: 1, precio: 28.50, antes: 0, texto: '1 unidade' },
      { cant: 2, precio: 38.50, antes: 0, texto: '2 unidades' },
      { cant: 3, precio: 48.50, antes: 0, texto: '3 unidades' },
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
];

/* ficha.js procura window.PRODUCTOS. Em Portugal o catálogo chama-se PRODUTOS,
   por isso aponta-se aqui: é o mesmo objeto, não uma cópia. */
window.PRODUCTOS = window.PRODUTOS;

window.PRECIOS_APROBADOS = [28.50, 38.50, 48.50, 26.50, 36.50, 46.50];
