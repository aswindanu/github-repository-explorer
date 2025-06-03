import React from "react";
import { StarFillIcon } from "@primer/octicons-react";

import "../assets/scss/App.scss";

interface Props {
  data: {
    name: string;
    desc: string;
    rating: number;
  };
}

const Card = (props: Props) => {
  let { data } = props;
  return (
    <div className="card-search">
      <div className="container card-wrapper bg-dark-grey">
        <div className="row">
          <div className="col-sm-9">
            <div className="card-name text-left">
              <strong>{data.name}</strong>
            </div>
            <div className="card-desc text-left">
              <p>{data.desc}</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card-rating text-right d-flex">
              <p>{data.rating}</p>
              <StarFillIcon size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
