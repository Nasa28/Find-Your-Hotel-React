import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import { singleHotel } from '../Redux/Actions/hotelActions';
import '../Styles/detail.css';
const HotelDetails = () => {
  const details = useSelector((state) => state.detail.details);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `http://localhost:8000/api/v1/hotels/${id}`;

  const fetchDetails = async () => {
    try {
      const response = await axios.get(url, { mode: 'cors' });
      dispatch(singleHotel(response.data));
      setLoading(false);
    } catch (error) {
      console.log('No data was found');
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const { name, address, description, price, image_url } = details;
  return (
    <div className="container">
      <div>
        <h3>Name: {name}</h3>
        <p>Address: {address}</p>
        <p>Price: ${price}</p>
        <img src={image_url} alt={name} className="detail-img" />
      </div>
      <div className="description">
        <h3 className = 'text-decoration-underline'>Hotel Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HotelDetails;
