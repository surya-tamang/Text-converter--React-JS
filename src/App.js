import './App.css';

function App() {
  return (
    <>
      {/* class="navbar bg-dark border-bottom border-body" data-bs-theme="dark" */}
      <nav class="navbar navbar-expand-lg sticky-top border-bottom border-body " >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About us</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Men</a></li>
                  <li><a class="dropdown-item" href="#">Women</a></li>
                  <li><a class="dropdown-item" href="#">Kids</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
              <button class="btn btn-outline-success me-2" type="button">Log-In</button>
              <button class="btn btn-sm btn-outline-secondary" type="button">Sign-Up</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
