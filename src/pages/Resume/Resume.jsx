import styles from './Resume.module.css'

const Resume = () => {
  return (
    <>
    <div className={styles.main}>
      <div className='sign'>
        <div className='fastflicker'>
          <h1 id='resume-title'>Resume</h1>
        </div>
      </div>
      <div  className={styles.container}>
        <div className={styles.itemContainer}>
          <h3>Software Engineering Fellow - General Assembly</h3>
          <hr 
            color='#ff65bd'
            width='80%'
          />
          <ul>
            <li>
              <p>Developed several fully responsive, diverse applications using technologies such as the MEN stack, JavaScript, Python, HTML and CSS</p>
            </li>
            <li>
              <p>Developed projects employing the usage of third-party APIs</p>
            </li>
            <li>
              <p>Worked in team based environments while developing projects</p>
            </li>
          </ul>
        </div>
        <div className={styles.itemContainer}>
          <h3>Mortgage Banker - Rocket Mortgage</h3>
          <hr 
            color='#ff65bd'
            width='80%'
          />
          <ul>
            <li>
              <p>Assisted clients by listening to their individual financial needs, delivering a custom product and then tailoring it to their desires</p>
            </li>
            <li>
              <p>Helped clients in situations out of my role to ensure client satisfaction</p>
            </li>
            <li>
              <p>Worked in many different parts of the loan process showing my ability to undertake any part of any product development process</p>
            </li>
          </ul>
        </div>
        <div className={styles.downloadContainer}>
          <h2>Interested?</h2>
          <hr 
              color='#ff65bd'
              width='20%'
            />
          <p>Feel free to download a copy of my resume!</p>
          <a href='../public/Zeus-Resume.docx' download className={styles.a}>
            <img 
              src="../img/lightPinkDocument.png" 
              alt="Download Link for Zeus' Resume"
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
export default Resume;