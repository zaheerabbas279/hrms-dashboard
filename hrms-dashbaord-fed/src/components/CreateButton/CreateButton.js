import React from "react";
import "./styles.scss";

const CreateButton = ({ name, handleClick }) => {
  return (
    <>
      <div className="">
        <button className="createSubAdminBtn" onClick={handleClick}>
          {name}
        </button>
      </div>
    </>
  );
};

export default CreateButton;
