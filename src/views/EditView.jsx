/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../store/user-context";
import { useForm } from "react-hook-form";

const EditView = () => {
  const [userProfile, setUserProfile] = useState();
  const navigate = useNavigate();
  const { token, userId, handleImageUpload, imageUrl } =
    useContext(UserContext);
  const imageInputRef = useRef();

  const loadImage = () => {
    const file = imageInputRef.current.files[0];
    handleImageUpload(file);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    let correctObject = data;
    if (imageUrl) {
      correctObject = {
        userId,
        position: data.position,
        description: data.description,
        imageUrl,
      };
    }

    try {
      const response = await fetch("http://localhost:3001/api/edit-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(correctObject),
      });
      const data = await response.json();
      alert(data.message);
      navigate(`/my-profile/${userId}`);
    } catch (err) {
      console.log(err);
    }

    console.log(correctObject);
  }

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
    <div className="p-10 flex flex-col items-center w-full">
      {userProfile && (
        <>
          <p className="text-3xl font-bold text-blue-900">{userProfile.name}</p>
          <form
            id="edit-form"
            className="w-full max-w-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-col my-4">
              <span className="font-bold text-sm">position:</span>
              <input
                className="rounded bg-gray-300 p-2 my-1"
                defaultValue={userProfile.position}
                {...register("position", {
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.name && (
                <span className="text-xs text-red-600">
                  This field is required to be at least 5 length.
                </span>
              )}
            </label>
            <label className="flex flex-col my-4">
              <span className="font-bold text-sm">Description:</span>
              <textarea
                className="h-40 p-2 bg-gray-300 my-1 rounded"
                defaultValue={userProfile.description}
                {...register("description", {
                  required: true,
                  minLength: 5,
                })}
              ></textarea>
            </label>
            <input
              type="text"
              hidden
              value={imageUrl || userProfile.imageUrl}
              {...register("imageUrl", { required: true })}
            />
            <input
              type="text"
              hidden
              value={userId}
              {...register("userId", { required: true })}
            />
            <label className="flex flex-col justify-center items-center my-4">
              <img
                className="rounded-full max-w-40"
                alt="profile photo"
                src={imageUrl || userProfile.imageUrl}
              />
              <input
                className="my-4"
                type="file"
                ref={imageInputRef}
                onChange={(e) => loadImage(e)}
              />
            </label>
          </form>
        </>
      )}
      <div className="flex gap-2">
        <Link
          to={`/my-profile/${userId}`}
          className="bg-red-600 text-white text-xl px-3 py-1 rounded-lg hover:opacity-75"
        >
          Cancel
        </Link>
        <button
          className="bg-green-600 text-white text-xl px-3 py-1 rounded-lg hover:opacity-75"
          type="submit"
          form="edit-form"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditView;
