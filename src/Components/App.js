import NavBar from './NavBar';
import '../Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
// import Hotel from './Hotel';
import authenticate from '../Redux/Actions/authenticate';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HotelList from '../Containers/HotelList';
import HotelDetails from '../Containers/HotelDetails';
import Error from './Error';
import About from './About';
import SignUp from '../Containers/User/SignUp';
import Login from '../Containers/User/login';
import Logout from '../Containers/User/Logout';
import Favourites from '../Containers/Favourite';
import Home from './Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
      dispatch(
        authenticate({
          status: true,
          token: user.token,
          username: user.username,
        }),
      );
    } else {
      dispatch(authenticate());
    }
  }, []);
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Hotels" element={<HotelList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route exact path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
