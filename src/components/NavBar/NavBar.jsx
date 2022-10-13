import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link
          to='/'
          id='home'
        >
          Zeus
        </Link>
        <ul>

          <li>
            <Link
              to='/about'
              className='nav-link'
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to='/contact'
              className='nav-link'
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to='/projects'
              className='nav-link'
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to='/resume'
              className='nav-link'
            >
              Resume
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default NavBar;