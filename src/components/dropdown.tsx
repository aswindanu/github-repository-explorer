import React, { ReactElement, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";

import "../assets/scss/App.scss";
import Card from "./card";

interface Props {
  name: string;
  children?: any;
  onClickDropdown: any;
}

const Dropdown = (props: Props) => {
  const [showCard, setShowCard] = useState(false);
  let { name, children, onClickDropdown } = props;

  return (
    <>
      <div className="dropdown-search">
        <div className="title bg-grey">
          <label>{name}</label>
          {showCard ? (
            <>
              <div
                onClick={() => {
                  setShowCard(!showCard);
                }}
              >
                <ChevronUpIcon size={19} />
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => {
                  onClickDropdown(name);
                  setShowCard(!showCard);
                }}
              >
                <ChevronDownIcon size={19} />
              </div>
            </>
          )}
        </div>
        {showCard ? children : null}
      </div>
    </>
  );
};

export default Dropdown;
