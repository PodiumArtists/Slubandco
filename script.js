// --- Core Data Structure ---
const luxuryData = {
    "vehicles": {
        id: "vehicles",
        title: "Vehicles",
        emotion: "A machine built for purpose, transformed into a statement of style and engineering mastery. Every curve, every rev, is an echo of passion, heritage, and uncompromising speed. Our focus is on timeless classics that defined an era.",
        icon: `<svg class="w-8 h-8 text-navy-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
        items: [
            {
                id: 'alfa_gtv',
                name: 'Alfa Romeo GTV & Jr (1968+)',
                brand: 'Alfa Romeo',
                tags: ['Classic', 'Coupe', 'Italian', 'RWD', 'Manual'],
                priceRange: '$40,000 - $120,000',
                priceLow: 40000, priceHigh: 120000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Alfa+Romeo+GTV',
                detail: 'The beautiful Bertone-designed coupe, blending Italian flair with a spirited twin-cam engine for an engaging driving experience.',
                brief: 'A legendary Italian coupe with stunning Bertone design and a spirited twin-cam engine. A driver’s car first.',
                nerdOut: 'These models are celebrated for their fantastic handling and the iconic sound of their all-alloy twin-cam engines, designed by Giuseppe Busso. The GTV (Veloce) and GT Junior differ mainly by engine size, but both share the light, agile chassis beloved by enthusiasts.'
            },
            {
                id: 'bmw_e9',
                name: 'BMW E9 3.0 CSi Coupe',
                brand: 'BMW',
                tags: ['Classic', 'Coupe', 'German', 'Luxury', 'RWD'],
                priceRange: '$80,000 - $180,000',
                priceLow: 80000, priceHigh: 180000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=BMW+3.0+CSi',
                detail: 'The pillarless E9 coupe is the antecedent of modern BMW luxury and performance, famed for its elegant styling and powerful M30 straight-six engine.',
                brief: 'The gorgeous pillarless E9 coupe, an icon of 70s luxury performance. The CSi boasts reliable fuel injection.',
                nerdOut: 'The "CSi" designation indicates Bosch D-Jetronic fuel injection, offering better performance and reliability than the earlier carbureted models. These Karmann-built cars are notorious for rust issues, making pristine examples extremely valuable collector items.'
            },
            {
                id: 'detomaso_pantera',
                name: 'DeTomaso Pantera',
                brand: 'DeTomaso',
                tags: ['Classic', 'Supercar', 'Mid-Engine', 'Italian', 'V8', 'Manual'],
                priceRange: '$120,000 - $300,000',
                priceLow: 120000, priceHigh: 300000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=DeTomaso+Pantera',
                detail: 'A rare, Italian-bodied supercar powered by a reliable American Ford V8. The Pantera is a quintessential wedge-shaped 70s icon.',
                brief: 'A rare, mid-engined supercar that fuses sleek Italian design with raw American Ford V8 power for a unique driving thrill.',
                nerdOut: 'Designed by Tom Tjaarda, the Pantera utilized a monocoque chassis (unlike the earlier Mangusta), which simplified construction. The use of the Ford 351 Cleveland engine provided easy maintenance and massive, accessible torque, giving it a unique cross-continental performance blend.'
            },
            {
                id: 'volvo_p1800',
                name: 'Volvo P1800',
                brand: 'Volvo',
                tags: ['Classic', 'Coupe', 'GT', 'Reliable', 'Manual', 'Swedish'],
                priceRange: '$45,000 - $100,000',
                priceLow: 45000, priceHigh: 100000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Volvo+P1800',
                detail: 'A stylish, reliable Swedish sports coupe popularized by *The Saint*. Known for its beautiful lines and incredible longevity.',
                brief: 'A beautifully styled Swedish GT, famed for its reliability and popularized by the TV show *The Saint*. A truly elegant coupe.',
                nerdOut: 'The P1800 holds the Guinness World Record for the highest mileage in a non-commercial vehicle, proving its bulletproof B18/B20 engine design. Its elegant, Italian-inspired lines were designed by Pelle Petterson.'
            },
            {
                id: 'mgb_gt',
                name: 'MGB GT',
                brand: 'MG',
                tags: ['Classic', 'Coupe', 'British', 'Affordable', 'Manual'],
                priceRange: '$20,000 - $45,000',
                priceLow: 20000, priceHigh: 45000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=MGB+GT',
                detail: 'A classic British hardtop coupe offering affordable vintage style and an engaging, lightweight driving feel.',
                brief: 'The stylish hatchback version of the beloved MGB roadster. Offers great accessibility to the classic British sports car experience.',
                nerdOut: 'The GT version features a beautiful hatchback design by Pininfarina, offering better luggage space and rigidity than the Roadster. It uses the reliable B-Series engine, making it one of the most accessible and popular classic British sports cars for restoration and daily use.'
            },
        ]
    },
    "timepieces": {
        id: "timepieces",
        title: "Timepieces",
        emotion: "More than just tracking seconds, a timepiece is a miniature cosmos of cogs and springs, a heritage on your wrist that tells the time across generations. It’s a mechanical miracle.",
        icon: `<svg class="w-8 h-8 text-navy-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        items: [
             {
                id: 'jlc_reverso',
                name: 'JLC Reverso Duoface',
                brand: 'Jaeger-LeCoultre',
                tags: ['Luxury', 'Dress', 'Rectangular', 'Swiss', 'Two-Sided'],
                priceRange: '$12,000 - $30,000',
                priceLow: 12000, priceHigh: 30000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=JLC+Reverso',
                detail: 'The ingenious rectangular watch with a swiveling case, originally designed for polo players. The Duoface features two distinct dials for two time zones.',
                brief: 'An art deco icon with a swiveling case, allowing the wearer to switch between two distinct dials, perfect for travel.',
                nerdOut: 'The Reverso’s magic lies in its ingenious sliding and swiveling mechanism patented in 1931. The Duoface complication features two sets of hands driven by a single movement, with the reverse dial often used for a secondary time zone or a more decorative display.'
            },
            {
                id: 'rolex_submariner',
                name: 'Rolex Submariner No-Date',
                brand: 'Rolex',
                tags: ['Iconic', 'Dive Watch', 'Tool Watch', 'Swiss', 'Robust'],
                priceRange: '$9,000 - $15,000',
                priceLow: 9000, priceHigh: 15000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Rolex+Sub',
                detail: 'The benchmark dive watch. Rugged, versatile, and instantly recognizable, the Submariner is perhaps the most famous luxury watch ever produced.',
                brief: 'The ultimate tool watch. Simple, robust, and the original template for all modern dive watches. A cornerstone of any collection.',
                nerdOut: 'First launched in 1953, the Submariner was one of the first watches to be water-resistant to 100 meters. The "No-Date" version is favored by purists for its symmetrical dial and adherence to the original, simpler design.'
            },
            {
                id: 'omega_speedmaster',
                name: 'Omega Speedmaster Professional',
                brand: 'Omega',
                tags: ['Chronograph', 'Space', 'Iconic', 'Manual Wind', 'Tool Watch'],
                priceRange: '$5,000 - $8,000',
                priceLow: 5000, priceHigh: 8000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Omega+Speedy',
                detail: 'The "Moonwatch." The only watch certified and worn on the moon. A legendary chronograph with an unrivaled history.',
                brief: 'The quintessential chronograph and the only watch officially qualified for all manned NASA space missions. An icon of exploration.',
                nerdOut: 'Worn by astronauts on all six moon landings, the Speedmaster’s Caliber 3861 (an evolution of the Caliber 861) is manual-wind, as electronics were unreliable in space. NASA subjected the watch to extreme testing in heat, cold, and zero gravity.'
            },
            {
                id: 'cartier_tank',
                name: 'Cartier Tank Must',
                brand: 'Cartier',
                tags: ['Dress', 'Iconic', 'Rectangular', 'French', 'Slim'],
                priceRange: '$3,500 - $6,000',
                priceLow: 3500, priceHigh: 6000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Cartier+Tank',
                detail: 'Designed in 1917, the Tank is inspired by the view of a military tank from above. Its clean lines and Roman numerals define the essence of a dress watch.',
                brief: 'An Art Deco masterpiece. Its clean, geometric design is instantly recognizable and has been worn by style icons for over a century.',
                nerdOut: 'Louis Cartier designed the watch in 1917, taking inspiration from the Renault tanks he saw on the Western Front. Its vertical sidebars (brancards) represent the tank treads, and the case the cockpit. It remains one of the most successful rectangular watch designs in history.'
            },
        ]
    },
    "wine": {
        id: "wine",
        title: "Wine",
        emotion: "Liquid history captured in a bottle. Each vintage is a unique chapter, defined by weather, soil, and the skill of the vintner. It’s an investment that deepens with time.",
        icon: `<svg class="w-8 h-8 text-navy-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V19a2 2 0 002 2h8a2 2 0 002-2V7a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v12a3 3 0 01-3 3H5a3 3 0 01-3-3V4z"></path></svg>`,
        items: [
             {
                id: 'chateau_lafite',
                name: 'Château Lafite Rothschild',
                brand: 'Lafite',
                tags: ['Bordeaux', 'First Growth', 'Red', 'Investment'],
                priceRange: '$800 - $5,000+',
                priceLow: 800, priceHigh: 5000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Lafite+Rothschild',
                detail: 'One of the five First Growth Bordeaux wines. Known for its elegance, finesse, and extraordinary ability to age for decades. A benchmark for Cabernet Sauvignon.',
                brief: 'One of the world\'s most prestigious wines. Exemplifies elegance, complexity, and age-worthiness from the Pauillac region of Bordeaux.',
                nerdOut: 'Lafite has one of the longest documented histories in Bordeaux, first mentioned in 1234. It was classified as a First Growth in the 1855 Classification. The wine is characterized by its high percentage of Cabernet Sauvignon (typically 80-95%) and subtle notes of cedar, tobacco, and blackcurrant.'
            },
            {
                id: 'romanee_conti',
                name: 'Domaine de la Romanée-Conti',
                brand: 'DRC',
                tags: ['Burgundy', 'Pinot Noir', 'Rarest', 'Monopole'],
                priceRange: '$15,000 - $50,000+',
                priceLow: 15000, priceHigh: 50000,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=DRC',
                detail: 'Arguably the most famous and expensive wine in the world. Produced from a tiny, monopole (single-owner) vineyard in Burgundy, representing the pinnacle of Pinot Noir.',
                brief: 'The pinnacle of Burgundy. Exceptionally rare, deeply complex, and the ultimate expression of Pinot Noir from a tiny, revered vineyard.',
                nerdOut: 'Romanée-Conti is a 1.8-hectare vineyard in the Vosne-Romanée appellation. The total annual production is only around 6,000 bottles. Its price is due to its rarity, immense reputation, and the profound, ethereal quality of the wine, often described as having "silk and velvet" texture.'
            },
        ]
    },
    "crystal": {
        id: "crystal",
        title: "Crystal & Glassware",
        emotion: "A delicate blend of fire and sand, shaped by the breath of a master. The clarity, weight, and ring of fine crystal elevate every moment into a luxurious ritual.",
        icon: `<svg class="w-8 h-8 text-navy-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`,
        items: [
            {
                id: 'baccarat_harcourt',
                name: 'Baccarat Harcourt 1841',
                brand: 'Baccarat',
                tags: ['French', 'Tableware', 'Iconic', 'Heavy', 'Handmade'],
                priceRange: '$200 - $600 per glass',
                priceLow: 200, priceHigh: 600,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Baccarat+Harcourt',
                detail: 'The oldest service still produced by Baccarat. Known for its architectural, beveled cuts and heavy base, it has graced the tables of royalty and presidents.',
                brief: 'The timeless, classic cut crystal of Baccarat. A piece of French history that adds significant weight and brilliance to any formal setting.',
                nerdOut: 'The Harcourt pattern was originally ordered by King Louis-Philippe in 1841. Its six beveled faces and geometric stem make it instantly recognizable. It is a symbol of absolute luxury and is still entirely mouth-blown and hand-cut in France.'
            },
            {
                id: 'riedel_sommeliers',
                name: 'Riedel Sommeliers Series',
                brand: 'Riedel',
                tags: ['Austrian', 'Wine Specific', 'Handmade', 'Thin'],
                priceRange: '$100 - $250 per glass',
                priceLow: 100, priceHigh: 250,
                imageUrl: 'https://placehold.co/400x250/f0f0f0/1E3A8A?text=Riedel+Sommeliers',
                detail: 'The first line of wine glasses designed specifically for the grape variety. Each glass is shaped to enhance the aromas and flavor profile of a specific wine.',
                brief: 'The original wine-specific glass. Hand-blown, ultra-thin, and perfectly shaped to maximize the enjoyment of different varietals of wine.',
                nerdOut: 'Introduced in 1973, this series revolutionized wine drinking by proving that the shape of the glass dramatically affects the perception of wine. Claus Riedel was the first to realize that the glass should be a "tool," not a decorative vessel, focusing on the size, rim diameter, and shape of the bowl.'
            },
        ]
    }
};

