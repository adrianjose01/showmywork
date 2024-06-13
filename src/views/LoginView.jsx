import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../store/user-context";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setToken, setIsLoggedIn, setUserId } = useContext(UserContext);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataResponse = await response.json();
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          token: dataResponse.token,
          userId: dataResponse.userId,
        })
      );
      setToken(dataResponse.token);
      setIsLoggedIn(true);
      setUserId(dataResponse.userId);
      navigate("/");
    } catch (err) {
      setIsError(true);
    }
  }

  return (
    <div className="flex items-center justify-start h-dvh flex-col bg-gray-100">
      {isError && (
        <div className="rounded-xl p-10 shadow-lg mx-6 mt-10 bg-red-500">
          <h1 className="mx-8 font-bold text-xl text-white text-center">
            Login Failed!
          </h1>
          <button
            onClick={() => setIsError(false)}
            className="w-full my-2 bg-white rounded-md py-2 font-light"
          >
            OK
          </button>
        </div>
      )}
      <div className="rounded-xl p-10 shadow-lg mx-6 bg-white mt-10">
        <h1 className="mx-8 mb-8 font-bold text-2xl text-blue-900 text-center">
          Login to ShowMyWork
        </h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col">
            <span className="text-blue-900 font-bold text-xs">Email</span>
            <input
              type="text"
              className="rounded-lg p-2 bg-gray-200 focus:outline-none"
              {...register("email", {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-xs text-red-600">
                This field is required
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-blue-900 font-bold text-xs">Password</span>
            <input
              type="password"
              className="rounded-lg p-2 bg-gray-200 focus:outline-none"
              {...register("password", { required: true, minLength: 5 })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-xs text-red-600">
                This field is required
              </span>
            )}
          </label>
          <button
            className="bg-blue-900 text-white py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
