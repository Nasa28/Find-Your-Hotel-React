import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoggedInUser from '../Containers/User/LoggedInUser';
const NavBar = () => {
  const auth = useSelector((state) => state.authenticate);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand" href="#">
            <Link to="/" className="nav-link ml-4">
              APP NAME
            </Link>
          </h2>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <h4 className="nav-link active">
                  <Link to="/" className="nav-link ml-4">
                    Home
                  </Link>
                </h4>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favourites
                </a>
              </li>
              {!auth.status && (
                <ul className="navbar-nav">
                  <Link to="/signup" className="nav-link ml-4">
                    Sign Up
                  </Link>

                  <Link to="/login" className="nav-link ml-4">
                    Login
                  </Link>
                </ul>
              )}

              <ul className="nav-link ml-4">
                {auth.status && <LoggedInUser />}
              </ul>
              <ul>
                {auth.status && (
                  <Link to="/logout" className="nav-link ml-4">
                    Logout
                  </Link>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
