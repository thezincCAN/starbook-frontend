import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Credits from './Pages/Credits';
import Story from './Pages/Story';

function App() {
  return (
    <Router>
      <Route exact path='/'>
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
      </Route>
      <Route exact path='/credits'>
        <Credits />
      </Route>
      <Route exact path='/story'>
        <Story />
      </Route>
    </Router>
  );
}

export default App;
