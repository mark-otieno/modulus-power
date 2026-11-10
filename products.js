const productItems = [
  { id:"f1-01", name:"ANDELI BK-50 control transformer", category:"switchgear", label:"Switchgear", description:"Control transformer for electrical control circuits." },
  { id:"f1-02", name:"MSQ-30 current transformer", category:"controls", label:"Meters & controls", description:"Current transformer marked with a 60/5 ratio." },
  { id:"f1-03", name:"Meter connection enclosure", category:"panels", label:"Panels & enclosures", description:"Electrical meter or service connection enclosure." },
  { id:"f1-04", name:"Wall switches and socket outlets", category:"lighting", label:"Lighting & sockets", description:"Selection of domestic switches and socket outlets." },
  { id:"f1-05", name:"CHINT molded case circuit breaker", category:"switchgear", label:"Switchgear", description:"MCCB for low voltage circuit protection." },
  { id:"f1-06", name:"CHINT contactor", category:"switchgear", label:"Switchgear", description:"Contactor for switching electrical loads." },
  { id:"f1-07", name:"Copper cable lugs", category:"wiring", label:"Cables & accessories", description:"Compression lugs for terminating large conductors." },
  { id:"f1-08", name:"CHINT switching components", category:"switchgear", label:"Switchgear", description:"CHINT electrical switching or protection devices." },
  { id:"f1-09", name:"30A automatic voltage protector", category:"switchgear", label:"Switchgear", description:"WINSDOR V105 automatic voltage protection unit." },
  { id:"f1-10", name:"CHINT modular protection devices", category:"switchgear", label:"Switchgear", description:"DIN rail mounted electrical protection components." },
  { id:"f1-11", name:"Plastic electrical junction boxes", category:"wiring", label:"Cables & accessories", description:"Enclosures for electrical joints and connections." },
  { id:"f1-12", name:"Solar garden lights", category:"lighting", label:"Lighting & sockets", description:"Solar powered outdoor pathway and garden lighting." },
  { id:"f1-13", name:"CHINT NC2-115 contactors", category:"switchgear", label:"Switchgear", description:"Heavy duty contactors for switching larger loads." },
  { id:"f1-14", name:"Industrial socket distribution box", category:"panels", label:"Panels & enclosures", description:"Portable distribution enclosure with industrial outlets." },
  { id:"f1-15", name:"Digital panel meters", category:"controls", label:"Meters & controls", description:"Panel mounted digital meter or indicator units." },
  { id:"f1-16", name:"Switches and socket outlet range", category:"lighting", label:"Lighting & sockets", description:"Domestic switches and socket outlet styles." },
  { id:"f1-17", name:"Modular faceplate frames", category:"wiring", label:"Cables & accessories", description:"Frames and plates for modular switches and outlets." },
  { id:"f2-01", name:"Floor standing control cabinet", category:"panels", label:"Panels & enclosures", description:"Electrical cabinet with viewing window and internal mounting space." },
  { id:"f2-02", name:"Slotted wiring duct", category:"wiring", label:"Cables & accessories", description:"Cable management duct for routing wires inside panels." },
  { id:"f2-03", name:"Metering and breaker panel", category:"panels", label:"Panels & enclosures", description:"Assembled low voltage distribution and metering panel." },
  { id:"f2-04", name:"Electrical panel enclosures", category:"panels", label:"Panels & enclosures", description:"Metal cabinets for electrical panel assemblies." },
  { id:"f2-05", name:"CHINT molded case circuit breaker", category:"switchgear", label:"Switchgear", description:"Four pole MCCB for low voltage circuit protection." },
  { id:"f2-06", name:"Distribution board assembly", category:"panels", label:"Panels & enclosures", description:"Electrical distribution board with circuit protection devices." },
  { id:"f2-07", name:"Panel cabinet enclosures", category:"panels", label:"Panels & enclosures", description:"Electrical cabinet and enclosure options." },
  { id:"f2-08", name:"Power factor correction equipment", category:"panels", label:"Panels & enclosures", description:"Panel assembly for power factor correction." },
  { id:"f2-09", name:"Perforated cable tray", category:"wiring", label:"Cables & accessories", description:"Metal cable support tray for electrical installations." },
  { id:"f2-10", name:"CHINT four pole residual current breaker", category:"switchgear", label:"Switchgear", description:"Four pole residual current protection device." },
  { id:"f2-11", name:"EPCOS BR6000 power factor controller", category:"controls", label:"Meters & controls", description:"Controller for automatic power factor correction systems." },
  { id:"f2-12", name:"CHINT NC2-115 contactor", category:"switchgear", label:"Switchgear", description:"Three pole contactor for switching electrical loads." },
  { id:"f2-13", name:"Power factor correction panel", category:"panels", label:"Panels & enclosures", description:"Panel assembly with capacitor bank equipment." },
  { id:"f2-14", name:"BACOBA switching power supply", category:"controls", label:"Meters & controls", description:"Enclosed AC to DC power supply module." },
  { id:"f2-15", name:"Low voltage switchgear cabinet", category:"panels", label:"Panels & enclosures", description:"Multi compartment electrical switchgear cabinet." },
  { id:"f2-16", name:"Distribution switchboard", category:"panels", label:"Panels & enclosures", description:"Panel enclosure with viewing sections for switchgear." },
  { id:"f2-17", name:"EPCOS power factor capacitor", category:"controls", label:"Meters & controls", description:"Capacitor component used in power factor correction systems." },
  { id:"f2-18", name:"10 kVA automatic voltage regulator", category:"controls", label:"Meters & controls", description:"Automatic voltage regulator marked 10 kVA." },
  { id:"f2-19", name:"Low voltage distribution cabinet", category:"panels", label:"Panels & enclosures", description:"Electrical switchboard cabinet with multiple sections." },
  { id:"f2-20", name:"Multi compartment distribution panel", category:"panels", label:"Panels & enclosures", description:"Low voltage panel assembly with metering and control sections." },
  { id:"f2-21", name:"CHINT enclosed rotary isolator", category:"switchgear", label:"Switchgear", description:"Rotary switch isolator in an enclosed assembly." },
  { id:"f2-22", name:"Control panel with indicator lamps", category:"panels", label:"Panels & enclosures", description:"Control cabinet front with status indicators and controls." },
  { id:"f2-23", name:"Low voltage distribution board", category:"panels", label:"Panels & enclosures", description:"Compartmentalized low voltage distribution switchboard." },
  { id:"f2-24", name:"Industrial socket panel", category:"lighting", label:"Lighting & sockets", description:"Panel with industrial socket outlets and a rotary isolator." },
  { id:"f2-25", name:"CHINT modular contactors", category:"switchgear", label:"Switchgear", description:"Contactors for electrical load switching." },
  { id:"f2-26", name:"Outdoor electrical cabinet", category:"panels", label:"Panels & enclosures", description:"Outdoor installed electrical control or distribution cabinet." },
  { id:"f2-27", name:"4 mm² electrical cable coils", category:"wiring", label:"Cables & accessories", description:"Packaged electrical cable marked 4 mm²." },
  { id:"f2-28", name:"Digital automatic transfer switch", category:"switchgear", label:"Switchgear", description:"Four pole automatic transfer switch with digital status display." },
  { id:"f2-29", name:"CHINT molded case circuit breakers", category:"switchgear", label:"Switchgear", description:"Selection of molded case circuit breakers." },
  { id:"f2-30", name:"TENSE EM-06 multifunction meter", category:"controls", label:"Meters & controls", description:"Panel meter for electrical measurements and monitoring." },
  { id:"f3-02", name:"Europlus digital timer switch", category:"controls", label:"Meters & controls", description:"Programmable timer switch for scheduled electrical control." },
  { id:"f3-03", name:"Havells molded case circuit breaker", category:"switchgear", label:"Switchgear", description:"Havells circuit breaker for low voltage protection." },
  { id:"f3-04", name:"Electrical cable range", category:"wiring", label:"Cables & accessories", description:"Flexible, twin flat, armoured and house wiring cable types." },
  { id:"f3-05", name:"300 mm clear globe garden light", category:"lighting", label:"Lighting & sockets", description:"Clear globe style outdoor garden light fitting." },
  { id:"f3-06", name:"Europlus 8 way consumer unit", category:"panels", label:"Panels & enclosures", description:"Eight way consumer unit enclosure for domestic distribution." },
  { id:"f3-07", name:"Europlus 12 way consumer unit", category:"panels", label:"Panels & enclosures", description:"Twelve way consumer unit enclosure for domestic distribution." },
  { id:"f3-09", name:"Outdoor garden lantern", category:"lighting", label:"Lighting & sockets", description:"Outdoor lantern style garden light fitting." },
  { id:"f3-10", name:"Sterling 2 gang 2 way switch", category:"lighting", label:"Lighting & sockets", description:"Two gang two way wall switch with black rockers." },
  { id:"f3-11", name:"Sterling 1 gang 1 way switch", category:"lighting", label:"Lighting & sockets", description:"Single gang one way wall switch." },
  { id:"f3-12", name:"Sterling 3 gang 2 way switch", category:"lighting", label:"Lighting & sockets", description:"Three gang two way wall switch." },
  { id:"f3-13", name:"Two gang rocker switch", category:"lighting", label:"Lighting & sockets", description:"Two switch modules in a shared faceplate." },
  { id:"f3-14", name:"Double switched socket outlet", category:"lighting", label:"Lighting & sockets", description:"Double socket outlet with individual switches." }
];

