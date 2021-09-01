import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className="ImageGallery" id="gallery">
      {hits.map(hit => (
        <ImageGalleryItem
          key={hit.id}
          src={hit.webformatURL}
          bigSrc={hit.largeImageURL}
          id={hit.id}
          alt={hit.tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
