import NavBar from './NavBar';
import '../Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Footer';
// import Hotel from './Hotel';
import HotelList from '../Containers/HotelList';
import HotelDetails from '../Containers/HotelDetails';
import Error from './Error';
import About from './About';
import SignUp from '../Containers/User/SignUp';
import Login from '../Containers/User/login';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HotelList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route exact path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
