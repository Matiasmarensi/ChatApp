import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div className="w-full p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h1>
        <form className="mt-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your name" className="w-full input input-bordered h-10" />
          </div>
        </form>
        Z<div></div>
      </div>
    </div>
  );
};

export default SignUp;