let currentCategory = 'home';
let currentItem = null;
let activeFilters = {
    brand: null,
    priceTier: null,
    tags: []
};
let availableFilterOptions = {};

// --- Utility Functions ---

/**
 * Generates an HMTL string for an item card.
 * @param {object} item - The item object.
 * @param {string} categoryId - The ID of the category.
 */
function createItemCard(item, categoryId) {
    // Determine the Price Tier
    let priceTier = '';
    if (item.priceLow < 40000) {
        priceTier = 'Affordable';
    } else if (item.priceLow < 120000) {
        priceTier = 'Mid-Range';
    } else {
        priceTier = 'High-End';
    }

    return `
        <div onclick="renderPage('${categoryId}', '${item.id}')" class="light-card p-4 flex flex-col cursor-pointer transition-shadow">
            <img src="${item.imageUrl}" alt="${item.name}" class="w-full h-40 object-cover rounded-md mb-4 border border-gray-100">
            <h3 class="text-xl font-bold luxury-heading text-black">${item.name}</h3>
            <p class="text-sm text-charcoal mb-2">${item.brand} &bull; <span class="font-semibold text-navy-accent">${priceTier}</span></p>
            <p class="text-lg font-semibold text-black">${item.priceRange}</p>
            <p class="text-sm text-charcoal mt-2">${item.detail}</p>
        </div>
    `;
}

