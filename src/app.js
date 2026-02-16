// --- DATA STORAGE ---
const itineraryData = [
    {
        day: 1,
        date: "Zondag 15 Februari",
        title: "Aankomst & Sfeer",
        weather: "🌧️ Regen (75%)",
        items: [
            { time: "17:45", title: "Landing London City Airport", desc: "Aankomst vlucht. Direct door naar DLR.", type: "Logistiek" },
            { time: "18:15", title: "DLR naar Limehouse", desc: "Korte rit van 15-20 min. Mooi uitzicht voorin de trein.", type: "Logistiek" },
            { time: "19:00", title: "Check-in & Diner", desc: "Diner bij 'The Grapes'. Historische pub op 6 min lopen.", type: "Eten/Drink", highlight: true, note: "Tip: Eigendom van Ian McKellen. Perfecte start." }
        ]
    },
    {
        day: 2,
        date: "Maandag 16 Februari",
        title: "Rivier & Engineering",
        weather: "🌦️ Lichte Regen (35%)",
        items: [
            { time: "09:30", title: "DLR naar Tower Hill", desc: "Limehouse -> Tower Gateway (Direct, 8 min).", type: "Logistiek" },
            { time: "10:00", title: "Tower of London", desc: "Focus op Witte Toren en Kroonjuwelen (binnen).", type: "Stad & Sfeer", highlight: true, note: "Gebruik Explorer Pass." },
            { time: "13:00", title: "Lunch & Tower Bridge", desc: "Lunch bij St Katharine Docks. Foto's van de brug.", type: "Eten/Drink" },
            { time: "14:00", title: "Uber Boat naar Battersea", desc: "Vanaf Tower Pier. Droog sightseeing langs alle highlights (Eye, Parliament).", type: "Logistiek", highlight: true, note: "Perfect bij regen! Warme boottocht van 40 min." },
            { time: "15:00", title: "Battersea Power Station", desc: "Iconische elektriciteitscentrale. Bekijk de Art Deco turbinehallen (binnen!).", type: "Techniek" },
            { time: "17:30", title: "Naar Dishoom", desc: "Northern Line: Battersea -> Leicester Square.", type: "Logistiek" },
            { time: "18:30", title: "Diner bij Dishoom", desc: "Carnaby St. Bombay Café sfeer. Toba is dicht op maandag.", type: "Eten/Drink", highlight: true }
        ]
    },
    {
        day: 3,
        date: "Dinsdag 17 Februari",
        title: "Voetbal & Techniek",
        weather: "☁️ Bewolkt (Koud)",
        items: [
            { time: "11:00", title: "Spurs Stadium Tour", desc: "Technisch hoogstandje: uitschuifbaar veld.", type: "Voetbal", highlight: true, note: "Vooraf tijdslot reserveren!" },
            { time: "14:00", title: "Mayfair Showrooms", desc: "Wandelen langs Bentley, Ferrari, RR.", type: "Techniek", note: "Slecht weer: Park Lane showrooms zijn binnen." },
            { time: "16:00", title: "Brick Lane Snack", desc: "Beigel Bake Salt Beef Beigel.", type: "Eten/Drink" },
            { time: "18:00", title: "Rustavond", desc: "Relaxen in Limehouse.", type: "Logistiek" }
        ]
    },
    {
        day: 4,
        date: "Woensdag 18 Februari",
        title: "Architectuur & Vertrek",
        weather: "🌨️ Lichte Sneeuw (45%)",
        items: [
            { time: "09:00", title: "The Barbican", desc: "Brutalisme en binnentuinen (Conservatory).", type: "Fotografie", note: "Gratis toegang! Reserveer vooraf wel een (gratis) tijdslot voor de Conservatory." },
            { time: "11:30", title: "Lunch Spitalfields", desc: "Overdekte markt met veel opties.", type: "Eten/Drink" },
            { time: "13:15", title: "Naar Vliegveld", desc: "DLR terug naar LCY.", type: "Logistiek" },
            { time: "15:15", title: "Vlucht Vertrekt", desc: "Einde van de trip.", type: "Logistiek" }
        ]
    }
];

