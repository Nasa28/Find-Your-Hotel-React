import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchFavourites } from '../Redux/Actions/Favourites';
import '../Styles/hotel.css';

const Hotel = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, image, price, address,
  } = props;
  const favHotel = useSelector((state) => state.favourites.favourite);

  const isFav = (hotelId) => favHotel.map((fav) => fav.id).includes(hotelId);

  const auth = useSelector((state) => state.authenticate);
  const addFavouriteHandler = async () => {
    const url = 'https://findmyhotels.herokuapp.com/api/v1/favourites';
    await axios.post(
      url,

      { hotel_id: id },

      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },

      { withCredentials: true },
    );
    const favs = favHotel.slice(0);
    dispatch(fetchFavourites([...favs, props]));
  };

  return (
    <div className="hotel" data-testid="hotel-card">
      <Link to={`/hotel/${id}`} className="cards">
        <div className="img">
          <img className="image" src={image} alt={name} />
        </div>
        <div>
          <h5 className="title">{name}</h5>
        </div>
        <div className="info">
          <p>{address}</p>
          <p>
            $
            {price}
          </p>
        </div>
      </Link>

      {auth.token && (
        <div>
          {!isFav(id) ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={addFavouriteHandler}
            >
              Add to favorites
            </button>
          ) : (
            <button type="button" className="btn btn-secondary disabled">
              Remove Favourite
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Hotel.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default Hotel;
