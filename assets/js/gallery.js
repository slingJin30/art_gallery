const galleryImages = {
    images: [
        {
            src: 'https://via.placeholder.com/300',
            alt: 'An example placeholder image 300x300',
            width: 300,
            height: 300,
            title: 'Image Tile',
            description: 'Image Description',
            artist: "Image Artist"
        },
        {
            src: 'https://via.placeholder.com/300',
            alt: 'An example placeholder image 300x300',
            width: 300,
            height: 300,
            title: 'Image Title',
            description: 'Image Description',
            artist: "Image Artist"
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