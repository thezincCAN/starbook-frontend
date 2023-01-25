import { NavLink } from 'react-router-dom';
import './BookStyling.css';
import { getStoryById } from '../utils/fetch-utils';
import { useState, useEffect } from 'react';

export default function MyBook() { 

  const [story, setStory] = useState([]);



  useEffect(() => {
    async function getStory() {
      const data = await getStoryById(1);
      setStory(data);
      console.log(data);
    } getStory();
  }, []);

  return (
    <div>

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
                {story.text}
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

    </div>);
}
