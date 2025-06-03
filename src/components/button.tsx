import React from "react";

import "../assets/scss/App.scss";

interface Props {
  data: {
    name: string;
    type: string;
  };
  height: number;
  width?: number;
  onClick: any;
}

const Button = (props: Props) => {
  let { data, onClick, height, width } = props;
  let buttonType = data.type || "primary";
  return (
    <>
      <button
        className={buttonType == "primary" ? "primary-button" : "other-button"}
        onClick={(e) => onClick()}
        style={{ height: height || 50, width: width || "100%" }}
      >
        {data.name}
      </button>
    </>
  );
};

export default Button;
