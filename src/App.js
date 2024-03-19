import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">Fashion<span>Bazar</span></div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li className="dropdown"><a href="">Category</a>
              <ul>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">Kid</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
