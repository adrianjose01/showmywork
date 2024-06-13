const ProjectItem = ({ project, isEditing }) => {
  return (
    <div className="my-8 shadow-lg rounded-lg p-6 sm:flex bg-white">
      <img className="sm:w-72" alt="project photo" src={project.imageUrl} />
      <div>
        <p className="my-3 text-center font-bold text-blue-900 text-xl sm:text-left sm:ml-6">
          {project.title}
        </p>
        <p className="font-light text-xl text-center sm:text-left sm:ml-6">
          {project.description}
        </p>
        {isEditing && (
          <button className="sm:ml-6 bg-red-500 text-white my-3 py-2 px-4 rounded-md hover:opacity-75">
            DELETE
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
