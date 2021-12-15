import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hotel = (props) => {
  const { id, name, image } = props;
  return (
    <div>
      <div key={id}>
        <Link className="cards " to={`/hotel/${id}`}>
          <div>
            <img className="image" src={image} alt={name} />
          </div>
          <div>
            <h3 className="title">{name}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

Hotel.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Hotel;
