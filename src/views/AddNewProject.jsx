import { Link } from "react-router-dom";

const AddNewProject = () => {
  return (
    <div className="p-10 flex flex-col items-center w-full">
      <p className="text-3xl font-bold text-blue-900">Add New Project</p>
      <form className="w-full max-w-2xl">
        <label className="flex flex-col my-4">
          <span className="font-bold text-sm">title:</span>
          <input className="rounded bg-gray-300 p-2 my-1" />
        </label>
        <label className="flex flex-col my-4">
          <span className="font-bold text-sm">Description:</span>
          <textarea className="h-40 p-2 bg-gray-300 my-1 rounded"></textarea>
        </label>
        <label className="flex flex-col justify-center items-center my-4">
          <img
            className="max-w-72"
            alt="projetc photo"
            src="https://firebasestorage.googleapis.com/v0/b/upload-image-1409e.appspot.com/o/49736676161795526?alt=media&token=d9270d64-42d6-4b36-acfc-05af60468dc3"
          />
          <input className="my-4" type="file" />
        </label>
      </form>
      <div className="flex gap-2">
        <Link
          to={`/my-profile/`}
          className="bg-red-600 text-white text-xl px-3 py-1 rounded-lg hover:opacity-75"
        >
          Cancel
        </Link>
        <Link
          to={`/my-profile/`}
          className="bg-green-600 text-white text-xl px-3 py-1 rounded-lg hover:opacity-75"
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default AddNewProject;
