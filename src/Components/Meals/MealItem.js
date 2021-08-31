import React from "react";
import classes from "./MealItem.module.css";

function MealItem({ name, description, price }) {
  const Price = `$${price.toFixed(2)}`;
  return (
    <div className={classes.meal}>
      <li>
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{Price}</div>
        </div>
      </li>
    </div>
  );
}

export default MealItem;
