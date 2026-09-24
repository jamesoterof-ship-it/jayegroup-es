// Provincias de España a las que SÍ despacha Dropi PRO: las 47 de la península
// MÁS las Islas Baleares. Verificado el 24-09-2026 en el panel del proveedor:
// hay transportadoras "Tipsa - BALEARES" y "CTT 48/72h - BALEARES" (en Baleares
// el plazo es 48-72 h, no 24-48 como en la península).
// NO se incluyen Las Palmas, Santa Cruz de Tenerife, Ceuta ni Melilla: para esas
// zonas NO existe ningún método de envío en el panel (se revisaron los 18).
window.PROVINCIAS_ES = [
  "A Coruña","Álava","Albacete","Alicante","Almería","Asturias","Ávila","Badajoz","Baleares","Barcelona",
  "Burgos","Cáceres","Cádiz","Cantabria","Castellón","Ciudad Real","Córdoba","Cuenca","Girona","Granada",
  "Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","La Rioja","León","Lleida","Lugo","Madrid",
  "Málaga","Murcia","Navarra","Ourense","Palencia","Pontevedra","Salamanca","Segovia","Sevilla","Soria",
  "Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza"
];
// Prefijos de código postal SIN cobertura (se rechazan en el formulario y en el montador).
// 35 = Las Palmas · 38 = Santa Cruz de Tenerife · 51 = Ceuta · 52 = Melilla.
// El 07 (Baleares) se QUITÓ el 24-09: sí tiene envío y estaba bloqueado por error.
window.CP_SIN_COBERTURA = ["35","38","51","52"];
