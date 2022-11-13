import styles from './About.module.css'

const About = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>About</h1>
        <div className={styles.aboutBody}>
          <div className={styles.picContainer}>
            <img src="../img/picOfMe.png" alt='pic of Zeus' className={styles.pic}/>
            <p>Zeus Zaragoza-Gildo</p>
            <p>Software Engineer</p>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={styles.technologies}>
              <h4>Technologies</h4>
              <p>||HTML||CSS||JavaScipt||Node.js||Mongoose||MongoDB||Express||Python||React||</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;