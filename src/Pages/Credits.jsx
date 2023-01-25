import { NavLink } from 'react-router-dom';
import './Credits.css';

export default function Credits() {
  return <div className='Page'>
    <header className='Header'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/story'>Story</NavLink>
    </header>
    <div className='Authors'>
      <div>
        Amanda: Amanda is a person
        <a href='https://github.com/amanda-hecht89'>Github</a>
        <a href='https://www.linkedin.com/in/amanda-hecht/'>Linkedin</a>
      </div>

      <div>
        Chad: Chad does some things sometimes
        <a href='https://github.com/Chad-Stabler'>Github</a>
        <a href='https://www.linkedin.com/in/chad-stabler/'>Linkedin</a>
      </div>

      <div>
        Niki: Niki is present
        <a href='https://github.com/nikihite'>Github</a>
        <a href='https://www.linkedin.com/in/nikihite/'>Linkedin</a>
      </div>

    </div>


  </div>;
}