const newProductSpecs = [
  ["Exhaust ventilation fan", "fans", "Fans & ventilation", "Wall mounted fan for air circulation and ventilation."],
  ["Insulated electrical cable coils", "wiring", "Cables & accessories", "Coils of insulated cable for electrical wiring work."],
  ["Meter connection enclosure", "panels", "Panels & enclosures", "Enclosure for an electricity meter or service connection."],
  ["Electrical service enclosure", "panels", "Panels & enclosures", "Enclosure for electrical service equipment."],
  ["Electrical equipment enclosure", "panels", "Panels & enclosures", "Protective enclosure for electrical components."],
  ["Digital timer switch", "controls", "Meters & controls", "Timer switch for scheduled electrical control."],
  ["Electrical panel enclosure", "panels", "Panels & enclosures", "Enclosure for assembling electrical control equipment."],
  ["Metal electrical enclosure", "panels", "Panels & enclosures", "Metal enclosure for electrical installations."],
  ["Industrial socket outlet", "lighting", "Lighting & sockets", "Industrial socket outlet for power connections."],
  ["Electromechanical switching component", "switchgear", "Switchgear", "Electrical switching component; confirm model and rating with our team."],
  ["Packaged electrical lighting component", "lighting", "Lighting & sockets", "Packaged lighting product; contact us to confirm the model."],
  ["Electrical transformer", "switchgear", "Switchgear", "Transformer for electrical power or control applications."],
  ["Electric fan heater", "fans", "Fans & ventilation", "Electric fan heater; contact us to confirm the model and availability."],
  ["Circuit breaker", "switchgear", "Switchgear", "Circuit protection device; confirm its rating before ordering."],
  ["Circuit breaker", "switchgear", "Switchgear", "Electrical circuit breaker for low voltage protection."],
  ["Electrical protection device", "switchgear", "Switchgear", "Protective switching device for an electrical installation."],
  ["Panel mounted electrical component", "controls", "Meters & controls", "Electrical component shown mounted in a panel."],
  ["Circuit breaker", "switchgear", "Switchgear", "Circuit protection equipment; ask us to confirm the specification."],
  ["Ventilation fan", "fans", "Fans & ventilation", "Ventilation fan for moving air through an indoor space."],
  ["Electric motor", "switchgear", "Switchgear", "Electric motor for equipment or industrial applications."],
  ["Electrical control cabinet", "panels", "Panels & enclosures", "Cabinet for electrical control equipment."],
  ["Circuit breaker", "switchgear", "Switchgear", "Electrical protection device; confirm the rating with our team."],
  ["Electrical distribution cabinet", "panels", "Panels & enclosures", "Cabinet for low voltage distribution equipment."],
  ["Fuse and distribution panel", "panels", "Panels & enclosures", "Panel assembly for electrical distribution and protection."],
  ["Fuse carrier assembly", "switchgear", "Switchgear", "Fuse carrier assembly for electrical circuit protection."],
  ["Recessed LED downlight", "lighting", "Lighting & sockets", "Recessed ceiling light fitting."],
  ["Linear LED light fitting", "lighting", "Lighting & sockets", "Linear light fitting for indoor or work areas."],
  ["LED bulkhead light", "lighting", "Lighting & sockets", "Bulkhead style light fitting for indoor or outdoor areas."],
  ["Electricity meter and panel", "controls", "Meters & controls", "Electricity meter shown installed in a service panel."],
  ["Voltage control device", "controls", "Meters & controls", "Voltage control equipment for an electrical system."],
  ["Outdoor electrical enclosure", "panels", "Panels & enclosures", "Weather resistant enclosure for outdoor electrical equipment."],
  ["Havells molded case circuit breaker", "switchgear", "Switchgear", "Havells circuit breaker for low voltage protection."],
  ["Electrical insulation tape", "wiring", "Cables & accessories", "Electrical insulating tape for wiring work."],
  ["Electrical control cabinet", "panels", "Panels & enclosures", "Cabinet for housing electrical control equipment."],
  ["Armoured electrical cable", "wiring", "Cables & accessories", "Armoured cable for protected electrical wiring runs."],
  ["Exhaust ventilation fan", "fans", "Fans & ventilation", "Ventilation fan for air extraction or circulation."],
  ["Sterling 100 W LED floodlight", "lighting", "Lighting & sockets", "Packaged 100 watt LED floodlight."],
  ["Motion and light sensor", "controls", "Meters & controls", "Sensor for detecting movement and controlling lighting."],
  ["Domestic consumer unit", "panels", "Panels & enclosures", "Consumer unit enclosure for domestic circuit distribution."],
  ["Packaged wall fan", "fans", "Fans & ventilation", "Packaged wall mounted fan; ask us to confirm the model."],
  ["Enclosed rotary isolator", "switchgear", "Switchgear", "Enclosed rotary isolator for electrical equipment."],
  ["Havells wall fan", "fans", "Fans & ventilation", "Wall mounted fan; contact us to confirm model and availability."]
];

