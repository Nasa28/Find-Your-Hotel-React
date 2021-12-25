import axios from 'axios';
import { fetchFavourites } from './../Redux/Actions/Favourites';
import { useDispatch, useSelector } from 'react-redux';

const FetchFav = () => {
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const url = 'https://findmyhotels.herokuapp.com/api/v1/favourites';

  const fetchhandler = () => {
    axios
      .get(
        url,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },
        { withCredentials: true },
      )
      .then((res) => {
        dispatch(fetchFavourites(res.data));
        // localStorage.setItem('favourite', JSON.stringify(res.data));

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul className="navbar-nav" onClick={fetchhandler}>
        Favourites
      </ul>
    </div>
  );
};

export default FetchFav;
