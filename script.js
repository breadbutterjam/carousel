// Image collections
const imageGroups = {
    gujarati: {
        name: 'Gujarati Months',
        images: [
            'GujMonths/1.png',
            'GujMonths/2.png',
            'GujMonths/3.png',
            'GujMonths/4.png',
            'GujMonths/5.png',
            'GujMonths/6.png',
            'GujMonths/7.png',
            'GujMonths/8.png',
            'GujMonths/9.png',
            'GujMonths/10.png',
            'GujMonths/11.png',
            'GujMonths/12.png'
        ]
    },
    IntroductionMonths: {
        name: 'Introduction to Months',
        images: [
            'GujMonths/Introduction.png'
        ]
    },
    city: {
        name: 'City Architecture',
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
        images: [
            'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc3MTIyMDIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1080',
            'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=1080',
            'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1080',
            'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=1080'
        ]
    }
};

// State
let currentGroup = null;
let currentImages = [];
let currentIndex = 0;

// Initialize preview thumbnails
function initPreviews() {
    Object.keys(imageGroups).forEach(groupKey => {
        const previewContainer = document.getElementById(`preview-${groupKey}`);
        const images = imageGroups[groupKey].images;
        
        images.slice(0, 5).forEach(imgUrl => {
            const div = document.createElement('div');
            div.className = 'preview-img';
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = 'Preview';
            div.appendChild(img);
            previewContainer.appendChild(div);
        });
    });
}

// Select a predefined group
function selectGroup(groupKey) {
    currentGroup = imageGroups[groupKey];
    currentImages = currentGroup.images;
    currentIndex = 0;
    showViewer();
}

// Handle custom image upload
function handleCustomUpload(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        currentGroup = {
            name: 'Custom Collection'
        };
        currentImages = [];
        
        // Convert files to data URLs
        Array.from(files).forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentImages.push(e.target.result);
                // Show viewer after all files are loaded
                if (index === files.length - 1) {
                    currentIndex = 0;
                    showViewer();
                }
            };
            reader.readAsDataURL(file);
        });
    }
}

// Show the image viewer
function showViewer() {
    document.getElementById('selectionScreen').style.display = 'none';
    document.getElementById('imageViewer').classList.remove('hidden');
    document.getElementById('viewerTitle').textContent = currentGroup.name;
    updateViewer();
}

// Exit the viewer
function exitViewer() {
    document.getElementById('imageViewer').classList.add('hidden');
    document.getElementById('selectionScreen').style.display = 'block';
    
    // Reset custom upload
    document.getElementById('customUpload').value = '';
}

// Update the viewer display
function updateViewer() {
    // Update image
    document.getElementById('mainImage').src = currentImages[currentIndex];
    
    // Update counter
    document.getElementById('viewerCounter').textContent = 
        `Image ${currentIndex + 1} of ${currentImages.length}`;
    
    // Update progress bar
    const progress = ((currentIndex + 1) / currentImages.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Update dots
    updateDots();
}

// Update navigation dots
function updateDots() {
    const dotsContainer = document.getElementById('navDots');
    dotsContainer.innerHTML = '';
    
    currentImages.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        if (index === currentIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => goToImage(index);
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dotsContainer.appendChild(dot);
    });
}

// Navigate to next image
function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateViewer();
}

// Navigate to previous image
function previousImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateViewer();
}

// Go to specific image
function goToImage(index) {
    currentIndex = index;
    updateViewer();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const viewer = document.getElementById('imageViewer');
    if (!viewer.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'Escape') {
            exitViewer();
        }
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', initPreviews);
