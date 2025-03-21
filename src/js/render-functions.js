import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function showImages(images, gallery) {
    gallery.innerHTML = '';

    if (images.length === 0) {
        iziToast.error({
            position: 'topRight',
            backgroundColor: ' #ef4040',
            messageColor: '#ffffff',
            message:
                'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }

    const imageCard = images.map(image => {
        return `<li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="image-info">
            <p><span class="label">Likes:</span>${image.likes}</p>
            <p><span class="label">Views:</span>${image.views}</p>
            <p><span class="label">Comments:</span>${image.comments}</p>
            <p><span class="label">Downloads:</span>${image.downloads}</p>
          </div>
        </li>
    `;
    }).join("");

    gallery.innerHTML = imageCard;


    if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
    }
}