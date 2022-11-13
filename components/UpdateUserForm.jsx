import { useReducer } from "react";
import AddIcon from "@mui/icons-material/Add";
import Success from "./Success";
import Bug from "./Bug";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      return console.log("Don't have form data");
    }
    console.log(formData);
  };

  //   if (Object.keys(formData).length > 0) {
  //     return <Success message="Success" />;
  //   }
  return (
    <div className="flex justify-center">
      <form className="grid lg:grid-cols-2 gap-3" onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="firstname"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="lastname"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="salary"
            placeholder="Salary"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="date"
            onChange={setFormData}
            name="date"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type flex gap-3 items-center">
          <div className="radio-type flex gap-1 items-center">
            {" "}
            <input
              type="radio"
              onChange={setFormData}
              name="radio-7"
              value="active"
              id="radioDefault1"
              className="radio radio-info"
              checked
            />
            <label htmlFor="radioDefault1">Active</label>
          </div>
          <div className="radio-type flex gap-1 items-center">
            <input
              type="radio"
              onChange={setFormData}
              name="radio-7"
              value="inactive"
              id="radioDefault2"
              className="radio radio-info"
            />
            <label htmlFor="radioDefault2">Inactive</label>
          </div>
        </div>
        <button className="py-2 px-4 rounded-sm w-3/6 text-center  text-white bg-green-600 hover:bg-green-700 ">
          <span>Update</span>
          {/* <AddIcon /> */}
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
