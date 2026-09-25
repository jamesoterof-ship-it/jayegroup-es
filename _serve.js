/* servidor local solo para revisar la tienda antes de publicar */
const http = require('http'), fs = require('fs'), path = require('path');
const RAIZ = __dirname, PORT = 4755;
const TIPOS = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.webp':'image/webp', '.png':'image/png',
  '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.json':'application/json', '.ico':'image/x-icon',
  '.mp4':'video/mp4', '.webm':'video/webm' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  let f = path.join(RAIZ, p);
  /* 22-09: las direcciones cortas (/guirnalda/, /foco/, /cargador/...) daban
     404 en local y parecia que la pagina estaba tumbada. En GitHub Pages una
     carpeta sirve su index.html sola; aca habia que hacerlo a mano. */
  if (f.startsWith(RAIZ) && fs.existsSync(f) && fs.statSync(f).isDirectory()) {
    const dentro = path.join(f, 'index.html');
    if (fs.existsSync(dentro)) f = dentro;
  }
  if (!f.startsWith(RAIZ) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) {
    res.writeHead(404); return res.end('no existe: ' + p);
  }
  res.writeHead(200, { 'Content-Type': TIPOS[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(PORT, () => console.log('tienda en http://localhost:' + PORT));
