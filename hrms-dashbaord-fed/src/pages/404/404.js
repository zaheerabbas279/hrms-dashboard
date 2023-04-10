import React from "react";
import "./404.scss";
import { Images } from "../../utils/images";

export const NotFoundScreen = () => {
  return (
    <>
      <div className="notfoundmaindiv">
        <div className="notfoundImagediv">
          <img src={Images.notFound} alt="" className="notfoundimage" />
        </div>
        <div className="text-center">
          <button className="btn btn-danger">Back to Dashboard</button>
        </div>
      </div>
    </>
  );
};
