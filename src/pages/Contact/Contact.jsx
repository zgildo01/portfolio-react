import { useRef } from 'react';
import emailjs from "emailjs-com"
import styles from './Contact.module.css'


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(
      'service_j6zf7h7',
      'template_uekkgda',
      form.current,
      'naFD_kTumh3JDlxLu'
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )
    e.target.reset()
  }

  return (
    <>
      <div className={styles.main}>
        <div className="sign">
          <div className="fastflicker">
            <h1 className={styles.title}>Contact Me</h1>
          </div>
        </div>
        <form
          className={styles.form}
          ref={form} 
          onSubmit={sendEmail}
        >
          <div className={styles.optionContainer}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="text" name="user_name" placeholder='Name..' required />
          </div>
          <div className={styles.optionContainer}>
            <label className={styles.label}>Email</label>
            <input placeholder='Email..' className={styles.input} type="email" name="user_email" required />
          </div>
          <div className={styles.optionContainer}>
            <label className={styles.label}>Message</label>
            <textarea placeholder='Message..' rows={5} className={styles.input} name="message" required />
          </div>
          <input className={styles.btn} type="submit"  value="Send"/>
        </form>
        <div className={styles.iconCont}>
          <a href='https://github.com/zgildo01' target={'_blank'} rel='noreferrer'>
            <img className={styles.icon} src='../img/githubPink.png' alt='github logo' />
          </a>
          <a href='https://www.linkedin.com/in/zgildo01/' target={'_blank'} rel='noreferrer'>
            <img className={styles.icon} src='../img/linkedinPink.png' alt='linked in logo' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;