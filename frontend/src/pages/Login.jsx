import React, { useState } from "react";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-100";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center gap-4 w-[90%] sm:max-w-md m-auto my-14 px-6 sm:px-10 py-10 rounded-3xl   text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-fuchsia-500" />
      </div>

      {currentState === "Login" ? null : (
        <input type="text" className={inputClass} placeholder="Name" required />
      )}

      <input type="email" className={inputClass} placeholder="Email" required />
      <input type="password" className={inputClass} placeholder="Password" required />

      <div className="w-full flex justify-between text-sm text-gray-500">
        <p className="cursor-pointer transition hover:text-fuchsia-600">
          Forgot your password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer transition hover:text-fuchsia-600"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer transition hover:text-fuchsia-600"
          >
            Login
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto sm:px-12 mt-2 bg-black text-white rounded-full py-3 font-semibold transition hover:bg-gray-800 active:scale-[0.98]"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;