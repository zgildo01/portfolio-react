import styles from './About.module.css'

const About = () => {
  return (
    <>
      <div className={styles.main}>
        <div className="sign">
          <div className="fastflicker">
            <h1 className={styles.title}>About</h1>
          </div>
        </div>
        <div className={styles.aboutBody}>
          <div className={styles.picContainer}>
            <img 
              src="../img/picOfMe.png" 
              alt='pic of Zeus' 
              className={styles.pic}
            />
            <p>Zeus Zaragoza-Gildo</p>
            <p>Full Stack Dev, Wannabe Producer, Book Hoarder, Cat Enthusiast, Lover of Self Deprecating Humor</p>
          </div>
          <hr 
            color='#ff65bd'
            width='80%'
          />

          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p>
                <strong>Hey!</strong> <br />
                Welcome to my portfolio! <br />
                As you can see above, my name is Zeus. I am a 21 year old full stack developer who's had a passion for tech for as long as I can remember.<br />
                Beyond software development, I also produce music as a hobby and love reading, my favorite author is Chuck Palahniuk and my favorite producer is either Crywolf or Kaneda7.
              </p>
            </div>
            <hr 
              color='#ff65bd'
              width='50%'
            />
            <div className={styles.technologies}>
              <h3>Technologies:</h3>
              <ul className={styles.ul}>
                <li className={styles.li}>HTML</li>
                <li className={styles.li}>CSS</li>
                <li className={styles.li}>JavaScript</li>
                <li className={styles.li}>Node.js</li>
                <li className={styles.li}>Mongoose</li>
                <li className={styles.li}>MongoDB</li>
                <li className={styles.li}>SQL</li>
                <li className={styles.li}>Express</li>
                <li className={styles.li}>Python</li>
                <li className={styles.li}>React</li>
                <li className={styles.li}>Android Studio</li>
                <li className={styles.li}>Java</li>
              </ul>
              <img 
                src="../img/waveEmoji.gif" 
                alt="text-based japanese emoji waving" 
                className={styles.emoji}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;