import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const Success = ({ message }) => {
  return (
    <div>
      <h1 className="py-2 text-center text-2xl font-bold text-green-500">
        {message} <CheckIcon />
      </h1>
    </div>
  );
};

export default Success;
