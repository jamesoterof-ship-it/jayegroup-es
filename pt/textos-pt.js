/* ============================================================
   TEXTOS EM PORTUGUÊS DE PORTUGAL · Jaye Group

   Este ficheiro é o ÚNICO que traduz a página. ficha.js é o mesmo dos dois
   países: lê estas chaves e, se alguma faltar, fica o texto espanhol. Por isso
   um arranjo faz-se UMA vez e serve para Espanha e para Portugal.

   OJO (nota para mí, no para el cliente): esto es portugués DE PORTUGAL, no de
   Brasil. Nada de "você", "time", "celular", "legal" ni gerundio brasileño. En
   Portugal se usa "está a receber" y no "está recebendo". Un portugués nota la
   diferencia en dos frases y desconfía.
   ============================================================ */
window.TEXTOS = {
  _pais: 'PT',
  locale: 'pt-PT',
  marca: 'Jaye Group Portugal',
  correo: 'apoio@jayegroup.com.es',

  /* ---- indicativos: Portugal primeiro ---- */
  paises: [
    ['PT', '+351', 9, 'Portugal'],
    ['BR', '+55', 11, 'Brasil'],
    ['ES', '+34',  9, 'Espanha'],
    ['AO', '+244', 9, 'Angola'],
    ['CV', '+238', 7, 'Cabo Verde'],
    ['FR', '+33',  9, 'França'],
    ['GB', '+44', 10, 'Reino Unido'],
    ['DE', '+49', 11, 'Alemanha'],
    ['CH', '+41',  9, 'Suíça'],
    ['MZ', '+258', 9, 'Moçambique'],
  ],

  /* ---- formulário ---- */
  lNombre: 'Nome completo',
  phNombre: 'Ex: Maria Silva Costa',
  eNombre: 'Escreva o seu nome completo.',
  lMovil: 'Telemóvel',
  phMovil: '912 345 678',
  eMovil: 'Verifique o seu telemóvel: em Portugal são 9 algarismos e começa por 9.',
  eMovilOtro: 'Verifique o seu número de telemóvel.',
  lCorreo: 'Correio eletrónico',
  phCorreo: 'Ex: maria@gmail.com',
  eCorreo: 'Escreva um correio válido: é aí que lhe enviamos a confirmação da encomenda.',
  lDir: 'Morada',
  phDir: 'Rua, número, andar e porta',
  eDir: 'Escreva a rua e o número.',
  eDirNum: 'Falta o número da morada: sem isso a transportadora não consegue entregar.',
  lRef: 'Indicações para o estafeta',
  opcional: '(opcional)',
  phRef: 'Portão, campainha, horário em que está em casa…',
  lCP: 'Código postal',
  phCP: '1000-001',
  eCP: 'O código postal são 4 algarismos, um hífen e mais 3. Exemplo: 1000-001.',
  lCiudad: 'Localidade',
  phCiudad: 'Ex: Lisboa',
  eCiudad: 'Escreva a sua localidade.',
  lProvincia: 'Distrito',
  elige: 'Selecione…',
  eProvincia: 'Selecione o seu distrito.',
  sinCobertura: 'Lamentamos: ainda não entregamos nos Açores nem na Madeira. Entregamos em todo o Portugal continental.',

  /* ---- botão e notas ----
     O texto do botão é obrigatório: o artigo 4.º do Decreto-Lei 24/2014 exige
     que se diga que a encomenda obriga a pagar. */
  btnPedir: 'Encomenda com obrigação de pagamento',
  enviando: 'A enviar…',
  notaCod: 'Não paga nada agora: paga ao estafeta quando receber a encomenda. Enviamos-lhe a confirmação por correio eletrónico.',
  notaPre: 'Ao enviar a encomenda levamo-lo à página de pagamento. A sua encomenda segue com entrega prioritária em 14 h.',
  dudas: 'Alguma dúvida? Escreva-nos para ',
  yTeAyudamos: ' e nós ajudamos.',
  seTeComplica: 'Está com dificuldades? Escreva-nos para ',
  asuntoPedido: 'Encomenda de ',
  asuntoQuiero: 'Quero encomendar ',

  /* ---- pagamento ---- */
  pagoCod: 'Paga ao receber',
  pagoCodSub: 'Portes grátis · 24-48 h',
  pagaAhora: 'Pague agora',
  ahorras: 'Poupa ',
  subtotal: 'Subtotal',
  descuento: 'Desconto',
  envio: 'Portes',
  gratis: 'Grátis',
  totalCod: 'Total a pagar na entrega',
  totalPre: 'Total a pagar agora',

  /* ---- opiniões do produto ----
     A linha da fonte é OBRIGATÓRIA e não se esconde: são avaliações de
     compradores DO PRODUTO, não de clientes da nossa loja. */
  revTit: 'Opiniões do produto',
  revFuente: 'Avaliações de compradores verificados deste produto.',
  compraVerificada: 'Compra verificada',
  resenas: 'avaliações',

  /* ---- textos soltos da ficha ---- */
  desde: 'Desde',
  desdePie: '· portes grátis e paga quando o receber em casa.',
  pedirAhora: 'Quero encomendar o meu',
  saleHoy: 'Sai hoje do nosso armazém em Sevilha. Paga quando o receber.',
  masVendido: 'Mais vendido',
  mejorPrecio: 'Melhor preço',
  verMas: 'Ver mais avaliações',
  masExp: 'Mais experiências dos nossos clientes',

  /* ---- cabeçalho e botão grande ---- */
  ctaGrande: 'Quero o meu, pago na entrega',
  ctaSub: 'Portes grátis · Não paga nada adiantado',
  recienLlegado: 'Acabado de chegar a Portugal · seja das primeiras a experimentar',
  pideTit: 'Encomende o seu',
  faqTit: 'Perguntas frequentes',

  /* ---- transportadoras ---- */
  enviamosCon: 'Enviamos com',
  carriers: ['CTT Express', 'MRW'],
  sellos: [
    ['CTT Express', 'Em 24/48 h em todo o continente'],
    ['MRW', 'Entrega ao domicílio'],
    ['Paga na entrega', 'Ao estafeta, quando já o tem na mão'],
    ['Portes grátis', 'Sem custos de envio'],
  ],

  /* ---- o que garantimos ---- */
  resRotulo: 'O que lhe garantimos',
  resTit: 'Sem letras pequenas',
  resDatos: [
    ['24-48 h', 'de entrega em Portugal continental'],
    ['0 €', 'de portes de envio'],
    ['14', 'dias para desistir da compra'],
    ['3', 'anos de garantia legal'],
  ],

  /* ---- garantia ----
     Em Portugal o direito de livre resolução são 14 dias (Decreto-Lei 24/2014)
     e a garantia legal são 3 anos (Decreto-Lei 84/2021). E o Livro de
     Reclamações Eletrónico é OBRIGATÓRIO com ligação visível (Lei 144/2015). */
  selloArriba: 'DIREITO DE',
  selloAbajo: 'LIVRE RESOLUÇÃO',
  dias: 'DIAS',
  garTit: 'Compra sem risco',
  garTxt: 'Tem <b>14 dias</b> desde que recebe a encomenda para desistir da compra sem ter de dar explicações, e <b>3 anos de garantia legal</b> se o produto não estiver conforme. Não é um favor nosso: é o que a lei portuguesa manda e nós cumprimos.',
  garChips: ['14 dias para desistir', '3 anos de garantia legal', 'Paga na entrega'],
  garPie: 'Para desistir basta escrever-nos para ',
  garPie2: '. Devolvemos-lhe o valor no prazo máximo de 14 dias.',
  livroReclamacoes: true,

  /* ---- saída ---- */
  exitTit: 'Falta pouco?',
  exitTxt: 'A sua encomenda chega em <b>24 a 48 h</b> com <b>portes grátis</b>. Não paga nada agora: <b>paga ao estafeta</b> quando a receber em casa.',
  exitBtn: 'Quero terminar a minha encomenda',
  exitMail: 'ou escreva-nos para ',

  /* ---- falha de ligação ---- */
  falloTit: 'Não conseguimos registar a sua encomenda',
  falloTxt: 'A ligação falhou mesmo no momento do envio, e não lhe queremos dizer que ficou registada se não é verdade.<br>Os seus dados ficaram guardados: tente novamente daqui a pouco, ou escreva-nos que tratamos disso nós.',
  falloBtn: 'Escrever para o apoio',
  asuntoFallo: 'A minha encomenda não foi confirmada',
  cuerpoFallo: 'Olá, fiz a minha encomenda de ',
  cuerpoFallo2: ' na página e não foi confirmada. O meu nome é ',

  /* ---- os dois passos do formulário ---- */
  paso1: 'Quantas quer?',
  paso2: 'Como quer pagar?',
  btnPedirPre: 'Pagar agora ',

  /* ============================================================
     DESENHO DO BÁLSAMO (balsamo.js) — o mesmo de Espanha, em português.
     O ficheiro balsamo.js é partilhado: se estas chaves não existirem,
     cai para o espanhol. Os caminhos das fotos vão sem ../ : o próprio
     balsamo.js põe-no quando o país é PT.
     ============================================================ */
  baCifra1: 'gramas que cabem na mala',
  baCifra2: 'ativos na fórmula',
  baCifra3: 'mãos sujas',

  baPasosRot: 'Como se usa',
  baPasosH2: 'Três gestos, <em>e está feito.</em>',
  baPasos: [
    ['Roda a base', 'Um giro e assoma um pouco de bálsamo. Não é preciso sujar as mãos nem calcular quantidade: sai o que precisa.'],
    ['Deslize-o', 'Passe o stick pelo malar, o contorno, os lábios, o pescoço ou o decote. Absorve rápido e não deixa sensação oleosa.'],
    ['Quando quiser', 'De manhã, à noite ou a meio da tarde para retocar. Vai antes da maquilhagem ou por cima, sem a arrastar.'],
  ],

  baTraeRot: 'O que o torna diferente',
  baTraeH2: 'Não é um creme: <em>é um gesto.</em>',

  baFotos: [
    ['img/balsamo-uso.webp?v=1',
     'Uma mulher de cerca de cinquenta anos a deslizar o bálsamo VITALIS pelo malar',
     'O gesto', 'Dois segundos e está feito',
     'Desliza diretamente sobre a pele, sem mãos e sem medir quantidade. Por isso se usa mesmo todos os dias, e não fica na gaveta.'],
    ['img/balsamo-mano.webp?v=1',
     'O stick de bálsamo de colagénio VITALIS na mão, com o seu rótulo dourado',
     'Onde se aplica', 'Rosto, lábios, pescoço e decote',
     'Um só produto para todas as zonas que ficam secas. Nada de ter um frasco diferente para cada parte da cara.'],
    ['img/balsamo-bolso.webp?v=1',
     'O stick ao lado de uma mala, uns óculos de sol e um frasco de perfume sobre uma mesa de mármore',
     'Vai consigo', 'Nove gramas, e pronto',
     'É sólido: não se entorna na mala nem seca como um frasco aberto. Leva-o consigo e retoca onde estiver.'],
  ],
};
