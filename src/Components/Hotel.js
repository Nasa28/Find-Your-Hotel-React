import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
const Hotel = (props) => {
  const { id, name, image } = props;

  const auth = useSelector((state) => state.authenticate);
  const addFavouriteHandler = () => {
    const url = 'http://localhost:8000/api/v1/favourites';

    axios
      .post(
        url,

        { hotel_id: id },

        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },

        { withCredentials: true },
      )
      .catch((error) => {
        console.log(error);
      });
  };
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
        {auth.token && (
          <button
            type="button"
            className="btn btn-primary fav-button"
            onClick={addFavouriteHandler}
          >
            Add to favorites
          </button>
        )}
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
