/* ============================================================
   ROMÂNIA · județe și coduri poștale
   Las 41 provincias (județe) mas el municipio de Bucarest, igual que pide
   cualquier formulario de envio en Rumania. Dropi PRO Rumania despacha con
   GLS (soporte, 20-10-2026).

   Por ahora NO hay zonas sin cobertura conocidas: la lista queda vacia y se
   llena si el proveedor avisa de alguna.

   OJO: ficha.js (compartido con España y Portugal) todavia NO lee estas
   variables: solo conoce PROVINCIAS_ES / DISTRITOS_PT y el codigo postal de 5
   cifras o el portugues. Hasta que se le agregue Rumania, el formulario de
   /ro/ no puede validar un pedido rumano (ver informe del 21-10).
   ============================================================ */
/* 03-11 POLONIA (copia propia de /ro/): la variable sigue llamándose JUDETE_RO para no tocar el código de ficha.js,
   pero ahora son las 16 regiones de Polonia (województwa). Transportadora de Dropi PRO Polonia: PENDIENTE de confirmar. */
window.JUDETE_RO = [
  "dolnośląskie", "kujawsko-pomorskie", "lubelskie", "lubuskie", "łódzkie", "małopolskie",
  "mazowieckie", "opolskie", "podkarpackie", "podlaskie", "pomorskie", "śląskie",
  "świętokrzyskie", "warmińsko-mazurskie", "wielkopolskie", "zachodniopomorskie"
];

/* Prefijos de codigo postal SIN cobertura. Vacio hasta que Dropi PRO Polonia diga otra cosa. */
window.CP_FARA_ACOPERIRE = [];

/* El código postal polaco es 00-000 (Varsovia 00-001, Cracovia 30-001); se acepta también sin guion. */
window.CP_RO_REGEX = /^\d{2}-?\d{3}$/;
