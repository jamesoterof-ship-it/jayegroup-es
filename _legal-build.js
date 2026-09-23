/* Genera las páginas legales de España a partir de _legal-base.html.
   Uso: node _legal-build.js   (desde esta carpeta). No se publica (empieza por _).
   Los textos salen de la investigación legal del 22-09-2026 (LSSI, TRLGDCU, RGPD,
   Guía de cookies AEPD mayo-2024, Reglamento 2023/988). Lo que va entre [corchetes]
   son datos que faltan y que debe dar James antes de publicar. */
const fs = require('fs');
const base = fs.readFileSync('_legal-base.html', 'utf8');

// Datos del titular. Lo que está entre corchetes FALTA.
const T = {
  nombre: 'James Otero Farrayans', marca: 'JAYE GROUP', nit: 'NIT 8782874-4 (Colombia)',
  nifES: '[NIF-IVA ESPAÑOL — pendiente]', dir: 'Carrera 78 # 78-78, [apartamento / código postal], Barranquilla, Colombia',
  mail: 'gerencia@jayegroup.com.co', tel: '[WhatsApp / teléfono español — pendiente]',
  repUE: '[REPRESENTANTE EN LA UE (art. 27 RGPD): nombre, dirección y correo — pendiente]',
  respUE: '[OPERADOR ECONÓMICO RESPONSABLE EN LA UE (Reglamento 2023/988): entidad y dirección — pendiente; normalmente el almacén de Sevilla]',
  devol: '[DIRECCIÓN DE DEVOLUCIONES EN ESPAÑA — almacén de Sevilla, pendiente]',
  producto: 'plantillas de confort con amortiguación',
  fecha: 'septiembre de 2026'
};

