import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const ApiKEY = '22768784-54984d8802417c1fa5d19a8a9';

const fetchPhotos = async ({ searchQuery = '', currentPage = 1 }) => {
  try {
    const searchURL = `/?q=${searchQuery}&page=${currentPage}&key=${ApiKEY}&image_type=photo&orientation=horizontal&per_page=12`;

    return await axios.get(searchURL).then(response => response.data.hits);
  } catch (error) {
    console.log(error);
  }
};

export default fetchPhotos;
