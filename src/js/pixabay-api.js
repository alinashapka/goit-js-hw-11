import axios from 'axios';

export function fetchImages(searchQuery) {
    const API_KEY = "49456082-a9826f5e30a55e93368b2873a";
    const BASE_URL = "https://pixabay.com/api/";

    return axios.get(`${BASE_URL}`, {
        params: { 
            key: API_KEY,
            q: searchQuery,
            image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
        }
    })
        .then(response => {
            return response.data.hits;
    } )
        .catch(error => { console.error('Error fetching images', error);
      throw error;
    })
}

