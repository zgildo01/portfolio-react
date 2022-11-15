import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Dropdown.module.css'

const Dropdown = () => {
  const [display, setDisplay] = useState('none')

  function handleClick() {
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  return (
    <>
      <button 
        className={styles.dropdownBtn}
        onClick={handleClick}
      >
        <img 
          src="../img/dropdownPink.png"
          alt="Dropdown menu"
          className={styles.dropdownImg}
        />
      </button>
      <div 
        style={{display: display}}
        
      >
        <Link
          to='/about'
          className={styles.link}
        >
          About
        </Link>
        <Link
          to='/contact'
          className={styles.link}
        >
          Contact
        </Link>
        <Link
          to='/projects'
          className={styles.link}
        >
          Projects
        </Link>
        <Link
          to='/resume'
          className={styles.link}
        >
          Resume
        </Link>
      </div>
    </>
  );
}

export default Dropdown;