// --- Filtering Logic ---

/**
 * Gets unique options for the filter sidebar from the category data.
 */
function getUniqueFilterOptions(categoryItems) {
    const options = {
        brand: new Set(),
        priceTier: new Set(),
        tags: new Set()
    };
    
    categoryItems.forEach(item => {
        options.brand.add(item.brand);
        item.tags.forEach(tag => options.tags.add(tag));
        
        // Price Tier Logic (as defined in item card)
        if (item.priceLow < 40000) {
            options.priceTier.add('Affordable');
        } else if (item.priceLow < 120000) {
            options.priceTier.add('Mid-Range');
        } else {
            options.priceTier.add('High-End');
        }
    });

    // Store the unique, sorted options
    availableFilterOptions.brand = Array.from(options.brand).sort();
    availableFilterOptions.priceTier = ['Affordable', 'Mid-Range', 'High-End']; // Explicit order
    availableFilterOptions.tags = Array.from(options.tags).sort();
}

/**
 * Renders the filter sidebar for the current category.
 */
function renderFilters() {
    const categoryId = currentCategory;
    const { brand, priceTier, tags } = availableFilterOptions;
    
    const filterHtml = (title, key, options) => `
        <div class="mb-6">
            <h4 onclick="toggleCollapse('${key}-filters')" class="filter-header text-lg font-bold text-black flex justify-between items-center pb-2 border-b border-gray-200">
                ${title}
                <svg class="w-5 h-5 text-charcoal transition-transform duration-300" id="${key}-filters-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </h4>
            <div id="${key}-filters" class="collapse-content expanded space-y-2 pt-3">
                ${options.map(option => {
                    const isActive = key === 'tags' 
                        ? activeFilters.tags.includes(option) 
                        : activeFilters[key] === option;
                    return `
                        <span onclick="handleFilterChange('${key}', '${option}')" 
                              class="filter-tag inline-block px-3 py-1 text-sm rounded-full cursor-pointer ${isActive ? 'active' : ''}">
                            ${option}
                        </span>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    return `
        <div id="filter-sidebar" class="light-card p-6 sticky top-[90px] h-fit">
            <h3 class="text-2xl font-extrabold luxury-heading text-navy-accent mb-4 border-b border-navy-accent/50 pb-2">Filter ${luxuryData[categoryId].title}</h3>
            
            ${filterHtml('Brand / Maker', 'brand', brand)}
            ${filterHtml('Price Tier', 'priceTier', priceTier)}
            ${filterHtml('Tags', 'tags', tags)}
            
            <button onclick="resetFilters()" class="w-full text-center text-sm mt-4 text-charcoal hover:text-navy-accent border border-gray-300 hover:border-navy-accent/50 py-2 rounded-lg transition-all">
                Clear Filters
            </button>
        </div>
    `;
}

