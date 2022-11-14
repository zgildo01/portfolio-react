import {findProject} from '../../utilities/findProject.js'
import { useParams } from 'react-router-dom';
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  let projectName = useParams()
  let project = findProject(projectName.url)
  
  return (
    <>
      <div className={styles.main}>
        <div className="sign">
          <div className="fastflicker">
            <h1 className={styles.title}>{project[0].title}</h1>
          </div>
        </div>
        <div className={styles.aboutBody}>
          <div className={styles.imgLink}>
            <a className={styles.a} href={project[0].deploymentLink} target={"_blank"} rel='noreferrer'>
              <img
                className={styles.img}
                src={project[0].image} 
                alt={project[0].title + " screenshot"} 
              />
            </a>
          </div>
          <h2>{project[0].description}</h2>
          <a className={styles.a} href={project[0].repositoryLink} target={"_blank"} rel='noreferrer'>
            <img className={styles.icon} src='../img/githubPink.png' alt='github logo' />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;