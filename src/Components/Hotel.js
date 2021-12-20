import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
const Hotel = (props) => {
  const { id, name, image } = props;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authenticate);
  const favorites = useSelector((state) => state.favorites);
  // const user = useSelector((state) => state.favorites);

  const addFavoriteHandler = () => {
    const url = 'http://localhost:8000/api/v1/favourites';
    const mytoken = localStorage.getItem('token');
    const converter = JSON.parse(mytoken);
    const token = converter['token'];
    console.log(token);

    axios
      .post(
        url,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
       { hotel_id: id } ,

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
            onClick={addFavoriteHandler}
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
