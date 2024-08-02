import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding background-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Sign Up<span className="text-sky-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-200">Fullname</span>
            </label>
            <input type="text" placeholder="Matias Marensi" className="w-full input input-bordered h-10 " />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-200">Username</span>
            </label>
            <input type="text" placeholder="MMarensi" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
          </div>

          {/* confirm password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Confirm password</span>
            </label>
            <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
          </div>
          <GenderCheckbox />
          <Link to="/login" className="hover:underline text-sm text-gray-200 inline-block mt-4">
            Already have an account? Login
          </Link>
          <div className="flex justify-center mt-4">
            <button className="btn btn-sm btn-block  border  bg-gray-500 border-slate-700">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
