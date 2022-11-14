import { Link } from 'react-router-dom';
import {hyphenator} from '../../utilities/hypenateWords.js'
import styles from './ProjectPreview.module.css'

const ProjectPreview = ({project}) => {
let url = hyphenator(project.title)

  return (
    <>
      <div className={styles.main}>
        <img
          className={styles.img}
          src={project.image} 
          alt={project.title}
        />
        <hr 
          color='#ff65bd'
          width='80%'
        />
        <section>
          <h3>
              {project.title}
          </h3>
          <Link
            to={url}
          >
            <button className={styles.btn}>
                Learn More
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;