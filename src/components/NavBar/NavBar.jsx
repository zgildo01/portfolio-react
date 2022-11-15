import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
import Dropdown from '../Dropdrown/Dropdown';

const NavBar = () => {
  return (
    <>
      <nav>
        <Link
          to='/'
          className={styles.home}
        >
          Zeus
        </Link>
        <ul className={styles.ul}>
          <li>
            <Link
              to='/about'
              className={styles.link}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={styles.link}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
              className={styles.link}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='/resume'
              className={styles.link}
            >
              Resume
            </Link>
          </li>
        </ul>
        <Dropdown />
      </nav>
    </>
  );
}

export default NavBar;