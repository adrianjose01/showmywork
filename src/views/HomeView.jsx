import { useEffect, useState } from "react";
import UserItem from "../components/user/UserItem";

const HomeView = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("https://randomuser.me/api?results=10");
    const data = await response.json();
    setUsers(data.results);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 bg-gray-100">
      {users &&
        users.map((u, i) => (
          <UserItem
            key={i}
            name={`${u.name.first} ${u.name.last}`}
            email={u.email}
            imageUrl={u.picture.large}
            id={i}
          />
        ))}
    </div>
  );
};

export default HomeView;
