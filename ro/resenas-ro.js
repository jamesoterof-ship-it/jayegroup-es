/* ============================================================
   PĂRERI DESPRE PRODUS · Spray reparator de zgârieturi (24-10-2026)

   🔴 NO son opiniones nuevas ni inventadas: son las MISMAS 54 opiniones
   reales del spray que usan España (../resenas.js) y Portugal, traducidas al
   rumano. Los NOMBRES se quedan los originales de España (no se inventan
   nombres rumanos), igual que la fecha, las estrellas y las fotos.

   `producto` = el nombre de la ficha (ro/produse.js): ficha.js empareja las
   opiniones por ese nombre. Sin esto no se pintaria ninguna.
   ============================================================ */
(function () {
  var P = 'Spray reparator de zgârieturi';
  var L = [
    ['Raúl M.', 5, '2026-03-19', '', 'Sprayul acesta de protecție pentru mașini este incredibil! Doar pulverizați și ștergeți, iar vopseaua strălucește pe loc și arată ca nouă. Efectul hidrofob este excepțional: apa de ploaie se adună în picături și alunecă.'],
    ['Elena G.', 5, '2026-02-27', 'res-aranazos-1', 'Efectul hidrofob după aplicare este incredibil: apa de ploaie se adună și alunecă precum pe o frunză de lotus. Stratul protector nu doar adaugă luciu, ci și împiedică murdăria să se prindă de vopsea.'],
    ['Camilo R.', 5, '2026-05-08', '', 'Se pulverizează uniform, luciul este destul de intens și economisește mult timp și efort. Arată ca efectul unui tratament ceramic profesional.'],
    ['Sergio P.', 5, '2025-12-15', 'res-aranazos-2', 'Zgârieturile mici și vopseaua mată ale mașinii se repară direct cu sprayul și o lavetă, iar luciul apare pe loc.'],
    ['Andrea V.', 5, '2026-05-18', '', 'Efectul asupra vopselei este foarte vizibil: zgârieturile mici din vopseaua originală se umplu și luciul se îmbunătățește mult.'],
    ['Laura S.', 5, '2026-07-11', 'res-aranazos-4', 'Vopseaua arăta vizibil mai strălucitoare după ce am folosit sprayul! Finisajul mat al mașinii mele a arătat din nou ca proaspăt spălat. Doar pulverizați și ștergeți: foarte ușor și surprinzător de eficient!'],
    ['Miguel Á. T.', 5, '2026-03-10', '', 'Spray de protecție foarte bun. Ușor de folosit. A redat mașinii mele luciul de nouă!'],
    ['Cristina B.', 5, '2026-03-05', '', 'Livrare super rapidă, servicii excelente. Sprayul înviorează vopseaua, lăsând-o fină și strălucitoare. Foarte mulțumită!'],
    ['Julián O.', 5, '2026-05-06', '', 'Foarte mulțumit. După ce l-am folosit pe mașina mea mai veche, părea proaspăt vopsită: luciul s-a îmbunătățit mult, iar urmele fine de zgârieturi s-au estompat destul de mult.'],
    ['David L.', 5, '2025-12-27', '', 'Foarte ușor de folosit, vopseaua mașinii arată vizibil mai strălucitoare, mai bine decât mă așteptam!'],
    ['Nuria F.', 5, '2026-06-01', '', 'După ce se formează stratul de protecție, efectul hidrofob este evident: apa de ploaie se adună în picături și alunecă, praful nu se mai depune ușor, iar curățarea devine mai simplă.'],
    ['Pablo C.', 5, '2026-09-05', '', 'Foarte ușor de aplicat și nu e nevoie de unelte speciale. După folosire, mașina arată mai curată și luciul este vizibil mai bun.'],
    ['Teresa M.', 5, '2026-01-19', '', 'Bun! Aspectul general s-a îmbunătățit mult. A redus eficient zgârieturile mici din vopsea.'],
    ['Diana C.', 5, '2026-08-04', '', 'Sprayul funcționează de minune. Luciul arată natural, nu gras.'],
    ['Fernando R.', 5, '2026-06-09', 'res-aranazos-3', 'Efectul de luciu este fantastic. Vopseaua, care era mată, și-a recăpătat un finisaj strălucitor ca o oglindă.'],
    ['Beatriz A.', 5, '2026-03-23', '', 'L-am aplicat pe mașină și îi dă mai mult luciu, îl recomand.'],
    ['Alberto S.', 5, '2026-01-14', '', 'Noroc că am cumpărat 3 bucăți, altfel nu mi-ar fi ajuns. După aplicare, mașina arăta ca nouă și vopseaua a devenit mai strălucitoare.'],
    ['Marina P.', 5, '2026-01-29', '', 'Efectul acestui spray este incredibil! Vopseaua mașinii mele mai vechi era mată și fără luciu, dar după folosire parcă i s-a pus un strat nou de lac. Luciul și strălucirea s-au îmbunătățit mult și este foarte ușor de folosit.'],
    ['Óscar D.', 5, '2026-04-02', '', 'Calitate incredibilă! Luciul vopselei este ca o oglindă. Livrare foarte rapidă și ambalaj sigur. Aplicarea și ștergerea sunt fantastic de ușoare.'],
    ['Silvia R.', 5, '2026-01-12', '', 'Incredibil! Vopseaua mașinii se îngălbenise și devenise mată din cauza soarelui, dar a rămas strălucitoare imediat după ce am tratat-o cu acest produs, ca o mașină proaspăt vopsită!'],
    ['Esteban M.', 5, '2026-07-07', '', 'Impresionant! Vopseaua mașinii se înviorează imediat după ce aplicați sprayul, urmele fine în cerc dispar, iar mașina capătă un luciu de oglindă imediat după lustruire.'],
    ['Rocío L.', 5, '2026-01-13', '', 'Spray excelent. O salvare pentru vopseaua mată a mașinii! După aplicare, luciul se dublează pe loc!'],
    ['Jorge V.', 5, '2026-03-02', '', 'Am urmat pașii de utilizare. Luciul mașinii s-a refăcut și aspectul ei s-a îmbunătățit mult.'],
    ['Natalia G.', 5, '2026-07-13', '', 'Recomand! Rezultatul a fost mai bun decât mă așteptam. O trecere rapidă i-a dat vopselei un luciu excelent.'],
    ['Ignacio F.', 5, '2025-12-08', '', 'A împrospătat vopseaua mașinii, cu un finisaj foarte strălucitor.'],
    ['Paula H.', 5, '2026-01-27', '', 'Sprayul este excelent și de calitate. Acoperă și protejează vopseaua mașinii care s-a învechit și și-a pierdut culoarea.'],
    ['Ricardo B.', 5, '2026-01-22', '', 'După pulverizare, luciul se îmbunătățește mult și toată caroseria pare reînnoită.'],
    ['Lorena C.', 5, '2025-12-01', '', 'Luciu mult mai bun și o senzație premium. Îl recomand cu căldură.'],
    ['Víctor A.', 5, '2026-07-14', '', 'Sprayul funcționează foarte bine; scoate în evidență luciul vopselei mașinii.'],
    ['Inés M.', 5, '2026-06-08', '', 'Stratul lasă un finisaj natural, fără luciu gras, și arată elegant tot timpul.'],
    ['Gonzalo T.', 5, '2026-01-20', '', 'Efectul de strălucire după aplicare este foarte evident. Suprafața mașinii devine netedă și reflectă foarte bine. Rezultatul este mulțumitor.'],
    ['Mercedes R.', 5, '2026-04-20', '', 'Ușor de folosit, cu un finisaj strălucitor. Înviorează perfect vopseaua.'],
    ['Felipe O.', 5, '2026-08-04', '', 'Super. După aplicare, vopseaua arăta mult mai strălucitoare, aproape ca nouă.'],
    ['Sonia J.', 5, '2026-03-11', '', 'Vopseaua mată și învechită a mașinii se reînnoiește pe loc, cu un luciu intens și o textură fină, și îi redă strălucirea unei mașini noi!'],
    ['Héctor G.', 5, '2026-01-11', '', 'Mi-a ajuns la timp și bine ambalat, iar rezultatul produsului este minunat. Îl recomand 100%, pentru că protejează foarte bine vopseaua mașinii de praf și nu numai.'],
    ['Montse P.', 4, '2025-12-14', '', 'Foarte bine, dar trebuie aplicat în fiecare săptămână ca să păstrezi luciul.'],
    ['Alfonso R.', 5, '2026-01-26', '', 'Produsul este super, dă un luciu bun, iar pentru preț este foarte bine.'],
    ['Eva N.', 5, '2026-01-19', '', 'L-am încercat pe o parte a mașinii și funcționează perfect 🤓'],
    ['Ramón D.', 5, '2026-02-17', '', 'L-am încercat pe o parte a mașinii și rămâne foarte strălucitoare.'],
    ['Gloria S.', 5, '2026-03-02', '', 'Flaconul de 120 ml are cantitate suficientă și calitate bună, ajunge pentru toată mașina. După aplicare, vopseaua arată lucioasă și respinge vizibil apa.'],
    ['Adrián C.', 5, '2026-07-13', '', 'L-am folosit imediat după ce am spălat mașina și a fost rapid și simplu. Cantitatea pulverizată a fost potrivită și nu s-a scurs nicăieri. Vopseaua a rămas curată și strălucitoare, iar rezultatul general mă mulțumește foarte mult!'],
    ['Yolanda B.', 5, '2026-04-13', '', 'Experiență de cumpărare excelentă, produs de calitate, livrare rapidă și servicii atente. Efectul de luciu pe vopseaua mașinii este impresionant, cu un finisaj uniform și natural.'],
    ['Rubén E.', 5, '2025-12-18', '', 'Ascunde ușor zgârieturile mici. Vopseaua se reînnoiește și efectul depășește așteptările!'],
    ['Amparo L.', 5, '2026-04-20', '', 'Practic și ușor de luat cu tine, bun pentru îngrijirea zilnică a vopselei, cu un efect de strălucire evident.'],
    ['Mario F.', 5, '2025-12-30', '', 'Funcționează de minune. Curăță și luciul apare imediat. Este foarte ușor de folosit.'],
    ['Clara V.', 5, '2026-03-07', '', 'A refăcut eficient vopseaua uzată și a mărit luciul caroseriei.'],
    ['Joaquín H.', 5, '2026-04-20', '', 'Ușor de folosit, înviorează și netezește vopseaua, efect foarte bun.'],
    ['Noelia T.', 5, '2026-03-05', '', 'Efectul de strălucire este incredibil! Vopseaua este lucioasă și fină la atingere, iar aspectul mașinii se îmbunătățește mult.'],
    ['Rodrigo Q.', 5, '2026-08-04', '', 'Efect impecabil. Vopseaua se simte cu adevărat fină după aplicare.'],
    ['Marisol A.', 5, '2026-08-04', '', 'Mașina mea arată mult mai nouă după ce l-am folosit. Sunt destul de mulțumită!'],
    ['Tomás G.', 5, '2026-07-14', '', 'Super. Nu mi-a luat mult să termin toată mașina, iar raportul calitate-preț este foarte bun!'],
    ['Celia M.', 5, '2025-12-10', '', 'Acoperă repede zgârieturile fine, cu un luciu de oglindă.'],
    ['Emilio S.', 5, '2026-07-28', '', 'Ușor de aplicat, iar vopseaua arată mult mai strălucitoare. Un rezultat excelent!'],
    ['Irene P.', 5, '2025-12-02', '', 'Super! O reparație vizibilă și un luciu care reînnoiește suprafața vopselei.'],
  ];
  /* ============================================================
     25-10 · los demas productos de la tienda (James: "los mismos productos de
     España"). Igual que el spray: las opiniones REALES de cada producto que usa
     España (../resenas.js), traducidas al rumano, con su nombre, fecha, estrellas y
     foto originales. No se inventa ninguna. ficha.js las empareja por el nombre
     EXACTO del producto en ro/produse.js y pide minimo 8.
     Se traducen las primeras de cada producto (las que tienen foto, primero); se
     dejan fuera las que nombran otra tienda o marca (AliExpress, Kiko, Kärcher) o
     un pais concreto (México).
     ============================================================ */
  var OTRAS = {
    'Balsam cu colagen VITALIS': [
      ['Carmen A.', 5, '2025-12-24', 'rev/r04', 'Exact cum este descris, produsul corect și în stare bună, lasă o senzație plăcută pe piele și nu are miros neplăcut. Este al treilea pe care îl cumpăr, a ajuns super repede.'],
      ['Javier H.', 5, '2026-02-17', 'rev/r07', 'Este a doua oară când îl cumpăr, a ajuns foarte repede și îmi place mult cum lasă pielea. Îl recomand atât bărbaților, cât și femeilor, merge foarte bine.'],
      ['Lucía P.', 5, '2025-12-12', 'rev/r09', 'Balsam excelent, îl recomand, mulțumesc mult vânzătorului.'],
      ['Antonio C.', 5, '2025-10-04', 'rev/r10', 'Super hidratant acest balsam. Este al doilea pe care îl cumpăr.'],
      ['Pilar J.', 5, '2025-12-09', 'rev/r17', 'Produs excelent, îl recomand, a ajuns în timpul estimat, mulțumesc mult vânzătorului 😀'],
      ['Manuel S.', 5, '2025-10-09', 'rev/r24', 'Hidratant bun, preț excelent, recomandat.'],
      ['Rosa E.', 5, '2026-02-08', 'rev/r33', 'L-am mai comandat, este foarte bun, hidratează mult.'],
      ['Francisco M.', 5, '2025-10-07', 'rev/r35', 'Mulțumesc, a ajuns repede. Este al doilea pe care îl comand, mi-a plăcut mult.'],
      ['Isabel V.', 5, '2025-11-10', 'rev/r37', 'Încă nu l-am încercat, dar ambalajul este foarte frumos și are un miros fin și plăcut 💖'],
      ['José G.', 5, '2026-04-24', 'rev/r38', 'Este a doua oară când le cumpăr, îmi plac mult.'],
      ['Marta O.', 5, '2026-06-02', 'rev/r40', 'Excelent și foarte eficient.'],
      ['Andrés B.', 5, '2025-11-20', '', 'A treia oară când comand, simt că nu mai pot trăi fără el. Este super cremos și hidratant, chiar îl recomand. Am tenul mixt și foarte delicat și nu mi-a provocat nicio iritație sau alergie.'],
      ['Elena I.', 5, '2025-11-02', '', 'Balsam în stick foarte bun! Ambalajul este frumos și bine gândit, cam cu 50% mai mare decât un ruj obișnuit. Lasă un efect frumos de piele luminoasă și se simte plăcut pe piele. Ingredientele sunt bune, poate nu extraordinare, dar mai mult decât potrivite. În general, un produs excelent pentru preț, perfect de ținut în geantă pentru retușuri rapide.'],
      ['David R.', 5, '2026-05-28', '', 'Destul de bun. Nu pot spune încă dacă își face treaba, pentru că îl folosesc de puțin timp, dar textura este bună și ușoară. Nu este ca alte creme în stick care se simt uscate sau grele pe piele: după ce îl aplici și masezi fața, dispare ușor, fără senzație de greutate. Foarte ușor de folosit, deși are puțin produs. L-aș cumpăra din nou.'],
      ['Laura D.', 5, '2025-12-23', '', 'Îmi place mult, este a treia oară când îl cumpăr. Foarte hidratant pentru față, gât și decolteu. Îl folosesc seara, după curățarea feței. Dimineața, pielea arată suplă și odihnită.'],
      ['Miguel F.', 5, '2025-11-10', '', 'Îl recomand din tot sufletul, îmi place mult: ca hidratant pe față, pe cearcăne, ca bază de machiaj, ca balsam de buze. Pe primul pe care l-am cumpărat aproape că l-am terminat, așa că am mai comandat două, pentru că îmi place pentru orice!'],
      ['Ana N.', 5, '2026-07-12', '', 'Te lasă strălucind ca soarele, dar îmi place, un efect luminos. Iarna mi se usucă prea tare pielea și îl folosesc ca să sigilez crema hidratantă și să pregătesc pielea pentru machiaj. Îl recomand pentru că se aplică ușor, merge pe toată fața, chiar și pe buze, și miroase frumos.'],
      ['Raquel C.', 4, '2025-10-01', '', 'Îmi place să îmi hidratez și să îmi dau strălucire tenului cu el; lasă o senzație fină și luminoasă pe piele. Îl voi cumpăra din nou. A ajuns în ziua stabilită.'],
      ['Luis J.', 5, '2025-10-29', '', 'Mi-a plăcut mult, este foarte hidratant, voi mai comanda unul. Livrarea a fost super rapidă. Este de bună calitate, îl recomand.'],
      ['Beatriz S.', 5, '2026-07-05', '', 'Le ador, le cumpăr mereu, îmi plac pentru hidratare. Le recomand foarte mult.'],
      ['Sergio E.', 5, '2025-12-11', '', 'Ador acest produs! L-am cumpărat de mai multe ori pentru că îmi place mult, super recomandat.'],
      ['Diego V.', 5, '2026-03-13', '', 'Ambalajul este superb și produsul este grozav. Nu este greu și nu încălzește pielea, așa că este perfect primăvara și vara: hidratează și lasă un finisaj ușor.'],
    ],
    'Etanșant impermeabil în aerosol': [
      ['Carmen R.', 5, '2025-10-07', 'res-sellador-1', 'Produs ușor de folosit și se usucă foarte repede. Se pare că își face treaba: oprește și respinge apa în zonele pe unde intra înainte.'],
      ['Francisco J.', 4, '2026-02-18', 'res-sellador-2', 'Produs impermeabil pentru orice tip de suprafață solidă. Se aplică foarte ușor.'],
      ['Isabel D.', 5, '2025-10-10', 'res-sellador-3', 'Face ce promite: un strat izolant prin care apa nu trece.'],
      ['Javier M.', 5, '2026-02-12', '', 'Exact ce căutam, funcționează foarte bine și este complet impermeabil.'],
      ['Lucía G.', 5, '2026-03-10', '', 'Este a patra oară când îl cumpăr, chiar funcționează.'],
      ['Antonio P.', 5, '2026-02-19', '', 'Bun, îl recomand.'],
      ['Pilar S.', 5, '2026-01-20', '', 'Sincer, l-am încercat, dar nu pot spune mare lucru până nu vezi dacă își face efectul. Acum vin iar ploile, vom vedea cum se comportă.'],
      ['Manuel F.', 5, '2026-02-09', '', 'Nu știu încă dacă merge, cu ploile de acum nu l-am putut folosi, pentru că totul este umed. Când se usucă, îl încerc și revin cu o părere despre cum funcționează.'],
      ['Rosa L.', 5, '2025-12-21', '', 'Calitate pe care o recomand.'],
      ['Alejandro H.', 5, '2026-05-10', '', 'Este o cumpărare pe care o repet. Este unul dintre cele mai bune produse de etanșare pe care le-am folosit în cei 50 de ani în construcții.'],
      ['José Luis C.', 5, '2026-03-10', '', 'Este a doua oară când îl cumpăr și funcționează.'],
      ['Patricio O.', 5, '2026-04-10', '', 'Excelent, îl încercăm azi la rostul ferestrelor.'],
      ['Marta V.', 4, '2026-04-27', '', 'Produsul funcționează destul de bine.'],
      ['Andrés N.', 5, '2025-12-22', '', 'La prima vedere totul e bine, acum rămâne de văzut cum funcționează.'],
    ],
    'Brățară magnetică antifumat': [
      ['Daniel M.', 5, '2026-03-25', 'res-pulsera-1', 'Brățara arată grozav și calitatea mărgelelor este surprinzător de bună. Se simte comodă la încheietură, iar elasticul pare rezistent. O recomand cu căldură!'],
      ['Rodrigo A.', 5, '2025-10-28', 'res-pulsera-2', 'Design și materiale excelente, finisaje bune, se potrivește bine.'],
      ['Nicolás D.', 5, '2025-10-31', 'res-pulsera-3', 'Mi-a plăcut, foarte frumoasă brățara.'],
      ['Víctor R.', 5, '2026-01-06', 'res-pulsera-4', 'Calitate foarte bună, o recomand 100%.'],
      ['Andrés A.', 5, '2026-01-22', 'res-pulsera-5', 'Brățară frumoasă și de calitate bună pentru preț.'],
      ['Pedro H.', 5, '2026-06-09', 'res-pulsera-6', 'Mărgele frumoase, are elastic, puțin mai mică ca mărime.'],
      ['Bruno C.', 4, '2026-08-01', '', 'Brățara este frumoasă, mai mică decât pare, dar mărimea este bună.'],
      ['Karina V.', 5, '2026-06-11', '', 'Produsul corespunde descrierii. Calitatea este destul de bună. O recomand.'],
      ['Mario G.', 5, '2025-12-13', '', 'Produs bun, exact ca cel din imaginea anunțului.'],
      ['Jorge C.', 5, '2026-04-01', '', 'Am primit brățara, totul este exact ca în fotografie.'],
      ['Elena P.', 5, '2025-10-20', '', 'Pietrele sunt naturale. Se potrivește pe o mână subțire de femeie.'],
      ['Martín Z.', 5, '2025-10-15', '', 'Material excelent și a ajuns super repede.'],
      ['Felipe S.', 5, '2026-02-26', '', 'Este o brățară exact ca în imagine, am mai cumpărat-o de câteva ori.'],
      ['Camilo Z.', 5, '2025-10-24', '', 'Material bun, simplă.'],
      ['Javiera N.', 5, '2026-01-28', '', 'Foarte frumoasă, material bun și nu strânge la încheietură.'],
      ['Lucía O.', 5, '2025-10-27', '', 'Mi-a plăcut enorm, de foarte bună calitate, mărimea perfectă.'],
      ['Alejandro R.', 5, '2026-07-11', '', 'Calitate bună și este exact ca în imagini 👍'],
      ['Diego T.', 5, '2026-02-02', '', 'Material bun și design bun.'],
      ['Luis H.', 4, '2026-04-06', '', 'Calitate excelentă, foarte frumoasă.'],
      ['Ricardo V.', 4, '2026-09-16', '', 'Produs bun, deși a durat ceva mai mult decât mă așteptam să ajungă. Mulțumesc.'],
      ['Larissa M.', 5, '2026-03-24', '', 'Brățară foarte frumoasă. Se potrivește bine cu celelalte pe care le am. O recomand.'],
    ],
    /* 25-10 James ("busca las reseñas donde sea"): la PISTOLA DE AGUA para manguera (Dropi RO 56) no tiene
       reseñas propias. Son RESEÑAS REALES de compradores de AliExpress de ESTA MISMA lanza (azul, palanca, punta
       de latón, caja "Water Jet"): publicaciones 1005012649949916, 1005009998627145 y 1005005997695686, leídas el
       25-10 de su API de opiniones. Nombre, estrellas y fecha tal cual (AliExpress tapa los nombres con ***);
       el texto pasado al rumano; el nombre lleva "(AliExpress)" para que se vea de dónde salen. Van también las
       de 3 y 4 estrellas. Fuera solo las que hablaban del vendedor de AliExpress, de precios en dólares o sin
       sentido. Las 4 fotos son de esos compradores (img/res-pistol-apa-ro-*.webp). */
    'Pistol de apă cu presiune pentru furtun': [
      ['M***y (AliExpress)', 5, '2025-12-18', '', 'Calitate excepțională, recomand cu toată încrederea, foarte mulțumit, livrare rapidă!'],
      ['Anonim (AliExpress)', 5, '2026-03-16', '', 'Ambalajul a ajuns destul de lovit, dar produsul a ajuns bine. Funcționează bine, dar nu e ca o mașină de spălat cu presiune.'],
      ['Anonim (AliExpress)', 5, '2026-02-13', '', 'Îmbunătățește jetul de apă, foarte practic, perfect pentru udatul grădinii.'],
      ['Anonim (AliExpress)', 5, '2026-05-25', 'res-pistol-apa-ro-1', 'Livrare rapidă. Funcționează exact cum este descris. Este al treilea pe care îl cumpăr.'],
      ['6***r (AliExpress)', 4, '2025-11-03', '', 'Materialele par de calitate bună; singurul lucru e că nu are capătul care reglează lățimea jetului.'],
      ['Anonim (AliExpress)', 5, '2026-04-28', '', 'Cum mă așteptam, produsul e corect și funcționează bine. 👍'],
      ['a***r (AliExpress)', 5, '2026-03-17', '', 'Produs și preț excelente.'],
      ['M***y (AliExpress)', 5, '2026-07-09', '', 'Livrare rapidă, bine ambalat.'],
      ['Anonim (AliExpress)', 5, '2026-08-04', '', 'Totul în regulă, mulțumesc.'],
      ['M***y (AliExpress)', 5, '2026-08-05', '', 'Calitate superioară! Recomand!'],
      ['Anonim (AliExpress)', 5, '2025-11-11', '', 'Îmi place mult acest pulverizator.'],
      ['m***n (AliExpress)', 5, '2026-01-03', '', 'Nu înlocuiește un aparat Granik, dar este excelent.'],
      ['Anonim (AliExpress)', 5, '2026-06-09', '', 'Totul bine, totul corect.'],
      ['Anonim (AliExpress)', 5, '2026-08-14', '', 'Funcționează de minune.'],
      ['w***a (AliExpress)', 5, '2026-05-09', 'res-pistol-apa-ro-2', 'Produsul este exact cum e descris, îmi place mult. Livrarea a fost foarte rapidă, a ajuns în aproximativ o săptămână. Merită lăudat pentru calitate.'],
      ['M***y (AliExpress)', 5, '2026-10-02', '', 'Calitate bună la un preț accesibil.'],
      ['M***y (AliExpress)', 5, '2026-10-19', '', 'Mulțumit de cumpărătură. 😊'],
      ['Anonim (AliExpress)', 4, '2026-03-14', '', 'E mai bun decât credeam. Jetul de apă iese subțire și uniform.'],
      ['Anonim (AliExpress)', 5, '2026-08-11', '', 'Un înlocuitor excelent pentru cel care mi-a fost furat. Mulțumesc.'],
      ['R***a (AliExpress)', 5, '2026-01-03', '', 'Pare de calitate bună, în curând îl încercăm.'],
      ['a***r (AliExpress)', 4, '2025-11-16', '', 'Totul bine, comanda a ajuns la timp și produsul este eficient.'],
      ['Anonim (AliExpress)', 3, '2026-05-09', '', 'E bun de folosit. Presiunea apei e mică pentru că alimentarea cu apă e slabă, dar spălatul mașinii merge fără probleme. Livrare rapidă.'],
      ['Anonim (AliExpress)', 4, '2026-08-12', '', 'A ajuns în siguranță. Sper ca garniturile din mijloc să țină mult timp fără probleme.'],
      ['s***m (AliExpress)', 3, '2026-04-30', '', 'Nu este atât de rezistent cum e descris, iar legătura cu furtunul pierde apă.'],
      ['Anonim (AliExpress)', 4, '2026-05-18', '', 'Presiunea depinde de apa care vine direct de la robinet. Mai bine nu vă așteptați la presiunea din reclamă.'],
      ['Anonim (AliExpress)', 5, '2026-10-15', '', 'Vecinul meu a fost atât de impresionat când i l-am împrumutat, încât m-a rugat să-i comand și lui unul. Acum curăță tot ce prinde.'],
      ['R***s (AliExpress)', 5, '2026-04-14', 'res-pistol-apa-ro-3', 'Este al doilea pe care îl cumpăr. Raport calitate-preț bun.'],
      ['a***r (AliExpress)', 5, '2026-05-11', '', 'Chiar îl recomand: cu duza crește presiunea apei, funcționează.'],
      ['V***A (AliExpress)', 5, '2026-03-18', '', 'Totul bine, mulțumesc mult.'],
      ['H***i (AliExpress)', 5, '2026-10-08', '', 'Un produs minunat, dar sper să întărească îmbinările.'],
      ['Anonim (AliExpress)', 4, '2026-04-29', 'res-pistol-apa-ro-4', 'Totul conform descrierii, raport calitate-preț acceptabil.'],
      ['Anonim (AliExpress)', 4, '2026-05-29', '', 'Nu se potrivește la furtunul meu.'],
      ['Anonim (AliExpress)', 3, '2026-06-25', '', 'Nu e rău deloc; nu e un Karcher, dar pentru treburi mici e bun.'],
      ['G***n (AliExpress)', 3, '2026-06-06', '', 'Nu crește cu adevărat debitul, doar îl concentrează.'],
    ],
    /* 25-10: son de la pistola 48 V de España, que en Rumania NO se vende. Rumania vende la
       pistola de agua para manguera (otro producto): el nombre empieza distinto a proposito
       para que ficha.js (empareja por la primera palabra) no se las ponga. */
    'Mașină 48 V din Spania (nu se vinde în RO)': [
      ['Enrique Grimaldi', 5, '2026-06-19', 'res-pistola-8', 'Este o mașină de spălat cu presiune foarte practică, fiind complet portabilă: o poți conecta la o sticlă sau poți umple o găleată cu apă, pui filtrul și o folosești. Sigur aș cumpăra-o din nou.'],
      ['Karen B.', 5, '2024-08-19', 'res-pistola-9', 'Mi-a plăcut, bateria ține destul de mult în funcționare continuă. Nu cântărește mult, așa că nu obosești folosind-o, iar duzele permit ca apa să iasă în evantai sau în jet.'],
      ['Omar Gutiérrez', 5, '2024-08-10', 'res-pistola-10', 'Mi-a plăcut mult produsul, este o opțiune excelentă când nu ai conexiuni aproape. Este destul de puternic, bateria ține mult și materialele sunt foarte rezistente. O cumpărătură excelentă.'],
      ['Edgar', 5, '2026-07-22', 'res-pistola-11', 'Pare făcut dintr-un material bun și vine foarte complet. Îmi place că are valiza lui, ca să îl transporți mai comod.'],
      ['Jorge Muñoz', 5, '2026-07-25', 'res-pistola-12', 'A funcționat foarte bine, iese cu presiune bună. Îl voiam pentru a spăla mașinile familiei și cu o baterie am spălat două. Partea bună este că vine cu două baterii.'],
      ['Alberto', 5, '2026-07-31', 'res-pistola-1', 'După mai bine de o săptămână de probe, dă rezultate foarte bune pentru unul pe baterie și pentru o curățare rapidă și practică. Vine cu două baterii de 48 V, lance, rezervor de săpun, încărcător și un furtun de vreo 5 metri.'],
      ['Irene', 5, '2026-08-07', 'res-pistola-3', 'Îl folosesc mai ales pentru terasa de pe acoperișul casei și îmi este foarte util. Fiindcă are două baterii, poți lucra în continuare cât se încarcă cealaltă. Fără cablu, este foarte comod de mutat.'],
      ['Miguel', 5, '2026-08-04', 'res-pistola-4', 'L-am cumpărat pentru că l-am văzut la un prieten și mi l-a recomandat. Sunt foarte mulțumit, funcționează bine și vine cu două baterii. L-am folosit la spălatul mașinii și merge de minune.'],
      ['Rocío Alfonso', 5, '2026-10-07', '', 'Are un design compact, ergonomic și fără fir, ceea ce îl face foarte ușor de manevrat la curățenie. Bateria dublă reîncărcabilă îi dă mai multă autonomie și permite lucrul fără priză.'],
      ['Juan Carlos Medina Garfias', 5, '2026-10-07', '', 'O cumpărătură excelentă, mi-a plăcut enorm, super funcțional. Faptul că este fără fir îmi permite să îl folosesc oriunde, se montează foarte ușor, are putere și bătaie mare.'],
      ['Henrique Cesar', 5, '2026-09-27', '', 'Este ușor de folosit și are putere bună pentru curățenie. Mi-a plăcut că include mai multe accesorii, iar pistolul de spumă este foarte practic.'],
      ['Fabiola', 5, '2026-10-01', '', 'Mi-a plăcut pentru că are mai multe duze într-una singură: schimbi doar forma jetului și gata. Îl recomand mult, nu ocupă mult loc și vine cu accesoriile lui.'],
      ['Cristián', 5, '2026-09-30', '', 'Îmi place designul, materialele sunt rezistente și este foarte ușor de folosit. Include un recipient de spumă și mai multe tipuri de jet pentru o spălare mai bună. Vine într-o valiză rigidă practică.'],
      ['Jose Luis Vazquez Zepeda', 5, '2026-10-04', '', 'Se vede de la început că este făcut din plastic bun, gros și rezistent, la fel ca pistolul și toate accesoriile. Se montează foarte simplu și se pun ușor accesoriile pentru a spăla diferite lucruri.'],
      ['Jose Noguera', 5, '2026-09-23', '', 'L-am luat ca să îmi spăl dubița. Mă deranja să tot conectez furtunuri din cauza distanței de la robinet până unde o parchez, iar cu acesta am uitat de asta.'],
      ['Alejandro Ponce', 5, '2026-09-24', '', 'Am cumpărat această mașină de spălat fără fir și sincer mi-a schimbat complet felul în care îmi spăl mașina.'],
      ['Efren Rojas', 4, '2026-08-13', '', 'M-a surprins presiunea bună a apei: dacă pui mâna în jet, doare. Foarte util pentru prețul plătit.'],
      ['Aide B.', 5, '2026-07-16', '', 'Mi-a plăcut mult produsul: face spumă și are putere, culoarea și materialul sunt foarte bune. Vine cu tot ce trebuie ca să îl folosești.'],
      ['Miguel U.', 5, '2026-06-24', '', 'Mi-a plăcut cât de practic este, are presiune bună la jetul de apă. Bateria mi-a ajuns pentru 3 spălări.'],
      ['Fernando Ibarra', 5, '2026-09-23', '', 'Îl folosesc pentru mașină, curte și mobilierul de afară. Este compact, fără fir și ușor de pus la loc în valiză după ce termin.'],
      ['Octavio Atondo', 5, '2026-08-10', '', 'A funcționat cum trebuie: l-am folosit la spălatul mașinii și a mers bine, fără probleme. A fost ușor de montat și de folosit de la început, fără să citesc manualul. Produs bun.'],
    ],
    'Ochelari multifocali cu filtru albastru': [
      ['Mercedes I.', 5, '2026-04-18', 'res-gafas-1', 'Sunt ușori și bifocali, mi-au plăcut enorm.'],
      ['Susana T.', 5, '2026-06-05', 'res-gafas-2', 'Mulțumesc, sunt bifocali, perfecți, comozi și ușori.'],
      ['Esperanza S.', 5, '2026-03-29', 'res-gafas-3', 'Foarte practici, de calitate bună, identici cu fotografiile din anunț.'],
      ['Josefa J.', 5, '2025-10-24', 'res-gafas-4', 'Ochelari buni, cu dublă mărire: se vede diferența când privești prin partea de sus și prin cea de jos. E bine, partea bifocală funcționează bine.'],
      ['Germán T.', 5, '2025-10-18', 'res-gafas-5', 'Mi-a plăcut mult produsul, este exact ca în fotografie, a ajuns la timp, îl recomand mult, exact ce aveam nevoie.'],
      ['Amparo F.', 5, '2025-12-27', 'res-gafas-6', 'Articol excelent, de foarte bună calitate, destul de practic pentru citit, cu un design foarte bun și destul de ușor.'],
      ['Manuel C.', 5, '2026-01-07', 'res-gafas-7', 'Foarte bine, produse ușoare și rezistente, este a treia oară când cumpăr, ca să împart cu alții.'],
      ['Isabel C.', 5, '2026-05-29', 'res-gafas-8', 'Stau bine, sunt ușori și mi-au plăcut mult.'],
      ['Enrique T.', 5, '2026-06-17', 'res-gafas-9', 'Foarte frumoși... excelenți!'],
      ['Rocío G.', 4, '2026-04-21', 'res-gafas-10', 'I-am primit, mulțumesc. Sunt foarte ușori.'],
      ['Gloria G.', 5, '2026-04-06', '', '🥰 Îi mai comandasem și sunt foarte buni 🤓 De data asta am comandat 2 perechi (în caz că îi pierd), ca să am acasă, în mașină și la serviciu. Vânzător de încredere. Bine ambalați.😍👍'],
      ['Gonzalo N.', 5, '2026-04-06', '', 'Îmi merg perfect pentru citit și pentru privit departe.'],
      ['Celia J.', 5, '2026-08-11', '', 'Mi-au plăcut mult și au ajuns repede.'],
      ['Marta H.', 5, '2025-12-20', '', 'O pereche de ochelari de citit destul de funcționali, foarte exacți, și mă ajută mult cu lumina. Îi recomand cu căldură.'],
      ['Francisco H.', 5, '2025-11-25', '', 'Acești ochelari mi-au plăcut mult pentru că îi poți ține la ochi: privind în jos măresc, iar privind înainte pot să mă uit în continuare la televizor.'],
      ['Montserrat G.', 5, '2026-02-18', '', 'Totul super 👍🏼 foarte mulțumită de cumpărătură. Bine ambalați, livrare rapidă și exact cum sunt descriși în anunț. Sunt progresivi, cu aspect de plastic.'],
      ['Salvador A.', 5, '2025-12-08', '', 'Excelenți, super comozi, este a doua pereche pe care o cumpăr. Te obișnuiești și merită.'],
      ['José G.', 4, '2026-04-23', '', 'Au ajuns azi și totul arată foarte bine. Zona bifocală cu mărire ajută mult la citirea scrisului mărunt.'],
      ['Cristina L.', 5, '2025-12-02', '', 'Sunt foarte ușori. Par de calitate bună. Îmi îndeplinesc așteptările. Îi recomand.'],
      ['Adela L.', 5, '2025-10-18', '', 'Spectaculoși, super comozi și frumoși, mărirea este precisă și se vede clar.'],
      ['Pilar C.', 5, '2025-12-01', '', 'Foarte buni pentru citit și pentru văzut departe.'],
    ],
  };

  function aFila(prod) {
    return function (r) {
      var o = { producto: prod, nombre: r[0], estrellas: r[1], fecha: r[2], pais: 'ES', verificada: true, texto: r[4] };
      if (r[3]) o.foto = '../img/' + r[3] + '.webp';
      return o;
    };
  }
  window.RESENAS = L.map(aFila(P));
  Object.keys(OTRAS).forEach(function (prod) { window.RESENAS = window.RESENAS.concat(OTRAS[prod].map(aFila(prod))); });
})();
