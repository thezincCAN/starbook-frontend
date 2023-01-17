import { NavLink } from 'react-router-dom';
import './BookStyling.css';

export default function MyBook() {
  return <div>
    <header className='Header'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/credits'>Authors</NavLink>
    </header>

    <div id="wrapper">
      <div id="container">

        <section className="open-book">
          <header>
            <h1>Star Book</h1>
          </header>
          <article>
            <dl>
              THIS IS OUR PARAGRAPH
            </dl>

          </article>
          <footer>
            <ol id="page-numbers">
              <li>1</li>
              <li>2</li>
            </ol>
          </footer>
        </section>

      </div>
    </div>

  </div>;
}
