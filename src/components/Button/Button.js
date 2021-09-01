import PropTypes from 'prop-types';

const Button = ({ fetchHits }) => {
  return (
    <button className="Button" type="button" onClick={fetchHits}>
      Load more
    </button>
  );
};

Button.propTypes = {
  fetchHits: PropTypes.func.isRequired,
};

export default Button;
