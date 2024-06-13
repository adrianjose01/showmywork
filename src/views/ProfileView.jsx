import { useState, useEffect } from "react";
import UserProfile from "../components/user/UserProfile";

const ProfileView = () => {
  const [user, setUser] = useState();

  async function getUser() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    const loadedUser = data.results[0];

    const newUser = {
      name: `${loadedUser.name.first} ${loadedUser.name.last}`,
      email: loadedUser.email,
      imageUrl: loadedUser.picture.large,
    };

    setUser(newUser);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-gray-100">{user ? <UserProfile user={user} /> : ""}</div>
  );
};

export default ProfileView;
