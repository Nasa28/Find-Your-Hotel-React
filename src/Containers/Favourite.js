import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchFavourites } from '../Redux/Actions/Favourites';
const Favourites = () => {
  const favHotel = useSelector((state) => state.favourites.favourite);
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const removeHandler = async (id) => {
    const url = `http://localhost:8000/api/v1/favourites/${id}`;
    try {
      await axios.delete(
        url,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },

        { withCredentials: true },
      );
      const favHotels = favHotel.filter((favourite) => favourite.id !== id);
      dispatch(fetchFavourites(favHotels));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {favHotel.map((favourite) => {
        const { id, name, image_url } = favourite;
        return (
          <div key={id}>
            <Link className="cards " to={`/hotel/${id}`}>
              <div>
                <img className="image" src={image_url} alt={name} />
              </div>
              <div>
                <h3 className="title">{name}</h3>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => removeHandler(id)}
              className="btn btn-primary fav-button"
            >
              Remove from favourites
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