const additionalProductItems = newProductSpecs.map(([name, category, label, description], index) => ({
  id: `new-${String(index + 1).padStart(2, '0')}`, name, category, label, description,
  image: `images/catalog/new-${String(index + 1).padStart(2, '0')}.jpg`, kind: 'product'
})).filter((item) => item.id !== 'new-32'); // Havells MCCB is already listed in the original catalog.

const mixedProductItems = [
  { id: 'mix-04', name: 'Outdoor garden lighting display', category: 'lighting', label: 'Lighting & sockets', description: 'Outdoor lamp styles shown by the technician; ask about available fittings.' },
  { id: 'mix-14', name: 'Wall switches and socket outlets', category: 'lighting', label: 'Lighting & sockets', description: 'Modern wall switches and socket outlet options.' },
  { id: 'mix-18', name: 'USB wall socket outlet', category: 'lighting', label: 'Lighting & sockets', description: 'Wall socket outlet with integrated USB charging ports.' },
  { id: 'mix-21', name: 'Wall socket with USB charging', category: 'lighting', label: 'Lighting & sockets', description: 'Domestic socket outlet with USB charging ports.' }
].map((item) => ({ ...item, image: `images/catalog/${item.id}.jpg`, kind: 'product' }));

const installationSpecs = [
  ['project-01', 'Solar installation in progress', 'Solar power', 'Technician working on a rooftop solar installation.'],
  ['project-03', 'Solar panel installation', 'Solar power', 'Solar panels being installed on a rooftop.'],
  ['project-05', 'Solar panel installation', 'Solar power', 'Technician installing rooftop solar panels.'],
  ['project-06', 'Surface conduit installation', 'Electrical installation', 'Electrical conduit and junction boxes installed on a building exterior.'],
  ['project-07', 'Outdoor lighting installation', 'Electrical installation', 'Technician assembling an outdoor lamp post.'],
  ['project-08', 'Outdoor lighting installation', 'Electrical installation', 'Outdoor lamp post installation from a second project angle.'],
  ['project-10', 'Rooftop solar installation', 'Solar power', 'Solar panels being fitted on a rooftop.'],
  ['project-13', 'Building wiring work', 'Electrical installation', 'Technician working on electrical wiring in a building.'],
  ['project-15', 'Completed solar installation', 'Solar power', 'Solar panels installed at a customer site.'],
  ['project-16', 'Rooftop solar installation', 'Solar power', 'Solar panel installation on a tiled roof.'],
  ['project-17', 'Solar installation work', 'Solar power', 'Technician carrying out work on a solar panel array.'],
  ['project-19', 'Outdoor lighting installation', 'Electrical installation', 'Technician assembling an outdoor lighting fitting.']
].map(([id, name, label, description]) => ({
  id, name, label, description, category: 'services', kind: 'service', image: `images/installations/${id}.jpg`
}));

