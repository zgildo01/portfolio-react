import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsList = ({projects}) => {
  return (
    <>
      {projects.map((project) =>
        <ProjectPreview key={project.title} project={project} />
      )}
    </>
  );
}

export default ProjectsList;