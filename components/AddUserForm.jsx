import { useReducer } from "react";
import AddIcon from "@mui/icons-material/Add";
import Success from "./Success";
import Bug from "./Bug";
import { useMutation, useQueryClient } from "react-query";
import { createUser, getAllUser } from "../lib/helper";

/* const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
 */
const AddUserForm = ({ formData, setFormData }) => {
  const queryClient = useQueryClient();

  // const [formData, setFormData] = useReducer(formReducer, {});

  const addMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getAllUser);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      return console.log("Don't have form data");
    }
    let { firstname, lastname, email, salary, date, status } = formData;

    const model = {
      name: `${firstname} ${lastname}`,
      img: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 10
      )}.jpg`,
      email,
      salary,
      date,
      status: status ?? "Active",
    };
    addMutation.mutate(model);
  };

  if (addMutation.isLoading) {
    return (
      <h1 className="text-center py-5 font-bold text-red-500">Loading...</h1>
    );
  } else if (addMutation.isError) {
    return <Bug message={addMutation.error.message}></Bug>;
  } else if (addMutation.isSuccess) {
    return <Success message={"New User Added Successfully Done"}></Success>;
  }
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
              value="Active"
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="radioDefault1"
              className="text-gray-800 inline-block"
            >
              Active
            </label>
          </div>
          <div className="radio-type flex gap-1 items-center">
            <input
              type="radio"
              onChange={setFormData}
              value="Inactive"
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="radioDefault2"
              className="text-gray-800 inline-block"
            >
              Inactive
            </label>
          </div>
        </div>
        <button className="py-2 px-4 rounded-sm w-2/6 text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-1">
          <span>Add</span>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
