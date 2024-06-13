import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupView = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok !== true) {
        throw new Error();
      }
      alert("Registration made succesfully!");
      navigate("/login");
    } catch (err) {
      setIsError(true);
    }
  }

  return (
    <div className="flex items-center justify-start h-dvh flex-col bg-gray-100">
      {isError && (
        <div className="rounded-xl p-10 shadow-lg mx-6 mt-10 bg-red-500">
          <h1 className="mx-8 font-bold text-xl text-white text-center">
            Registration Failed!
          </h1>
          <button
            onClick={() => setIsError(false)}
            className="w-full my-2 bg-white rounded-md py-2 font-light"
          >
            OK
          </button>
        </div>
      )}
      <div className="rounded-xl p-10 shadow-lg mx-6 mt-10 bg-white">
        <h1 className="mx-8 mb-8 font-bold text-2xl text-blue-900 text-center">
          Signup to ShowMyWork
        </h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col">
            <span className="text-blue-900 font-bold text-xs">Full Name</span>
            <input
              type="text"
              className="rounded-lg p-2 bg-gray-200 focus:outline-none"
              {...register("name", {
                required: true,
                minLength: 3,
              })}
              placeholder="Enter your Full Name"
            />
            {errors.name && (
              <span className="text-xs text-red-600">
                This field is required to be at least 3 length.
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-blue-900 font-bold text-xs">Position</span>
            <input
              type="text"
              className="rounded-lg p-2 bg-gray-200 focus:outline-none"
              {...register("position", {
                required: true,
                minLength: 5,
              })}
              placeholder="Enter your Position"
            />
            {errors.name && (
              <span className="text-xs text-red-600">
                This field is required to be at least 5 length.
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-blue-900 font-bold text-xs">Email</span>
            <input
              type="email"
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

export default SignupView;
