const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h2 class="navbar-brand" href="#">
            APP NAME
          </h2>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <h4 class="nav-link active" aria-current="page" href="#">
                  Home
                </h4>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Favourites
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
