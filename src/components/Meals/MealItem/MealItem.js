import { useContext } from "react";

import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { id, name, description, price } = props;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      description: description,
      price: price,
      amount: amount,
    });
  };

  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
