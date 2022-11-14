import {projects} from '../../data/projects'
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <>
      <div className="sign">
        <div className="fastflicker">
          <h1 className={styles.title}>Projects</h1>
        </div>
      </div>
      <div className={styles.main}>
        <ProjectsList projects={projects} />
      </div>
    </>
  );
}

export default Projects;