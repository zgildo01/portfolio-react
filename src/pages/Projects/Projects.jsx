import './Projects.css'
import {projects} from '../../data/projects'

const Projects = () => {
  return (
    <>
      <div id='main'>
        <ul>
        {projects.map((project) =>
          <li key={project.title}>
            {project.title}
          </li>
        )}
        </ul>
      </div>
    </>
  );
}

export default Projects;