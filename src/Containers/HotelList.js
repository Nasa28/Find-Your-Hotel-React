import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Components/Loading';
import { allHotels } from '../Redux/Actions/hotelActions';
import Hotel from '../Components/Hotel';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotel.hotels);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'http://localhost:8000/api/v1/hotels';
  const favHotels = useSelector((state) => state.favourites.favourite);

  const myFetch = async () => {
    try {
      const response = await axios.get(url, { mode: 'cors' });
      dispatch(allHotels(response.data));
      setLoading(false);
    } catch (error) {
      console.log('No data was found');
    }
  };

  useEffect(() => {
    myFetch();
  }, []);

  if (loading) {
    return (
      <main data-testid="loading">
        <Loading />
      </main>
    );
  }

   const checkFav = (hotelId) =>
     favHotels.map((fav) => fav.id).includes(hotelId);

  return (
    <>
      <div className="container">
        <div>
          {hotels.map((hotel) => {
            const { id, name, address, description, price, image_url } = hotel;
            return (
              <Hotel
                key={id}
                id={id}
                name={name}
                address={address}
                description={description}
                price={price}
                image={image_url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HotelList;
