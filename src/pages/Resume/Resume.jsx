import styles from './Resume.module.css'

const Resume = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.sign}>
        <div className={styles.fastflicker}><h1>Resume</h1></div>
      </div>
      <div  className={styles.container}>
        <div className={styles.itemContainer}>
          <h3>Software Engineering Fellow - General Assembly</h3>
          <ul className={styles.ul}>
            <li className='resume-li'>
              <p>Developed several fully responsive, diverse applications using technologies such as the MEN stack, JavaScript, Python, HTML and CSS</p>
            </li>
            <li className='resume-li'>
              <p>Developed projects employing the usage of third-party APIs</p>
            </li>
            <li className='resume-li'>
              <p>Worked in team based environments while developing projects</p>
            </li>
          </ul>
        </div>
        <div id='resume-item-container'>
          <h3>Mortgage Banker - Rocket Mortgage</h3>
          <ul id='resume-ul'>
            <li className='resume-li'>
              <p>Assisted clients by listening to their individual financial needs, delivering a custom product and then tailoring it to their desires</p>
            </li>
            <li className='resume-li'>
              <p>Helped clients in situations out of my role to ensure client satisfaction</p>
            </li>
            <li className='resume-li'>
              <p>Worked in many different parts of the loan process showing my ability to undertake any part of any product development process</p>
            </li>
          </ul>
        </div>
        <div className={styles.downloadContainer}>
          <h2>Interested?</h2>
          <p>Feel free to <a href='../public/Zeus-Resume.docx' download>download</a> a copy of my resume!</p>
        </div>
      </div>
    </div>
    </>
  );
}
export default Resume;