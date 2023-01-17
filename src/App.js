import './App.css';
import './keyframe.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Credits from './Pages/Credits';
import MyBook from './Pages/MyBook';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <div className="App">
          <div className='coverpage'>
            <h1>STAR BOOK TITLE</h1>
            <h4>Written By:<br></br>Amanda Hecht<br></br>Chad Stabler<br></br>Niki Hite</h4>
            <img className='blue' src='/images/blueStar.png'/>
            <img className='green' src='/images/limeStar.png'/>
            <img className='orange' src='/images/orangeStar.png'/>
            <img className='purple' src='/images/burgundyStar.png'/>
            <img className='clear' src='/images/clearStar2.png' height='120px'/>
            <br></br><br></br><br></br><br></br>
            <nav>
              <Link className='navLink' to='/mybook'>Story</Link><br></br>
              <Link className='navLink' to='/credits'>Authors</Link>
            </nav>

          </div>
        </div>
      </Route>
      <Route exact path='/credits'>
        <Credits />
      </Route>
      <Route exact path='/mybook'>
        <MyBook />
      </Route>
    </Router>
  );
}

export default App;
