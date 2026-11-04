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
  { id:"f2-30", name:"TENSE EM-06 multifunction meter", category:"controls", label:"Meters & controls", description:"Panel meter for electrical measurements and monitoring." }
];

const productGrid = document.querySelector('#product-grid');
const catalogCount = document.querySelector('.catalog-count');

productGrid.innerHTML = productItems.map((item) => `
  <article class="product-card" data-category="${item.category}">
    <div class="product-image-wrap"><img class="product-image" src="images/catalog/${item.id}.jpg" alt="${item.name}" loading="lazy"></div>
    <div class="product-card-content">
      <p class="product-category">${item.label}</p>
      <h3>${item.name}</h3>
      <p class="product-card-description">${item.description}</p>
      <a class="product-inquiry" href="mailto:moduluspowerandelectrical@gmail.com?subject=${encodeURIComponent('Product enquiry: ' + item.name)}">Ask about this item <span>↗</span></a>
    </div>
  </article>`).join('');

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
