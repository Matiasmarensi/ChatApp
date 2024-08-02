import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding background-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Sign Up<span className="text-sky-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-200">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Matias Marensi"
              className="w-full input input-bordered h-10 "
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-200">Username</span>
            </label>
            <input
              type="text"
              placeholder="MMarensi"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          {/* confirm password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmpassword}
              onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
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
