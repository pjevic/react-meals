import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price } = props;

  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
