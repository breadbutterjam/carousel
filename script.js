// ============================================================
// DATA — single source of truth.
// To add/remove a collection, only edit this object.
// icon: any SVG path string from lucide.dev or similar
// ============================================================
const imageGroups = {
    gujarati: {
        name: 'Gujarati Months',
        description: '12 monthly illustrations',
        icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
               <line x1="16" y1="2" x2="16" y2="6"/>
               <line x1="8" y1="2" x2="8" y2="6"/>
               <line x1="3" y1="10" x2="21" y2="10"/>`,
        images: [
            'GujMonthImages/1.a.png',
            'GujMonthImages/2.a.png',
            'GujMonthImages/3.a.png',
            'GujMonthImages/4.a.png',
            'GujMonthImages/5.a.png',
            'GujMonthImages/6.a.png',
            'GujMonthImages/7.a.png',
            'GujMonthImages/8.a.png',
            'GujMonthImages/9.a.png',
            'GujMonthImages/10.a.png',
            'GujMonthImages/11.a.png',
            'GujMonthImages/12.a.png'
        ]
    },
    IntroductionMonths: {
        name: 'Introduction to Months',
        description: '1 introductory image',
        icon: `<path d="M12 20h9"/>
               <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>`,
        images: [
            'GujMonthImages/Introduction.png'
        ]
    },
    GanpatiArti: {
        name: 'Ganpati Arti',
        description: 'Ganpati Arti - Sukhkarta dukhaharta',
        icon: 'GanpatiAarti/Ganpati.png',
        images: [
            'GanpatiAarti/Aarti_Refrain1.jpg',
            'GanpatiAarti/Aarti_Refrain2.jpg',
            'GanpatiAarti/1.1 Aarti.jpg',
            'GanpatiAarti/1.2 Aarti.jpg',
            'GanpatiAarti/1.3 Aarti.jpg',
            'GanpatiAarti/1.4 Aarti.jpg',
            'GanpatiAarti/2.1 Aarti.jpg',
            'GanpatiAarti/2.2 Aarti.jpg',
            'GanpatiAarti/2.3 Aarti.jpg',
            'GanpatiAarti/2.4 Aarti.jpg',
            'GanpatiAarti/3.1 Aarti.jpg',
            'GanpatiAarti/3.2 Aarti.jpg',
            'GanpatiAarti/3.3 Aarti.jpg',
            'GanpatiAarti/3.4 Aarti.jpg'
        ]
    },
    city: {
        name: 'City Architecture',
        description: '5 urban photography shots',
        icon: `<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
               <path d="M6 12H4a2 2 0 0 0-2 2v8h4"/>
               <path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/>
               <path d="M10 6h4"/><path d="M10 10h4"/>
               <path d="M10 14h4"/><path d="M10 18h4"/>`,
        images: [
            'https://images.unsplash.com/photo-1643875402004-22631ef914aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwdXJiYW58ZW58MXx8fHwxNzcxMTc4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1080',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1080',
            'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1080',
            'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1080'
        ]
    },
    ocean: {
        name: 'Ocean & Beaches',
        description: '5 coastal paradise views',
        icon: `<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
               <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
               <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>`,
        images: [
            'https://images.unsplash.com/photo-1598399929533-847def01aa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTIyMTA0OHww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1080',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1080',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080',
            'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1080'
        ]
    },
    wildlife: {
        name: 'Wildlife & Animals',
        description: '5 amazing animal portraits',
        icon: `<circle cx="11" cy="4" r="2"/>
               <circle cx="18" cy="8" r="2"/>
               <circle cx="20" cy="16" r="2"/>
               <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>`,
        images: [
            'https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGFuaW1hbHMlMjBuYXR1cmV8ZW58MXx8fHwxNzcxMjIyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1080',
            'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1080',
            'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1080',
            'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1080'
        ]
    },
    abstract: {
        name: 'Abstract Art',
        description: '5 vibrant artistic images',
        icon: `<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
               <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
               <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
               <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
               <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>`,
        images: [
            'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc3MTIyMDIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1080',
            'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=1080',
            'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1080',
            'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=1080'
        ]
    }
};

// ============================================================
// STATE
// ============================================================
let currentGroup = null;
let currentImages = [];
let currentIndex = 0;

// ============================================================
// DYNAMIC CARD GENERATION
// Reads entirely from imageGroups — no HTML changes needed
// when adding/removing collections.
// ============================================================

// Renders the icon for a group. Rules:
//   - No icon field (or null/empty): renders nothing
//   - Looks like a URL or file path (contains '.' or '/'): renders <img>
//   - Anything else: treated as SVG path markup
function renderIcon(icon) {
    if (!icon) return '';
    const isImage = /[./]/.test(icon) && !icon.trim().startsWith('<');
    if (isImage) {
        return `<img class="icon icon-img" src="${icon}" alt="" />`;
    }
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>`;
}

function buildCards() {
    const grid = document.getElementById('cardGrid');

    Object.keys(imageGroups).forEach(groupKey => {
        const group = imageGroups[groupKey];

        // Card button
        const btn = document.createElement('button');
        btn.className = 'card';
        btn.onclick = () => selectGroup(groupKey);

        // Card header
        btn.innerHTML = `
            <div class="card-header">
                ${renderIcon(group.icon)}
                <div>
                    <h3>${group.name}</h3>
                    <p>${group.description}</p>
                </div>
            </div>
            <div class="preview-grid" id="preview-${groupKey}"></div>
        `;

        grid.appendChild(btn);
    });

    // Custom upload card — always last
    const uploadLabel = document.createElement('label');
    uploadLabel.className = 'card upload-card';
    uploadLabel.innerHTML = `
        <input type="file" id="customUpload" multiple accept="image/*" style="display:none;" />
        <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" x2="12" y1="3" y2="15"/>
        </svg>
        <h3>Custom Collection</h3>
        <p>Upload your own images<br><span>(Click to browse)</span></p>
    `;
    grid.appendChild(uploadLabel);

    // Attach upload handler after element exists in DOM
    document.getElementById('customUpload').addEventListener('change', handleCustomUpload);
}

// ============================================================
// PREVIEW THUMBNAILS
// ============================================================
function initPreviews() {
    Object.keys(imageGroups).forEach(groupKey => {
        const container = document.getElementById(`preview-${groupKey}`);
        if (!container) return;

        imageGroups[groupKey].images.slice(0, 5).forEach(imgUrl => {
            const div = document.createElement('div');
            div.className = 'preview-img';
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = 'Preview';
            div.appendChild(img);
            container.appendChild(div);
        });
    });
}

// ============================================================
// DEEP LINKING
// URL format: ?group=gujarati&slide=3
// slide is 1-based in the URL, 0-based internally.
// ============================================================
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        group: params.get('group') || null,
        slide: parseInt(params.get('slide'), 10) || 1
    };
}

