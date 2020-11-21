import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tours, removeTour } = props;
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tour-main">
        {tours.map((tour) => {
          return <Tour key={id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
