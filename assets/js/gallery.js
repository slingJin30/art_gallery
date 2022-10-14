const galleryImages = {
    images: [
        {
            src: '../assets/img/gallery_images/evilEyes.png',
            alt: 'Evil Eyes',
            width: 300,
            height: 300,
            title: 'Evil Eyes',
            description: 'For the eyes that see evil',
            artist: "F.A.K.E."
        },
        {
            src: '../assets/img/gallery_images/warrior.png',
            alt: 'Warrior',
            width: 300,
            height: 300,
            title: 'Warrior',
            description: 'For the warrior in you',
            artist: "F.A.K.E."
        }
    ]
};

const gallery = document.querySelector('.gallery');
function createGallery() {
    galleryImages.images.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.innerHTML = `
            <img src="${sanitizeHTML(image.src)}" alt="${sanitizeHTML(image.alt)}" width="${sanitizeHTML(image.width)}" height="${sanitizeHTML(image.height)}">
            <div class="gallery-item-info">
                <h3>${sanitizeHTML(image.title)}</h3>
                <p>${sanitizeHTML(image.description)}</p>
                <p>${sanitizeHTML(image.artist)}</p>
            </div>`;
        gallery.appendChild(div);
    });
}

function sanitizeHTML(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent;
}

createGallery();