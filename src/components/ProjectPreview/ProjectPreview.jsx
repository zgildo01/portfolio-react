import { Link } from 'react-router-dom';
import {hyphenator} from '../../utilities/hypenateWords.js'

const ProjectPreview = ({project}) => {
let url = "/" + hyphenator(project.title)

  return (
    <>
      <div id='main'>
        <img 
            src={project.image} 
            alt={project.title}
        />
        <section>
          <h3>
              {project.title}
          </h3>
          <Link
            to={url}
          >
            <button>
                Learn more
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;