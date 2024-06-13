/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import ProjectItem from "../components/project/ProjectItem";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user-context";

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

const MyProfileView = () => {
  const [userProfile, setUserProfile] = useState();
  const { token, userId } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const response = await fetch(
      `http://localhost:3001/api/profile/${userId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await response.json();
    setUserProfile(data.user);
  }

  return (
    <div className="p-4 bg-gray-100">
      {userProfile && (
        <div className="flex flex-col justify-center items-center gap-3 mt-6 mb-10 sm:flex-row sm:justify-start">
          <img
            className="rounded-full h-40 w-40"
            alt="profile photo"
            src={
              userProfile.imageUrl ||
              "https://st3.depositphotos.com/5516476/17121/i/450/depositphotos_171211820-stock-photo-dark-blue-concrete-wall-texture.jpg"
            }
          />
          <div>
            <p className="font-bold text-center sm:text-left text-2xl text-blue-900">
              {userProfile.name}
            </p>
            <p className="font-light text-center sm:text-left">
              {userProfile.position}
            </p>
            <p className="text-center sm:text-left">
              {userProfile.description}
            </p>
          </div>
        </div>
      )}
      <div className="my-10 flex gap-3 justify-center sm:justify-start">
        <Link
          to={`/edit/${userId}`}
          className="py-3 px-4 bg-blue-700 text-white rounded-lg hover:opacity-75"
        >
          Edit Profile
        </Link>
        <Link
          to={`/edit-projects/${userId}`}
          className="py-3 px-4 bg-blue-900 text-white rounded-lg hover:opacity-75"
        >
          Edit Projects
        </Link>
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

export default MyProfileView;
