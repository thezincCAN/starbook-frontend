import { NavLink } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';

export default function MyBook() {
  return <div>
    <header className='Header'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/credits'>Authors</NavLink>
    </header>
    Magical story stuff here
  </div>;
}
