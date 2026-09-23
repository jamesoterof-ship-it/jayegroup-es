/* ============================================================
   CATALOGO DE LA TIENDA · JAYE GROUP ESPAÑA

   VACIO: el primer producto se decide con la segunda foto del Radar
   (23-09-2026) y con los precios de quien ya pautea en España.

   Para agregar uno, se copia el molde de la tienda de Colombia
   (jaye-landings/shilajit/productos.js) y se cambia:
     - precios en EUROS (sin decimales raros: 29.95 se escribe 29.95)
     - 'unidad' y los packs segun lo que venda Dropi PRO
     - las fotos, que van en img/
   Candado: si un precio no esta en PRECIOS_APROBADOS, el producto NO se
   pinta en la tienda. Es el mismo candado de Chile.
   ============================================================ */
window.PRODUCTOS = [];

/* ============================================================
   OJO CON EL PRECIO TACHADO (el campo 'was' de cada pack)
   Ley 7/1996 art. 20.1 (reformado por el RD-ley 1/2021, Directiva Omnibus):
   cuando se anuncia una rebaja, el precio tachado tiene que ser EL MAS BAJO
   que se haya aplicado en los ULTIMOS 30 DIAS. Inventar un precio anterior
   mas alto es practica desleal y lo sancionan las CCAA.
   Regla practica: producto nuevo => NO se pone 'was' hasta llevar 30 dias
   vendiendo al precio normal.
   ============================================================ */

/* Precios aprobados por James para España. Mientras esté vacío, la tienda
   no pinta ningun producto: es a proposito, para que nada salga a la venta
   con un precio que el no haya aprobado. */
window.PRECIOS_APROBADOS = [];