const paginas = {
'aviso-legal.html': ['Aviso legal', `
  <h1>Aviso legal</h1>
  <p class="upd">Última actualización: ${T.fecha}</p>
  <h2>1. Titular del sitio</h2>
  <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), se informa de que el titular de este sitio web es:</p>
  <ul>
    <li><b>Titular:</b> ${T.nombre}, persona física, que opera bajo el nombre comercial <b>${T.marca}</b>.</li>
    <li><b>Identificación fiscal:</b> ${T.nit}. NIF-IVA en España: ${T.nifES}.</li>
    <li><b>Residencia:</b> ${T.dir}.</li>
    <li><b>Correo electrónico:</b> <a href="mailto:${T.mail}">${T.mail}</a>. <b>Teléfono/WhatsApp:</b> ${T.tel}.</li>
    <li><b>Representante en la Unión Europea</b> a efectos del Reglamento (UE) 2016/679 (art. 27): ${T.repUE}.</li>
    <li><b>Operador económico responsable en la UE</b> del producto (art. 16 del Reglamento (UE) 2023/988 de seguridad general de los productos): ${T.respUE}.</li>
  </ul>
  <p>El titular no está establecido en España ni en la Unión Europea; dirige su actividad a consumidores residentes en la España peninsular y queda sujeto a la legislación española de servicios de la sociedad de la información y de consumo (art. 4 LSSI).</p>
  <h2>2. Objeto</h2>
  <p>Este sitio ofrece la venta a distancia de ${T.producto} a consumidores, con pago contra reembolso. Las condiciones de compra, el derecho de desistimiento, la garantía legal, la política de privacidad y la política de cookies se recogen en sus páginas correspondientes, enlazadas al pie.</p>
  <h2>3. Propiedad intelectual e industrial</h2>
  <p>Los textos, imágenes, diseño y la marca ${T.marca} están protegidos por la normativa de propiedad intelectual e industrial. No se permite su reproducción sin autorización escrita del titular.</p>
  <h2>4. Ley aplicable y fuero</h2>
  <p>Este sitio se rige por la ley española. Los consumidores pueden acudir a los juzgados y tribunales de su propio domicilio. Plataforma europea de resolución de litigios en línea: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>.</p>
`],

'terminos.html': ['Condiciones de compra', `
  <h1>Condiciones generales de compra</h1>
  <p class="upd">Última actualización: ${T.fecha}</p>
  <h2>1. Ámbito y aceptación</h2>
  <p>Estas condiciones regulan la venta a distancia de ${T.producto} por parte de ${T.nombre} (${T.marca}) a consumidores residentes en la <b>España peninsular</b>. No se realizan envíos a Canarias, Baleares, Ceuta ni Melilla. El contrato se celebra en castellano. Al pulsar el botón de pedido, usted declara haber leído y aceptado estas condiciones (Ley 7/1998, de condiciones generales de la contratación, art. 5).</p>
  <h2>2. Precio y forma de pago</h2>
  <p>Los precios se muestran en euros con el <b>IVA incluido</b>. El envío es <b>gratuito</b>. El único medio de pago es el <b>pago contra reembolso</b>: usted paga en efectivo al mensajero en el momento de la entrega. <b>No se aplica ningún recargo</b> por este medio de pago (Real Decreto Legislativo 1/2007, TRLGDCU, arts. 60.2 y 97.1).</p>
  <h2>3. Pedido y perfección del contrato</h2>
  <p>Al pulsar <b>"Comprar — pedido con obligación de pago"</b> usted realiza un pedido en firme (TRLGDCU art. 98.2). Recibirá por correo electrónico un acuse de recibo en un plazo máximo de 24 horas (LSSI art. 28). El contrato queda perfeccionado cuando le enviamos la <b>confirmación del pedido</b>; hasta ese momento ${T.marca} puede no aceptarlo (dirección incompleta, zona sin cobertura o falta de existencias), en cuyo caso se lo comunicará sin demora y sin coste alguno para usted.</p>
  <h2>4. Entrega</h2>
  <p>Plazo habitual de entrega: 24 a 48 horas laborables desde la confirmación, mediante MRW, CTT Express o Correos Express, y en todo caso dentro de los <b>30 días naturales</b> siguientes (TRLGDCU art. 66 bis). Si no entregamos en plazo, usted puede concedernos un plazo adicional y, si tampoco cumplimos, resolver el contrato. El riesgo de pérdida o deterioro pasa a usted cuando recibe el producto.</p>
  <h2>5. Derecho de desistimiento</h2>
  <p>Tiene usted derecho a desistir del presente contrato en un plazo de <b>14 días naturales</b> sin necesidad de justificación (TRLGDCU art. 102). El plazo expirará a los 14 días naturales del día en que usted, o un tercero por usted indicado distinto del transportista, adquirió la posesión material de los bienes.</p>
  <p>Para ejercer el derecho de desistimiento deberá notificarnos su decisión mediante una declaración inequívoca (por ejemplo, un correo electrónico a <a href="mailto:${T.mail}">${T.mail}</a> o un mensaje a ${T.tel}), a nombre de ${T.marca} – ${T.nombre}, ${T.dir}. Podrá utilizar el modelo de formulario del apartado 6, aunque su uso no es obligatorio. También puede cumplimentar y enviar el <a href="desistir.html">formulario de desistimiento de este sitio web</a>; si lo hace, le comunicaremos sin demora por correo electrónico la recepción de su desistimiento (TRLGDCU art. 106.3). Para cumplir el plazo basta con que la comunicación se envíe antes de que venza.</p>
  <p><b>Consecuencias del desistimiento.</b> Le devolveremos todos los pagos recibidos de usted, incluidos los gastos de entrega, sin demora indebida y, en todo caso, a más tardar 14 días naturales desde que se nos informe de su decisión (TRLGDCU art. 107.1). Como el pago se realizó en efectivo contra reembolso, el reembolso se hará por <b>transferencia bancaria</b> a la cuenta que usted nos indique, sin ningún gasto para usted. Podremos retener el reembolso hasta haber recibido los bienes o hasta que usted presente una prueba de su devolución (art. 107.3).</p>
  <p>Deberá devolvernos los bienes a ${T.devol}, sin demora indebida y, en cualquier caso, en el plazo de 14 días naturales desde que nos comunique su decisión. <b>Deberá asumir el coste directo de devolución de los bienes</b> (envío ordinario, estimado en un máximo de 6 €) (art. 108.1). Solo será responsable de la disminución de valor de los bienes resultante de una manipulación distinta a la necesaria para establecer su naturaleza, características y funcionamiento (por ejemplo, plantillas recortadas o usadas más allá de probarlas). Si rehúsa la entrega al mensajero, lo trataremos como un desistimiento.</p>
  <h2>6. Modelo de formulario de desistimiento</h2>
  <p>(Anexo B del TRLGDCU. Solo debe cumplimentar y enviar este formulario si desea desistir del contrato.)</p>
  <p style="white-space:pre-line">— A la atención de ${T.marca} – ${T.nombre}, ${T.dir}, ${T.mail}:
— Por la presente le comunico que desisto de mi contrato de venta del siguiente bien: ………
— Pedido el / recibido el: ………
— Nombre del consumidor: ………
— Domicilio del consumidor: ………
— Firma del consumidor (solo si se presenta en papel): ………
— Fecha: ………</p>
  <h2>7. Garantía legal</h2>
  <p>Todos los productos cuentan con la garantía legal de conformidad de <b>3 años</b> desde la entrega. Consulte la página <a href="reembolso.html">Garantía y devoluciones</a>.</p>
  <h2>8. Reclamaciones</h2>
  <p>Puede presentar cualquier reclamación en <a href="mailto:${T.mail}">${T.mail}</a>; responderemos en un plazo máximo de un mes. Dispone además de las hojas de reclamaciones y del sistema arbitral de consumo conforme a la normativa de su comunidad autónoma, y de la plataforma europea de resolución de litigios en línea (<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">ec.europa.eu/consumers/odr</a>).</p>
  <h2>9. Ley aplicable y fuero</h2>
  <p>Ley española. Los consumidores pueden acudir a los juzgados de su domicilio.</p>
`],

'desistir.html': ['Desistir del contrato', `
  <h1>Desistir del contrato aquí</h1>
  <p class="upd">Formulario de desistimiento (TRLGDCU art. 106.3 · Directiva (UE) 2023/2673)</p>
  <p>Si ha recibido su pedido hace menos de <b>14 días naturales</b> y quiere desistir de la compra, rellene este formulario. Recibirá un correo electrónico de acuse de recibo y le indicaremos cómo devolver el producto. No necesita dar ninguna explicación.</p>
  <form id="desForm" class="legal-form" onsubmit="return false">
    <label>Nombre y apellidos <input name="nombre" required></label>
    <label>Correo electrónico <input name="correo" type="email" required></label>
    <label>Teléfono con el que hizo el pedido <input name="telefono" inputmode="numeric" required></label>
    <label>Identificación del pedido (número, o fecha del pedido y producto) <input name="pedido" required></label>
    <label>Fecha en que recibió el producto <input name="fecha_recibido" type="date"></label>
    <label>Comentario (opcional) <textarea name="comentario" rows="3"></textarea></label>
    <p>Por la presente comunico que desisto de mi contrato de venta del bien indicado.</p>
    <button type="submit" class="btn btn--acc" id="desBtn">Confirmar desistimiento</button>
    <p id="desMsg" class="rev-msg"></p>
  </form>
  <p>También puede enviarnos el modelo de formulario por correo electrónico a <a href="mailto:${T.mail}">${T.mail}</a> o a ${T.tel}.</p>
  <script>
  (function(){
    var f=document.getElementById('desForm'), b=document.getElementById('desBtn'), m=document.getElementById('desMsg');
    /* El desistimiento se registra en nuestro sistema (n8n) y dispara el acuse de recibo por correo. */
    var URL='https://n8n-production-8a42.up.railway.app/webhook/desistimiento-es';
    f.addEventListener('submit',function(){
      var d={}; new FormData(f).forEach(function(v,k){ d[k]=String(v).trim(); });
      if(!d.nombre||!d.correo||!d.telefono||!d.pedido){ m.style.color='#e1283c'; m.textContent='Rellena los campos obligatorios.'; return; }
      b.disabled=true; b.textContent='Enviando…';
      fetch(URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.assign(d,{pais:'ES',fecha:new Date().toISOString()}))})
        .then(function(r){ if(!r.ok) throw new Error(r.status); f.querySelectorAll('input,textarea').forEach(function(i){ i.disabled=true; }); b.style.display='none'; m.style.color='#0f7a52'; m.textContent='Hemos recibido su desistimiento. En breve recibirá un correo de acuse de recibo con las instrucciones de devolución.'; })
        .catch(function(){ b.disabled=false; b.textContent='Confirmar desistimiento'; m.style.color='#e1283c'; m.textContent='No se ha podido enviar. Escríbanos a ${T.mail} indicando su pedido.'; });
    });
  })();
  </script>
`],

'reembolso.html': ['Garantía y devoluciones', `
  <h1>Garantía legal y devoluciones</h1>
  <p class="upd">Última actualización: ${T.fecha}</p>
  <h2>1. Garantía legal de conformidad: 3 años</h2>
  <p>Todos los productos son nuevos y cuentan con la <b>garantía legal de conformidad de 3 años</b> desde la entrega (TRLGDCU arts. 114 y 120.1). Se presume que las faltas de conformidad que se manifiesten en los <b>2 años</b> siguientes a la entrega ya existían en ese momento (art. 121.1). La fecha de entrega es la que consta en el albarán o justificante del transportista (art. 123).</p>
  <h2>2. Qué puede exigir</h2>
  <p>Si el producto no es conforme (defecto, no se corresponde con la descripción o no sirve para su uso habitual), usted puede exigir, mediante una simple comunicación, la <b>reparación o la sustitución</b> a su elección, de forma gratuita, incluidos los gastos de envío, y en un plazo razonable (arts. 117 y 118). Si no es posible, resulta desproporcionado, no se realiza en plazo o vuelve a aparecer el defecto, puede exigir la <b>reducción del precio o la resolución del contrato</b> con devolución del importe (arts. 119 a 119 ter). La resolución no procede si la falta de conformidad es de escasa importancia. La acción prescribe a los 5 años desde que se manifieste la falta (art. 124).</p>
  <h2>3. Cómo activar la garantía</h2>
  <p>Escriba a <a href="mailto:${T.mail}">${T.mail}</a> con el número o fecha de su pedido, una descripción del problema y fotografías. Nosotros gestionamos la recogida <b>sin coste para usted</b>. La garantía no cubre el desgaste normal por el uso ni los daños causados por un uso inadecuado.</p>
  <h2>4. Desistimiento (14 días)</h2>
  <p>La garantía legal es independiente del <b>derecho de desistimiento de 14 días naturales</b> que tiene por comprar a distancia, y que puede ejercer desde la página <a href="desistir.html">Desistir del contrato</a> o según lo indicado en las <a href="terminos.html">Condiciones de compra</a>. En el desistimiento, el coste directo de devolver el producto corre por su cuenta; en la garantía, corre por la nuestra.</p>
  <h2>5. Reembolsos</h2>
  <p>Todo reembolso se realiza por transferencia bancaria a la cuenta que usted nos indique, en un plazo máximo de 14 días naturales, sin gastos para usted.</p>
`],

'envio.html': ['Envíos y pago contra reembolso', `
  <h1>Envíos y pago contra reembolso</h1>
  <p class="upd">Última actualización: ${T.fecha}</p>
  <h2>1. Zona de entrega</h2>
  <p>Enviamos a toda la <b>España peninsular</b>. Por ahora <b>no</b> enviamos a Canarias, Baleares, Ceuta ni Melilla; el formulario no admite pedidos con esos códigos postales.</p>
  <h2>2. Plazo y transportistas</h2>
  <p>Los pedidos salen de nuestro almacén logístico en Sevilla y se entregan habitualmente en <b>24 a 48 horas laborables</b> desde la confirmación, mediante MRW, CTT Express o Correos Express. El plazo máximo legal es de 30 días naturales (TRLGDCU art. 66 bis). Recibirá el número de seguimiento por correo electrónico o WhatsApp cuando el paquete salga.</p>
  <h2>3. Gastos de envío</h2>
  <p>El envío es <b>gratuito</b>. El precio que ve en la página es el precio final, con IVA incluido.</p>
  <h2>4. Pago contra reembolso</h2>
  <p>Paga <b>en efectivo al mensajero</b> en el momento de la entrega. No pagamos nada por adelantado y no aplicamos ningún recargo por este medio de pago. Le recomendamos tener preparado el importe exacto.</p>
  <h2>5. Si no está en casa</h2>
  <p>El transportista realiza dos intentos de entrega y puede contactarle por teléfono para acordar un nuevo día. Si el paquete no puede entregarse, se devuelve al almacén y el pedido queda anulado sin coste para usted.</p>
  <h2>6. Confirmación del pedido</h2>
  <p>Antes de preparar el envío le enviaremos un mensaje para confirmar los datos de entrega. Si los datos son incorrectos o no responde, el pedido no se enviará.</p>
`],

'privacidad.html': ['Política de privacidad y cookies', `
  <h1>Política de privacidad</h1>
  <p class="upd">Última actualización: ${T.fecha}</p>
  <h2>1. Responsable del tratamiento</h2>
  <p><b>${T.nombre}</b> (${T.marca}), ${T.nit}, ${T.dir}. Correo: <a href="mailto:${T.mail}">${T.mail}</a>.<br>
  <b>Representante en la Unión Europea</b> (art. 27 RGPD): ${T.repUE}. Puede dirigirse a él para cualquier cuestión relativa a sus datos.</p>
  <h2>2. Datos que tratamos</h2>
  <p>Nombre y apellidos, dirección de entrega, teléfono, correo electrónico y datos del pedido; conversaciones por WhatsApp o correo; y, solo si acepta las cookies, datos de navegación para medición y publicidad.</p>
  <h2>3. Finalidades y bases jurídicas (art. 6 RGPD)</h2>
  <ul>
    <li>Tramitar el pedido, la entrega y el cobro — ejecución del contrato (art. 6.1 b).</li>
    <li>Atender desistimientos, garantías y reclamaciones — contrato y obligación legal (art. 6.1 b y c).</li>
    <li>Obligaciones fiscales y contables — obligación legal (art. 6.1 c).</li>
    <li>Prevenir fraude y pedidos rechazados de forma reiterada — interés legítimo (art. 6.1 f).</li>
    <li>Enviarle ofertas por WhatsApp o correo — su consentimiento (art. 6.1 a) o, si ya es cliente, interés legítimo con derecho de oposición (LSSI art. 21.2).</li>
    <li>Medición y publicidad con el píxel de Meta — consentimiento otorgado en el aviso de cookies (LSSI art. 22.2).</li>
  </ul>
  <h2>4. Destinatarios</h2>
  <p><b>Dropi PRO</b> (Digital Trending Group LLC, Miami, EE. UU.), plataforma logística que almacena en Sevilla y prepara su pedido, como encargada del tratamiento; los transportistas <b>MRW, CTT Express o Correos Express</b>, que reciben sus datos de entrega; <b>Meta Platforms Ireland Ltd.</b>, corresponsable de los datos del píxel si usted lo acepta; y la Administración tributaria cuando la ley lo exija.</p>
  <h2>5. Transferencias internacionales</h2>
  <p>Sus datos los recibe directamente el responsable en Colombia, país que no cuenta con decisión de adecuación de la Comisión Europea. Los flujos de datos desde la Unión Europea hacia Colombia y hacia Estados Unidos se amparan en las cláusulas contractuales tipo de la Comisión Europea (Decisión (UE) 2021/914) y, cuando son necesarios para ejecutar su pedido, en el art. 49.1 b) del RGPD. Puede solicitar copia de estas garantías en <a href="mailto:${T.mail}">${T.mail}</a>.</p>
  <h2>6. Conservación</h2>
  <p>Los datos del pedido se conservan mientras dura la relación y, después, 6 años por obligaciones mercantiles y fiscales. Los datos de marketing, hasta que retire el consentimiento o se oponga. Las cookies, según la política de cookies.</p>
  <h2>7. Sus derechos</h2>
  <p>Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad (arts. 15 a 22 RGPD) escribiendo a <a href="mailto:${T.mail}">${T.mail}</a> o a nuestro representante en la UE, indicando su nombre y, si hay dudas sobre su identidad, copia de un documento identificativo. Responderemos en el plazo de un mes. Puede retirar su consentimiento en cualquier momento sin que ello afecte a los tratamientos anteriores. Si considera que no hemos atendido sus derechos, puede reclamar ante la <b>Agencia Española de Protección de Datos</b>, C/ Jorge Juan 6, 28001 Madrid, <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>.</p>

  <h1 id="cookies" style="margin-top:44px">Política de cookies</h1>
  <p>Una cookie es un pequeño archivo que se guarda en su dispositivo al visitar una web. Este sitio, editado por ${T.marca} (${T.nombre}), usa cookies propias necesarias y cookies de terceros de publicidad y medición, que <b>solo se instalan si usted las acepta</b> en el aviso inicial (LSSI art. 22.2; Guía sobre el uso de las cookies de la AEPD, mayo de 2024).</p>
  <table class="legal-table">
    <thead><tr><th>Cookie</th><th>Titular</th><th>Tipo</th><th>Finalidad</th><th>Duración</th></tr></thead>
    <tbody>
      <tr><td><code>ck_meta</code></td><td>${T.marca} (propia)</td><td>Técnica, necesaria</td><td>Recordar su elección sobre cookies</td><td>6 meses</td></tr>
      <tr><td><code>_cmp</code></td><td>${T.marca} (propia)</td><td>Técnica</td><td>Recordar desde qué anuncio llegó, para atribuir su pedido a la campaña correcta</td><td>Hasta que borre el almacenamiento del navegador</td></tr>
      <tr><td><code>_fbp</code></td><td>Meta Platforms Ireland Ltd. (tercero)</td><td>Publicidad y medición</td><td>Identificar el navegador para medir conversiones y mostrar anuncios en Facebook e Instagram (píxel de Meta)</td><td>3 meses</td></tr>
      <tr><td><code>_fbc</code></td><td>Meta Platforms Ireland Ltd. (tercero)</td><td>Publicidad y medición</td><td>Guardar el identificador del anuncio de Meta desde el que llegó (solo si viene de un anuncio)</td><td>3 meses</td></tr>
    </tbody>
  </table>
  <p>Meta puede transferir estos datos a Estados Unidos al amparo del Marco de Privacidad de Datos UE-EE. UU. Más información: <a href="https://www.facebook.com/privacy/policies/cookies" target="_blank" rel="noopener">política de cookies de Meta</a>.</p>
  <h2>Cómo aceptar, rechazar o revocar</h2>
  <p>En el aviso inicial puede pulsar <b>Aceptar</b> o <b>Rechazar</b> con la misma facilidad. Puede cambiar o retirar su decisión en cualquier momento desde el enlace <b>"Configurar cookies"</b> del pie de la página principal, o borrando las cookies desde su navegador (menú Privacidad de Chrome, Firefox, Safari o Edge). Le volveremos a preguntar como máximo cada 24 meses. Las cookies técnicas no requieren consentimiento.</p>
`],

'contacto.html': ['Contacto', `
  <h1>Contacto</h1>
  <p class="upd">Atendemos en castellano, de lunes a viernes.</p>
  <p><b>${T.marca}</b> · ${T.nombre} · ${T.nit}<br>
  ${T.dir}<br>
  Correo: <a href="mailto:${T.mail}">${T.mail}</a><br>
  WhatsApp / teléfono: ${T.tel}</p>
  <p>Para desistimientos use la página <a href="desistir.html">Desistir del contrato</a>. Para garantías y devoluciones, la página <a href="reembolso.html">Garantía y devoluciones</a>. Respondemos a cualquier reclamación en un plazo máximo de un mes.</p>
  <p>Representante en la Unión Europea (RGPD): ${T.repUE}.</p>
`]
};

for (const [archivo, [titulo, cuerpo]] of Object.entries(paginas)) {
  fs.writeFileSync(archivo, base.replace('{{TITULO}}', titulo).replace('{{CUERPO}}', cuerpo.trim()));
  console.log('escrito', archivo);
}
