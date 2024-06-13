import ProjectItem from "../project/ProjectItem";

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

const UserProfile = ({ user }) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex items-center gap-3 mt-6 mb-10">
        <img className="rounded-full" alt="profile photo" src={user.imageUrl} />
        <div>
          <p className="font-bold text-2xl text-blue-900">{user.name}</p>
          <p className="font-light">{user.email}</p>
        </div>
      </div>
      <p className="font-bold text-3xl text-blue-900 text-center sm:text-left">
        Projects
      </p>
      <div className="xl:w-3/4 bg-gray-100">
        {DUMMY_PROJECTS &&
          DUMMY_PROJECTS.map((p, i) => <ProjectItem project={p} key={i} />)}
      </div>
    </div>
  );
};

export default UserProfile;