const locations = [
    { name: "Tottenham Hotspur Stadium (Tour)", category: "Voetbal", roy: "Technisch hoogstandje, uitschuifbaar veld.", photo: 5, effort: "Gemiddeld", transport: "Overground via Stratford", url: "https://www.tottenhamhotspurstadium.com/see-do/products/stadium-tour-for-one/", lat: 51.6043, lng: -0.0662 },
    { name: "Battersea Power Station", category: "Techniek/Auto's", roy: "Industrieel icoon, volledig overdekt.", photo: 5, effort: "Laag", transport: "Uber Boat / Northern Line", url: "https://batterseapowerstation.co.uk/", lat: 51.4818, lng: -0.1446 },
    { name: "Mayfair Showrooms", category: "Techniek/Auto's", roy: "Technische specs, luxe lak en motoren.", photo: 4, effort: "Gemiddeld", transport: "Central Line (Bond St)", url: "https://www.google.com/maps/search/luxury+car+showrooms+mayfair+london/", lat: 51.5095, lng: -0.1460 },
    { name: "The Postal Museum", category: "Techniek/Auto's", roy: "Unieke ondergrondse posttrein.", photo: 5, effort: "Gemiddeld", transport: "Farringdon / Russell Sq", url: "https://www.postalmuseum.org/", lat: 51.5244, lng: -0.1137 },
    { name: "The Barbican Estate", category: "Fotografie", roy: "Brutalistisch, patronen, texturen.", photo: 5, effort: "Gemiddeld", transport: "DLR naar Bank", url: "https://www.barbican.org.uk", lat: 51.5200, lng: -0.0939 },
    { name: "Kings Cross Gasholders", category: "Techniek/Auto's", roy: "Industrieel erfgoed herbestemd.", photo: 4, effort: "Laag", transport: "Northern Line", url: "https://www.gasholderslondon.co.uk/", lat: 51.5365, lng: -0.1245 },
    { name: "Columbia Road Market", category: "Fotografie", roy: "Kleurrijk spektakel, straatfotografie.", photo: 4, effort: "Gemiddeld", transport: "Overground Hoxton", url: "https://columbiaroad.info/", lat: 51.5293, lng: -0.0734 },
    { name: "Dishoom Carnaby", category: "Eten/Drink", roy: "Bombay Café sfeer, nostalgisch & lekker.", photo: 4, effort: "Laag", transport: "Oxford Circus", url: "https://www.dishoom.com/carnaby/", lat: 51.5125, lng: -0.1396 },
    { name: "Bali Bali", category: "Eten/Drink", roy: "Traditionele smaken, familie-erfgoed.", photo: 2, effort: "Laag", transport: "Soho", url: "https://balibali.co.uk/", lat: 51.5134, lng: -0.1293 },
    { name: "The Grapes", category: "Eten/Drink", roy: "Historie, maritiem, eigen buurt.", photo: 4, effort: "Laag", transport: "Lopen", url: "https://www.thegrapes.co.uk/", lat: 51.5094, lng: -0.0385 },
    { name: "London City Airport", category: "Logistiek", roy: "Comfortabel aankomen.", photo: 2, effort: "Laag", transport: "DLR", url: "https://www.londoncityairport.com/", lat: 51.5048, lng: 0.0495 },
    { name: "Brick Lane (Beigel)", category: "Eten/Drink", roy: "Culinair icoon.", photo: 4, effort: "Gemiddeld", transport: "Overground", url: "https://bricklanebeigel.co.uk/", lat: 51.5247, lng: -0.0718 },
    { name: "Tower of London", category: "Stad & Sfeer", roy: "Historie en kroonjuwelen.", photo: 5, effort: "Gemiddeld", transport: "Uber Boat / DLR", url: "https://www.hrp.org.uk/tower-of-london/", lat: 51.5081, lng: -0.0759 },
    { name: "Holiday Inn Limehouse", category: "Logistiek", roy: "Jullie Hotel", photo: 1, effort: "Laag", transport: "DLR Limehouse", url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/london/lonlh/hoteldetail", lat: 51.5117, lng: -0.0385 }
];

const packingList = [
    {
        category: "Essentieel & Documenten",
        items: [
            "Paspoorten (Controleer geldigheid)",
            "Boarding Passes (Telefoon/Print)",
            "Go City Explorer Pass (Op telefoon)",
            "Hotel Reservering",
            "Bankpas (Werelddekking aan)",
            "UK Stekker (Adapter)"
        ]
    },
    {
        category: "Kleding (Februari - Koud/Nat)",
        items: [
            "Waterdichte Winterjas",
            "Comfortabele Wandelschoenen",
            "Sjaal, Muts & Handschoenen",
            "Warme Truien (Laagjes)",
            "Paraplu (Compact)",
            "Ondergoed & Sokken"
        ]
    },
    {
        category: "Speciaal voor Roy",
        items: [
            "Medicijnen (Voldoende voorraad + extra)",
            "Medisch Paspoort",
            "Canon Camera",
            "Oplader Camera",
            "Lege SD-kaart",
            "Leesbril"
        ]
    },
    {
        category: "Elektronica & Diversen",
        items: [
            "Telefoonopladers",
            "Powerbank (Belangrijk voor maps!)",
            "Toiletartikelen",
            "Zonnebril (je weet nooit)",
            "Kleine rugzak voor overdag"
        ]
    }
];

// --- HELPER FUNCTIONS ---

function getIcon(type) {
    if (type.includes("Voetbal")) return "⚽";
    if (type.includes("Techniek")) return "⚙️";
    if (type.includes("Foto")) return "📷";
    if (type.includes("Eten")) return "🍽️";
    if (type.includes("Stad")) return "🏰";
    return "🚇";
}

// --- CORE FUNCTIONS (Attached to window for HTML access) ---

// We koppelen deze functie aan window zodat 'onclick="switchDay(0)"' in de HTML werkt
window.switchDay = function(dayIndex) {
    // Update tabs
    document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
        if (idx === dayIndex) {
            btn.classList.add('border-amber-500', 'text-amber-700', 'bg-white');
            btn.classList.remove('border-transparent');
        } else {
            btn.classList.remove('border-amber-500', 'text-amber-700', 'bg-white');
            btn.classList.add('border-transparent');
        }
    });

    // Render Content
    const day = itineraryData[dayIndex];
    const container = document.getElementById('day-content');
    
    // Safety check if element exists
    if (!container) return;

    let html = `
        <div class="animate-fade-in">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-stone-800">${day.date}: ${day.title}</h3>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${day.weather}</span>
            </div>
            <div class="space-y-6 relative border-l-2 border-stone-200 ml-3 pl-8 pb-4">
    `;

    day.items.forEach(item => {
        const isHighlight = item.highlight ? 'ring-2 ring-amber-400 bg-amber-50' : 'bg-white';
        const icon = getIcon(item.type);
        
        html += `
            <div class="relative ${isHighlight} p-4 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <span class="absolute -left-[41px] top-4 h-6 w-6 rounded-full bg-stone-100 border-2 border-stone-300 flex items-center justify-center text-xs">
                    ${icon}
                </span>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                        <span class="text-sm font-bold text-amber-600">${item.time}</span>
                        <h4 class="text-lg font-semibold text-stone-900">${item.title}</h4>
                        <p class="text-stone-600 mt-1">${item.desc}</p>
                    </div>
                    ${item.type !== 'Logistiek' ? `<span class="text-xs px-2 py-1 bg-stone-100 text-stone-500 rounded self-start sm:self-auto whitespace-nowrap">${item.type}</span>` : ''}
                </div>
                ${item.note ? `
                    <div class="mt-3 pt-3 border-t border-stone-200/50 flex items-center gap-2 text-sm text-stone-500 italic">
                        <span>💡</span> ${item.note}
                    </div>
                ` : ''}
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

// Ook deze functie moet globaal zijn voor de filter dropdown
window.renderLocations = function(filter = "all") {
    const grid = document.getElementById('locationGrid');
    if (!grid) return;
    
    grid.innerHTML = "";

    locations.forEach(loc => {
        if (filter !== "all" && loc.category !== filter && !loc.category.includes(filter)) return;

        const stars = "⭐".repeat(loc.photo) + "<span class='text-stone-300'>" + "⭐".repeat(5 - loc.photo) + "</span>";
        
        const card = document.createElement('div');
        card.className = "bg-white rounded-lg border border-stone-200 shadow-sm p-5 hover:shadow-md transition-all flex flex-col h-full";
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-amber-600">${loc.category}</span>
                <span class="text-xs px-2 py-1 bg-stone-100 rounded-full text-stone-600">${loc.effort}</span>
            </div>
            <h4 class="font-bold text-lg text-stone-800 mb-2">${loc.name}</h4>
            <p class="text-sm text-stone-600 mb-4 flex-grow">"${loc.roy}"</p>
            
            <div class="space-y-3 pt-4 border-t border-stone-100 text-sm">
                <div class="flex justify-between">
                    <span class="text-stone-500">Foto Potentie:</span>
                    <span>${stars}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-stone-500">Vervoer:</span>
                    <span class="text-right text-stone-800 font-medium">${loc.transport}</span>
                </div>
                <a href="${loc.url}" target="_blank" class="block w-full text-center py-2 px-4 bg-stone-800 hover:bg-amber-600 text-white rounded font-medium transition-colors mt-2">
                    Bezoek Website 🌐
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- PACKING LIST RENDER FUNCTION ---
window.renderPackingList = function() {
    const grid = document.getElementById('packing-grid');
    if (!grid) return;

    grid.innerHTML = "";

    packingList.forEach((group, groupIndex) => {
        const section = document.createElement('div');
        section.className = "space-y-3";
        
        let html = `<h3 class="font-bold text-stone-800 border-b border-stone-200 pb-1 mb-2">${group.category}</h3>
                    <ul class="space-y-2">`;
        
        group.items.forEach((item, itemIndex) => {
            // Unieke ID voor elke checkbox
            const id = `pack-${groupIndex}-${itemIndex}`;
            // Check of item al was aangevinkt (localStorage)
            const isChecked = localStorage.getItem(id) === 'true' ? 'checked' : '';
            const lineThrough = isChecked ? 'line-through text-stone-400' : 'text-stone-700';

            html += `
                <li class="flex items-start gap-3">
                    <input type="checkbox" id="${id}" class="mt-1 h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500" ${isChecked} onchange="toggleItem('${id}')">
                    <label id="label-${id}" for="${id}" class="text-sm ${lineThrough} cursor-pointer select-none">${item}</label>
                </li>
            `;
        });
        
        html += `</ul>`;
        section.innerHTML = html;
        grid.appendChild(section);
    });
}

// Functie om de status van checkboxes op te slaan
window.toggleItem = function(id) {
    const checkbox = document.getElementById(id);
    const label = document.getElementById(`label-${id}`);
    
    if (checkbox.checked) {
        localStorage.setItem(id, 'true');
        label.classList.add('line-through', 'text-stone-400');
        label.classList.remove('text-stone-700');
    } else {
        localStorage.removeItem(id);
        label.classList.remove('line-through', 'text-stone-400');
        label.classList.add('text-stone-700');
    }
}


// --- MAP FUNCTION ---
window.initMap = function() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer || typeof L === 'undefined') return;

    // Centered roughly on Central/East London
    const map = L.map('map').setView([51.52, -0.09], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(loc => {
        if (loc.lat && loc.lng) {
            const marker = L.marker([loc.lat, loc.lng]).addTo(map);
            marker.bindPopup(`
                <div class="text-center">
                    <strong class="text-sm font-bold text-stone-900">${loc.name}</strong><br>
                    <span class="text-xs text-stone-500">${loc.category}</span>
                </div>
            `);
        }
    });
}

// --- INITIALIZATION ---
// Dit is de functie die we vanuit main.js aanroepen
export function initApp() {
    // 1. Bepaal automatisch de juiste startdag
    let startDayIndex = 0;
    const today = new Date();
    
    // Stel de trip startdatum in: 15 Februari 2026
    const tripStartDate = new Date(2026, 1, 15);
    
    // Zet beide datums naar middernacht om puur op dagen te vergelijken
    const current = new Date(today);
    current.setHours(0, 0, 0, 0);
    
    const start = new Date(tripStartDate);
    start.setHours(0, 0, 0, 0);
    
    // Bereken het verschil in dagen
    const diffTime = current - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays >= 0 && diffDays < itineraryData.length) {
        startDayIndex = diffDays;
    }

    // 2. Initialiseer de tabs op de berekende dag
    window.switchDay(startDayIndex);
    
    // 3. Initialiseer de kaart
    window.initMap();
    
    // 4. Initialiseer de locaties
    window.renderLocations();

    // 5. Initialiseer de inpaklijst
    window.renderPackingList();
    
    // 6. Koppel de filter dropdown
    const filterSelect = document.getElementById('categoryFilter');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => window.renderLocations(e.target.value));
    }
}
