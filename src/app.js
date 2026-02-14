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
        title: "Rivier & Historie",
        weather: "🌦️ Lichte Regen (35%)",
        items: [
            { time: "09:15", title: "Uber Boat naar Tower", desc: "Vanaf Limehouse Pier. Overdekt genieten van de skyline.", type: "Logistiek" },
            { time: "10:00", title: "Tower of London", desc: "Focus op Witte Toren en Kroonjuwelen (binnen).", type: "Stad & Sfeer", highlight: true, note: "Gebruik Explorer Pass." },
            { time: "13:00", title: "Lunch", desc: "Snel broodje op Southbank of bij Tower Hill.", type: "Eten/Drink" },
            { time: "14:00", title: "London Transport Museum", desc: "Covent Garden. Techniek van bussen en treinen.", type: "Techniek", note: "Volledig overdekt." },
            { time: "18:30", title: "Diner bij Toba", desc: "Indonesisch dineren bij Piccadilly Circus.", type: "Eten/Drink", highlight: true }
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
    { name: "Tottenham Hotspur Stadium (Tour)", category: "Voetbal", roy: "Technisch hoogstandje, uitschuifbaar veld.", photo: 5, effort: "Gemiddeld", transport: "Overground via Stratford", url: "https://www.tottenhamhotspurstadium.com/see-do/products/stadium-tour-for-one/" },
    { name: "Loftus Road (QPR)", category: "Voetbal", roy: "Traditionele sfeer, compacte architectuur.", photo: 4, effort: "Gemiddeld", transport: "Central Line", url: "https://www.qpr.co.uk/" },
    { name: "Mayfair Showrooms", category: "Techniek/Auto's", roy: "Technische specs, luxe lak en motoren.", photo: 4, effort: "Gemiddeld", transport: "Central Line (Bond St)", url: "https://www.google.com/maps/search/luxury+car+showrooms+mayfair+london/" },
    { name: "London Transport Museum", category: "Techniek/Auto's", roy: "Evolutie techniek, stoom tot metro.", photo: 5, effort: "Gemiddeld", transport: "Covent Garden", url: "https://www.ltmuseum.co.uk/visit" },
    { name: "The Barbican Estate", category: "Fotografie", roy: "Brutalistisch, patronen, texturen.", photo: 5, effort: "Gemiddeld", transport: "DLR naar Bank", url: "https://www.barbican.org.uk" },
    { name: "Kings Cross Gasholders", category: "Techniek/Auto's", roy: "Industrieel erfgoed herbestemd.", photo: 4, effort: "Laag", transport: "Northern Line", url: "https://www.gasholderslondon.co.uk/" },
    { name: "Columbia Road Market", category: "Fotografie", roy: "Kleurrijk spektakel, straatfotografie.", photo: 4, effort: "Gemiddeld", transport: "Overground Hoxton", url: "https://columbiaroad.info/" },
    { name: "Toba", category: "Eten/Drink", roy: "Verfijnd Indonesisch, Senang gevoel.", photo: 3, effort: "Laag", transport: "Piccadilly Circus", url: "https://tobalondon.co.uk/" },
    { name: "Bali Bali", category: "Eten/Drink", roy: "Traditionele smaken, familie-erfgoed.", photo: 2, effort: "Laag", transport: "Soho", url: "https://balibali.co.uk/" },
    { name: "The Grapes", category: "Eten/Drink", roy: "Historie, maritiem, eigen buurt.", photo: 4, effort: "Laag", transport: "Lopen", url: "https://www.thegrapes.co.uk/" },
    { name: "London City Airport", category: "Logistiek", roy: "Comfortabel aankomen.", photo: 2, effort: "Laag", transport: "DLR", url: "https://www.londoncityairport.com/" },
    { name: "Brick Lane (Beigel)", category: "Eten/Drink", roy: "Culinair icoon.", photo: 4, effort: "Gemiddeld", transport: "Overground", url: "https://bricklanebeigel.co.uk/" },
    { name: "Tower of London", category: "Stad & Sfeer", roy: "Historie en kroonjuwelen.", photo: 5, effort: "Gemiddeld", transport: "Uber Boat / DLR", url: "https://www.hrp.org.uk/tower-of-london/" }
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

// --- INITIALIZATION ---
// Dit is de functie die we vanuit main.js aanroepen
export function initApp() {
    // 1. Bepaal automatisch de juiste startdag
    let startDayIndex = 0;
    const today = new Date();
    
    // Stel de trip startdatum in: 15 Februari 2026
    // Let op: Maanden zijn 0-indexed in JS, dus 1 = Februari
    const tripStartDate = new Date(2026, 1, 15);
    
    // Zet beide datums naar middernacht om puur op dagen te vergelijken
    const current = new Date(today);
    current.setHours(0, 0, 0, 0);
    
    const start = new Date(tripStartDate);
    start.setHours(0, 0, 0, 0);
    
    // Bereken het verschil in dagen
    const diffTime = current - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Logica:
    // Als diffDays < 0 (het is voor de trip): index 0
    // Als diffDays >= 0 en < lengte (tijdens trip): index = diffDays
    // Als diffDays >= lengte (na trip): index 0 (of laatste dag, maar 0 is veilige default)
    if (diffDays >= 0 && diffDays < itineraryData.length) {
        startDayIndex = diffDays;
    }

    // 2. Initialiseer de tabs op de berekende dag
    window.switchDay(startDayIndex);
    
    // 3. Initialiseer de locaties
    window.renderLocations();
    
    // 4. Koppel de filter dropdown
    const filterSelect = document.getElementById('categoryFilter');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => window.renderLocations(e.target.value));
    }
}