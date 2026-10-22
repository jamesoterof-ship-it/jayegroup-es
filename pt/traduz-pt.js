/* ============================================================
   TRADUTOR · selante e pulseira em Portugal (22-10-2026).
   James 22-10: "lo único que tienes que cambiar era traducirla nada más".
   O DESENHO é o de Espanha, tal qual: ../sellador.css + ../sellador.js e
   ../pulsera.css + ../pulsera.js (não se tocam). Este ficheiro só:
     · troca os textos em espanhol que esses dois ficheiros escrevem na página
       (e alguns da ficha que não passam por textos-pt.js);
     · aponta as fotos para ../img/ e, onde a foto tem texto, para a versão
       em português (*-pt.webp).
   Vigia a página inteira (a roleta do selante aparece depois), por isso apanha
   também o que se acrescenta mais tarde.
   ============================================================ */
(function () {
  'use strict';
  /* Corre em todas as páginas de Portugal: o menu da ficha também vinha em espanhol no bálsamo.
     Os textos do selante e da pulseira só existem quando esses produtos estão abertos. */

  /* texto exato (sem espaços nas pontas) → português */
  var T = {
    /* ---- selante (sellador.js) ---- */
    'Dónde se usa': 'Onde se usa',
    'Allí por donde': 'Por onde',
    'se cuela el agua.': 'a água entra.',
    'Grietas, juntas y fisuras de cemento, metal, PVC, madera y plástico. Por fuera y por dentro.': 'Fissuras, juntas e frestas de cimento, metal, PVC, madeira e plástico. Por fora e por dentro.',
    'Terrazas y azoteas': 'Terraços e açoteias',
    'Grietas del suelo y la junta con el muro, por donde se cuela el agua al piso de abajo.': 'Fissuras do chão e a junta com o muro, por onde a água passa para o andar de baixo.',
    'Tejados': 'Telhados',
    'Juntas y fisuras entre tejas antes de que empiecen las goteras.': 'Juntas e fissuras entre telhas, antes de aparecerem as goteiras.',
    'Ventanas y muros': 'Janelas e muros',
    'La junta del alféizar y las grietas del muro por donde entra la humedad.': 'A junta do parapeito e as fissuras do muro por onde entra a humidade.',
    'Un hombre sellando con el spray una grieta del suelo de su terraza': 'Um homem a selar com o spray uma fissura do chão do terraço',
    'Un hombre sellando con el spray las juntas de las tejas de un tejado': 'Um homem a selar com o spray as juntas das telhas de um telhado',
    'Una mujer sellando con el spray la junta del alféizar de una ventana': 'Uma mulher a selar com o spray a junta do parapeito de uma janela',
    'Cómo se aplica': 'Como se aplica',
    'Cuatro pasos,': 'Quatro passos,',
    'sin albañil.': 'sem pedreiro.',
    'Limpia y seca': 'Limpe e seque',
    'Quita el polvo, la grasa y el agua de la grieta. Sobre mojado no agarra.': 'Tire o pó, a gordura e a água da fissura. Sobre molhado não agarra.',
    'Agita 1-2 minutos': 'Agite 1-2 minutos',
    'Así se mezcla bien y sale una capa pareja.': 'Assim mistura bem e sai uma camada uniforme.',
    'Rocía a 20-25 cm': 'Pulverize a 20-25 cm',
    'En capas finas, siguiendo la grieta o la junta. Sin goteos.': 'Em camadas finas, a seguir a fissura ou a junta. Sem escorrer.',
    '15-20 min entre capas': '15-20 min entre camadas',
    'Dos o tres capas para una grieta normal. Listo en menos de una hora.': 'Duas ou três camadas para uma fissura normal. Pronto em menos de uma hora.',
    'Antes de comprar': 'Antes de comprar',
    'Para qué sirve': 'Para que serve',
    'y para qué no.': 'e para que não.',
    'Sí sirve para': 'Serve para',
    'No sirve para': 'Não serve para',
    'Grietas y fisuras de tejados, terrazas y muros': 'Fissuras de telhados, terraços e muros',
    'Juntas de alféizares, ventanas y puertas': 'Juntas de parapeitos, janelas e portas',
    'Canalones y bajantes de lluvia': 'Caleiras e tubos de queda',
    'Cemento, metal, PVC, madera y plástico': 'Cimento, metal, PVC, madeira e plástico',
    'Tuberías de agua o con presión (grifo, entrada de agua)': 'Canos de água ou com pressão (torneira, entrada de água)',
    'Tubos rotos o agujeros grandes': 'Tubos partidos ou buracos grandes',
    'Superficies mojadas: hay que esperar a que sequen': 'Superfícies molhadas: é preciso esperar que sequem',
    'Si tienes dudas con tu caso, escríbenos por WhatsApp antes de pedir y te decimos si te sirve.': 'Se tem dúvidas sobre o seu caso, escreva-nos pelo WhatsApp antes de encomendar e dizemos-lhe se serve.',
    'Antes y después': 'Antes e depois',
    'De la grieta con humedad': 'Da fissura com humidade',
    'a la pared seca.': 'à parede seca.',
    'Lo quiero': 'Quero o meu',
    'Lo quiero, pago al recibir': 'Quero o meu, pago na entrega',
    'En vídeo': 'Em vídeo',
    'Así se': 'É assim que',
    'aplica.': 'se aplica.',
    'Cuatro botes del sellador sobre el banco de un garaje, con 1 bote a 28,99 €, 2 botes a 38,99 € y 4 botes a 58,99 €': 'Quatro latas do selante numa bancada de garagem: 1 lata a 28,99 €, 2 latas a 38,99 € e 4 latas a 58,99 €',
    'Opiniones de compradores': 'Opiniões de compradores',
    'Más opiniones de compradores': 'Mais opiniões de compradores',
    /* roleta da oferta (fita impermeável) */
    'Solo por entrar': 'Só por entrar',
    'Gira y descubre tu regalo': 'Gire e descubra a sua oferta',
    'Todas las casillas ganan. Toca en cualquier parte.': 'Todas as casas ganham. Toque em qualquer lado.',
    'Girando…': 'A girar…',
    '¡Ganaste!': 'Ganhou!',
    'Una cinta impermeable de regalo': 'Uma fita impermeável de oferta',
    'Cinta autoadhesiva de 5 cm × 3 m para tapar grietas y juntas antes de rociar el sellador. Va gratis con tu pedido.': 'Fita autoadesiva de 5 cm × 3 m para tapar fissuras e juntas antes de pulverizar o selante. Vai grátis com a sua encomenda.',
    'Toca en cualquier parte para seguir.': 'Toque em qualquer lado para continuar.',
    'Tu regalo': 'A sua oferta',
    'Ver tu regalo': 'Ver a sua oferta',
    'Cerrar': 'Fechar',
    'Ruleta de regalo': 'Roleta de oferta',
    'Rollo de cinta impermeable autoadhesiva plateada': 'Rolo de fita impermeável autoadesiva prateada',
    'Tu cinta de regalo va con tu pedido': 'A sua fita de oferta vai com a sua encomenda',
    'Cinta impermeable de 5 cm × 3 m, gratis.': 'Fita impermeável de 5 cm × 3 m, grátis.',
    'Cinta de': 'Fita de', 'regalo': 'oferta', 'Envío': 'Portes', 'gratis': 'grátis', 'Pago al': 'Paga na',
    'recibir': 'entrega', 'Entrega a': 'Entrega ao', 'domicilio': 'domicílio', 'Llega en': 'Chega em', 'Ayuda por': 'Ajuda pelo',

    /* ---- pulseira (pulsera.js) ---- */
    'Las ganas': 'A vontade',
    'Llegan': 'Chega',
    'sin avisar.': 'sem avisar.',
    'Dejarlo es una decisión que tomas una vez. Las ganas, en cambio, vuelven muchas veces al día, en los mismos momentos de siempre.': 'Deixar de fumar é uma decisão que se toma uma vez. A vontade, pelo contrário, volta muitas vezes por dia, nos mesmos momentos de sempre.',
    'Con el café': 'Com o café',
    'El primer sorbo de la mañana y la mano ya busca el paquete.': 'O primeiro gole da manhã e a mão já procura o maço.',
    'En el coche': 'No carro',
    'Un atasco, un semáforo largo, y el mechero ya está ahí.': 'Um engarrafamento, um semáforo longo, e o isqueiro já está ali.',
    'En la pausa': 'Na pausa',
    'Los demás bajan a fumar y tú te quedas con las ganas.': 'Os outros vão fumar lá fora e fica com a vontade.',
    'El gesto': 'O gesto',
    'Un gesto pequeño': 'Um gesto pequeno',
    'que te frena.': 'que o trava.',
    'No es magia ni un tratamiento: es un recordatorio que no se queda en casa.': 'Não é magia nem um tratamento: é um lembrete que não fica em casa.',
    'Paso 1': 'Passo 1', 'Paso 2': 'Passo 2', 'Paso 3': 'Passo 3',
    'Póntela': 'Coloque-a',
    'Elástica, se ajusta sola. La llevas todo el día y casi no la notas.': 'Elástica, ajusta-se sozinha. Usa-a o dia todo e quase não a sente.',
    'Cuando lleguen las ganas, tócala': 'Quando a vontade chegar, toque-lhe',
    'Siente la piedra y el imán. Esa pausa de unos segundos es la que frena el impulso.': 'Sinta a pedra e o íman. Essa pausa de uns segundos é a que trava o impulso.',
    'Recuerda tu decisión': 'Lembre-se da sua decisão',
    'Cada vez que la miras te acuerdas de por qué lo dejas. Y si lo dejáis juntos, mejor.': 'Sempre que olha para ela lembra-se de porque deixou de fumar. E se deixarem juntos, melhor.',
    'La pulsera de piedra volcánica con su imán redondo plateado en la palma de una mano': 'A pulseira de pedra vulcânica com o seu íman redondo prateado na palma de uma mão',
    'Una mujer tranquila con una taza de té y la pulsera en la muñeca': 'Uma mulher tranquila com uma chávena e a pulseira no pulso',
    'La muñeca de un hombre y la de una mujer, cada una con la misma pulsera': 'O pulso de um homem e o de uma mulher, cada um com a mesma pulseira',
    'La pulsera acompaña tu decisión de dejar el tabaco; no sustituye la ayuda de tu médico o farmacéutico. Por el imán, no la uses si llevas marcapasos u otro dispositivo implantado.': 'A pulseira acompanha a sua decisão de deixar o tabaco; não substitui a ajuda do seu médico ou farmacêutico. Por causa do íman, não a use se tiver pacemaker ou outro dispositivo implantado.',
    'La quiero, pago al recibir': 'Quero a minha, pago na entrega',
    'Pedir la mía': 'Pedir a minha',
    'La quiero': 'Quero a minha',
    'El mismo café,': 'O mesmo café,',
    'otra decisión.': 'outra decisão.',
    'Así es': 'Assim é',
    'la pulsera.': 'a pulseira.',
    'Dos pulseras de piedra volcánica con el cartel de la promoción: 1 pulsera 25,95 €, 2 pulseras 37,95 € y 3 pulseras 47,95 €': 'Duas pulseiras de pedra vulcânica com o cartaz da promoção: 1 pulseira 25,95 €, 2 pulseiras 37,95 € e 3 pulseiras 47,95 €',
    'Pulsera': 'Pulseira',

    /* ---- da ficha, que não passam por textos-pt.js ---- */
    'Escribir una reseña': 'Escrever uma opinião',
    'Quiero la promoción': 'Quero a promoção',
    'El producto': 'O produto',
    'Qué es y para qué sirve': 'O que é e para que serve',
    'Envíos y entregas': 'Envios e entregas',
    'Seguir mi pedido': 'Seguir a minha encomenda',
    'Cambios y devoluciones': 'Trocas e devoluções',
    'Términos y condiciones': 'Termos e condições',
    'termina hoy': 'termina hoje',
    'Por qué lo quieres': 'Porque vale a pena',
    'Pago 100% seguro contra entrega': 'Pagamento 100% seguro na entrega',
    'salieron hoy': 'saíram hoje',
    'Pedir ahora': 'Encomendar agora',
    'Leer más': 'Ler mais',
    'Leer menos': 'Ler menos',
  };
  /* a pulseira é feminina: o botão do herói (textos-pt.js) vem com "Quero o meu" */
  var prod = '';
  try { prod = new URLSearchParams(location.search).get('p') || ''; } catch (e) {}
  if (prod === 'pulsera') {
    T['Quero o meu, pago na entrega'] = 'Quero a minha, pago na entrega';
    T['Quero o meu'] = 'Quero a minha';
    T['Encomende o seu'] = 'Encomende a sua';
  }
  /* a PORTADA da loja (/pt/): o botão de cada cartão serve para os três produtos */
  if (!prod && /\/pt\/(index\.html)?$/.test(location.pathname)) {
    T['Lo quiero'] = 'Quero já';
    T['Listo. Te avisamos cuando haya novedades.'] = 'Pronto. Avisamos quando houver novidades.';
  }
  /* bocados dentro de frases maiores (ficha e portada) */
  var PEDACOS = [[/^Ahorra (\d+%)$/, 'Poupa $1'], [/^ahorras /, 'poupa '], [/ un (\d+ ?%)/, ' $1'],
    [/^([\d.]+) reseñas$/, '$1 avaliações'], [/^(\d+) productos$/, '$1 produtos'], [/^1 producto$/, '1 produto']];

  /* fotos com texto: versão em português; o resto só muda de pasta */
  var FOTOS = {
    'sellador-terraza.webp': 'sellador-terraza-pt.webp', 'sellador-tejado.webp': 'sellador-tejado-pt.webp',
    'sellador-ventana.webp': 'sellador-ventana-pt.webp', 'sellador-promo.webp': 'sellador-promo-pt.webp',
    'pulsera-palma.webp': 'pulseira-palma-pt.webp', 'pulsera-muneca.webp': 'pulseira-muneca-pt.webp',
    'pulsera-pareja.webp': 'pulseira-pareja-pt.webp', 'pulsera-promo.webp': 'pulseira-promo-pt.webp',
  };
  function foto(u) {
    if (!u || u.indexOf('img/') !== 0) return null;
    var nome = u.slice(4).split('?')[0];
    return '../img/' + (FOTOS[nome] ? FOTOS[nome] + '?v=1' : u.slice(4));
  }

  function texto(n) {
    var v = n.nodeValue, t = v.trim();
    if (!t) return;
    var nova = T[t];
    if (nova === undefined) {
      nova = t;
      PEDACOS.forEach(function (x) { nova = nova.replace(x[0], x[1]); });
    }
    if (nova === t) return;   /* já está igual (ex.: "Antes de comprar"): não mexer, senão o vigia entra em ciclo */
    var ini = v.match(/^\s*/)[0], fim = v.match(/\s*$/)[0];
    n.nodeValue = ini + nova + fim;
  }
  function elemento(e) {
    ['alt', 'aria-label', 'title'].forEach(function (a) {
      var v = e.getAttribute && e.getAttribute(a);
      if (v && T[v.trim()] !== undefined) e.setAttribute(a, T[v.trim()]);
    });
    if (e.tagName === 'IMG') { var s = foto(e.getAttribute('src')); if (s) e.setAttribute('src', s); }
    if (e.tagName === 'VIDEO') { var po = foto(e.getAttribute('poster')); if (po) e.setAttribute('poster', po); }
  }
  function passa(raiz) {
    if (!raiz) return;
    if (raiz.nodeType === 3) { texto(raiz); return; }
    if (raiz.nodeType !== 1) return;
    elemento(raiz);
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) texto(n); else elemento(n); }
  }

  function arranca() {
    passa(document.body);
    if (!('MutationObserver' in window)) return;
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === 'characterData') texto(m.target);
        else if (m.type === 'attributes') elemento(m.target);
        else [].forEach.call(m.addedNodes, passa);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['src', 'poster', 'alt', 'aria-label'] });
  }
  if (document.body) arranca(); else document.addEventListener('DOMContentLoaded', arranca);
})();
