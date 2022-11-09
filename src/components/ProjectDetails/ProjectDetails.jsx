import {findProject} from '../../utilities/findProject.js'
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  let projectName = useParams()
  let project = findProject(projectName)
  
  return (
    <>
      <h1>{project.title}</h1>
    </>
  );
}

export default ProjectDetails;