/**
 * Handles a change in the filter selection.
 */
function handleFilterChange(key, value) {
    if (key === 'tags') {
        const index = activeFilters.tags.indexOf(value);
        if (index > -1) {
            activeFilters.tags.splice(index, 1); // Remove tag
        } else {
            activeFilters.tags.push(value); // Add tag
        }
    } else {
        // Toggle single-select filters (Brand, Price Tier)
        activeFilters[key] = activeFilters[key] === value ? null : value;
    }
    
    renderCategory(currentCategory);
}

/**
 * Resets all active filters and re-renders the page.
 */
function resetFilters() {
    activeFilters = {
        brand: null,
        priceTier: null,
        tags: []
    };
    renderCategory(currentCategory);
}

/**
 * Applies the active filters to the list of items.
 */
function filterItems(items) {
    return items.filter(item => {
        // 1. Filter by Brand
        if (activeFilters.brand && item.brand !== activeFilters.brand) {
            return false;
        }

        // 2. Filter by Price Tier
        if (activeFilters.priceTier) {
            let itemTier = '';
            if (item.priceLow < 40000) itemTier = 'Affordable';
            else if (item.priceLow < 120000) itemTier = 'Mid-Range';
            else itemTier = 'High-End';
            
            if (itemTier !== activeFilters.priceTier) {
                return false;
            }
        }

        // 3. Filter by Tags (must have ALL selected tags)
        if (activeFilters.tags.length > 0) {
            return activeFilters.tags.every(tag => item.tags.includes(tag));
        }

        return true;
    });
}

