import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand" href="#">
            APP NAME
          </h2>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4 className="nav-link active" aria-current="page" href="#">
                  Home
                </h4>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favourites
                </a>
              </li>
              <Link to="/signup">
                <li className="nav-item">Sign Up</li>
              </Link>
              <Link to="/login">
                <li className="nav-item">Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
