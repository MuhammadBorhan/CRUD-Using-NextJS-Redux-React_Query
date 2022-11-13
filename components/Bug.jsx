import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Bug = ({ message }) => {
  return (
    <div>
      <h1 className="py-2 text-center text-2xl font-bold text-red-500">
        {message} <CloseIcon />
      </h1>
    </div>
  );
};

export default Bug;
