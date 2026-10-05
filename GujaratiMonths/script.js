// =============================================================
// Gujarati months carousel
// Month data lives in data.js (GUJARATI_MONTHS, FESTIVAL_IMAGE_DIR).
// =============================================================

const CAROUSEL_TITLE = 'Gujarati Months';

// State
let currentIndex = 0;

// =============================================================
// DOM helper
// =============================================================
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

// =============================================================
// Month card rendering (data -> HTML)
// =============================================================
function renderFestival(festival) {
    const row = el('section', 'festival');

    const text = el('div', 'festival-text');
    text.appendChild(el('p', 'festival-dates', festival.dates));
    text.appendChild(el('h3', 'festival-name', festival.name));
    row.appendChild(text);

    if (festival.image) {
        const media = el('div', 'festival-media');
        const img = document.createElement('img');
        img.src = FESTIVAL_IMAGE_DIR + festival.image;
        img.alt = festival.name;
        media.appendChild(img);
        row.appendChild(media);
    } else {
        row.classList.add('festival--no-image');
    }

    return row;
}

function renderMonthCard(month) {
    const card = el('article', 'month-card');
    card.setAttribute('aria-label', month.englishMonthName);

    // Left band with the Gujarati month name
    const band = el('div', 'month-band');
    const name = el('h2', 'month-name', month.monthName);
    name.lang = 'gu';
    band.appendChild(name);
    card.appendChild(band);

    // Festival rows
    const list = el('div', 'festival-list');
    month.festivals.forEach(f => list.appendChild(renderFestival(f)));
    card.appendChild(list);

    return card;
}

// =============================================================
// Carousel
// =============================================================
function updateCarousel() {
    const month = GUJARATI_MONTHS[currentIndex];

    document.getElementById('cardStage').replaceChildren(renderMonthCard(month));

    document.getElementById('viewerCounter').textContent =
        `${month.englishMonthName} · ${currentIndex + 1} of ${GUJARATI_MONTHS.length}`;

    const progress = ((currentIndex + 1) / GUJARATI_MONTHS.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    updateDots();
}

function updateDots() {
    const dotsContainer = document.getElementById('navDots');
    dotsContainer.innerHTML = '';

    GUJARATI_MONTHS.forEach((month, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        if (index === currentIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => goToMonth(index);
        dot.setAttribute('aria-label', `Go to ${month.englishMonthName}`);
        dotsContainer.appendChild(dot);
    });
}

function nextMonth() {
    currentIndex = (currentIndex + 1) % GUJARATI_MONTHS.length;
    updateCarousel();
}

function previousMonth() {
    currentIndex = (currentIndex - 1 + GUJARATI_MONTHS.length) % GUJARATI_MONTHS.length;
    updateCarousel();
}

function goToMonth(index) {
    currentIndex = index;
    updateCarousel();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextMonth();
    } else if (e.key === 'ArrowLeft') {
        previousMonth();
    }
});

// Start straight on the first month
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('viewerTitle').textContent = CAROUSEL_TITLE;
    updateCarousel();
});