/**
 * Toggles the collapse/expand state for a filter section.
 */
function toggleCollapse(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.style.transform = 'rotate(-90deg)';
    } else {
        content.classList.add('expanded');
        icon.style.transform = 'rotate(0deg)';
    }
}


// --- Page Rendering Functions ---

/**
 * Renders the home page with category links.
 */
function renderHome() {
    currentCategory = 'home';
    currentItem = null;
    document.getElementById('main-content').innerHTML = `
        <h1 class="text-4xl sm:text-5xl font-extrabold text-black luxury-heading mb-8">Curated Collections</h1>
        <p class="text-lg text-charcoal max-w-3xl mb-12">We simplify the decision process for luxury purchases, providing expertly researched comparisons across a few, highly refined categories. Begin your exploration below.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${Object.values(luxuryData).map(cat => `
                <div onclick="renderPage('${cat.id}')" class="light-card p-6 cursor-pointer text-center flex flex-col items-center">
                    ${cat.icon}
                    <h2 class="text-2xl font-bold luxury-heading text-black mt-3 mb-2">${cat.title}</h2>
                    <p class="text-sm text-charcoal">${cat.emotion.split('. ')[0]}.</p>
                </div>
            `).join('')}
        </div>

        <div class="mt-20 border-t border-gray-200 pt-10">
            <h2 class="text-3xl font-bold luxury-heading text-black mb-4">Did We Miss Something?</h2>
            <p class="text-charcoal mb-6 max-w-2xl">We are continually curating new items. If there is a luxury product you'd like us to research and include, please use the suggestion feature below.</p>
            <button onclick="openContactModal('Home - Suggest')" class="concierge-btn font-bold px-6 py-3 rounded-lg shadow-lg text-lg transition-all">
                Suggest an Item for Curation
            </button>
        </div>
    `;
}

