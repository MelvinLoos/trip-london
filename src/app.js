// --- DATA STORAGE ---
// Data from CSV and Markdown files
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
            { time: "09:00", title: "The Barbican", desc: "Brutalisme en binnentuinen (Conservatory).", type: "Fotografie" },
            { time: "11:30", title: "Lunch Spitalfields", desc: "Overdekte markt met veel opties.", type: "Eten/Drink" },
            { time: "13:15", title: "Naar Vliegveld", desc: "DLR terug naar LCY.", type: "Logistiek" },
            { time: "15:15", title: "Vlucht Vertrekt", desc: "Einde van de trip.", type: "Logistiek" }
        ]
    }
];

// Locations with added URLS
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

// --- DOM ELEMENTS & RENDER FUNCTIONS ---

// 1. Itinerary Renderer
function switchDay(dayIndex) {
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
    
    let html = `
        <div class="animate-fade-in">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-stone-800">${day.date}: ${day.title}</h3>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${day.weather}</span>
            </div>
            <div class="space-y-6 relative border-l-2 border-stone-200 ml-3 pl-8 pb-4">
    `;

    day.items.forEach(item => {
        const isHighlight = item.highlight ? 'ring-2 ring-amber-400/50 bg-amber-50/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm';
        const icon = getIcon(item.type);
        
        html += `
            <div class="relative ${isHighlight} p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <span class="absolute -left-[45px] top-6 h-8 w-8 rounded-full bg-white border-2 border-stone-300 flex items-center justify-center text-sm shadow-sm group-hover:scale-110 group-hover:border-amber-400 transition-all">
                    ${icon}
                </span>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div class="flex-grow">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-sm font-black text-amber-600 tracking-tighter">${item.time}</span>
                            <span class="h-1 w-1 bg-stone-300 rounded-full"></span>
                            <span class="text-[10px] font-bold uppercase tracking-widest text-stone-400">${item.type}</span>
                        </div>
                        <h4 class="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">${item.title}</h4>
                        <p class="text-stone-600 leading-relaxed">${item.desc}</p>
                    </div>
                </div>
                ${item.note ? `
                    <div class="mt-4 pt-4 border-t border-stone-200/50 flex items-start gap-3 text-sm text-stone-600 italic leading-relaxed">
                        <span class="text-amber-500 font-bold shrink-0">💡 PRO TIP:</span> 
                        <span>${item.note}</span>
                    </div>
                ` : ''}
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

function getIcon(type) {
    if (type.includes("Voetbal")) return "⚽";
    if (type.includes("Techniek")) return "⚙️";
    if (type.includes("Foto")) return "📷";
    if (type.includes("Eten")) return "🍽️";
    if (type.includes("Stad")) return "🏰";
    return "🚇";
}

// 2. Location List Renderer
function renderLocations(filter = "all") {
    const grid = document.getElementById('locationGrid');
    grid.innerHTML = "";

    locations.forEach(loc => {
        if (filter !== "all" && loc.category !== filter && !loc.category.includes(filter)) return;

        const stars = "⭐".repeat(loc.photo) + "<span class='text-stone-300'>" + "⭐".repeat(5 - loc.photo) + "</span>";
        
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl border border-stone-200 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group";
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <span class="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-1 rounded-md">${loc.category}</span>
                <span class="text-xs px-2 py-1 bg-stone-100 rounded-full text-stone-600 font-medium">${loc.effort}</span>
            </div>
            <h4 class="font-bold text-xl text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">${loc.name}</h4>
            <p class="text-sm text-stone-600 mb-6 flex-grow leading-relaxed italic">"${loc.roy}"</p>
            
            <div class="space-y-3 pt-4 border-t border-stone-100 text-sm">
                <div class="flex justify-between items-center">
                    <span class="text-stone-500 font-medium">Foto Potentie:</span>
                    <span class="filter drop-shadow-sm">${stars}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-stone-500 font-medium">Vervoer:</span>
                    <span class="text-right text-stone-900 font-semibold">${loc.transport}</span>
                </div>
                <a href="${loc.url}" target="_blank" class="block w-full text-center py-3 px-4 bg-stone-900 hover:bg-amber-600 text-white rounded-xl font-bold transition-all duration-300 mt-4 shadow-lg hover:shadow-amber-200">
                    Bezoek Website ↗
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Init Tabs
    switchDay(0);
    
    // Init Location Grid
    renderLocations();
    document.getElementById('categoryFilter').addEventListener('change', (e) => renderLocations(e.target.value));
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Make switchDay available globally for onclick handlers
window.switchDay = switchDay;
