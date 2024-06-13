import { Link } from "react-router-dom";

const UserItem = ({ imageUrl, name, email, id }) => {
  return (
    <Link
      to={`/profile/${id}`}
      className="flex flex-col items-center gap-4 m-8 border-1 bg-white border-blue-950 p-8 rounded-xl shadow-lg sm:flex-row sm:hover:opacity-75"
    >
      <img className="rounded-full" alt="profile-photo" src={imageUrl} />
      <div className="flex flex-col items-center sm:items-start">
        <p className="font-bold text-blue-900 text-xl">{name}</p>
        <p className="font-light">{email}</p>
      </div>
    </Link>
  );
};

export default UserItem;
