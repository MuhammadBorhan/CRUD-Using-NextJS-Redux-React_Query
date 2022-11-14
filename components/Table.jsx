// import data from "../database/data.json";
import { Delete, Edit } from "@mui/icons-material";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAllUser } from "../lib/helper";
// import EditIcon from '@mui/icons-material/Edit';

const Table = () => {
  const state = useSelector((state) => state);
  console.log(state);

  const { isLoading, isError, data, error } = useQuery("users", getAllUser);

  if (isLoading) {
    return (
      <h1 className="text-center py-5 text-3xl text-red-500">
        Employee Loading...
      </h1>
    );
  } else if (isError) {
    return <p>Got Error {error}</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full ">
        <thead>
          <tr>
            <th className="bg-black text-white"></th>
            <th className="bg-black text-white">Name</th>
            <th className="bg-black text-white">Email</th>
            <th className="bg-black text-white">Salary</th>
            <th className="bg-black text-white">Birthday</th>
            <th className="bg-black text-white">Status</th>
            <th className="bg-black text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, i) => (
            <Tr {...dt} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

function Tr({ id, img, name, email, salary, date, status }) {
  return (
    <tr>
      <td className="flex justify-center">
        <img src={img} alt="Profile" className="w-8 h-8 rounded-full" />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>Tk {salary}</td>
      <td>{date}</td>
      <td
        className={`${
          status === "Active" ? "text-green-600" : "text-red-500"
        } font-bold`}
      >
        {status}
      </td>
      <td className="flex gap-x-5">
        <span className="text-green-500 font-bold cursor-pointer flex items-center justify-center">
          {" "}
          <Edit />{" "}
        </span>
        <span className="text-red-500 font-bold cursor-pointer flex items-center justify-center">
          {" "}
          <Delete />{" "}
        </span>
      </td>
    </tr>
  );
}