function setUrlParams(groupKey, slideNumber) {
    // slideNumber is 1-based
    const params = new URLSearchParams();
    params.set('group', groupKey);
    if (slideNumber > 1) params.set('slide', slideNumber);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.replaceState(null, '', newUrl);
}

function clearUrlParams() {
    history.replaceState(null, '', window.location.pathname);
}

// ============================================================
// VIEWER
// ============================================================
function selectGroup(groupKey, startIndex = 0) {
    if (!imageGroups[groupKey]) {
        console.error('Unknown group:', groupKey);
        return;
    }
    currentGroup = imageGroups[groupKey];
    currentGroupKey = groupKey;
    currentImages = currentGroup.images;
    currentIndex = startIndex;
    setUrlParams(groupKey, startIndex + 1);
    showViewer();
}

function handleCustomUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    currentGroup = { name: 'Custom Collection' };
    currentGroupKey = null;
    currentImages = [];

    Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            currentImages.push(e.target.result);
            if (index === files.length - 1) {
                currentIndex = 0;
                clearUrlParams();
                showViewer();
            }
        };
        reader.readAsDataURL(file);
    });
}

function showViewer() {
    document.getElementById('selectionScreen').style.display = 'none';
    document.getElementById('imageViewer').classList.remove('hidden');
    document.getElementById('viewerTitle').textContent = currentGroup.name;
    updateViewer();
}

function exitViewer() {
    document.getElementById('imageViewer').classList.add('hidden');
    document.getElementById('selectionScreen').style.display = 'block';
    clearUrlParams();
    const upload = document.getElementById('customUpload');
    if (upload) upload.value = '';
}

function updateViewer() {
    document.getElementById('mainImage').src = currentImages[currentIndex];
    document.getElementById('viewerCounter').textContent =
        `Image ${currentIndex + 1} of ${currentImages.length}`;
    const progress = ((currentIndex + 1) / currentImages.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    // Update URL to reflect current slide (only for named groups)
    if (currentGroupKey) {
        setUrlParams(currentGroupKey, currentIndex + 1);
    }

    updateDots();
}

function updateDots() {
    const dotsContainer = document.getElementById('navDots');
    dotsContainer.innerHTML = '';
    currentImages.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `dot${index === currentIndex ? ' active' : ''}`;
        dot.onclick = () => goToImage(index);
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dotsContainer.appendChild(dot);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateViewer();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateViewer();
}

function goToImage(index) {
    currentIndex = index;
    updateViewer();
}

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================
document.addEventListener('keydown', (e) => {
    const viewer = document.getElementById('imageViewer');
    if (!viewer.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'ArrowLeft') previousImage();
        else if (e.key === 'Escape') exitViewer();
    }
});

// ============================================================
// INIT
// ============================================================
let currentGroupKey = null;

window.addEventListener('DOMContentLoaded', () => {
    buildCards();      // generate all cards from imageGroups data
    initPreviews();    // populate thumbnail grids

    // Handle deep link if present in URL
    const { group, slide } = getUrlParams();
    if (group && imageGroups[group]) {
        const slideIndex = Math.min(slide - 1, imageGroups[group].images.length - 1);
        selectGroup(group, Math.max(0, slideIndex));
    }
});
