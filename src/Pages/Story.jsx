import { NavLink } from 'react-router-dom';

export default function Story() {
  return <div>
    <header className='Header'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/credits'>Authors</NavLink>
    </header>
    Magical story stuff here
  </div>;
}
