/* ============================================================
   PORTUGAL · distritos y codigos postais
   Dropi PRO envia a Portugal desde el almacen de Sevilla con CTT 24 h
   (5,39 € + 1 fulfillment + 1 COD = 7,39 €) y MRW 14 h (7,25 €).
   Verificado en la tabla de tarifas que mando Dropi PRO el 24-09-2026.

   OJO: son 18 DISTRITOS del continente. Las Regioes Autonomas dos Acores y da
   Madeira NO se incluyen: son islas y el proveedor no las lista, igual que
   pasa con Canarias en España. Si alguna vez las abre, se anaden aqui.
   ============================================================ */
window.DISTRITOS_PT = [
  "Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra",
  "Évora", "Faro", "Guarda", "Leiria", "Lisboa", "Portalegre",
  "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"
];

/* Prefixos de codigo postal SEM cobertura.
   9 = Acores e Madeira (9000-9999). O continente vai de 1000 a 8999. */
window.CP_SEM_COBERTURA = ["9"];

/* O codigo postal portugues sao 4 digitos, um hifen e 3 digitos: 1000-001.
   Esta expressao e a que valida o formulario. */
window.CP_PT_REGEX = /^\d{4}-\d{3}$/;
