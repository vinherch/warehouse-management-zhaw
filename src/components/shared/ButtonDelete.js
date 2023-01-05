import React from "react";
import { FaTimes } from "react-icons/fa";

function ButtonDelete() {
  return (
    <button className="btn-delete">
      <FaTimes color="red" />
    </button>
  );
}

export default ButtonDelete;
