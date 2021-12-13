import NavBar from './NavBar';
import '../Styles/App.css';
import Footer from './Footer';
import cors from 'cors'
import HotelList from '../Containers/HotelList';

function App() {
  return (
    <div>
      <NavBar />
      <HotelList />
    </div>
  );
}

export default App;
