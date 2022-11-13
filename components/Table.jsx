import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th className="bg-black text-white">Name</th>
            <th className="bg-black text-white">Email</th>
            <th className="bg-black text-white">Salary</th>
            <th className="bg-black text-white">Birthday</th>
            <th className="bg-black text-white">Status</th>
            <th className="bg-black text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Salary</td>
            <td>Birthday</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
