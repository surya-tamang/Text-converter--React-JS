import './App.css';
import Main from './components/Main';
import Header from './components/Navbar';

function App() {
  return (
    <>

      <div className='container-fluid d-flex justify-content-center min-vh-100 bg-dark-subtle align-items-center'>
        
        <Header title="FashionBazar" />
        <Main />
        
      </div>

    </>
  );
}

export default App;
