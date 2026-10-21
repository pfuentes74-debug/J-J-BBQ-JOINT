// "Nombre|descripción|precio" — precio "120/200" = copa/litro
const L = s => s.split(',').map(x => { x = x.trim(); const i = x.lastIndexOf(' '); return x.slice(0, i) + '||' + x.slice(i + 1); });
const G = (t, n, i, tight) => ({ t, n, i, tight });
const MENU = [
  { id: 'bbq', label: 'BBQ Plates', g: [
    G('BBQ Plates', 'Incluyen chiles en vinagre, cebolla encurtida, pepinillos y 2 rebanadas de pan', [
      'Brisket 240 g|Ahumado, jugoso y lleno de sabor|360', 'Pulled Pork 320 g|Cerdo ahumado y deshebrado|300',
      'Medio Costillar|Costillas BBQ para disfrutar sin prisas|380', 'Costillar Completo|Para los que vienen con hambre de verdad|740',
      'All Meats|240 g brisket, 320 g pulled pork, medio costillar, papas a la francesa y mac & cheese|1,100']),
    G('Sandwiches', 'Pan brioche, aderezo de la casa, pepinillos y topping a elegir', ['Brisket Sándwich||280', 'Pulled Pork Sándwich||240']),
    G('Extras de pollo', 'Salsas: Buffalo · BBQ · Mango Habanero', ['Boneless||215', 'Tenders||180'])] },
  { id: 'burgers', label: 'Burgers', g: [
    G('Burgers', 'Todas incluyen papas a la francesa', [
      'Cheeseburger|Res, mayonesa, mostaza, aderezo de la casa, cheddar, lechuga, tomate, cebolla y pepinillos|240',
      'Bacon Cheeseburger|Res, tocino, mayonesa, mostaza, aderezo de la casa, cheddar, lechuga, tomate, cebolla y pepinillos|260',
      'Deluxe Bacon Cheeseburger|Res, tocino, salsa BBQ, queso gouda, lechuga, cebolla caramelizada y pepinillos|270',
      'Smash Burger|Doble carne de res smash, queso cheddar y aderezo especial|260',
      'Buffalo Chicken Burger|Pechuga empanizada en salsa buffalo, gouda, ranch y lechuga|240',
      'Bacon Chicken Burger|Pechuga empanizada, gouda, tocino, aderezo de la casa, lechuga, cebolla, tomate y pepinillos|240']),
    G('Mejora tu burger', '', ['Agrega otra carne||+80', 'Cambia tus papas|Gajo · Aros de cebolla · Crisscut · Camote|+25'], 1)] },
  { id: 'share', label: 'Para compartir', g: [
    G('Para compartir', '', [
      'Brisket para taquear|Brisket ahumado en hebras con tortillas recién hechas, guacamole y salsas de la casa|490',
      'Empanadas de brisket con queso|Orden de 3 piezas, con alioli de macha|180',
      'Nachos con chili de brisket|Nachos crujientes con chili de brisket, queso fundido y toppings frescos|220',
      'Esquite con brisket|Elote desgranado, mantequilla, alioli de macha, queso fresco y brisket|190',
      'Ultimate Mac & Cheese|Salsa cremosa de cheddar, gouda y grana padano. Súbelo de nivel con brisket ahumado +$90|120']),
    G('Loaded Fries', '', [
      'Papas con brisket|Papas a la francesa con brisket en hebras, aderezo de la casa, pepinillos y chiles en vinagre|220',
      'Papas con pulled pork|Con pulled pork ahumado, aderezo de la casa, pepinillos y chiles en vinagre|220',
      'Buffalo chicken fries|Pollo empanizado en salsa buffalo con aderezo ranch|220']),
    G('Ensaladas', '', [
      'Ensalada Thai|Espinaca y arúgula, cebolla morada, cacahuate, champiñón, aguacate y ajonjolí, aderezo thai|160',
      'Wedge Salad|Lechuga romana asada con pancetta crujiente, tomate cherry y aderezo de queso azul|160',
      'Ensalada César|Lechuga italiana, aderezo césar de la casa, crotones y grana padano|140'])] },
  { id: 'extras', label: 'Extras & Postres', g: [
    G('Extras', '', L('Elote 80,Papas a la francesa 80,Papas gajo 90,Aros de cebolla 90,Crisscut fries 90,Papas camote 110,Dedos de queso 180,Salsas y aderezos extra 20'), 1),
    G('Postres', '', ['Pastel de chocolate||140', 'Pan de elote con nieve de vainilla||140', 'Pay de nuez||120'])] },
  { id: 'drinks', label: 'Bebidas', g: [
    G('Bebidas', '', L('Refrescos 35,Agua natural 25,Agua mineral 600 ml 45,Agua mineral vidrio 45'), 1),
    G('Malteadas', 'Vainilla · Fresa · Chocolate', ['Malteada|Toppings $40 c/u: M&Ms, Oreo, Milky Way, Snickers, Gansito, Pingüino, Kinder Delice|110']),
    G('Adult Shakes', '', ['Malteada de Carajillo||200', 'Malteada de Baileys||200']),
    G('Digestivos', '', L('Carajillo 130,Frangélico 110,Baileys 110'), 1)] },
  { id: 'bar', label: 'Bar', g: [
    G('Cerveza', '', L('Corona 40,Victoria 40,Bud Light 40,Michelob Ultra 50,Modelo Especial 50,Negra Modelo 50,Dos Equis 50,Amstel Ultra 50,Modelo Especial Cero 50,Negra Modelo Cero 50,Stella Artois 45,Pacífico 45,Tecate Roja 45,Tecate Azul 45,Indio 45,Heineken 0.0 45,Miller High Life 60,Miller Lite 60,Bohemia 60,Heineken 60,Heineken Silver 60,Corona 1/4 30,Victoria 1/4 30,Preparado (extra) 20'), 1),
    G('Caguamas', '', L('Corona 90,Victoria 90,Michelob Ultra 100,Bud Light 100,Stella Artois 120,Modelo 120,Pacífico 120'), 1),
    G('Litros preparados', 'Vampiro y Mojito $180', L('Michelada 160,Chelada 160,Beermato 160,Mangochela 160,Fresachela 160,Naranjita 160,Tampico Madero 160,Bull 160,Desarmador 160,Tom Collins 160,Baby Mango 160,Tequila Sunrise 160,Gallo Pinto 160,Piña Colada 160,Bloody Mary 160,Vampiro 180,Mojito 180'), 1),
    G('Ginebra', 'Copa / litro', L('Tanqueray 120/200,Bombay 140/240,Beefeater 140/240,Hendrick\'s 190/280'), 1),
    G('Mezcal', 'Copa', L('400 Conejos 120,Amaras 130'), 1),
    G('Ron', 'Copa / litro', L('Bacardí 80/160,Flor 4 85/170,Flor 4 Oro 90/180,Flor 7 110/200'), 1),
    G('Tequila', 'Copa / litro', L('José Cuervo 100/200,Maestro Dobel 150/260,Don Julio 70 170/280,1800 Cristalino 130/250'), 1),
    G('Whisky', 'Copa / litro', L('Etiqueta Negra 130/240,Etiqueta Roja 100/200,Buchanan\'s 140/260,Glenfiddich 12 220/380'), 1),
    G('Vodka', 'Copa / litro', L('Absolut 100/200,Stolichnaya 100/200,Smirnoff 90/180,Grey Goose 140/250'), 1)] }
];
const $ = s => document.querySelector(s);
const price = p => p.startsWith('+') ? '+$' + p.slice(1) : '$' + p.split('/').join(' / $');
const tabs = $('#tabs'), panel = $('#panel');
function show(id) {
  const m = MENU.find(x => x.id === id);
  tabs.querySelectorAll('.tab').forEach(t => { t.classList.toggle('on', t.dataset.id === id); t.setAttribute('aria-selected', t.dataset.id === id); });
  panel.innerHTML = m.g.map(g => `<div class="grp"><h3 class="disp">${g.t}${g.n ? `<small>${g.n}</small>` : ''}</h3><div class="items${g.tight ? ' tight' : ''}">${g.i.map((s, k) => { const [n, d, p] = s.split('|'); return `<div class="it" style="animation-delay:${k * 35}ms"><div class="it-top"><h4>${n}</h4><i></i><b>${price(p)}</b></div>${d ? `<p>${d}</p>` : ''}</div>`; }).join('')}</div></div>`).join('');
}
tabs.innerHTML = MENU.map(m => `<button class="tab" role="tab" data-id="${m.id}">${m.label}</button>`).join('');
tabs.addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) show(t.dataset.id); });
show('bbq');

const burger = $('#burger'), nav = $('#nav');
burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

document.documentElement.classList.add('js');
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// Abierto ahora (hora de Tampico). Lun cerrado · Jue-Sáb 2pm-12am · resto 2pm-11pm
function updateStatus() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
  const d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  const close = [4, 5, 6].includes(d) ? 24 : 23;
  const open = d !== 1 && h >= 14 && h < close;
  const s = $('#status'); s.classList.toggle('open', open);
  s.lastElementChild.textContent = open ? 'Abierto ahora · Tampico' : 'Cerrado ahora · Abrimos a las 2 pm';
}
updateStatus(); setInterval(updateStatus, 60000);
$('#year').textContent = new Date().getFullYear();
