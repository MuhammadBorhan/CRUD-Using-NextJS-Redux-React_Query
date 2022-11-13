import data from "../database/data.json";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th className="bg-black text-white">Profile</th>
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
        <img src={img} alt="Profile" width="48" />
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
      <td>Actions</td>
    </tr>
  );
}
