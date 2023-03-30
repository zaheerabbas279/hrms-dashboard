import React from "react";
import "./styles.scss";

const CreateButton = ({ name, handleClick, type }) => {
  return (
    <>
      <div className="">
        <button type={type} className="createSubAdminBtn" onClick={handleClick}>
          {name}
        </button>
      </div>
    </>
  );
};

export default CreateButton;
