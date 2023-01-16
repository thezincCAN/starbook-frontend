import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='coverpage'>
          <h1>STAR BOOK TITLE</h1>
          <h4>Written By:<br></br>Amanda Hecht<br></br>Chad Stabler<br></br>Niki Hite</h4>
          <div>IMAGE HERE</div>
          <br></br><br></br><br></br><br></br>
          <nav>
            <Link className='navLink' to='/story'>Story</Link><br></br>
            <Link className='navLink' to='/credits'>Authors</Link>
          </nav>

        </div>
      </div>
    </Router>
  );
}

export default App;
