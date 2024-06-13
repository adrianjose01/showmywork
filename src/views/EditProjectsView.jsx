import { Link } from "react-router-dom";
import ProjectItem from "../components/project/ProjectItem";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "Guess Number Game",
    description:
      "It's a game where you have to guess anumber from 1 to 100 and the PC manage how many guesses you took to guess the number.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/upload-image-1409e.appspot.com/o/7973762691318477?alt=media&token=d2800fb1-b346-4b1c-88b4-c84580f335ae",
  },
  {
    id: "p2",
    title: "Real Time Clock",
    description:
      "It's a webpage where you can have the Real Time Clock the entire day every day..",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/upload-image-1409e.appspot.com/o/49736676161795526?alt=media&token=d9270d64-42d6-4b36-acfc-05af60468dc3",
  },
];

const EditProjectsView = () => {
  return (
    <div className="m-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <h1 className="text-2xl text-blue-900 font-bold">Projects</h1>
        <Link
          to={`/add-new-project`}
          className="bg-blue-900 text-white my-3 py-2 px-4 rounded-md hover:opacity-75"
        >
          ADD PROJECT
        </Link>
      </div>
      <div>
        {DUMMY_PROJECTS.map((p, i) => (
          <ProjectItem project={p} key={i} isEditing={true} />
        ))}
      </div>
    </div>
  );
};

export default EditProjectsView;
