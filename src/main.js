import iziToast from "izitoast";
import {fetchImages} from "./js/pixabay-api.js";
import {showImages} from "./js/render-functions.js";

const form = document.querySelector(".form");
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.visibility = 'hidden';

form.addEventListener("submit", event => {
    event.preventDefault();

    const searchQuery = event.target.elements["search-text"].value.trim();
    
    if (!searchQuery) {
        iziToast.error({
            title: "Error!",
            position: 'topRight',
            backgroundColor: ' #ef4040',
            messageColor: '#ffffff',
      message: 'Please, enter a search query!',
        })
        return;
    }

    loader.style.visibility = 'visible';

    fetchImages(searchQuery)
        .then(images => {
            showImages(images, gallery);
            loader.style.visibility = 'hidden';
        })
        .catch(error => {
            iziToast.error({
                title: "Error!",
                position: 'topRight',
                backgroundColor: ' #ef4040',
                messageColor: '#ffffff',
                message: 'Error fetching images',
            });
            loader.style.visibility = 'hidden';
    })
});