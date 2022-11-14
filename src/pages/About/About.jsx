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
            <p>Software Engineer</p>
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
                Beyond software development, I also produce music as a hobby and love reading, my favorite author is Chuck Palahniuk and my favorite producer is Crywolf or Kaneda7.
              </p>
            </div>
            <hr 
              color='#ff65bd'
              width='50%'
            />
            <div className={styles.technologies}>
              <h3>Technologies:</h3>
              <ul className={styles.ul}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Express</li>
                <li>Python</li>
                <li>React</li>
                <li>Android Studio</li>
                <li>Java</li>
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