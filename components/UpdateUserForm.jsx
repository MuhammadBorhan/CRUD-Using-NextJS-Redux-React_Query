import { useReducer } from "react";
import AddIcon from "@mui/icons-material/Add";
import Success from "./Success";
import Bug from "./Bug";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAllUser, getSingleUser, updateUser } from "../lib/helper";

/* const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
}; */

const UpdateUserForm = ({ formId, formData, setFormData }) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getSingleUser(formId)
  );
  const UpdatedMutation = useMutation(
    (newData) => updateUser(formId, newData),
    {
      onSuccess: async (data) => {
        queryClient.prefetchQuery("users", getAllUser);
      },
    }
  );
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  const { name, img, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;
  // const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = async (e) => {
    e.preventDefault();

    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });
    await UpdatedMutation.mutate(updated);

    //   if (Object.keys(formData).length > 0) {
    //     return <Success message="Success" />;
  };
  return (
    <div className="flex justify-center">
      <form className="grid lg:grid-cols-2 gap-3" onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="firstname"
            defaultValue={firstname}
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="lastname"
            defaultValue={lastname}
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="email"
            defaultValue={email}
            placeholder="Email"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="salary"
            defaultValue={salary}
            placeholder="Salary"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="input-type">
          <input
            type="date"
            onChange={setFormData}
            name="date"
            defaultValue={date}
            // value={date}
            className="border px-5 py-3 rounded-md focus:outline-none"
          />
        </div>
        <div className="input-type flex gap-3 items-center">
          <div className="radio-type flex gap-1 items-center">
            {" "}
            <input
              type="radio"
              onChange={setFormData}
              value="Active"
              defaultChecked={status === "Active"}
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
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
              defaultChecked={status !== "Active"}
              // defaultChecked={status === "Active" ? "Active" : "Inactive"}
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault2"
              className="text-gray-800 inline-block"
            >
              Inactive
            </label>
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
