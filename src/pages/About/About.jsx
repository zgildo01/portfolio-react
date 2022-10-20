import './About.css'

const About = () => {
  return (
    <>
      <div id="main">
        <h1>About</h1>
        <div id="about-body">
          <div id="pfp-name-title">
            <img src='https://imgur.com/Z9WdZgG.png' alt='pic of Zeus' id='pic-of-me'/>
            <p>Zeus Zaragoza-Gildo</p>
            <p>Software Engineer</p>
          </div>
          <div id="text">
            <div id='about-text'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id='technologies'>
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