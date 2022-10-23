import './Projects.css'

const Projects = () => {
  return (
    <>
      <div id='main'>
        <h1>Projects</h1>
        <div id='project-card-container'>
          <a href='https://music-shelf.fly.dev/' target='_blank' rel='noreferrer' className='project-card-anchor'>
            <div id='project-card'>
              <h4>Music Shelf</h4>
              <p>A full CRUD application where users can share, create, edit and delete albums. Created using JavaScript, MongoDB, Mongoose, Node, HTML, CSS, EJS, Express</p>
              <img src='../img/music-shelf-screenshot.jpg' alt='screenshot of a project Zeus made' />
            </div>
          </a>
          <a href='https://music-shelf.fly.dev/' target='_blank' rel='noreferrer' className='project-card-anchor'>
            <div id='project-card'>
              <h4>The Engulfment Project</h4>
              <p>A simple choose your own adventure game made with JavaScript, HTML and CSS.</p>
              <img src='../img/engulfment-screenshot.jpg' alt='screenshot of a project Zeus made' />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;