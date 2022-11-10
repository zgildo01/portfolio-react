import {findProject} from '../../utilities/findProject.js'
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  let projectName = useParams()
  let project = findProject(projectName.url)
  
  return (
    <>
    <div id="main">
      <h1>{project[0].title}</h1>
      <h3>{project[0].description}</h3>
      <h2>XD</h2>
    </div>
    </>
  );
}

export default ProjectDetails;