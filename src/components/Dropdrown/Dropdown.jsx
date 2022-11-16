import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Dropdown.module.css'

const Dropdown = () => {
  const [visibility, setVisibility] = useState('hidden')

  function handleClick() {
    if (visibility === 'hidden') {
      setVisibility('visible')
    } else {
      setVisibility('hidden')
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
        style={{visibility: visibility}}
        className={styles.linkContainer}
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