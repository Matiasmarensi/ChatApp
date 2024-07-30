import React from "react";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center  min-w-96 mx-auto">
      <div className="w-full  p-6 round-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login<span className="text-sky-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
          </div>
          <a href="#" className="link link-hover text-sm text-cyan-100 inline-block">
            Don´t have an account? Register
          </a>
          <div className="flex justify-center mt-4">
            <button className="btn btn-sm btn-block btn-primary ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
