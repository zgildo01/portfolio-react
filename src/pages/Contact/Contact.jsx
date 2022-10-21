import './Contact.css'


const Contact = () => {
  return (
    <>
      <div id='main'>
        <h1>Contact Me</h1>
        <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">
          <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
              <input type="text" id="Name" name="Name" class="fcf-form-control" required />
            </div>
            <div class="fcf-form-group">
          <label for="Email" class="fcf-label">Your email address</label>
                <div class="fcf-input-group">
                  <input type="email" id="Email" name="Email" class="fcf-form-control" required />
                </div>
            </div>
          <div class="fcf-form-group">
              <label for="Message" class="fcf-label">Your message</label>
              <div class="fcf-input-group">
                  <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
              </div>
          </div>
          <div class="fcf-form-group">
              <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
          </div>
        </form>
        <div id='contact-icons'>
          <a href='https://github.com/zgildo01'>
            <img src='../img/gitHubPink.png'/>
          </a>
          <a href='https://www.linkedin.com/in/zgildo01/'>
            <img src='../img/linkedinPink.png'/>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;