# Cabezal de ducha · España — sistema de diseño (ui-ux-pro-max ORIGINAL, 29-09-2026)

> Manda sobre `../MASTER.md`. Salió de la skill original (192 paletas), NO del bálsamo.
> Consultas: `--design-system "shower head bathroom home improvement ecommerce water pressure filter"`,
> `--design-system "home spa wellness bathroom water aqua premium product"`,
> `--domain color "water aqua spa fresh clean"`, `--domain landing "product demo before after problem solution"`,
> `--domain typography "ecommerce product conversion bold clean"`.

## Patrón de página — Before-After Transformation + Feature-Rich Showcase
Orden: Hero (el problema resuelto) → Antes/después → Qué trae (4 tarjetas, una idea cada una) →
Video "así funciona" → Cómo se instala (3 pasos) → Ofertas y pago → Preguntas → Garantía/envío.
CTA: fijo abajo + después del antes/después + después de las tarjetas + final (skill: "Strong CTA repetition").

## Estilo — Soft UI Evolution
Profundidad suave (sombras 0 8px 24px rgba(2,132,199,.10), nunca >24px), radios 16-20px,
tarjetas blancas sobre fondo agua, contraste medido. Nada de negro, nada de dorado, nada de cursiva de revista.

## Colores — "Water & Hydration" + CTA naranja de conversión (ecommerce)
| token | hex | uso |
|---|---|---|
| --d-primario | #0284C7 | titulares destacados, iconos, enlaces |
| --d-secundario | #06B6D4 | agua: chorros, gotas, detalles |
| --d-fondo | #F0F9FF | fondo general |
| --d-franja | #E0F2FE | franjas alternas |
| --d-tarjeta | #FFFFFF | tarjetas |
| --d-texto | #0F172A | texto (17,8:1 sobre el fondo) |
| --d-texto2 | #475569 | secundario (7,2:1) |
| --d-cta | #EA580C | BOTÓN — con texto #000/#0F172A (5,8:1). Blanco encima NO (3,6:1) |
| --d-borde | #BAE6FD | bordes |
Antes/después: gris apagado (antes) contra azul vivo (después) — "Color Strategy" del patrón.

## Tipografía — E-commerce Clean: Rubik (titulares 700-800) + Nunito Sans (cuerpo 400-600)
Titular hero 34-40px móvil, H2 26-30px, cuerpo 16-17px / 1,6. Precios con cifras tabulares.

## Efectos
Entradas 200-300 ms ease-out, escalonado 40 ms, todo apagado con prefers-reduced-motion.
Gotas de agua suaves en el hero (no destellos dorados). Pulsación de escala 0,97 en botones.

## Lo que NO se hace
Copiar la estructura o los efectos del bálsamo · texto de Chile ("todo Chile", CLP, bandera) ·
mostrar manguera/soporte como incluidos · emojis como iconos · páginas con mucho texto.
