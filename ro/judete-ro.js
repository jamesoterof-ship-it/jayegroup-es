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
window.JUDETE_RO = [
  "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani",
  "Brăila", "Brașov", "București", "Buzău", "Călărași", "Caraș-Severin",
  "Cluj", "Constanța", "Covasna", "Dâmbovița", "Dolj", "Galați", "Giurgiu",
  "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov", "Maramureș",
  "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Sălaj", "Satu Mare",
  "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea", "Vâlcea", "Vaslui",
  "Vrancea"
];

/* Prefijos de codigo postal SIN cobertura. Vacio: GLS cubre todo el pais. */
window.CP_FARA_ACOPERIRE = [];

/* El codigo postal rumano son 6 cifras: 010011 (Bucarest), 400001 (Cluj). */
window.CP_RO_REGEX = /^\d{6}$/;
