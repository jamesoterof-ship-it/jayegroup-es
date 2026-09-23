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

/* Precios aprobados por James para España. Mientras esté vacío, la tienda
   no pinta ningun producto: es a proposito, para que nada salga a la venta
   con un precio que el no haya aprobado. */
window.PRECIOS_APROBADOS = [];
