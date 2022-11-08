const ProjectPreview = ({project}) => {
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
          <button>
              Learn more
          </button>
        </section>
      </div>
    </>
  );
}

export default ProjectPreview;