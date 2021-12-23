import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchFavourites } from '../Redux/Actions/Favourites';
import axios from 'axios';
const Hotel = (props) => {
  const dispatch = useDispatch();
  const { id, name, image } = props;
  let favor;
  const favHotel = useSelector((state) => state.favourites.favourite);

  const isFav = (hotelId) => favHotel.map((fav) => fav.id).includes(hotelId);

  const auth = useSelector((state) => state.authenticate);
  const addFavouriteHandler = async () => {
    const url = 'http://localhost:8000/api/v1/favourites';
    try {
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
    } catch (error) {
      console.log(error);
    }
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
          <div>
            {!isFav(id) ? (
              <button
                type="button"
                className="btn btn-primary fav-button"
                onClick={addFavouriteHandler}
              >
                Add to favorites
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary fav-button disabled"
              >
                Remove Favourite
              </button>
            )}
          </div>
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
