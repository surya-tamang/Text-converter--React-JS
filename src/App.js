import './App.css';
import Main from './components/Main';
import Header from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <>

      <div className='container-fluid d-flex justify-content-center flex-column min-vh-100 bg-dark-subtle align-items-center'>

        <Header title="Text converter" />
        <Main title="Text conversion" />
        <Footer developer="Surya Tamang"></Footer>
      </div>

    </>
  );
}

export default App;
