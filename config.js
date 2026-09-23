/* ============================================================
   CONFIG — ESPAÑA · Plantillas de confort con amortiguación
   BORRADOR para aprobación de James (copys y precios). País: España,
   euros con IVA incluido, envío gratis a la península, pago contra
   reembolso. Backend: webhook pedido-tienda-es (n8n) → Dropi PRO.
   Producto en Dropi PRO: id 1521 (mujer 36-41, 2,29 €) · 1522 (hombre 40-46, 2,39 €).
   ============================================================ */
window.CONFIG = {
  /* ---- Identidad ---- */
  marca: "JAYE GROUP",
  producto: "Plantillas de confort con amortiguación",
  productoCorto: "Plantillas CloudStep",
  origen: "espana-plantillas",
  seoTitle: "Plantillas de confort con amortiguación · Alivio para tus pies | Pago contra reembolso en toda España",
  seoDesc: "Plantillas de confort con soporte de arco y amortiguación. Envío gratis en 24/48 h a la península y pago al recibir. Garantía legal de 3 años.",

  /* ---- Paleta (verde menta + azul noche: descanso, frescura) ---- */
  paleta: { pri:"#0f766e", sec:"#14b8a6", acc:"#5eead4", priD:"#042f2e", ink:"#0b1626" },

  /* ---- País / moneda ---- */
  pais: { nombre:"España", cc:"es", prefijo:"+34", moneda:"EUR", locale:"es-ES" },

  /* ---- Hero ---- */
  heroKicker: "Alivio desde el primer paso",
  heroTitle: 'Pies sin dolor <span class="hl">todo el día</span>',
  heroLead: "Plantillas de confort con soporte de arco y amortiguación en el talón. Para quien pasa horas de pie, camina mucho o siente cansancio y molestias al final del día.",
  heroTag: "Envío gratis 24/48 h · Pago al recibir",
  badges: ["Soporte de arco", "Amortiguación en talón", "🚚 Pago contra reembolso"],

  /* ---- Precios / packs (PROPUESTA, pendiente de aprobación) ----
     Referencia de quien pautea: Hoyrelax 19,95-21,95 € (2+2), Glowan 29,95 €, Nubelas "hasta 3 gratis".
     1 par no deja margen (envío ~6,5 € + pauta): es el ancla. El pack de 2 es el que se empuja. */
  precioUnidad: 19.95,
  packs: [
    { qty:1, price:19.95, was:0, label:"1 par",   sub:"Para probar",            tag:"" },
    { qty:2, price:29.95, was:0, label:"2 pares", sub:"Ahorras 9,95 €",         tag:"MÁS VENDIDO" },
    { qty:3, price:34.95, was:0, label:"3 pares", sub:"Ahorras 24,90 € · uno por calzado", tag:"MEJOR PRECIO" }
  ],

  /* ---- Imágenes (las genera James / optimizar-imagenes.js) ---- */
  img: {
    logo:    "",
    hero:    "img/hero.webp",
    oferta:  "img/oferta.webp",
    galeria: ["img/c1.webp","img/c2.webp","img/c3.webp","img/c4.webp"],
    packThumb1: "img/unidad.webp",
    packThumb2: "img/duo.webp"
  },

  /* ---- Trust strip (4) ---- */
  trust: [
    { em:"🚚", b:"Envío gratis", s:"24/48 h en la península" },
    { em:"💶", b:"Pagas al recibir", s:"contra reembolso" },
    { em:"↩", b:"14 días", s:"para desistir de tu compra" },
    { em:"🛡", b:"Garantía legal", s:"3 años" }
  ],

  /* ---- Cómo actúa ---- */
  howTitle: "¿Cómo funcionan?",
  howIntro: "Reparten mejor el peso del cuerpo y sujetan el arco del pie. Así el talón y la planta trabajan menos y el cansancio se nota menos al final del día.",
  howSteps: [
    { t:"Sujetan el arco", d:"El soporte central acompaña la curva natural del pie y evita que se hunda con cada paso." },
    { t:"Amortiguan el talón", d:"La zona del talón absorbe el impacto al caminar o estar de pie sobre suelo duro." },
    { t:"Se adaptan a tu calzado", d:"Se recortan por las líneas marcadas para ajustarlas a tu talla y sirven en zapatillas, botas o zapato de trabajo." }
  ],

  /* ---- Oferta ---- */
  offerTitle: "Pack de 2 pares",
  offerSub: "Uno para el calzado de diario y otro para el de trabajo o deporte. Envío gratis y pagas al recibir.",
  offerWas: 0,
  offerNew: 29.95,

  /* ---- Stats ---- */
  /* Sin porcentajes inventados: en España una cifra sin estudio detrás es publicidad engañosa. Solo hechos comprobables. */
  statTitle: "Así de simple",
  stats: [
    { em:'<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>', valor:48, suf:" h", d:"máximo de entrega en la península" },
    { em:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>', valor:0, suf:" €", d:"de gastos de envío" },
    { em:'<svg viewBox="0 0 24 24"><path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0z"/></svg>', valor:14, suf:" días", d:"para desistir de la compra" },
    { em:'<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.2 5.8.9-4.2 4 1 5.7-5.2-2.7-5.2 2.7 1-5.7-4.2-4 5.8-.9z"/></svg>', valor:3, suf:" años", d:"de garantía legal" }
  ],

  /* ---- Comparativa ---- */
  cmpTitle: "¿Qué las hace diferentes?",
  comparativa: [
    "Soporte de arco firme, no una esponja plana.",
    "Amortiguación en talón y metatarso.",
    "Recortables: se ajustan a tu talla exacta.",
    "Transpirables, sin olor y lavables."
  ],

  /* ---- Reseñas: SOLO reales y verificadas (España prohíbe las inventadas).
     Formato: { nombre, estrellas, texto, fecha:"dd/mm/aaaa", verificada:true/false }.
     Vacío = la sección no se muestra. ---- */
  resenas: [],

  /* ---- Garantía ---- */
  garDias: 14,
  garTitle: "Compra sin riesgo",
  garText: "Tienes 14 días naturales desde que recibes el pedido para desistir de la compra sin dar explicaciones, y 3 años de garantía legal frente a cualquier falta de conformidad. Lo dice la ley y lo cumplimos.",

  /* ---- FAQ ---- */
  faq: [
    { q:"¿Cómo elijo la talla?", a:"Elige mujer (36-41) u hombre (40-46) al hacer el pedido. Las plantillas traen líneas de corte para ajustarlas a tu número exacto con unas tijeras." },
    { q:"¿Cuándo llega mi pedido?", a:"Sale de nuestro almacén en Sevilla y llega en 24/48 h laborables a cualquier punto de la península con MRW, CTT o Correos Express." },
    { q:"¿Cómo pago?", a:"Contra reembolso: pagas al mensajero cuando recibes el paquete, en efectivo. No pagas nada por adelantado." },
    { q:"¿Enviáis a Canarias, Baleares, Ceuta o Melilla?", a:"Por ahora no. Solo enviamos a la península." },
    { q:"¿Puedo devolverlas?", a:"Sí. Tienes 14 días naturales desde la entrega para desistir de la compra. Escríbenos por correo y te indicamos cómo. Los gastos de devolución corren por tu cuenta, salvo que el producto llegue defectuoso." },
    { q:"¿Sirven para fascitis plantar o espolón?", a:"Son plantillas de confort con soporte de arco y amortiguación. No son un producto sanitario ni sustituyen la valoración de un podólogo. Si tienes una dolencia diagnosticada, consúltale antes." }
  ],

  /* ---- Transportadoras de Dropi PRO ---- */
  carriers: ["img/logo-mrw.png", "img/logo-ctt.png", "img/logo-correosexpress.png"],

  /* ---- Contacto / footer ---- */
  footTitle: "JAYE GROUP — ESPAÑA",
  footAddr: "Carrera 78 # 78-78, Barranquilla, Colombia",
  footMail: "gerencia@jayegroup.com.co",
  whatsapp: "",   /* número español pendiente: hasta que exista, el botón de WhatsApp se oculta */

  /* ---- Backend ---- */
  dropiId:   1521,
  dropiPorTalla: { mujer:1521, hombre:1522 },
  pixelId:   ""    /* píxel de la cuenta de España: se pone al montar la campaña */
};
