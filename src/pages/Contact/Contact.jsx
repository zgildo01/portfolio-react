import './Contact.css'


const Contact = () => {
  return (
    <>
      <div id='main'>
        <h1>Contact Me</h1>
        <form id="fcf-form-id" className="fcf-form-class" method="post" action="contact-form-process.php">
          <label htmlFor="Name" className="fcf-label">Your name</label>
            <div className="fcf-input-group">
              <input type="text" id="Name" name="Name" className="fcf-form-control" required />
            </div>
            <div className="fcf-form-group">
          <label htmlFor="Email" className="fcf-label">Your email address</label>
                <div className="fcf-input-group">
                  <input type="email" id="Email" name="Email" className="fcf-form-control" required />
                </div>
            </div>
          <div className="fcf-form-group">
              <label htmlFor="Message" className="fcf-label">Your message</label>
              <div className="fcf-input-group">
                  <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000" required></textarea>
              </div>
          </div>
          <div className="fcf-form-group">
              <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
          </div>
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