/**
 * Renders a category page with a list of items and filters.
 * @param {string} categoryId - The ID of the category (e.g., 'vehicles').
 */
function renderCategory(categoryId) {
    currentCategory = categoryId;
    currentItem = null;
    const category = luxuryData[categoryId];
    
    // 1. Populate filter options
    getUniqueFilterOptions(category.items);

    // 2. Filter the items
    const filteredItems = filterItems(category.items);
    
    const itemGridHtml = filteredItems.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${filteredItems.map(item => createItemCard(item, categoryId)).join('')}
        </div>
    ` : `
        <p class="text-center text-xl text-charcoal py-12">No items match the current filter criteria.</p>
    `;

    document.getElementById('main-content').innerHTML = `
        <h1 class="text-4xl sm:text-5xl font-extrabold text-black luxury-heading mb-3">${category.title}</h1>
        <p class="text-lg text-charcoal max-w-4xl mb-10">${category.emotion}</p>
        
        <div id="category-view" class="flex flex-col lg:grid">
            ${renderFilters()}
            
            <div id="item-grid-container">
                ${itemGridHtml}
            </div>
        </div>
    `;
}

/**
 * Renders an item detail page with brief and deep-dive.
 * @param {string} categoryId - The ID of the category.
 * @param {string} itemId - The ID of the specific item.
 */
function renderDetail(categoryId, itemId) {
    currentCategory = categoryId;
    currentItem = itemId;
    const category = luxuryData[categoryId];
    const item = category.items.find(i => i.id === itemId);

    if (!item) {
        renderPage('home'); // Fallback
        return;
    }

    document.getElementById('main-content').innerHTML = `
        <button onclick="renderPage('${categoryId}')" class="text-sm text-navy-accent hover:text-black mb-6 flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to ${category.title}
        </button>
        
        <header class="text-center mb-10">
            <h1 class="text-4xl sm:text-5xl font-extrabold text-black mb-2 tracking-tight luxury-heading">${item.name}</h1>
            <h2 class="text-xl sm:text-2xl text-navy-accent font-light">${item.brand} | ${item.priceRange}</h2>
            <div class="mt-4">
                <img src="${item.imageUrl.replace('400x250', '800x500')}" alt="${item.name}" class="w-full max-w-3xl mx-auto object-cover rounded-lg shadow-xl border border-gray-100">
            </div>
        </header>

        <main class="max-w-4xl mx-auto space-y-12">
            <section class="detail-page-card p-6 sm:p-8 rounded-xl border-t-4 border-navy-accent">
                <h2 class="text-3xl font-bold text-black mb-4 section-heading-detail">Curator's Brief (The Take)</h2>
                <div class="text-lg leading-relaxed text-charcoal italic">
                    ${item.brief}
                </div>
                <button onclick="openContactModal('Detail - Engage', '${item.id}')" class="concierge-btn font-bold px-6 py-3 rounded-full text-base mt-6">
                    Engage Curator About ${item.name}
                </button>
            </section>
            
            <section class="detail-page-card p-6 sm:p-8 rounded-xl">
                <h2 class="section-heading-detail text-3xl font-bold text-black mb-4">The Exploration: Deep Dive</h2>
                
                <div class="nerd-out-box p-4 rounded-lg shadow-inner">
                    <h4 class="text-2xl font-bold text-black mb-3 pb-1 border-b border-gray-300">The Mechanical/Historical Details</h4>
                    <p class="text-charcoal mb-4 leading-relaxed">${item.nerdOut}</p>
                    
                    <p class="text-xl font-semibold text-navy-accent mt-4 mb-2 brag-worthy-fact">Brag-Worthy Fact:</p>
                    <p class="text-charcoal leading-relaxed">
                        ${item.detail} 
                    </p>
                </div>

                <div class="mt-6">
                    <h4 class="text-xl font-semibold text-black mb-3">Item Tags</h4>
                    <ul class="flex flex-wrap gap-2">
                        ${item.tags.map(tag => `<li class="filter-tag px-3 py-1 text-sm rounded-full">${tag}</li>`).join('')}
                    </ul>
                </div>
            </section>
        </main>
    `;
}

/**
 * Renders the dedicated Concierge Service page.
 */
function renderConcierge() {
    currentCategory = 'concierge';
    currentItem = null;
    document.getElementById('main-content').innerHTML = `
        <h1 class="text-4xl sm:text-5xl font-extrabold text-black luxury-heading mb-3">Concierge Service: Your Acquisition Partner</h1>
        <p class="text-lg text-charcoal max-w-4xl mb-10">We transition from being a research resource to your private acquisition agent, handling the entire process of sourcing, negotiating, and acquiring your desired luxury item.</p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="light-card p-6">
                <h2 class="text-2xl font-bold luxury-heading text-navy-accent mb-3">Free Consultation & Advice</h2>
                <p class="text-charcoal">Reaching out is completely **free** to chat. We offer complimentary advice on comparisons, market trends, and initial sourcing strategies for any item in our featured collections.</p>
            </div>

            <div class="light-card p-6">
                <h2 class="text-2xl font-bold luxury-heading text-navy-accent mb-3">Commission-Based Acquisition</h2>
                <p class="text-charcoal">For items you wish to purchase, we operate on a **commission basis** by working directly with sellers and dealers. This ensures we secure a specific negotiated rate that benefits both parties, and we handle the legwork.</p>
            </div>

            <div class="light-card p-6">
                <h2 class="text-2xl font-bold luxury-heading text-navy-accent mb-3">Premium Vehicle Services</h2>
                <p class="text-charcoal">For **vehicles**, we offer a suite of services you can pay for:</p>
                <ul class="list-disc list-inside ml-4 mt-3 space-y-1 text-charcoal">
                    <li>Flying out to **personally inspect** the car.</li>
                    <li>Coordinating secure **shipping and delivery**.</li>
                    <li>Full **sourcing and negotiation** of the final price.</li>
                </ul>
                <p class="text-sm mt-3 text-gray-500 italic">If you only need the car sourced and price negotiated, and wish to handle shipping yourself, we simply take a small commission from the final deal.</p>
            </div>
        </div>

        <div class="mt-12 text-center">
             <button onclick="openContactModal('Concierge - Engage')" class="concierge-btn font-bold px-8 py-4 rounded-full text-xl shadow-xl">
                Start Your Acquisition Today
            </button>
        </div>
    `;
}

// --- Main Page Router and SPA Logic ---

/**
 * Renders the correct page based on the current state.
 * @param {string} pageId - 'home', 'concierge', or a category ID.
 * @param {string} [itemId=null] - Optional item ID for detail view.
 */
function renderPage(pageId, itemId = null) {
    // Clear filter state when navigating to a new category/page type
    if (pageId !== currentCategory) {
        resetFilters();
    }
    
    // Smooth transition logic (SPA-like)
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = 0;
    
    setTimeout(() => {
        if (itemId) {
            renderDetail(pageId, itemId);
        } else if (pageId === 'home') {
            renderHome();
        } else if (pageId === 'concierge') {
            renderConcierge();
        } else if (luxuryData[pageId]) {
            renderCategory(pageId);
        } else {
            renderHome(); // Default to home
        }
        
        mainContent.style.opacity = 1;
        window.scrollTo(0, 0); // Scroll to top on new page load
    }, 200); // Wait for fade-out before rendering new content
}

// --- Contact Modal Logic (Smart Form) ---

/**
 * Opens the contact modal and sets the context metadata.
 * @param {string} trigger - Where the button was clicked (e.g., 'Detail - Engage', 'Home - Suggest').
 * @param {string} [itemId=null] - The ID of the item being viewed.
 */
function openContactModal(trigger, itemId = null) {
    const modal = document.getElementById('contact-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const metadataDisplay = document.getElementById('metadata-display');
    const metadataPage = document.getElementById('metadata-page');
    const metadataItem = document.getElementById('metadata-item');
    const metadataTrigger = document.getElementById('metadata-trigger');
    const contactMessage = document.getElementById('contact-message');

    // 1. Set Metadata
    metadataPage.value = currentCategory;
    metadataItem.value = itemId || '';
    metadataTrigger.value = trigger;

    // 2. Configure Modal based on Trigger Type
    if (trigger.includes('Suggest')) {
        // Suggestion Feature
        modalTitle.textContent = "Suggest an Item for Curation";
        modalDescription.textContent = "Tell us what item or brand you think we should feature next. We appreciate your input!";
        metadataDisplay.style.display = 'none';
        contactMessage.placeholder = "Your Item Suggestion (Brand, Model/Item Name)";
        
    } else {
        // Standard Inquiry/Engage Curator
        modalTitle.textContent = "Engage Your Curator";
        modalDescription.textContent = "Initial consultation is free. Let us know how we can assist you.";
        metadataDisplay.style.display = 'block';
        contactMessage.placeholder = "Your Request / Item Inquiry";
        
        // Populate Metadata Display
        let metadataHtml = `**Page:** ${currentCategory}`;
        if (itemId) {
            const item = luxuryData[currentCategory].items.find(i => i.id === itemId);
            metadataHtml += ` | **Item:** ${item ? item.name : itemId}`;
        }
        metadataHtml += ` | **Trigger:** ${trigger}`;
        metadataDisplay.innerHTML = metadataHtml;
    }

    modal.classList.add('flex');
    modal.classList.remove('hidden');
}

/**
 * Closes the contact modal.
 */
function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.getElementById('contact-form').reset();
}

/**
 * Handles the form submission (simulated in a static site).
 */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    // Gather metadata
    const metadata = {
        page: document.getElementById('metadata-page').value,
        item: document.getElementById('metadata-item').value,
        trigger: document.getElementById('metadata-trigger').value
    };

    let subject = metadata.trigger.includes('Suggest') ? 
        `New Item Suggestion from ${name}` : 
        `New Concierge Inquiry from ${name}`;

    // --- SIMULATE EMAIL SUBMISSION ---
    alert(`
        --- SIMULATED EMAIL SENT ---
        
        TO: Concierge@SlubandCo.com
        SUBJECT: ${subject}
        
        --- Metadata ---
        Trigger Location: ${metadata.trigger}
        Source Page: ${metadata.page}
        Source Item: ${metadata.item || 'N/A'}
        
        --- Message Body ---
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
    
        --- Thank you for your inquiry! ---
    `);
    
    closeContactModal();
});

// --- Mobile Menu Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
});

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial page load
    renderPage('home');
});