const allItems = [
  ...productItems.map((item) => ({ ...item, image: `images/catalog/${item.id}.jpg`, kind: 'product' })),
  ...additionalProductItems,
  ...mixedProductItems,
  ...installationSpecs
];

const productGrid = document.querySelector('#product-grid');
const catalogCount = document.querySelector('.catalog-count');

productGrid.innerHTML = allItems.map((item) => `
  <article class="product-card" data-category="${item.category}">
    <div class="product-image-wrap"><button class="product-image-trigger" type="button" data-product-id="${item.id}" aria-label="View full image of ${item.name}"><img class="product-image" src="${item.image}" alt="${item.name}" loading="lazy"></button></div>
    <div class="product-card-content">
      <p class="product-category">${item.label}</p>
      <h3>${item.name}</h3>
      <p class="product-card-description">${item.description}</p>
      <a class="product-inquiry" href="https://wa.me/254735136692?text=${encodeURIComponent('Hi Modulus Power, I’m interested in ' + item.name + '. Please share more details.')}" target="_blank" rel="noopener noreferrer">Ask about this ${item.kind === 'service' ? 'service' : 'item'} <span>↗</span></a>
    </div>
  </article>`).join('');

const productViewer = document.querySelector('#product-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerTitle = document.querySelector('#viewer-title');
const viewerInquiry = document.querySelector('#viewer-inquiry');
const viewerStage = document.querySelector('#viewer-image-stage');
let viewerScale = 1;

function setViewerScale(scale) {
  viewerScale = Math.min(3, Math.max(1, scale));
  viewerImage.style.transform = `scale(${viewerScale})`;
}

productGrid.addEventListener('click', (event) => {
  const trigger = event.target.closest('.product-image-trigger');
  if (!trigger) return;
  const item = allItems.find((product) => product.id === trigger.dataset.productId);
  if (!item) return;
  viewerImage.src = item.image;
  viewerImage.alt = item.name;
  viewerTitle.textContent = item.name;
  viewerInquiry.href = `https://wa.me/254735136692?text=${encodeURIComponent('Hi Modulus Power, I’m interested in ' + item.name + '. Please share more details.')}`;
  viewerInquiry.textContent = `Ask about this ${item.kind === 'service' ? 'service' : 'item'} on WhatsApp ↗`;
  viewerStage.scrollTop = 0;
  viewerStage.scrollLeft = 0;
  setViewerScale(1);
  productViewer.showModal();
});

document.querySelector('#zoom-in').addEventListener('click', () => setViewerScale(viewerScale + 0.5));
document.querySelector('#zoom-out').addEventListener('click', () => setViewerScale(viewerScale - 0.5));
document.querySelector('#zoom-reset').addEventListener('click', () => setViewerScale(1));
document.querySelector('#viewer-close').addEventListener('click', () => productViewer.close());
productViewer.addEventListener('click', (event) => {
  if (event.target === productViewer) productViewer.close();
});

const cards = [...productGrid.querySelectorAll('.product-card')];
function filterProducts(category) {
  let visible = 0;
  cards.forEach((card) => {
    const show = category === 'all' || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible += 1;
  });
  catalogCount.textContent = `${visible} ${visible === 1 ? 'item' : 'items'}`;
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    filterProducts(button.dataset.filter);
  });
});

filterProducts('all');
