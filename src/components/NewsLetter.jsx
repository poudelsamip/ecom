import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        SUBSCRIBE NOW & GET 20% OFF
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
        eveniet?
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 my-6 border mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none px-2"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
