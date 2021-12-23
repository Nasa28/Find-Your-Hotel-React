import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className=" text-white">
        <div className="footer-link">
          <Link to="/home" className="logo">
            Find Hotel
          </Link>
        </div>
        <p className="text-center">© 2021 Copyright:</p>
      </footer>
    </div>
  );
};

export default Footer;
