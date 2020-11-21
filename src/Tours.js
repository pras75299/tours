import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tours } = props;
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return <Tour key={id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
