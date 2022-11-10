import { useRef } from 'react';
import emailjs from "emailjs-com"
import './Contact.css'


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )
    e.target.reset()
  }

  return (
    <>
      <div id='main'>
        <h1>Contact Me</h1>
        <form 
          ref={form} 
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit"  value="Send"/>
        </form>
        <div id='contact-icons'>
          <a href='https://github.com/zgildo01'>
            <img src='../img/githubPink.png' alt='github logo' />
          </a>
          <a href='https://www.linkedin.com/in/zgildo01/'>
            <img src='../img/linkedinPink.png' alt='linked in logo' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;