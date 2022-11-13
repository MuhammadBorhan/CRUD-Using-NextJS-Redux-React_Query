import React from "react";

const Form = () => {
  return (
    <div>
      <form className="grid lg:grid-cols-2 gap-3">
        <div className="input-type">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="date"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="radio"
            name="radio-7"
            className="radio radio-info"
            checked
          />
          <input type="radio" name="radio-7" className="radio radio-info" />
        </div>
        <button className="py-2 px-4 rounded-sm w-2/6 text-white bg-blue-600 hover:bg-blue-700">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
