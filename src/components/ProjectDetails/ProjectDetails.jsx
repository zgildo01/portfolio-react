import {findProject} from '../../utilities/findProject.js'
import { useParams } from 'react-router-dom';
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  let projectName = useParams()
  let project = findProject(projectName.url)
  
  return (
    <>
    <div id="main">
      <h1>{project[0].title}</h1>
      <div id="img-link">
        <a href={project[0].deploymentLink}>
          <h4>Click Me to Visit!</h4>
          <img 
            src={project[0].image} 
            alt={project[0].title + " screenshot"} 
          />
        </a>
      </div>
      <h2>{project[0].description}</h2>
      <a href={project[0].repositoryLink}>
        <h3>Click me to visit the repository!</h3>
      </a>
    </div>
    </>
  );
}

export default ProjectDetails;