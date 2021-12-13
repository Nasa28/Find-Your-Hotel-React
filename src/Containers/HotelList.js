import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Components/Loading';
import { allHotels } from '../Redux/Actions/hotelActions';
import Hotel from '../Components/Hotel';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotel.hotels.data);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'api/v1/hotels';

  const myFetch = async () => {
    try {
      const response = await axios.get(url, { mode: 'cors' });
      console.log(response);
      dispatch(allHotels(response));

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

  return (
    <>
      <div className="container">
        
      </div>
    </>
  );
};

export default HotelList;
