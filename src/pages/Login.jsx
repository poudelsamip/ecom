import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 border border-gray-800 py-2"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 border border-gray-800 py-2"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 border border-gray-800 py-2"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password ?</p>
        {currentState === "Sign Up" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Log In")}
          >
            Already have an account? Login
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        )}
      </div>
      <button className="bg-black text-white px-5 py-2 mt-4 cursor-pointer">
        {currentState === "Sign Up" ? "Create Account" : "Log In"}
      </button>
    </form>
  );
};

export default Login;
