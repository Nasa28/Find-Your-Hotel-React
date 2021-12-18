import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const auth = useSelector((state) => state.authenticate);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand" href="#">
            <Link to="/">APP NAME</Link>
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
              {!auth.status && (
                <div>
                  <li className="nav-item">
                    <Link to="/signup">Sign Up </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                </div>
              )}

              {auth.status && (
                <li className="nav-item">
                  <Link to="/signup">Logout </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
