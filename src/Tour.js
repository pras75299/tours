import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price } = props;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">Delete</button>
      </footer>
    </article>
  );
};

export default Tour;
